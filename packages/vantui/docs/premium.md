# 高级模版功能说明

###

[高级版 React In Taro 模版工程](https://github.com/AntmJS/temptaro)：目前支持微信、支付宝、抖音、快手、百度小程序；支持 H5

### 为什么封装一个高级版

- 笔者是 React 的重度使用者，也开发过非常多的 React 应用，也从一线开发一步一步走到管理岗。回想一下，React 很大一部分“问题”是什么？是处理数据依赖不够优雅，不管是从 componentWillReceiveProps 到现在的 useEffect，或者各种全局数据状态管理工具，在时间紧且业务逻辑稍微复杂一点的场景，写出来的结果是可想而知的《PS：业务都来不及写，还管你优不优雅》。为什么很多国内中小型公司用 VUE，我想有一点点原因吧，写起来至少比 React 舒坦；

- 另外一方面，写了无数个页面的我，发现每个页面基本都逃不出进来的时候 loading、然后渲染正常页面，或者渲染异常页面；下拉刷新；有分页的加个上划加载更多；点击的时候要控制抖动；错误的时候要 Toast；没登录的时候要弹出登录；八九不离十，都是差不多的，那有没有可能把这些重复的工作封装起来呢，嗯，我们这么做了；

- 那对于我们来说，其实目的很单一，提高团队协作开发效率，提升代码质量，提高代码可维护性，我想这个模版能解决一些问题吧。当然额外增加了一个实例相比较研发速度及质量，我认为可以忽略；这个模版设计的初衷也是满足中小型企业用的，大公司有足够的资源、时间、规范等解决这些问题。最后，哪里有问题可以进群沟通交流。

### 功能说明

- 默认集成了 prettier eslint stylelint 解决编码规范问题
- 默认集成了 commitlint commitizen 解决 commit 规范问题
- 默认集成了 husky lint-staged 解决了 commit 之前自动校验代码规范
- 通过@antmjs/rapper 库使得 action 层能实现根据 TS 类型自动生成 action 逻辑，保证类型安全
- 通过 yarn swagger 使得 action 层也可以自动根据服务端的 swagger api 自动生成 action 逻辑，保证类型安全
- 通过@antmjs/iconfont 可以通过 yarn iconfont 兼容 iconfont 图标
- 通过@antmjs/trace 可以自己处理埋点需求
- 通过@antmjs/trace 可以自动收集未捕获异常
- 通过@antmjs/trace 可以很方便的上报埋点需求及异常信息
- 通过@antmjs/warning 可以快速的监听到指定文件的变动以快速告知相关合作研发的伙伴，比如谁谁谁私自变更了包依赖或者添加、删除了一个包等
- 通过@antmjs/cache 可以很方便的管理全局临时缓存和永久缓存
- 通过 recoil 作为 store 的管理工具
- 封装了 Container 组件用来自动管理顶部导航栏、下拉刷新、页面异常处理、登录等通用性逻辑
- 默认兼容了各端的的一些底层数据不一致，比如页面跳转或者扫码进来的数据统一 decode
- 默认封装了一些常用的组件在 components 目录下
- 默认封装了 Request 请求，统一规范，通过 TS 的加持，使得响应标准一致
- 默认添加了三种类型的页面模版(能覆盖百分之七八十的业务)，普通模版（自动下拉刷新）、分页模版（自动下拉刷新、上划分页），Tabs 分页模版（自动下拉刷新、上划分页、tab 切换及搜索）
- 集成了开箱即用的主题变更逻辑
- 通过@antmjs/unite 的 Unite“组件”以空间换时间的方案加快研发速度，同时保证 TS 类型安全

### Unite 是什么

```jsx
// 代码不多，可以自己看源码
import { Unite } from '@antmjs/unite'
// 和UI无关的全局数据定义在这里面，具体可以看项目模版
import {} from '@/cache'
// 和UI相关的全局数据定义在这里面，具体可以看项目模版
import {} from '@/store'

// 一切都是类型安全，一切都是自动提示 ！哈哈哈哈
// Unite外的错误逻辑Unite无法捕获，Unite回调函数内的方法的异常Unite无法捕获
export default Unite(
  {
    // 和UI相关的当前页面变量定义在state里，和UI无关的当前页面变量定义在和state同层，比如tempData1,tempData2
    state: {},
    tempData1: 'xxx',
    tempData2: 'xxx',
    // onLoad onReady onShow 如果有发起异步请求的，记得加上async await 否则下拉刷新会打开后立即关闭
    async onLoad() {
      // 通过this.state可以取到state的结果
      // 通过this.props可以取到props的结果
      // 通过this.location可以取到路由的结果
      // 通过this.loading可以取到当前正在异步加载中的方法
      // 通过this.hooks可以取到下面传递过来的hooks数据
      // 通过this.error可以取到错误数据，一般不需要用到，Container会通过全局Context去获取及处理
    },
    async onReady() {},
    async onShow() {},
    async onHide() {},
  },
  // 这里返回的state loading error 和上方this一致，events除了上方定义的方法外，还有部分内置的方法比如；setHooks setError
  function ({ state, events, loading, error }, props) {
    // 伪代码
    const [menuButton, setMenuButton]: any = useRecoilState(menuButtonStore)
    // 这里通过setHooks方法可以将全局数据及全局数据的设置方法传递过去，方法里面可以通过this.hooks['xxx']获取到
    events.setHooks({
      xxx: menuButton,
      yyy: setMenuButton,
    })
    // 这里可以写hooks
    useEffect(() => {}, [])
    return (
      // 这里可以引入Container组件包裹起来，内置导航栏、下拉刷新逻辑、自动处理异常、登录等，具体可以看Container组件
      <View>Unite</View>
    )
  },
  // cancelInterception 默认对事件都添加了“防抖”策略，即触发async方法只有等结束之后再点才有效
  { page: true, cancelInterception: [] },
)
```

### Unite 解决了什么

- 既能使用 hooks 的能力，又能像 vue 一样快速开发 React 应用，避免了依赖问题
- 类型安全
- 自动捕获异常，开发只需关注业务本身逻辑
- 自动收集正在请求的方法，以 true ｜ false 的形式返回给业务侧
- 自动处理下拉刷新逻辑
- 建议新项目可以试试这个模版

注： 目前成功或者错误的处理都遵循{success: true, data: xxx} {success: false, code: 'xxx', message: 'xxx'} 的规范，服务端返回的格式返回后建议前端做一个层处理，模版内 Request 部分有说明
