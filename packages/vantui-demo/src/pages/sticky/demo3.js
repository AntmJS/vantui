import react from 'react'
import { View } from '@tarojs/components'
import { scrollView, Sticky, Button } from '@antmjs/vantui'
export default function Demo() {
  return (
    <scrollView
      onScroll={this.state.onScroll}
      scrollY={true}
      id="scroller"
      style="height: 200px;"
    >
      <View style="height: 400px; paddingTop: 50px;">
        <Sticky
          scrollTop={this.state.scrollTop}
          offsetTop={this.state.offsetTop}
        >
          <Button type="warning">嵌套在 scrollView 内</Button>
        </Sticky>
      </View>
    </scrollView>
  )
}
