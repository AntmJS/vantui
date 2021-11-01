# 内置样式

### 介绍

Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 引入

在 Taro 文件中引入组件

```css
@import 'vantui/dist/style/common.less';
```

## 代码演示

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```xml
<View class="vanEllipsis">
  这是一段宽度限制 250px 的文字，后面的内容会省略。
</View>

<!-- 最多显示两行 -->
<View class="vanMultiEllipsis--l2">
  这是一段最多显示两行的文字，后面的内容会省略。
</View>

<!-- 最多显示三行 -->
<View class="vanMultiEllipsis--l3">
  这是一段最多显示三行的文字，后面的内容会省略。
</View>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```xml
<!-- 上边框 -->
<View class="vanHairline--top"></View>

<!-- 下边框 -->
<View class="vanHairline--bottom"></View>

<!-- 左边框 -->
<View class="vanHairline--left"></View>

<!-- 右边框 -->
<View class="vanHairline--right"></View>

<!-- 上下边框 -->
<View class="vanHairline--topBottom"></View>

<!-- 全边框 -->
<View class="vanHairline--surround"></View>
```

### 全局字体

推荐在 app.wxss 中设置以下全局字体，以保证在不同设备上提供最佳的视觉体验。

```css
page {
  fontFamily: -appleSystem, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
    sansSerif;
}
```
