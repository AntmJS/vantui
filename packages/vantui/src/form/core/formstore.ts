/* eslint-disable @typescript-eslint/ban-ts-comment */
import { unstable_batchedUpdates } from 'react-dom'
import { IFormInstanceAPI } from '../../../types/form'

type IAPI = keyof IFormInstanceAPI
type Iname = string | Array<string | number>

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
  'registerRequiredMessageCallback',
  'validateFieldValue',
]

const isReg = (value: any) => value instanceof RegExp
class FormStore {
  static instance: FormStore
  public requiredMessageCallback?: (label: string) => string
  public FormUpdate: () => any
  public model: Record<string, any>
  public control: Record<string, any>
  public isSchedule: boolean
  public callback: Record<string, any>
  public penddingValidateQueue: any[]
  public defaultFormValue: Record<string, any>
  public multiLevelKeys: string[]
  constructor(forceUpdate: any, defaultFormValue: Record<string, any>) {
    this.FormUpdate = forceUpdate
    this.model = {}
    this.control = {}
    this.isSchedule = false
    this.callback = {}
    this.penddingValidateQueue = []
    this.defaultFormValue = defaultFormValue || {}
    this.requiredMessageCallback = undefined
    this.multiLevelKeys = []
  }

  getForm() {
    return formInstanceApi.reduce((map: any, item: any) => {
      map[item] = this[item as IAPI].bind(this)
      return map
    }, {})
  }

  registerRequiredMessageCallback(callback: (label: string) => string) {
    this.requiredMessageCallback = callback
  }

  static createValidate(validateModal: any) {
    const { value, required, rules, label } = validateModal

    return {
      value,
      rules: Array.isArray(rules) ? rules : [rules],
      required: required || false,
      status: 'pendding',
      label,
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
    name_: Iname,
    control: Record<string, any>,
    model: Record<string, any>,
  ): void {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    if (this.defaultFormValue[name]) {
      if (!this.model[name] || this.model[name].value === undefined) {
        model['value'] = this.defaultFormValue[name]
      }
    }
    if (!model['value'] && this.model[name])
      model['value'] = this.model[name].value
    if (model['mutiLevel']) {
      if (!this.multiLevelKeys.includes(name)) {
        this.multiLevelKeys.push(name)
      }
    }

    if (!model['mutiLevel']) {
      const keyIndex = this.multiLevelKeys.indexOf(name)
      if (keyIndex > 0) {
        this.multiLevelKeys.splice(keyIndex, 1)
      }
    }

    const validate = FormStore.createValidate(model)
    this.model[name] = validate
    this.control[name] = control
  }

  unRegisterValidate(name_: Iname) {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    delete this.model[name]
    delete this.control[name]
  }

  notifyChange(name_: Iname) {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    const controller = this.control[name]
    if (controller) controller?.changeValue()
  }

  setFields(object: Record<string, any>) {
    if (typeof object !== 'object') return
    this.transformSingellevelData(object, this.multiLevelKeys)
    for (const key in this.model) {
      const item = this.model[key]
      this.setValueClearStatus(item, key, item.value)
    }
  }

  setFieldsValue(name_: Iname, modelValue: any): any {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    const model = this.model[name]
    if (!model) return false
    if (toString.call(modelValue) === '[Object, object]' && modelValue.value) {
      const { message, rule, value } = modelValue
      if (message) model.message = message
      if (rule) model.rule = rule
      if (value && model.value === undefined) model.value = value
      model.status = 'pendding'
      this.validateFieldValue(name, true)
    } else {
      this.setValueClearStatus(model, name, modelValue)
    }
  }

  setValueClearStatus(model: Record<string, any>, name_: Iname, value: any) {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    model['value'] = value
    model['status'] = 'pendding'
    this.notifyChange(name)
  }
  // 扁平数据转多层数据结构
  static transformMultilevelData(data: Record<string, any>) {
    const keys = Object.keys(data)
    const hasMultiLevel = keys.some((item) => item.includes('.'))
    if (hasMultiLevel) {
      const res: Record<string, any> = {}
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (key) {
          if (!key?.includes('.')) {
            res[key] = data[key]
          } else {
            const ks = key.split('.')
            let p = res
            for (let j = 0; j < ks.length; j++) {
              const k = ks[j] as string | number
              if (p[k] && j !== ks.length - 1) {
                p = p[k]
              } else if (!p[k] && j !== ks.length - 1) {
                const nextK = ks[j + 1] as string | number
                if (
                  !isNaN(Number(nextK)) &&
                  typeof Number(nextK) === 'number'
                ) {
                  p[k] = []
                } else if (typeof nextK === 'string') {
                  p[k] = {}
                }
                p = p[k]
              } else {
                p[k] = data[key]
              }
            }
          }
        }
      }

      return res
    } else {
      return data
    }
  }

