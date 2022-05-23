/* eslint-disable */
import react from 'react'
import { RadioGroup, Radio, Image } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio
        name="1"
        renderIcon={
          <Image
            style={{ width: '32px', height: '32px' }}
            src={
              value === '2'
                ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            }
          />
        }
        shape="square"
      >
        单选框 1
      </Radio>
      <Radio
        name="2"
        renderIcon={
          <Image
            style={{ width: '32px', height: '32px' }}
            src={
              value === '1'
                ? 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'
                : 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            }
          />
        }
        shape="square"
      >
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
