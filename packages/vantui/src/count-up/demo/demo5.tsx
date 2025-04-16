/* eslint-disable */
import react from 'react'
import { CountUp, Grid, GridItem, ICountUpRef, Toast } from '@antmjs/vantui'
import { View } from '@tarojs/components'

export default function Demo() {
  const CountUpRef = react.useRef<ICountUpRef>()
  const handleFinish = () => {
    Toast.show('count finish')
  }

  return (
    <View>
      <Toast id="controlCountUp-mess" />
      <CountUp
        startVal={30}
        endVal={500}
        ref={CountUpRef}
        onFinish={handleFinish}
      />
      <Grid clickable columnNum={4}>
        <GridItem text="开始" onClick={() => CountUpRef.current?.start()} />
        <GridItem text="暂停" onClick={() => CountUpRef.current?.pause()} />
        <GridItem text="继续" onClick={() => CountUpRef.current?.resume()} />
        <GridItem text="重置" onClick={() => CountUpRef.current?.reset()} />
      </Grid>
    </View>
  )
}
