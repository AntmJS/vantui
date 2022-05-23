# 样式覆盖

### 样式类覆盖

得益于 Taro3 的实现，我们无需再关注小程序的样式隔离问题，所以我们可以常规使用样式覆盖

```jsx
<Button type="primary">主要按钮</Button>
```

```css
/* page.less */
.van-button--primary {
  font-size: 20px;
  background-color: pink;
}
```

### 使用 CSS 变量

@antmjs/vantui 为部分 CSS 属性开放了基于 CSS 属性的定制方案。

相较于 样式类覆盖，这种方案支持在页面或应用级别对多个组件的样式做批量修改以进行主题样式的定制。

当然，用它来修改单个组件的部分样式也是绰绰有余的。具体的使用方法请查阅[定制主题](#/theme)
