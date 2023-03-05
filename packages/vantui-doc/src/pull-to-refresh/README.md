# PullToRefresh 下拉刷新

### 介绍

在列表中通过手指下拉刷新加载新内容的交互操作。

### 引用

```js
import { PullToRefresh } from '@antmjs/vantui'
```

### 基本使用

```jsx
function Demo() {
  const onRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <View style={{ padding: '0 12px' }}>
        {new Array(10).fill(1).map((item, index) => (
          <View
            style={{ padding: 12, background: '#fff', marginBottom: 12 }}
            key={`PullToRefresh${index}`}
          >
            {index}
          </View>
        ))}
      </View>
    </PullToRefresh>
  )
}
```
