export default function (options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: '@antmjs/vantui 组件库演示',
      }
    },
    ...options,
  })
}
