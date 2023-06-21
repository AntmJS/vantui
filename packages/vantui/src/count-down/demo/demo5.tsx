/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Toast, CountDown, ICountDownRef, Grid, GridItem } from '@antmjs/vantui'

export default function Demo() {
  const it = react.useRef<ICountDownRef>()

  return (
    <View>
      <Toast id="controlCountDown-mess" />
      <CountDown
        onChange={(e) => console.info(e)}
        ref={it}
        className="controlCountDown"
        millisecond
        time={4000}
        autoStart={false}
        format="ss:SSS"
        onFinish={() => Toast.show('end')}
      />
      <Grid clickable columnNum={3}>
        <GridItem
          text="开始"
          icon="play-circle-o"
          onClick={() => it.current?.start()}
        />
        <GridItem
          text="暂停"
          icon="pause-circle-o"
          onClick={() => it.current?.pause()}
        />
        <GridItem
          text="重置"
          icon="replay"
          onClick={() => {
            console.info(it)
            it.current?.reset()
          }}
        />
      </Grid>
    </View>
  )
}
