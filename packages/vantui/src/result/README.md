# Result 操作结果

对前一步操作的结果进行反馈, 当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用

### 成功状态

::: $demo1 :::

### 处理中状态

::: $demo2 :::

### 提示状态

::: $demo3 :::

### 警告状态

::: $demo4 :::

### 错误状态

::: $demo5 :::

### IResultProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/result.d.ts)

| 参数       | 说明                                                              | 类型                                                                                                                                                                                                                                                                                 | 默认值 | 必填    |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| type       | 内置类型 success=成功 error=错误/危险 info=信息提示 wait=等待处理 | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"error"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"info"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"warning"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"wait"<br/>_ | -      | `true`  |
| renderIcon | 自定义图片，如果配置了 type， 则不生效                            | _&nbsp;&nbsp;React.ReactNode<br/>_                                                                                                                                                                                                                                                   | -      | `false` |
| title      | 主文案                                                            | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;React.ReactNode<br/>_                                                                                                                                                  | -      | `true`  |
| message    | 副文案                                                            | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;React.ReactNode<br/>_                                                                                                                                                  | -      | `false` |
| extra      | 下方额外内容                                                      | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                            | -      | `false` |
| iconSize   | 图标大小                                                          | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                            | 120    | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                   | 默认值        |
| ---------------------- | ------------- |
| --result-padding       | ` 64px 24px;` |
| --result-success-color | ` #07c160;`   |
| --result-wait-color    | ` #4dd3b5;`   |
| --result-info-color    | ` #1677FF;`   |
| --result-warning-color | ` #ff8f1f;`   |
| --result-error-color   | ` #fc3e39;`   |
