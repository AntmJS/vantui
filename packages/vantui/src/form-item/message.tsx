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
  const { status, message, feedback = 'failed' } = props
  const config = useMemo(() => {
    let mess = ''
    let color = '#fff'
    let ifShow = true
    if (status === 'reject' && (feedback === 'failed' || feedback === 'all')) {
      mess = message || ''
      color = 'red'
    } else if (status === 'pendding') {
      mess = ''
    } else if (
      status === 'resolve' &&
      (feedback === 'success' || feedback === 'all')
    ) {
      mess = '校验通过'
      color = 'green'
    }

    if (feedback === 'success' && status === 'resolve') {
      ifShow = true
    } else if (feedback === 'failed' && status === 'reject') {
      ifShow = true
    } else ifShow = false
    if (feedback === 'all') ifShow = true
    if (feedback === 'hidden') ifShow = false

    return {
      color,
      mess,
      ifShow,
    }
  }, [status, message, feedback])

  return (
    <View
      className={`vant-form-message ${
        config.ifShow ? `vant-form-message-show` : ''
      }`}
      style={{ color: config.color }}
    >
      {config.mess}
    </View>
  )
}
