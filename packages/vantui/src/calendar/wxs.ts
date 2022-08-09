/* eslint-disable */
function getMonthEndDay(year: any, month: any) {
  return 32 - new Date(year, month - 1, 32).getDate()
}

function compareMonth(date1: any, date2: any) {
  date1 = new Date(date1)
  date2 = new Date(date2)

  var year1 = date1.getFullYear()
  var year2 = date2.getFullYear()
  var month1 = date1.getMonth()
  var month2 = date2.getMonth()

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1
  }

  return year1 > year2 ? 1 : -1
}

function getMonths(minDate: any, maxDate: any) {
  var months: any[] = []
  var cursor = new Date(minDate)

  cursor.setDate(1)

  do {
    months.push(cursor.getTime())
    cursor.setMonth(cursor.getMonth() + 1)
  } while (compareMonth(cursor, new Date(maxDate)) !== 1)

  return months
}

function getButtonDisabled(type: string, currentDate: any) {
  if (currentDate == null) {
    return true
  }

  if (type === 'range') {
    return !currentDate[0] || !currentDate[1]
  }

  if (type === 'multiple') {
    return !currentDate.length
  }

  return !currentDate
}

export { getMonthEndDay, compareMonth, getMonths, getButtonDisabled }
