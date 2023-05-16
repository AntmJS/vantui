# 从 v2 升级到 v3

### 主题色统一

基于 less 变量`@primary-color`或 css 变量`--primary-color`统一设置主色调。主色调变化的有：

- Calendar
- Checkbox
- Radio
- Dlider
- DropdownMenu
- Progress
- Sidebar
- Tab
- Tabbar
- TreeSelect
- Sku

升级后需要核实这些组件的色调是否须要和之前保持一致，须要的话，请根据各个组件的 less 变量或 css 变量修改

### dialog、toast、notify 组件功能升级

之前的版本存在命令式调用无效的场景，原因在于发布订阅触发的`组件ID`存在冲突，新增了下面方式调用,之前写法可以保持不变

```jsx
const Toast_ = Toast.createOnlyToast()
const Dialog_ = Toast.createOnlyDialog()
const Notify_ = Toast.createOnlyNotify()
```

### power-scroll-view 组件重构

`power-scroll-view`组件被拆分为`infinite-scroll`和`pull-to-refresh`, 升级方式：

- 保留原有列表的渲染
- `power-scroll-view`的`onScrollToLower`对应`infinite-scroll`的`loadMore`方法
- `power-scroll-view`的`onScrollToUpper`对应`pull-to-refresh`的`onRefresh`方法

```jsx
function Demo() {
  // ...
  const loadMore = async () => {
    // ...
  }

  const onRefresh = async () => {
    //...
    InfiniteScrollInstance.current.reset()
  }
  return (
    <PullToRefresh onRefresh={onRefresh}>
      {/** 列表渲染.... */}
      <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} />
    </PullToRefresh>
  )
}
```

### 新增 VirtualList 组件

由于小程序是异步获取 dom 的 rect 信息，当前实现方式为区域最多渲染 N 个元素，组件内永远只渲染 2N 个元素

### Calendar 功能修复+升级

- 禁止初始化的时候的滚动动画效果
- 新增`longspan`属性，开启快速切换年月日
- 月份组件虚拟渲染，以支持跨度大的年份渲染，年份跨度很大的话推荐使用`datetimepicker`

### Form 组件样式重构

- Form 组件样式与 cell 组件保持一致
- 新增`borderBottom`开启和 cell 一样的下边框

升级后确认样式是否需要重新调整
