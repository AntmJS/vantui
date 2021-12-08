/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_batchedUpdates } from 'react-dom'
import { IFormInstanceAPI } from '../../../types/form'

type IAPI = keyof IFormInstanceAPI

/* 对外接口  */
const formInstanceApi = [
  'setCallback',
  'dispatch',
  'registerValidateFields',
  'resetFields',
  'setFields',
  'setFieldsValue',
  'getFieldsValue',
  'getFieldValue',
  'validateFields',
  'submit',
  'unRegisterValidate',
  // 'getTriggerConfig',
  // 'setTriggerConfig',
]

const isReg = (value: any) => value instanceof RegExp
class FormStore {
  static instance: FormStore
  public FormUpdate: () => any
  public model: Record<string, any>
  public control: Record<string, any>
  public isSchedule: boolean
  public callback: Record<string, any>
  public penddingValidateQueue: any[]
  public defaultFormValue: Record<string, any>
  constructor(forceUpdate: any, defaultFormValue: Record<string, any>) {
    this.FormUpdate = forceUpdate
    this.model = {}
    this.control = {}
    this.isSchedule = false
    this.callback = {}
    this.penddingValidateQueue = []
    this.defaultFormValue = defaultFormValue || {}
  }

  getForm() {
    return formInstanceApi.reduce((map: any, item: any) => {
      map[item] = this[item as IAPI].bind(this)
      return map
    }, {})
  }

  static createValidate(validateModal: any) {
    const { value, rule, required, message } = validateModal
    return {
      value,
      rule: rule || (() => true),
      required: required || false,
      message: message || '',
      status: 'pendding',
    }
  }

  setCallback(callback: any) {
    if (callback) this.callback = callback
  }

  dispatch(action: { type: string }, ...arg: any[]): any {
    if (!action && typeof action !== 'object') return null
    const { type } = action
    if (~formInstanceApi.indexOf(type)) {
      // @ts-ignore
      return this[type as IAPI](...arg)
    } else if (typeof this[type as IAPI] === 'function') {
      // @ts-ignore
      return this[type as IAPI](...arg)
    }
  }

  registerValidateFields(
    name: string,
    control: Record<string, any>,
    model: Record<string, any>,
  ): void {
    if (this.defaultFormValue[name])
      model['value'] = this.defaultFormValue[name]
    const validate = FormStore.createValidate(model)
    this.model[name] = validate
    this.control[name] = control
  }

  unRegisterValidate(name: string) {
    delete this.model[name]
    delete this.control[name]
  }

  notifyChange(name: string) {
    const controller = this.control[name]
    if (controller) controller?.changeValue()
  }

  setFields(object: Record<string, any>) {
    if (typeof object !== 'object') return
    Object.keys(object).forEach((modelName) => {
      this.setFieldsValue(modelName, object[modelName])
    })
  }

  setFieldsValue(name: string, modelValue: any): any {
    const model = this.model[name]
    if (!model) return false
    if (toString.call(modelValue) === '[Object, object]' && modelValue.value) {
      const { message, rule, value } = modelValue
      if (message) model.message = message
      if (rule) model.rule = rule
      if (value) model.value = value
      model.status = 'pendding'
      this.validateFieldValue(name, true)
    } else {
      this.setValueClearStatus(model, name, modelValue)
    }
  }

  setValueClearStatus(model: Record<string, any>, name: string, value: any) {
    model['value'] = value
    model['status'] = 'pendding'
    this.notifyChange(name)
  }

  getFieldsValue() {
    const formData: any = {}
    Object.keys(this.model).forEach((modelName) => {
      formData[modelName] = this.model[modelName].value
    })
    return formData
  }

  resetFields() {
    Object.keys(this.model).forEach((modelName) => {
      this.setValueClearStatus(this.model[modelName], modelName, null)
    })
  }

  getFieldModel(name: string) {
    const model = this.model[name]
    return model ? model : {}
  }

  getFieldValue(name: string) {
    const model = this.model[name]
    if (!model && this.defaultFormValue[name])
      return this.defaultFormValue[name]
    return model ? model.value : null
  }

  validateFieldValue(name: string, forceUpdate = true) {
    const model = this.model[name]
    /* 记录上次状态 */
    const lastStatus = model.status
    if (!model) return null
    const { required, rule, value } = model
    let status = 'resolve'
    if (required && !value && value !== 0) {
      status = 'reject'
    }
    if (value || value === 0) {
      if (isReg(rule)) {
        status = rule.test(value) ? 'resolve' : 'reject'
      } else if (typeof rule === 'function') {
        rule(value, (message: string) => {
          this.model[name].message = message
          status = !message ? 'resolve' : 'reject'
        })
      }
    }
    model.status = status
    if (lastStatus !== status || forceUpdate) {
      const notify = this.notifyChange.bind(this, name)
      this.penddingValidateQueue.push(notify)
    }
    this.scheduleValidate()
    return status
  }

  scheduleValidate() {
    if (this.isSchedule) return
    this.isSchedule = true
    Promise.resolve().then(() => {
      unstable_batchedUpdates(() => {
        do {
          const notify = this.penddingValidateQueue.shift()
          notify && notify()
        } while (this.penddingValidateQueue.length > 0)
        this.isSchedule = false
      })
    })
  }

  validateFields(
    callback: (errs: Array<string>, values: Record<string, string>) => void,
  ) {
    const errorsMess: Array<string> = []
    Object.keys(this.model).forEach((modelName) => {
      const modelStates = this.validateFieldValue(modelName, true)
      if (modelStates === 'reject')
        errorsMess.push(this.model[modelName].message)
    })
    callback(errorsMess, this.getFieldsValue())
  }

  submit(
    cb?: (errs: Array<string> | null, values: Record<string, string>) => void,
  ) {
    this.validateFields((errorMess: Array<string>) => {
      const { onFinish, onFinishFailed } = this.callback
      const fieldValues = this.getFieldsValue()
      cb && cb(errorMess.length ? errorMess : null, fieldValues)
      if (!errorMess)
        onFinishFailed &&
          typeof onFinishFailed === 'function' &&
          onFinishFailed()
      onFinish &&
        typeof onFinish === 'function' &&
        onFinish(this.getFieldsValue())
    })
  }
}

export default FormStore
