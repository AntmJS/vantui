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
  'setErrorMessage',
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

  static isFieldNull(value) {
    return (
      value === undefined ||
      value === '' ||
      value === null ||
      (Array.isArray(value) && value.length === 0)
    )
  }

  setCallback(callback: any) {
    if (callback) this.callback = callback
  }

  setErrorMessage(name_: Iname, message: string) {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    if (this.model[name]) {
      this.model[name].message = message
      this.model[name].status = 'reject'
      this.FormUpdate()
    } else {
      console.error('form warning: setErrorMessage params.name is not register')
    }
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
    let defaultFormValue_ = this.defaultFormValue
    if (name.includes('.') && !model['mutiLevel']) {
      defaultFormValue_ = this.transformToSingleLevelData(
        this.defaultFormValue,
        name.split('.')[0],
      )
    }

    if (defaultFormValue_[name]) {
      if (!this.model[name] || this.model[name].value === undefined) {
        model['value'] = defaultFormValue_[name]
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

    const shouldUpdate =
      !this.model[name] || this.model[name].value === undefined

    const validate = FormStore.createValidate(model)
    this.model[name] = validate
    this.control[name] = control

    if (shouldUpdate) {
      control?.['changeValue']()
    }
  }

  unRegisterValidate(name_: Iname) {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    delete this.model[name]
    delete this.control[name]
  }

  notifyChange(name_: Iname, hiddenFormChange?: boolean) {
    const name = Array.isArray(name_) ? name_.join('.') : name_
    const controller = this.control[name]
    if (controller) controller?.changeValue()
    if (!hiddenFormChange) {
      const { onChange } = this.callback
      if (onChange) {
        const value = this.model[name].value
        onChange(
          FormStore.transformMultilevelData({ [name]: value }),
          this.getFieldsValue(),
        )
      }
    }
  }

  setFields(object: Record<string, any>) {
    if (typeof object !== 'object') return
    this.transformModelToSingelLevelData(object, this.multiLevelKeys)

    for (const key in this.model) {
      const item = this.model[key]
      this.setValueClearStatus(item, key, item.value, true) // 批量更新hiddenFormChange
    }

    const { onChange } = this.callback
    if (onChange) {
      onChange(object, this.getFieldsValue())
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

  setValueClearStatus(
    model: Record<string, any>,
    name_: Iname,
    value: any,
    hiddenFormChange?: boolean,
  ) {
    const name = Array.isArray(name_) ? name_.join('.') : name_

    model['value'] = value
    model['status'] = 'pendding'
    this.notifyChange(name, hiddenFormChange)
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

  // model数据结构扁平化
  transformModelToSingelLevelData(
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
  // 目标数据的多层数据扁平化
  transformToSingleLevelData(data, targetKey) {
    const res = {}
    const work = function (prevKey, dd) {
      if (toString.call(dd) === '[object Object]') {
        for (const k in dd) {
          work(prevKey ? `${prevKey}.${k}` : k, dd[k])
        }
      } else if (toString.call(dd) === '[object Array]') {
        for (let i = 0; i < dd.length; i++) {
          work(prevKey ? `${prevKey}.${i}` : i, dd[i])
        }
      } else {
        res[prevKey] = dd
      }
    }

    for (const kk in data) {
      if (targetKey === kk) {
        work(kk, data[kk])
      }
    }

    return res
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
    if (required && FormStore.isFieldNull(value)) {
      status = 'reject'
      if (this.requiredMessageCallback) {
        this.model[name].message = this.requiredMessageCallback(
          this.model[name].label,
        )
      } else {
        if (this.model[name].label) {
          this.model[name].message = this.model[name].label + '不能为空'
        } else {
          this.model[name].message = '此处不能为空'
        }
      }
    }

    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].rule
      const message = rules[i].message

      if (value || value === 0) {
        if (isReg(rule)) {
          status = rule.test(value) ? 'resolve' : 'reject'
          if (status === 'reject') {
            this.model[name].message = message
            break
          }
        } else if (typeof rule === 'function') {
          rule(value, (message: string) => {
            this.model[name].message = message
            status = !message ? 'resolve' : 'reject'
          })

          if (status === 'reject') {
            break
          }
        }
      }
    }
    model.status = status
    if (lastStatus !== status || forceUpdate) {
      // 校验的时候不触发form change
      const notify = this.notifyChange.bind(this, name, true)
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
