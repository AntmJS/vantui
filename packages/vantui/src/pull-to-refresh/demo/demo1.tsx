import { View } from '@tarojs/components'
import { PullToRefresh, IPullToRefreshProps } from '@antmjs/vantui'

export default function Demo() {
  const onRefresh: IPullToRefreshProps['onRefresh'] = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(undefined)
      }, 1000)
    })
  }

  return (
    <PullToRefresh onRefresh={onRefresh}>
      <View style={{ padding: '0 12px' }}>
        {new Array(10).fill(1).map((_, index) => (
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
