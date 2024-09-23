import {
  useCallback,
  useRef,
  useMemo,
  useEffect,
  useImperativeHandle,
  forwardRef,
  memo,
  useState,
} from 'react'
import lodash from 'lodash'
import * as computed from './wxs'
import VanPicker from './../picker'
import { AreaProps } from './../../types/area'
import { PickerEvents } from './../../types/picker'

const EMPTY_CODE = '000000'
function Index(props: AreaProps, ref?: React.Ref<unknown>) {
  const {
    showToolbar = true,
    value,
    areaList,
    columnsNum = 3,
    columnsPlaceholder = [],
    onCancel,
    onChange,
    onConfirm,
    className,
    onInput,
    title,
    loading,
    itemHeight,
    visibleItemCount = 6,
    cancelButtonText = '取消',
    confirmButtonText = '确认',
    ...others
  } = props
  const pickerRef = useRef<any>(null)
  const codeRef = useRef<any>('')
  const columns = useMemo(
    () => [{ values: [] }, { values: [] }, { values: [] }],
    [],
  )
  const [valueInner, setValueInner] = useState<any>()
  const typeToColumnsPlaceholderRef = useRef<any>({})

  useEffect(() => {
    if (!lodash.isEqual(value, valueInner)) {
      setValueInner(value)
    }
  }, [value])

  const _parseValues = useCallback(
    (values: any[]) => {
      return values.map((value: any, index: number) => {
        if (
          value &&
          (!value.code || value.name === columnsPlaceholder[index])
        ) {
          return Object.assign(Object.assign({}, value), {
            code: '',
            name: '',
          })
        }
        return value
      })
    },
    [columnsPlaceholder],
  )

  const _getConfig = useCallback(
    (type: 'province' | 'city' | 'county') => {
      return (areaList && (areaList as any)[`${type}_list`]) || ({} as any)
    },
    [areaList],
  )

  const _getList = useCallback(
    (type: 'province' | 'city' | 'county', code?: string) => {
      if (type !== 'province' && !code) {
        return []
      }
      // console.log(typeToColumnsPlaceholder)
      const list = _getConfig(type)
      let result = Object.keys(list).map((code) => ({
        code,
        name: list[code],
      }))
      if (code != null) {
        // oversea code
        if (code[0] === '9' && type === 'city') {
          code = '9'
        }
        result = result.filter(
          (item) => item.code.indexOf(code as string) === 0,
        )
      }
      if (typeToColumnsPlaceholderRef.current?.[type]) {
        // set columns placeholder
        const codeFill =
          type === 'province'
            ? ''
            : type === 'city'
            ? EMPTY_CODE.slice(2, 4)
            : EMPTY_CODE.slice(4, 6)
        result.unshift({
          code: `${code === undefined ? '' : code}${codeFill}`,
          name: typeToColumnsPlaceholderRef.current?.[type],
        })
      }
      return result
    },
    [_getConfig],
  )

  const _getIndex = useCallback(
    (type, code) => {
      let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6
      const list = _getList(type, code.slice(0, compareNum - 2))
      // oversea code
      if (code[0] === '9' && type === 'province') {
        compareNum = 1
      }
      code = code.slice(0, compareNum)
      for (let i = 0; i < list.length; i++) {
        if (list?.[i]?.code?.slice(0, compareNum) === code) {
          return i
        }
      }
      return 0
    },
    [_getList],
  )

  const _getPicker = useCallback(() => {
    // console.log(picker)
    return pickerRef.current as any
  }, [])

  const _onCancel = useCallback(
    (event) => {
      onCancel?.(event)
    },
    [onCancel],
  )

  const _onConfirm = useCallback(
    (event) => {
      const { index } = event.detail
      let { value } = event.detail
      value = _parseValues(value)
      const val = value?.map((it) => it.code).filter((it) => !!it)
      setValueInner(val)
      if (onInput) {
        onInput({
          detail: {
            value: val,
          },
        })
      }
      onConfirm?.({
        detail: {
          value: value.filter((it) => !!it.code),
          index,
        },
      } as PickerEvents)
    },
    [_parseValues, onConfirm],
  )
  const _getDefaultCode = useCallback(() => {
    if (columnsPlaceholder.length) {
      return EMPTY_CODE
    }
    const countyCodes = Object.keys(_getConfig('county'))
    if (countyCodes[0]) {
      return countyCodes[0]
    }
    const cityCodes = Object.keys(_getConfig('city'))
    if (cityCodes[0]) {
      return cityCodes[0]
    }
    return ''
  }, [_getConfig, columnsPlaceholder])

  const _setValues = useCallback(() => {
    const picker = _getPicker()

    if (!picker) {
      return
    }
    let code: any = (codeRef.current || _getDefaultCode()) + ''

    const provinceList = _getList('province')
    const cityList = _getList('city', code.slice(0, 2))
    const stack: any[] = []
    const indexes: any[] = []

    if (columnsNum >= 1) {
      stack.push(picker.setColumnValues(0, provinceList, false))
      indexes.push(_getIndex('province', code))
    }
    if (columnsNum >= 2) {
      stack.push(picker.setColumnValues(1, cityList, false))
      indexes.push(_getIndex('city', code))
      if (cityList.length && code.slice(2, 4) === '00') {
        code = cityList?.[0]?.code
      }
    }
    if (columnsNum === 3) {
      stack.push(
        picker.setColumnValues(2, _getList('county', code.slice(0, 4)), false),
      )
      indexes.push(_getIndex('county', code))
    }
    return Promise.all(stack)
      .then(() => {
        // 由于picker.setColumnValues初始化每一项初始值的操作为异步
        setTimeout(() => {
          picker.setIndexes(indexes)
        }, 120)
      })
      .catch(() => {})
  }, [_getDefaultCode, _getIndex, _getList, _getPicker, columnsNum, codeRef])

  const _onChange = useCallback(
    (event) => {
      let _a
      const { index, value, picker } = event.detail
      codeRef.current = value[index].code
      ;(_a = _setValues()) === null || _a === void 0
        ? void 0
        : _a.then(() => {
            const event_ = {
              detail: {
                picker,
                values: _parseValues(picker.getValues()),
                index,
              },
            }
            onChange?.(event_)
          })
    },
    [_parseValues, _setValues, onChange],
  )

  const _getValues = useCallback(() => {
    const picker = _getPicker()
    if (!picker) {
      return []
    }
    return _parseValues(
      (picker.getValues() as any[]).filter((value) => !!value),
    )
  }, [_getPicker, _parseValues])

  const getDetail = useCallback(() => {
    const values = _getValues()
    const area = {
      code: '',
      country: '',
      province: '',
      city: '',
      county: '',
    }
    if (!values.length) {
      return area
    }
    const names = values.map((item) => item.name)
    area.code = values[values.length - 1].code
    if (area.code[0] === '9') {
      area.country = names[1] || ''
      area.province = names[2] || ''
    } else {
      area.province = names[0] || ''
      area.city = names[1] || ''
      area.county = names[2] || ''
    }
    return area
  }, [_getValues])

  const reset = useCallback(
    (code) => {
      codeRef.current = code || ''
      return _setValues()
    },
    [_setValues],
  )
  useEffect(() => {
    typeToColumnsPlaceholderRef.current = {
      province: columnsPlaceholder[0] || '',
      city: columnsPlaceholder[1] || '',
      county: columnsPlaceholder[2] || '',
    }
  }, [columnsPlaceholder])

  useEffect(() => {
    _setValues()
  }, [_setValues, areaList, value])

  useImperativeHandle(ref, () => {
    return {
      reset,
      getDetail,
    }
  })

  function getPreviousCodes(currentCode, level) {
    let provinceCode, cityCode

    switch (level) {
      case 1: // 如果选择了省份，则返回空对象
        return {}
      case 2: // 如果选择了城市，则返回省份编码
        provinceCode = currentCode.substring(0, 2) + '0000'
        return { provinceCode }
      case 3: // 如果选择了区县，则返回省份和城市编码
        cityCode = currentCode.substring(0, 4) + '00'
        provinceCode = currentCode.substring(0, 2) + '0000'
        return { provinceCode, cityCode }
      default:
        throw new Error('Invalid level')
    }
  }

  const valueArr = useMemo(() => {
    if (valueInner) {
      if (Array.isArray(valueInner)) {
        return valueInner
      } else {
        if (columnsNum === 3) {
          const { provinceCode, cityCode } = getPreviousCodes(valueInner, 3)
          return [provinceCode, cityCode, valueInner]
        } else if (columnsNum === 2) {
          const { provinceCode } = getPreviousCodes(valueInner, 2)
          return [provinceCode, valueInner]
        } else {
          return [valueInner]
        }
      }
    } else {
      return []
    }
  }, [valueInner])

  useEffect(() => {
    codeRef.current = valueArr[valueArr.length - 1] || ''
  }, [valueArr])

  const _renderContent = useCallback(() => {
    if (valueArr.length && areaList) {
      let str = ''
      if (valueArr[0] && areaList.province_list[valueArr[0]]) {
        str += `${areaList.province_list[valueArr[0]]}`
      }
      if (valueArr[1] && areaList.city_list[valueArr[1]])
        str += `,${areaList.city_list[valueArr[1]]}`
      if (valueArr[2] && areaList.county_list[valueArr[2]])
        str += `,${areaList.county_list[valueArr[2]]}`
      return str || '请选择'
    } else {
      return '请选择'
    }
  }, [valueArr, areaList])

  const onClear = useCallback(() => {
    setTimeout(() => {
      if (others.mode === 'content') {
        onInput?.({
          detail: {
            value: [],
          },
        })
      }
      onConfirm?.({
        detail: {
          value: [],
        },
      } as PickerEvents)
      setValueInner([])
    }, 33)
  }, [])

  const onShow = () => {
    codeRef.current = valueArr[valueArr.length - 1] || ''
    _setValues()
  }

  return (
    <VanPicker
      onClear={onClear}
      allowClear={!!valueArr.length}
      onShow={onShow}
      ref={pickerRef as any}
      className={`van-area__picker ${className} ${
        columnsPlaceholder?.length ? 'van-area__picker__has-placeholder' : ''
      }`}
      showToolbar={showToolbar}
      valueKey="name"
      title={title}
      loading={loading}
      columns={computed.displayColumns(columns, columnsNum)}
      itemHeight={itemHeight}
      visibleItemCount={visibleItemCount}
      cancelButtonText={cancelButtonText}
      confirmButtonText={confirmButtonText}
      onChange={_onChange}
      onConfirm={_onConfirm}
      onCancel={_onCancel}
      value={valueArr}
      renderContent={_renderContent as any}
      idKey="code"
      {...others}
    />
  )
}

const Area = memo(forwardRef(Index))
export { Area }
export default Area
