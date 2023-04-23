import * as utils from '../../utils'

function getMark(date: any) {
  return new Date(date).getMonth() + 1
}

const ROW_HEIGHT = 64

function getDayStyle(
  type: any,
  index: any,
  date: any,
  rowHeight: any,
  color: any,
  firstDayOfWeek: any,
) {
  const style: any[] = []
  const current = new Date(date).getDay() || 7
  const offset =
    current < firstDayOfWeek
      ? 7 - firstDayOfWeek + current
      : current === 7 && firstDayOfWeek === 0
      ? 0
      : current - firstDayOfWeek

  if (index === 0) {
    style.push(['margin-left', (100 * offset) / 7 + '%'])
  }

  if (rowHeight !== ROW_HEIGHT) {
    style.push(['height', rowHeight + 'px'])
  }

  if (color) {
    if (
      type === 'start' ||
      type === 'end' ||
      type === 'start-end' ||
      type === 'multiple-selected' ||
      type === 'multiple-middle'
    ) {
      style.push(['background', color])
    } else if (type === 'middle') {
      style.push(['color', color])
    }
  }

  return style
    .map(function (item) {
      return item.join(':')
    })
    .join(';')
}

function formatMonthTitle(date: any) {
  date = new Date(date)
  return date.getFullYear() + '年' + (date.getMonth() + 1) + '月'
}

function getMonthStyle(visible: boolean, date: any, rowHeight: number) {
  if (!visible) {
    date = new Date(date)

    const totalDay = utils.getMonthEndDay(
      date.getFullYear(),
      date.getMonth() + 1,
    )
    const offset = new Date(date).getDay()
    const padding = Math.ceil((totalDay + offset) / 7) * rowHeight

    return {
      paddingBottom: `${padding}px`,
    }
  }

  return {}
}

export { getMark, getDayStyle, formatMonthTitle, getMonthStyle }
