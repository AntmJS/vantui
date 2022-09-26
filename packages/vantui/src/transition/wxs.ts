/* eslint-disable */
import { style } from '../wxs/style'
function rootStyle(data: any) {
  return style([
    {
      '-webkit-transition-duration': data.currentDuration + 'ms',
      'transition-duration': data.currentDuration + 'ms',
    },
    data.display ? null : 'display: none',
    data.style,
  ])
}

export { rootStyle }
