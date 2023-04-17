# ts 同步到文档说明

### vantui-doc 下执行同步命令

将 `vantui/types` 中 `d.ts` 的类型描述转换为文档`vantui-docs`中的 API props 描述

```bash
yarn docs-ts
```

### ts 中注释

- 只转换 export 的属性
- 导出类型的注释描述只支持 `@title` 和 `@description`
- 某些类型需要导出，但不希望同步到文档时，使用注释 `@forbidToMd`
- 类型下的属性类型的注释描述只支持 `@default` 和 `@description`
- 转换后文档的组件 API 说明 展示的顺序和 ts 的 export 的顺序一致，所以 d.ts 中组件参数的 export 尽量放在最开始

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
/**
 * @forbidToMd true // 不希望该类型同步到文档
 */
export type xxx = {
  a: string
  // ...
}
```
