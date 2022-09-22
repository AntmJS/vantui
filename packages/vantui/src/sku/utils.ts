export function everyItemEqual(a: number[], b: number[]) {
  if (a.length !== b.length) return false
  let equalLength = 0
  for (let i = 0; i < a.length; i++) {
    const itema = a[i]
    if (itema && b.includes(itema)) equalLength++
  }

  return equalLength === a.length
}
