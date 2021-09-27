function displayColumns(columns: any, columnsNum: string | number) {
  return columns.slice(0, +columnsNum)
}

export { displayColumns }
