# form-render

### 介绍

基于 Form 实现配置化渲染表单，统一管理表单信息，支持自定义扩展表单组件

### 引用

```tsx
import { FormRender, Form } from '@antmjs/vantui'
```

### 基本使用

::: $demo1 :::

内部已经注册的组件类型如下

```ts
export type IFormRenderItemProps<T> =
  | IMakeFormCompProps<'input' | 'inputNumber' | 'inputPrice', InputProps, T>
  | IMakeFormCompProps<'swtch', SwitchProps, T>
  | IMakeFormCompProps<'radio', RadioGroupProps, T>
  | IMakeFormCompProps<'checkbox', CheckboxGroupProps, T>
  | IMakeFormCompProps<'slider', SliderProps, T>
  | IMakeFormCompProps<'rate', RateProps, T>
  | IMakeFormCompProps<'stepper', StepperProps, T>
```

### 自定义扩展

::: $demo2 :::

### 组件的 props [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form-render.d.ts)

| 参数          | 说明      | 类型                                | 默认值 | 必填    |
| ------------- | --------- | ----------------------------------- | ------ | ------- |
| queryInit     | 注册组件  | _&nbsp;&nbsp;boolean<br/>_          | -      | `false` |
| config        | -         | _&nbsp;&nbsp;CP[]<br/>_             | -      | `true`  |
| defaultValues | -         | _&nbsp;&nbsp;T<br/>_                | -      | `false` |
| form          | form 实例 | _&nbsp;&nbsp;IFormInstanceAPI<br/>_ | -      | `true`  |

### config 的每一项 [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form-render.d.ts)

| 参数    | 说明                                        | 类型                                                                                                                                                                                                                                                            | 默认值 | 必填    |
| ------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| type    | 对应组件的 key                              | _&nbsp;&nbsp;Type<br/>_                                                                                                                                                                                                                                         | -      | `true`  |
| props   | 传入组件的 props                            | _&nbsp;&nbsp;Props<br/>_                                                                                                                                                                                                                                        | -      | `false` |
| fields  | 对应泛型对象的 key 表单字段                 | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;keyof&nbsp;T<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>_ | -      | `true`  |
| label   | -                                           | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                       | -      | `true`  |
| options | option 选项，给 checkebox、radio 等组件使用 | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string<br/>&nbsp;&nbsp;}[]<br/>_                                                                                                                           | -      | `false` |

### IRegisterFormParams [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form-render.d.ts)

| 参数           | 说明                                                                  | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | 注册组件的 key                                                        | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                             |
| component      | 注册组件                                                              | _&nbsp;&nbsp;any<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                |
| transformProps | 转换组件的 props， props 为组件 props, itemProps 为 formItem 的 props | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;props:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;itemProps:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;Record<string,&nbsp;any><br/>_ |
