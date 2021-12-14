/* eslint-disable */
function displayTitle(item: any) {
  const match = (item.options || []).filter(function (option: any) {
    return option.value === item.value
  })
  let displayTitle = match.length ? match[0].text : ''
  if (
    displayTitle === null ||
    displayTitle === undefined ||
    displayTitle === ''
  ) {
    return item.title || ''
  }
  return displayTitle
}

export { displayTitle }
