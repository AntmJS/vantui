/* eslint-disable */
function getDate(date) {
  return new Date(date)
}
function formatDate(date) {
  if (date) {
    date = getDate(date)
    return date.getMonth() + 1 + '/' + date.getDate()
  }
}

function formatFullDate(date) {
  if (date) {
    date = getDate(date)
    return date.getFullYear() + '/' + formatDate(date)
  }
}

function formatMultiple(dates) {
  if (dates.length) {
    return '选择了 ' + dates.length + '个日期'
  }
}

function formatRange(dateRange) {
  if (dateRange.length) {
    return formatDate(dateRange[0]) + ' - ' + formatDate(dateRange[1])
  }
}

module.exports = {
  formatDate: formatDate,
  formatFullDate: formatFullDate,
  formatMultiple: formatMultiple,
  formatRange: formatRange,
}
