import { style } from '../wxs/style'
import * as utils from '../wxs/utils'

function tabClass(active: any, ellipsis: any) {
  const classes = ['tab-class']

  if (active) {
    classes.push('tab-active-class')
  }

  if (ellipsis) {
    classes.push('van-ellipsis')
  }

  return classes.join(' ')
}

function tabStyle(data: any) {
  const titleColor = data.active
    ? data.titleActiveColor
    : data.titleInactiveColor

  const ellipsis = data.scrollable && data.ellipsis

  // card theme color
  if (data.type === 'card') {
    return style({
      'border-color': data.color,
      'background-color': !data.disabled && data.active ? data.color : null,
      color: titleColor || (!data.disabled && !data.active ? data.color : null),
      'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null,
    })
  }

  return style({
    color: titleColor,
    'flex-basis': ellipsis ? 88 / data.swipeThreshold + '%' : null,
  })
}

function navStyle(color: any, type: any) {
  return style({
    'border-color': type === 'card' && color ? color : null,
  })
}

function trackStyle(data: any) {
  if (!data.animated) {
    return ''
  }

  return style({
    // left: -100 * data.currentIndex + '%',
    transform: `translate3d(${-100 * data.currentIndex}%, 0px, 0px)`,
    '-webkit-transform': `translate3d(${-100 * data.currentIndex}%, 0px, 0px)`,
    'transition-duration': data.duration + 's',
    '-webkit-transition-duration': data.duration + 's',
    transition: data.duration + 's',
  })
}

function lineStyle(data: any) {
  return style({
    visibility: data.lineOffsetLeft === 0 ? 'hidden' : 'visible',
    width: utils.addUnit(data.lineWidth),
    transform: 'translateX(' + data.lineOffsetLeft + 'px)',
    '-webkit-transform': 'translateX(' + data.lineOffsetLeft + 'px)',
    'background-color': data.color,
    height: data.lineHeight !== -1 ? utils.addUnit(data.lineHeight) : null,
    'border-radius':
      data.lineHeight !== -1 ? utils.addUnit(data.lineHeight) : null,
    'transition-duration': !data.skipTransition ? data.duration + 's' : null,
    '-webkit-transition-duration': !data.skipTransition
      ? data.duration + 's'
      : null,
  })
}

export { tabClass, tabStyle, trackStyle, lineStyle, navStyle }
