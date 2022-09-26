/* eslint-disable */
function rootStyle(data: any) {
  let style: React.CSSProperties = {
    WebkitTransitionDuration: data.currentDuration + 'ms',
    transitionDuration: data.currentDuration + 'ms',
  }

  if (!data.display) style.display = 'none'
  style = Object.assign(style, data.style)
}

export { rootStyle }
