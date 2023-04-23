export function getClosestIndex(rects, scrollTop) {
  const rectsArr: any[] = []

  for (const key in rects) {
    const rect = rects[key]
    rectsArr.push({
      ...rect,
      index: Number(key),
    })
  }

  let start = 0
  let end = rectsArr.length - 1
  let resIndex: any = undefined

  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2)
    const midValue = rectsArr[midIndex].top

    if (midValue === scrollTop) {
      return rectsArr[midIndex].index
    }

    if (midValue < scrollTop) {
      if (resIndex === undefined || resIndex < midIndex) {
        resIndex = midIndex
      }

      start = midIndex + 1
    }

    if (midValue > scrollTop) {
      end = midIndex - 1
    }
  }

  resIndex = resIndex || 0

  return rectsArr[resIndex].index
}
