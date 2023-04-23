# Form 表单

### 介绍

用于为数据入录、校验，支持输入框、开关、文件上传等组件类型，支持自定义组件

### 引入

在 Taro 文件中引入组件

```js
import { Form, FormItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

可以通过 buton 点击事件`onClick`中在 form 实例 submit 获取数据并处理，或者通过 button 的`formType`触发 onFinish
FormItem 需要代理下级表单组件的值和触发事件

- 代理的表单组件触发事件为`onChange`, 通过`FormItem.trigger`重新设置
- 代理的表单组件默认取值为`value`, 通过`FormItem.valueKey`重新设置
- 代理的表单组件触发事件回调事件的默认取值`event.detail`, 通过`FormItem.valueFormat`重新设置

```jsx
function Demo() {
  const formIt = Form.useForm()
  const [state, setState] = react.useState({})
  const [, forceUpdate] = react.useState()
  // 注册不能回调函数设置必填的提示文案
  react.useEffect(() => {
    formIt.registerRequiredMessageCallback((label) => {
      return `${label}真的不能为空啊`
    })

    // setTimeout(() => {
    formIt.setErrorMessage('userName', '这是自定义错误xxxxx')
    // }, 1000)
  }, [])

  const handleClick = () => {
    formIt.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        Dialog.alert({
          message: `errorMessage: ${JSON.stringify(errorMessage)}`,
          selector: '#form-demo11',
        })
        return console.info('errorMessage', errorMessage)
      }

      Dialog.alert({
        message: `result: ${JSON.stringify(fieldValues)}`,
        selector: '#form-demo11',
      })
    })
  }

  const dynamicRule = react.useMemo(() => {
    if (formIt.getFieldValue('singleSelect') === '1') {
      return {
        rule: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        message: '输入正确的身份证',
      }
    }

    if (formIt.getFieldValue('singleSelect') === '2') {
      return {
        rule: /^[0-9]{6}$/,
        message: '请输入6位数的驾驶证',
      }
    }
  }, [formIt.getFieldValue('singleSelect')])

  const dynamicPlaceHolder = react.useMemo(() => {
    if (formIt.getFieldValue('singleSelect') === '1') {
      return '请输入身份证'
    }

    if (formIt.getFieldValue('singleSelect') === '2') {
      return '请输入驾驶证'
    }
  }, [formIt.getFieldValue('singleSelect')])

  return (
    <>
      <Form
        initialValues={{
          userName: '我是初始值',
          singleSelect: '1',
          rate: 2,
          slider: '50',
        }}
        form={formIt}
        onFinish={(errs, res) => console.info(errs, res)}
      >
        <FormItem
          label="用户名"
          name="userName"
          required
          rules={{
            rule: /[\u4e00-\u9fa5]/,
            message: '用户名仅支持中文',
          }}
          trigger="onInput"
          validateTrigger="onBlur"
          // taro的input的onInput事件返回对应表单的最终值为e.detail.value
          valueFormat={(e) => e.detail.value}
          renderRight={<Icon name="user-o" />}
        >
          <Input placeholder="请输入用户名（中文）" />
        </FormItem>

        <FormItem label="是否打开" name="opened" valueKey="checked">
          <Switch activeColor="#07c160" inactiveColor="#07c160" />
        </FormItem>

        <FormItem label="证件类型" name="singleSelect">
          {/** 后续版本, 开发 FormItem.dependencies, 实现不需要 forceUpdate 来更新 getFieldValue('xx') */}
          <RadioGroup
            direction="horizontal"
            onChange={(e) => {
              formIt.setFieldsValue('cardId', '')
              forceUpdate(e)
            }}
          >
            <Radio name="1" checkedColor="#07c160">
              身份证
            </Radio>
            <Radio name="2" checkedColor="#07c160">
              驾驶证
            </Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="证件号"
          name="cardId"
          required
          valueFormat={(e) => e.detail.value}
          rules={dynamicRule}
          trigger="onInput"
        >
          <Input placeholder={dynamicPlaceHolder} />
        </FormItem>

        <FormItem label="复选框" name="muiltSelect">
          <CheckboxGroup direction="horizontal">
            <Checkbox name="1" shape="square" checkedColor="#07c160">
              复选框 1
            </Checkbox>
            <Checkbox name="2" shape="square" checkedColor="#07c160">
              复选框 2
            </Checkbox>
          </CheckboxGroup>
        </FormItem>

        <FormItem label="滑块选择" name="slider">
          <Slider
            activeColor="#07c160"
            style={{ width: '200px', marginTop: '10px' }}
          />
        </FormItem>

        <FormItem label="评分" name="rate">
          <Rate activeColor="#07c160" />
        </FormItem>

        <FormItem label="步进器" name="stepper">
          <Stepper />
        </FormItem>
        <Button
          type="primary"
          className="van-button-submit"
          onClick={handleClick}
          // formType="submit"
        >
          提交
        </Button>
      </Form>
      <Dialog id="form-demo11" />
    </>
  )
}
```

### 支持多层级数据结构

- FormItem 的 name 属性支持数组的形式, 数组项为字符串的时候挂载到对象上，为数字的时候挂载到数组上
  第一层固定为对象
- 表单组件默认仅支持基本数据类型(string、number、boolean...)，FormItem 开启 mutiLevel，保持非基本数据类型

```jsx
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
function Demo() {
  const formIt = react.useRef(null)

  const multFormItems = function () {
    let jsx = []
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
              formIt.current.getFieldsValue(),
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
```

### 异步处理和自定义校验

- Uploader 的 onAfterRead 事件只返回变更的文件，展示的是多个文件的话需要重新设置
- 异步操作的时候返回 Promise

```jsx
function Demo() {
  const formIt = react.useRef(null)

  const valueFormatUpload = (event, formName, instance) => {
    Toast.loading('上传中...')
    const { file } = event.detail
    let fileList = instance.getFieldValue(formName) || []
    fileList = fileList.concat(file)
    // 异步更新
    return new Promise((resolve) => {
      setTimeout(() => {
        Toast.clear()
        resolve(fileList)
      }, 3000)
    })
  }

  const deleteFile = (event) => {
    const { index, fileList } = event.detail
    fileList.splice(index, 1)

    formIt.current.setFieldsValue('file', fileList)
  }
  return (
    <>
      <Toast id="form-demo2-loading" />
      <Form ref={formIt}>
        <FormItem
          name="file"
          required
          layout="vertical"
          label="上传图片(图片大小不得大于 0.1M)"
          valueKey="fileList"
          valueFormat={valueFormatUpload}
          trigger="onAfterRead"
          validateTrigger="onAfterRead"
          rules={{
            rule: (values, call) => {
              values.forEach((item, index) => {
                if (item.size > 0.1 * 1024 * 1024) {
                  return call(`图片(${index + 1})大小不得大于 0.1M`)
                }
                call(null)
              })
            },
          }}
        >
          <Uploader name="file1" onDelete={deleteFile}></Uploader>
        </FormItem>
      </Form>
    </>
  )
}
```

### 自定义组件

封装 DatetimePickerBox 组件, 应用到 FormItem

```jsx
function Demo() {
  const formIt = react.useRef(null)

  return (
    <Form ref={formIt}>
      <FormItem
        label="日期选择"
        name="dateTime"
        valueFormat={(e) => e.detail.value}
        valueKey="value"
        trigger="onConfirm"
        renderRight={<Icon name="arrow" />}
      >
        <DatetimePickerBox_ />
      </FormItem>
    </Form>
  )
}

function DatetimePickerBox_(props) {
  const [state, changeState] = react.useState({
    show: false,
    innerValue: null,
  })

  const setState = react.useCallback(
    (key, value) => {
      changeState({
        ...state,
        [key]: value,
      })
    },
    [state],
  )

  const toggleShow = react.useCallback((show) => {
    setState('show', show)
  }, [])

  const onConfirm = react.useCallback((e) => {
    if (props.onConfirm) props.onConfirm(e)
    toggleShow(false)
  }, [])

  const onCancel = react.useCallback(() => {
    if (props.onCancel) props.onCancel()
    toggleShow(false)
  }, [])

  const preFixZero = react.useCallback((n) => {
    return n > 9 ? `${n}` : `0${n}`
  }, [])

  const formatDate = react.useCallback((date) => {
    const d = new Date(date)
    return `${d.getFullYear()}-${preFixZero(
      Number(d.getMonth() + 1),
    )}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
  }, [])

  const onChange = react.useCallback((e) => {
    setState(innerValue, e.detail.datetimePicker.innerValue)
  }, [])

  const { value } = props

  return (
    <>
      <View onClick={() => toggleShow(true)} style={{ minWidth: '200px' }}>
        {value ? formatDate(value) : '请选择日期'}
      </View>
      <Popup
        position="bottom"
        show={state.show}
        onClose={() => toggleShow(false)}
      >
        <DatetimePicker
          type="datetime"
          value={state.innerValue || value}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Popup>
    </>
  )
}
```

### FormProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form.d.ts)

| 参数           | 说明                                          | 类型                                                                                                                                                                                                                                                                                                                                                                                                                      | 默认值 | 必填    |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| form           | 传入 form 实例（const formStore1 = useRef()） | _&nbsp;&nbsp;IFormInstanceAPI<br/>_                                                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
| initialValues  | 初始化表单仓库值                              | _&nbsp;&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;><br/>_                                                                                                                                                                                                                                                                                                          | -      | `false` |
| children       | 第一级必须是 FormItem 组件                    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                              | -      | `true`  |
| className      | 类名                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                 | -      | `false` |
| onFinish       | 表单提交触发，配合 button.formType = submit   | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;errs:&nbsp;string[]&nbsp;&brvbar;&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                              | -      | `false` |
| onFinishFailed | 表单提交失败触发，会拦截 onFinish             | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;errs:&nbsp;string[]&nbsp;&brvbar;&nbsp;null<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                          | -      | `false` |
| onChange       | 字段值更新时触发的回调事件                    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;changedValues:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;allValues:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ | -      | `false` |

### FormItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form.d.ts)

| 参数              | 说明                                                                               | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 默认值     | 必填    |
| ----------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------- |
| mutiLevel         | 组件值默认数据类型为基本类型(string、number...), 对象数组形式的数据需要设置为 true | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -          | `false` |
| name              | 对应表单字段名                                                                     | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>_                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `true`  |
| children          | 第一级操作表单组件                                                                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -          | `true`  |
| label             | 表单 label                                                                         | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -          | `true`  |
| labelName         | 表单 label 字符串, 当 label 不为字符串的时候，传入 labelName                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| layout            | 垂直 ｜ 水平                                                                       | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | horizontal | `false` |
| required          | 是否必填                                                                           | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `false`    | `false` |
| validateTrigger   | 验证表单触发方法名                                                                 | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `onChange` | `false` |
| borderBottom      | 下边框                                                                             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `false`    | `false` |
| labelClassName    | label 的外层 className                                                             | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| messageClassName  | 提示信息的 className,某些错误情况可以自定义样式                                    | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| requiredClassName | required 的外层 className                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| controllClassName | 表单组件的外层 className                                                           | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| className         | formItem 最外层 className                                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -          | `false` |
| requiredIcon      | 自定义必填标识                                                                     | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -          | `false` |
| feedback          | 验证后反馈的信息，可设置为校验成功、失败、都展示或隐藏                             | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"success"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"failed"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"all"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"hidden"<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                             | `failed`   | `false` |
| renderRight       | 自定义渲染右边内容                                                                 | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -          | `false` |
| trigger           | 表单交互触发方法                                                                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `onChange` | `false` |
| valueKey          | 表单控制展示的具体值的字段名                                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `value`    | `false` |
| valueFormat       | 根据表单交互回掉函数（时间）参数的重新定义                                         | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;IFormInstance:&nbsp;IFormInstanceAPI<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                                                                      | `value`    | `false` |
| rules             | 正则校验值，或者自定义校验后 call 回掉函数返回错误信息，支持数组或单项设置         | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;rule:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;((<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;call:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errMess:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;void)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;RegExp<br/>&nbsp;&nbsp;&nbsp;&nbsp;message?:&nbsp;string<br/>&nbsp;&nbsp;}[]<br/>_ | -          | `false` |

### IFormInstance [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/form.d.ts)

通过 ref 获取到的 form 的实例
| 方法 | 说明 | 类型 |
| --- | --- | --- |
| registerValidateFields | 注册校验规则 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;control:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;model:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| registerRequiredMessageCallback | 注册必填项为空时的回调函数 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| unRegisterValidate | 注册校验规则 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| resetFields | 重置表单 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| setFields | 设置多个表单值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;object:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| setFieldsValue | 设置单个表单值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;modelValue:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| getFieldsValue | 获取所有表单值 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;><br/>_ |
| setErrorMessage | 设置表单错误信息 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>,<br/>&nbsp;&nbsp;&nbsp;&nbsp;message:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| getFieldValue | 获取单个表单值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ |
| validateFieldValue | 单个表单验证 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;string<br/>&nbsp;&nbsp;)&nbsp;=><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"resolve"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"reject"<br/>_ |
| validateFields | 校验表单，并获取错误信息和所有表单值 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;callback:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errorMess:&nbsp;Array<string>&nbsp;&brvbar;&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |
| submit | 校验表单，并获取错误信息和所有表单值，触发 form.onFinish 和 onFinishFailed | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;callback?:&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;errs:&nbsp;Array<string>&nbsp;&brvbar;&nbsp;null,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values:&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                | 默认值                |
| ----------------------------------- | --------------------- |
| --form-background-color             | ` @white;`            |
| --form-space-horizontal             | ` @padding-sm;`       |
| --form-space-vertical               | ` @padding-md;`       |
| --form-border-bottom                | ` 2px solid @gray-3;` |
| --form-line-height                  | ` 48px;`              |
| --form-label-color                  | ` @text-color;`       |
| --form-label-width                  | ` 146px;`             |
| --form-label-font-size              | ` @font-size-md;`     |
| --form-controll-margin-left         | ` 40px;`              |
| --form-controll-color               | ` @text-color;`       |
| --form-controll-font-size           | ` @font-size-md;`     |
| --form-message-font-size            | ` @font-size-sm;`     |
| --form-message-color                | ` red;`               |
| --form-message-margin-top           | ` 8px;`               |
| --form-vertical-controll-margin-top | ` 20px;`              |
