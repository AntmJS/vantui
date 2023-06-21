/* eslint-disable */
import { Ellipsis } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Ellipsis rows={4}>
      整个组件库是依赖开源项目 Vant Weapp
      的代码经过全量编译而来，所有样式文件及代码结构都与其保持高度一致，只是生命周期经过改造使其支持
      React，很大程度避免了重新造轮子带来的各种问题，同时保留了 Vant Weapp
      多年积累的经验 收到了一些反馈，这里说明一下吧。关于 demo
      的质量和文档现在确实是有一些不足的地方的，因为做这件事的人并不多暂时，我们把更多的精力放在了组件本身，确保大家在实际的应用中能够更少的被中断。目前除了
      50 多个组件要维护，还有 Taro Demo 和 React Demo
      和文档，同时公司也有业务要跟进，所以希望大家能够体谅，当然非常欢迎有兴趣的人一起来完善它！
    </Ellipsis>
  )
}
