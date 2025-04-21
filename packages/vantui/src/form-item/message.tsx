import { useMemo } from 'react'
import { View } from '@tarojs/components'

type Iprops = {
  status?: 'reject' | 'pendding' | 'resolve'
  message?: string
  required?: boolean
  name?: string
  value?: any
  feedback?: 'success' | 'failed' | 'all' | 'hidden'
  className?: string
}

export default function Message(props: Iprops) {
  const { status, message, feedback = 'failed', className } = props
  const config = useMemo(() => {
    let mess = ''
    let color = '#fff'
    let ifShow = false

    // 优先处理特殊反馈模式
    if (feedback === 'hidden') {
      return { color, mess, ifShow: false }
    }

    // 通用条件判断
    switch (status) {
      case 'pendding':
        mess = ''
        break
      case 'reject':
        if (['failed', 'all'].includes(feedback)) {
          mess = message || ''
          color = 'red'
          ifShow = true
        }
        break
      case 'resolve':
        if (['success', 'all'].includes(feedback)) {
          mess = '校验通过'
          color = 'green'
          ifShow = true
        }
        break
    }

    // 处理'all'模式的覆盖逻辑
    if (feedback === 'all') {
      ifShow = true
    }

    return { color, mess, ifShow }
  }, [status, message, feedback])

  return (
    <View
      className={`vant-form-message ${
        config.ifShow ? `vant-form-message-show` : ''
      } ${className}`}
      style={{ color: config.color }}
    >
      {config.mess}
    </View>
  )
}
