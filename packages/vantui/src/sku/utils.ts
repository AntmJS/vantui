export function everyItemEqual(a: number[], b: number[]) {
  let equalLength = 0
  for (let i = 0; i < a.length; i++) {
    const itema = a[i]
    if (itema && b.includes(itema)) equalLength++
  }

  return equalLength === b.length
}
