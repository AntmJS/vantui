/* eslint-disable */
import react from 'react'
import { Input } from '@tarojs/components'
import {
  FormItem,
  Form,
  Button,
  Dialog,
  IFormInstanceAPI,
} from '@antmjs/vantui'

// 可以异步请求初始化，放在state里面
const initialValues = {
  mutiData: { a: [1, 2, 3, 4] },
  useInfo: [
    {
      name: 'bbbb',
      age: 12,
    },
    {
      name: 'aaaa',
      age: 13,
    },
  ],
}
export default function Demo() {
  const formIt = react.useRef<IFormInstanceAPI>(null)

  const multFormItems = function () {
    let jsx: JSX.Element[] = []
    for (let i = 0; i < 2; i++) {
      jsx.push(
        <>
          <FormItem
            label={`名称(${i + 1})`}
            name={['useInfo', i, 'name']}
            trigger="onInput"
            valueFormat={(e) => e.detail.value}
          >
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem
            label={`年龄(${i + 1})`}
            name={['useInfo', i, 'age']}
            trigger="onInput"
            valueFormat={(e) => e.detail.value}
          >
            <Input placeholder="请输入年龄" />
          </FormItem>
        </>,
      )
    }
    return jsx
  }

  return (
    <Form ref={formIt} initialValues={initialValues}>
      {multFormItems()}
      <FormItem name="mutiData" mutiLevel label="复杂数据">
        <_MutiData />
      </FormItem>
      <Button
        className="van-button-submit"
        formType="submit"
        onClick={() => {
          Dialog.alert({
            message: `result: ${JSON.stringify(
              formIt.current?.getFieldsValue(),
            )}`,
            selector: 'form-demo3',
          })
        }}
      >
        提交
      </Button>
      <Dialog id="form-demo3" />
    </Form>
  )
}

function _MutiData(value) {
  return <>{JSON.stringify(value)}</>
}
