# v3 版本

### v3 开发中

- `Dialog`、`Toast`、`Notify`组件命令式调用重构，避免须要保证每个页面组件的 id 不同 （**完成**）
- `Calendar`新增跨度大的年月切换，优化滚动定位代码 （**完成**）
- `PowerScrollView`组件重构，为了方便使用，计划拆分为`InfiniteScroll`和`PullToRefresh`两个组件 （**完成**）
- 新增 `VirtualList` 虚拟列表组件 （**完成**）
- `Form`组件样式和`Cell`组件保持一致
- 主题色调统一, 采用 less 变量`@primary-color`或 css 变量`--primary-color`统一设置
  部分组件：`Calendar`、`DropdownMenu`、`Stepper`、`TreeSelect`的色调修改为和主题色统一 （**完成**）

仓库地址：[3.0.0](https://github.com/antmjs/vantui/tree/3.0.0)
【** 欢迎 PR **】
