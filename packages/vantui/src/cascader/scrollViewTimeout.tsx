import { useEffect, useState } from 'react'
import { ScrollView } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'

type Iprops = {
  timeout: number
  optiosData: any[]
  tabvalue: string
  value?: any[]
  scrollIntoView?: boolean
  children?: React.ReactNode
}

export default function ScrollViewTimeout(props: Iprops): JSX.Element {
  const [target, setTarget] = useState('')
  const { timeout, optiosData, tabvalue, value, scrollIntoView = true } = props

  useEffect(
    function () {
      if (scrollIntoView && value) {
        const index = getIndexByValue(optiosData, tabvalue)
        const val = value[index]
        if (val !== undefined) {
          nextTick(() => {
            setTimeout(() => {
              setTarget(`vant-cascader-item${val}`)
            }, timeout)
          })
        } else {
          setTarget('')
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [tabvalue, value],
  )

  return (
    <ScrollView
      scrollWithAnimation={false}
      scrollY
      className="van-cascader-tab"
      scrollIntoView={target}
    >
      {props.children}
    </ScrollView>
  )
}

function getIndexByValue(arr, value) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (item.paneKey === value) {
      res = i
      break
    }
  }

  return res
}
