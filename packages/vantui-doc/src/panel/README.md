# Panel 面板

### 引入

在 Taro 文件中引入组件

```js
import { Panel } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

面板只是一个容器，里面可以放入自定义的内容。

```jsx
<View>
  <Panel
    title="标题"
    desc="描述信息"
    status="状态"
  >
    <View>
      内容
    </View>
  </Panel>
</View>
 
```

### 高级用法

```jsx
<View>
  <Panel
    title="标题"
    desc="描述信息"
    status="状态"
    renderFooter={(
      <View>
        <Button size="small">
          按钮
        </Button>
        <Button
          size="small"
          type="danger"
        >
          按钮
        </Button>
      </View>
    )}
  >
    <View>
      内容
    </View>
  </Panel>
</View>
 
```
