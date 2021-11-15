function padZero(num: any, targetLength = 2) {
  let str = num + ''
  while (str.length < targetLength) {
    str = '0' + str
  }
  return str
}
const SECOND = 1000
const MINUTE = 60000
const HOUR = 3600000
const DAY = 86400000
export function parseTimeData(time: any) {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}
export function parseFormat(format: any, timeData: any) {
  const { days } = timeData
  let { hours, minutes, seconds, milliseconds } = timeData
  if (format.indexOf('DD') === -1) {
    hours += days * 24
  } else {
    format = format.replace('DD', padZero(days))
  }
  if (format.indexOf('HH') === -1) {
    minutes += hours * 60
  } else {
    format = format.replace('HH', padZero(hours))
  }
  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60
  } else {
    format = format.replace('mm', padZero(minutes))
  }
  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000
  } else {
    format = format.replace('ss', padZero(seconds))
  }
  return format.replace('SSS', padZero(milliseconds, 3))
}
export function isSameSecond(time1: any, time2: any) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}
