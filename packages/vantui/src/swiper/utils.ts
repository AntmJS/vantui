const DISTANCE = 5
export const getDirection = (x: number, y: number) => {
  if (x > y && x > DISTANCE) return 'horizontal'
  if (y > x && y > DISTANCE) return 'vertical'
  return ''
}
