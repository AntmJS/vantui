# ConfigProvider 全局配置

### 介绍

用于配置 Vant Weapp 组件的主题样式。

### 引入

在 Taro 文件中引入组件

```js
import { ConfigProvider } from '@antmjs/vantui'
```

## 定制主题

### 介绍

Vant Weapp 组件通过丰富的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现**定制主题、动态切换主题**等效果。

#### 示例

以 Button 组件为例，查看组件的样式，可以看到 `.vanButton--primary` 类名上存在以下变量：

```css
.vanButton--primary {
  color: var(--buttonPrimaryColor, #fff);
  background: var(--buttonPrimaryBackgroundColor, #07c160);
  border: var(--buttonBorderWidth, 1px) solid var(
      --buttonPrimaryBorderColor,
      #07c160
    );
}
```

### 自定义 CSS 变量

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成红色 */
page {
  --buttonPrimaryBackgroundColor: red;
}
```

### 通过 ConfigProvider 覆盖

`ConfigProvider` 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 `ConfigProvider` 组件，并通过 `themeVars` 属性来配置一些主题变量。

::: $demo1 :::

### ConfigProviderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/config-provider.d.ts)

| 参数      | 说明                           | 类型                          | 默认值 | 必填    |
| --------- | ------------------------------ | ----------------------------- | ------ | ------- |
| themeVars | 自定义主题变量, 具体请查看详情 | _&nbsp;&nbsp;IThemeVars<br/>_ | -      | `false` |
| children  | -                              | _&nbsp;&nbsp;ReactNode<br/>_  | -      | `true`  |

### 公共样式变量/_ stylelint-disable selector-type-no-unknown _/

| 名称 | 默认值 |
| ---- | ------ |

### 公共样式变量 Color Palette

| 名称            | 默认值             |
| --------------- | ------------------ |
| --black         | ` #1a1a1a;`        |
| --white         | ` #fff;`           |
| --gray-1        | ` #f7f8fa;`        |
| --gray-2        | ` #f2f3f5;`        |
| --gray-3        | ` #ebedf0;`        |
| --gray-4        | ` #dcdee0;`        |
| --gray-5        | ` #c8c9cc;`        |
| --gray-6        | ` #969799;`        |
| --gray-7        | ` #646566;`        |
| --gray-8        | ` #323233;`        |
| --red           | ` #ee0a24;`        |
| --blue          | ` #1989fa;`        |
| --orange        | ` #ff976a;`        |
| --orange-dark   | ` #ed6a0c;`        |
| --orange-light  | ` #fffbe8;`        |
| --green         | ` #07c160;`        |
| --page-back     | ` @white;`         |
| --primary-color | ` @green;`         |
|                 | `root,`            |
| --primary-color | ` @primary-color;` |

### 公共样式变量 z-index

| 名称                       | 默认值   |
| -------------------------- | -------- |
| --sticky-z-index           | ` 800;`  |
| --tabbar-z-index           | ` 805;`  |
| --navbar-z-index           | ` 805;`  |
| --goods-action-z-index     | ` 806;`  |
| --submit-bar-z-index       | ` 806;`  |
| --overlay-z-index          | ` 1000;` |
| --dropdown-z-index         | ` 1000;` |
| --popup-z-index            | ` 1010;` |
| --popup-close-icon-z-index | ` 1010;` |
| --notify-z-index           | ` 1500;` |
| --water-mark-z-index       | ` 2000;` |

### 公共样式变量 Gradient Colors

| 名称              | 默认值                                          |
| ----------------- | ----------------------------------------------- |
| --gradient-red    | ` linear-gradient(to right, #ff6034, #ee0a24);` |
| --gradient-orange | ` linear-gradient(to right, #ffd01e, #ff8917);` |

### 公共样式变量 Component Colors

| 名称                     | 默认值      |
| ------------------------ | ----------- |
| --text-color             | ` @gray-8;` |
| --active-color           | ` @gray-2;` |
| --active-opacity         | ` 0.85;`    |
| --disabled-opacity       | ` 0.5;`     |
| --background-color       | ` @gray-1;` |
| --background-color-light | ` #fafafa;` |
| --text-link-color        | ` #576b95;` |

### 公共样式变量 Padding

| 名称           | 默认值                |
| -------------- | --------------------- |
| --padding-base | ` 8px;`               |
| --padding-xs   | ` @padding-base * 2;` |
| --padding-sm   | ` @padding-base * 3;` |
| --padding-md   | ` @padding-base * 4;` |
| --padding-lg   | ` @padding-base * 6;` |
| --padding-xl   | ` @padding-base * 8;` |

### 公共样式变量 Font

| 名称                        | 默认值                                                  |
| --------------------------- | ------------------------------------------------------- |
| --font-size-xs              | ` 20px;`                                                |
| --font-size-sm              | ` 24px;`                                                |
| --font-size-md              | ` 28px;`                                                |
| --font-size-lg              | ` 32px;`                                                |
| --font-weight-bold          | ` 500;`                                                 |
| --line-height-xs            | ` 28px;`                                                |
| --line-height-sm            | ` 36px;`                                                |
| --line-height-md            | ` 40px;`                                                |
| --line-height-lg            | ` 44px;`                                                |
| --base-font-family          | ` -apple-system, BlinkMacSystemFont, 'Helvetica Neue',` |
| --price-integer-font-family | ` Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,`    |

### 公共样式变量 Animation

| 名称                      | 默认值   |
| ------------------------- | -------- |
| --animation-duration-base | ` 0.3s;` |
| --animation-duration-fast | ` 0.2s;` |

### 公共样式变量 Border

| 名称                | 默认值      |
| ------------------- | ----------- |
| --border-color      | ` @gray-3;` |
| --border-width-base | ` 2px;`     |
| --border-radius-sm  | ` 4px;`     |
| --border-radius-md  | ` 8px;`     |
| --border-radius-lg  | ` 16px;`    |
| --border-radius-max | ` 999px;`   |
