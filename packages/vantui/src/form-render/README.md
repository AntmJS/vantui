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
