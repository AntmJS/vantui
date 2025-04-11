/* eslint-disable */
import react from 'react'
import { CountTo, Grid, GridItem, ICountToRef, Toast } from '@antmjs/vantui'
import { View } from '@tarojs/components'

export default function Demo() {
  const CountToRef = react.useRef<ICountToRef>()
  const handleFinish = () => {
    Toast.show('count finish')
  }

  return (
    <View>
      <Toast id="controlCountTo-mess" />
      <CountTo
        startVal={30}
        endVal={500}
        ref={CountToRef}
        onFinish={handleFinish}
      />
      <Grid clickable columnNum={4}>
        <GridItem text="开始" onClick={() => CountToRef.current?.start()} />
        <GridItem text="暂停" onClick={() => CountToRef.current?.pause()} />
        <GridItem text="继续" onClick={() => CountToRef.current?.resume()} />
        <GridItem text="重置" onClick={() => CountToRef.current?.reset()} />
      </Grid>
    </View>
  )
}
