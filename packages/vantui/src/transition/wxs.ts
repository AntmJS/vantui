/* eslint-disable */
import * as utils from '../wxs/utils'
function rootStyle(data: any) {
  return utils.style([
    {
      '-webkit-transition-duration': data.currentDuration + 'ms',
      'transition-duration': data.currentDuration + 'ms',
    },
    data.display ? null : 'display: none',
    data.style,
  ])
}

export { rootStyle }
