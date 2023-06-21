import { View } from '@tarojs/components'
import { Button, Toast } from '@antmjs/vantui'

export default function Demo() {
  const show = () => {
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: '倒计时 3 秒',
      selector: '#customSelector',
    })

    let second = 3
    const timer = setInterval(() => {
      second--
      if (second) {
        Toast.loading({
          message: `倒计时 ${second} 秒`,
        })
      } else {
        clearInterval(timer)
        Toast.clear()
      }
    }, 1000)
  }

  return (
    <View>
      <Button type="info" onClick={show}>
        动态提示
      </Button>
      <Toast id="customSelector" />
    </View>
  )
}
