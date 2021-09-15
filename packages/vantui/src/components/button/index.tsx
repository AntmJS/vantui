import type { ButtonProps } from '../../../types/button.d'
import { Button } from '@tarojs/components'

export default function Index(props: ButtonProps = { children: '' }) {
  const { size, type, className, loading, disabled, ...others } = props
  let cls = ''
  if (size === 'full') {
    if (!type || type === 'primary') {
      cls = 'antmui-btn_cell antmui-btn_cell-primary'
    } else if (type === 'default') {
      cls = 'antmui-btn_cell antmui-btn_cell-default'
    }
  } else {
    if (!type || type === 'primary') {
      cls = 'antmui-btn antmui-btn_primary'
    } else if (type === 'default') {
      cls = 'antmui-btn antmui-btn_default'
    }

    if (size === 'small') {
      cls = cls + ' antmui-btn_mini'
    } else if (size === 'around') {
      cls = cls + ' antmui-btn_around'
    }
  }

  if (loading) {
    cls = cls + ' antmui-btn_loading'
  }

  if (disabled) {
    cls = cls + ' antmui-btn_disabled'
  }

  return (
    <Button className={`${cls} ${className || ''}`} {...others}>
      <>{props.children}</>
    </Button>
  )
}
