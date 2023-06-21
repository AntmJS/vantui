/* eslint-disable */
import react from 'react'
import { View, Input } from '@tarojs/components'
import { Dialog, Image, Cell } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [value, setValue] = react.useState('')

  return (
    <View>
      <Dialog
        id="vanDialog3"
        title="标题"
        showCancelButton
        confirmButtonOpenType="getUserInfo"
        show={show}
        onClose={() => setShow(false)}
      >
        {value}
        <Input
          placeholder="请输入内容"
          onInput={(e) => setValue(e.detail.value)}
        />
        <Image
          className="demo-image"
          height="240px"
          src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
        ></Image>
      </Dialog>
      <Cell title="组件调用" onClick={() => setShow(true)} />
    </View>
  )
}
