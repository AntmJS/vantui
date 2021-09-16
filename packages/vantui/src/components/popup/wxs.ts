/* eslint-disable */
import * as utils from '../wxs/utils'

function popupStyle(data: any) {
  return utils.style([
    {
      'z-index': data.zIndex,
      '-webkit-transition-duration': data.currentDuration + 'ms',
      'transition-duration': data.currentDuration + 'ms',
    },
    data.display ? null : 'display: none',
  ])
}
export { popupStyle }
