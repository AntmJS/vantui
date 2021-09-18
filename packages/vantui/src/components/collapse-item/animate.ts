import Taro from '@tarojs/taro'
import { canIUseAnimate } from '../common/version.js'
import { getRect } from '../common/utils.js'
function useAnimate(context: any, expanded: any, mounted: any, height: any) {
  const selector = '.van-collapse-item__wrapper'
  if (expanded) {
    context.animate(
      selector,
      [
        { height: 0, ease: 'ease-in-out', offset: 0 },
        { height: `${height}px`, ease: 'ease-in-out', offset: 1 },
        { height: `auto`, ease: 'ease-in-out', offset: 1 },
      ],
      mounted ? 300 : 0,
      () => {
        context.clearAnimation(selector)
      },
    )
    return
  }
  context.animate(
    selector,
    [
      { height: `${height}px`, ease: 'ease-in-out', offset: 0 },
      { height: 0, ease: 'ease-in-out', offset: 1 },
    ],
    300,
    () => {
      context.clearAnimation(selector)
    },
  )
}
function useAnimation(context: any, expanded: any, mounted: any, height: any) {
  const animation = Taro.createAnimation({
    duration: 0,
    timingFunction: 'ease-in-out',
  })
  if (expanded) {
    if (height === 0) {
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
    context.setData({
      animation: animation.export(),
    })
    return
  }
  animation.height(height).top(0).step({ duration: 1 }).height(0).step({
    duration: 300,
  })
  context.setData({
    animation: animation.export(),
  })
}
export function setContentAnimate(context: any, expanded: any, mounted: any) {
  getRect(context, '.van-collapse-item__content')
    .then((rect: any) => rect.height)
    .then((height) => {
      canIUseAnimate()
        ? useAnimate(context, expanded, mounted, height)
        : useAnimation(context, expanded, mounted, height)
    })
}
