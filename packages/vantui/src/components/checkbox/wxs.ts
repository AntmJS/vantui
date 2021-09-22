import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function iconStyle(data: any) {
  const styles: any = {
    'font-size': addUnit(data.iconSize),
  }

  if (
    data.checkedColor &&
    data.value &&
    !data.disabled &&
    !data.parentDisabled
  ) {
    styles['border-color'] = data.checkedColor
    styles['background-color'] = data.checkedColor
  }

  return style(styles)
}

export { iconStyle }
