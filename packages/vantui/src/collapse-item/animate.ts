import { createAnimation } from '@tarojs/taro'
// import { canIUseAnimate } from '../common/version'
import { getRect } from '../common/utils'
// function useAnimate(context: any, expanded: any, mounted: any, height: any) {
//   const selector = '.van-collapse-item__wrapper'
//   if (expanded) {
//     context.animate(
//       selector,
//       [
//         { height: 0, ease: 'ease-in-out', offset: 0 },
//         { height: `${height}px`, ease: 'ease-in-out', offset: 1 },
//         { height: `auto`, ease: 'ease-in-out', offset: 1 },
//       ],
//       mounted ? 300 : 0,
//       () => {
//         context.clearAnimation(selector)
//       },
//     )
//     return
//   }
//   context.animate(
//     selector,
//     [
//       { height: `${height}px`, ease: 'ease-in-out', offset: 0 },
//       { height: 0, ease: 'ease-in-out', offset: 1 },
//     ],
//     300,
//     () => {
//       context.clearAnimation(selector)
//     },
//   )
// }
function useAnimation(expanded: any, mounted: any, height: any, setState: any) {
  const animation = createAnimation({
    duration: 0,
    timingFunction: 'ease-in-out',
  })
  if (expanded) {
    if (height === 0 || height === null || height === undefined) {
      animation.height('auto').top(1).step()
    } else {
      animation
        .height(height)
        .top(1)
        .step({
          duration: mounted ? 300 : 1,
        })
        .height('auto')
        .step()
    }
    const animationclass = animation.export()
    setState?.((state: any) => {
      return {
        ...state,
        animation: animationclass,
      }
    })
  } else {
    animation.height(height).top(0).step({ duration: 1 }).height(0).step({
      duration: 300,
    })
    const animationclass = animation.export()
    setState?.((state: any) => {
      return {
        ...state,
        animation:
          process.env.TARO_ENV === 'h5'
            ? `${animationclass}--1`
            : animationclass,
      }
    })
  }
}
export function setContentAnimate(
  selector: any,
  expanded: any,
  mounted: any,
  setState: any,
  ref?: any,
) {
  getRect(null, selector)
    .then((rect: any) => {
      return process.env.TARO_ENV === 'h5'
        ? ref.current.clientHeight
        : rect?.height
    })
    .then((height) => {
      useAnimation(expanded, mounted, height, setState)
    })
}
