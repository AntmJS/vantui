# 内置样式

### 介绍

Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 引入

在 Taro 文件中引入组件

```css
@import '@antmjs/vantui/es/style/base.less';
```

## 代码演示

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```jsx
function Demo() {
  return (
    <>
      <View
        class="van-ellipsis"
        style={{ width: '200px', marginBottom: '20px' }}
      >
        这是一段宽度限制 250px 的文字，后面的内容会省略。
      </View>

      {/**  最多显示两行**/}
      <View
        class="van-multi-ellipsis--l2"
        style={{ width: '200px', marginBottom: '20px' }}
      >
        这是一段最多显示两行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
      </View>

      {/**  最多显示三行**/}
      <View class="van-multi-ellipsis--l3" style={{ width: '200px' }}>
        这是一段最多显示三行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
      </View>
    </>
  )
}
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```jsx
function Demo() {
  return (
    <>
      {/**  上边框,可选各个方向 **/}
      <View
        class="van-hairline--top"
        style={{ width: '200px', marginBottom: '20px' }}
      ></View>

      {/**  全边框 **/}
      <View
        class="van-hairline--surround"
        style={{ width: '200px', marginBottom: '20px', height: '200px' }}
      >
        全边框
      </View>
    </>
  )
}
```

### 全局字体

推荐在 app.wxss 中设置以下全局字体，以保证在不同设备上提供最佳的视觉体验。

```css
page {
  fontfamily: -appleSystem, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
    Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
    sansSerif;
}
```
