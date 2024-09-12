import { CheckList } from '@antmjs/vantui'
import { options } from './options'

export default function Demo() {
  const searchData = (keyWord: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!keyWord) {
          resolve(options)
        } else {
          resolve(options.filter((it) => it.label.includes(keyWord)))
        }
      }, 1200)
    })
  }

  return (
    <CheckList
      placeholder="选择运输公司"
      checkAll
      labelName="label"
      searchData={searchData}
    />
  )
}