  // 多层级数据结构扁平化
  transformSingellevelData(
    data: Record<string, any>,
    multiLevelKeys: string[],
  ) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    function unitWork(curKey: string, dd: any): void {
      if (toString.call(dd) === '[object Object]') {
        if (multiLevelKeys.includes(curKey)) {
          that.model[curKey].value = dd
        } else {
          for (const key in dd) {
            const value = dd[key]
            unitWork(curKey ? `${curKey}.${key}` : key, value)
          }
        }
      } else if (toString.call(dd) === '[object Array]') {
        if (multiLevelKeys.includes(curKey)) {
          that.model[curKey].value = dd
        } else {
          for (let i = 0; i < dd.length; i++) {
            const value = dd[i]
            unitWork(curKey ? `${curKey}.${i}` : `${i}`, value)
          }
        }
      } else {
        if (that.model[curKey]) {
          that.model[curKey].value = dd
        }
      }
    }

    unitWork('', data)
  }

  getFieldsValue() {
    const formData: any = {}
    Object.keys(this.model).forEach((modelName) => {
      formData[modelName] = this.model[modelName].value
    })
    return FormStore.transformMultilevelData(formData)
  }

  resetFields() {
    Object.keys(this.model).forEach((modelName) => {
      this.setValueClearStatus(this.model[modelName], modelName, null)
    })
  }

  getFieldModel(name_: Iname) {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    const model = this.model[name]
    return model ? model : {}
  }

  getFieldValue(name_: Iname) {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    const model = this.model[name]
    if (!model && this.defaultFormValue[name])
      return this.defaultFormValue[name]
    return model ? model.value : null
  }

  validateFieldValue(name_: Iname, forceUpdate = true) {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    const model = this.model[name]
    /* 记录上次状态 */
    const lastStatus = model.status
    if (!model) return null
    const { required, rules, value } = model
    let status = 'resolve'
    if (required && !value && value !== 0) {
      status = 'reject'
      if (this.requiredMessageCallback) {
        this.model[name].message = this.requiredMessageCallback(
          this.model[name].label,
        )
      } else {
        this.model[name].message = this.model[name].label + '不能为空'
      }
    }

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].rule
      const message = rules[i].message

      if (value || value === 0) {
        if (isReg(rule)) {
          status = rule.test(value) ? 'resolve' : 'reject'
          if (status === 'reject') this.model[name].message = message
        } else if (typeof rule === 'function') {
          rule(value, (message: string) => {
            this.model[name].message = message
            status = !message ? 'resolve' : 'reject'
          })
        }
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
    // 暂时异步解决更新迟缓问题
    setTimeout(() => {
      const errorsMess: Array<string> = []
      Object.keys(this.model).forEach((modelName) => {
        const modelStates = this.validateFieldValue(modelName, true)
        if (modelStates === 'reject')
          errorsMess.push(this.model[modelName].message)
      })
      callback(errorsMess, this.getFieldsValue())
    })
  }

  submit(
    cb?: (errs: Array<string> | null, values: Record<string, string>) => void,
  ) {
    this.validateFields((errorMess: Array<string>) => {
      const { onFinish, onFinishFailed } = this.callback
      const fieldValues = this.getFieldsValue()
      const errs = errorMess.length ? errorMess : null
      cb && cb(errs, fieldValues)
      if (errs) {
        onFinishFailed &&
          typeof onFinishFailed === 'function' &&
          onFinishFailed(errs)
        return
      }
      onFinish &&
        typeof onFinish === 'function' &&
        onFinish(errs, this.getFieldsValue())
    })
  }
}

export default FormStore
