## ts同步到文档说明

### vantui-doc下执行同步命令
将vantui/types中d.ts的类型描述转换为文档中的API props
```bash
yarn docs-ts
```

### ts中注释
- 只转换export的属性
- 导出类型的注释描述只支持@title和@description
- 属性类型的注释描述只支持@default和@description
- 转换后文档的组件API说明 展示的顺序和ts的export的顺序一致，所以d.ts中组件参数的export尽量放在最开始
```ts
/**
 * @title 组件实例
 * @description 通过ref获取到的方法如下
 */
export type xxProps = {
  /**
   * @description 获取每一列的值
   * @default XX
   */
  xxvalue?: string
}
```