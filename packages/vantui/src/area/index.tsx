import {
  useCallback,
  useRef,
  useMemo,
  useEffect,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
// import { requestAnimationFrame } from '../common/utils'
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
  // const [columns, setColumns] = useState<any[]>([
  //   { values: [] },
  //   { values: [] },
  //   { values: [] },
  // ])
  const columns = useMemo(
    () => [{ values: [] }, { values: [] }, { values: [] }],
    [],
  )
  const typeToColumnsPlaceholderRef = useRef<any>({})
  // const [typeToColumnsPlaceholder, setTypeToColumnsPlaceholder] = useState<any>(
  //   {},
  // )
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
      if (typeToColumnsPlaceholderRef.current?.[type] && result.length) {
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
      onConfirm?.({
        detail: {
          value,
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
        // ;[{ code }] = cityList

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
        }, 30)
      })
      .catch(() => {})
  }, [_getDefaultCode, _getIndex, _getList, _getPicker, columnsNum])

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
    codeRef.current = value
  }, [value])

  useEffect(() => {
    _setValues()
  }, [_setValues, areaList, value])

  useImperativeHandle(ref, () => {
    return {
      reset,
      getDetail,
    }
  })
  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     _setValues()
  //     // console.log('我应当就跑一次')
  //   })
  // }, [])
  return (
    <VanPicker
      ref={pickerRef as any}
      className="van-area__picker"
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
      {...others}
    />
  )
}

const Area = memo(forwardRef(Index))
export { Area }
export default Area
