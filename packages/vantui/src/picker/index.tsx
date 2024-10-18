/* eslint-disable react-hooks/exhaustive-deps */
import {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
} from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import classNames from 'classnames'
import {
  PickerProps,
  IPickerInstance,
  PickerChangeEvents,
} from '../../types/picker'
import { PickerColumn } from '../picker-column/index'
import * as utils from '../wxs/utils'
import { Loading } from '../loading/index'
import { Popup } from '../popup'
import { Icon } from '../icon/index'
import * as computed from './wxs'

const Picker = forwardRef(function Index(
  props: PickerProps & {
    onShow?: () => void
    onClear?: () => void
  },
  ref: React.ForwardedRef<IPickerInstance>,
): JSX.Element {
  const {
    disabled = false,
    valueKey = 'text',
    idKey = 'text',
    toolbarPosition = 'top',
    defaultIndex,
    value,
    columns = [],
    syncColumns,
    title,
    cancelButtonText,
    confirmButtonText,
    itemHeight = 48, // 只支持px为单位的数字
    visibleItemCount = 5,
    loading,
    onChange,
    className,
    style,
    onCancel,
    onInput,
    onConfirm,
    showToolbar = true,
    mode = 'normal',
    placeholder = '请选择',
    renderContent,
    placeholderColor,
    showArrowDown,
    showArrowRight,
    allowClear = true,
    onShow,
    onClear,
    renderContentRight,
    contentClassName = '',
    ...others
  } = props

  const children = useRef<Array<any>>([])
  const handleIndex = useRef<number>(-1)
  const [show, setShow] = useState<boolean | number>(0)
  const [valuesInner, setValuesInner] = useState<Array<number | string | Date>>(
    [],
  )
  const [columnsInner, setColumnsInner] = useState<any[]>([])
  const [currentData, setcurrentData] = useState<any[] | null>(null)

  const asyncColumns = async function (v, i?) {
    const cc = await syncColumns?.({
      columns: columnsInner ? [...columnsInner] : [],
      changeIndex: i,
      values: v || [],
    })
    if (cc) {
      setColumnsInner([...cc])
    }
  }

  useLayoutEffect(() => {
    // 取消关闭的时候请求新的列数据，防止请求不符合value的列数据
    if (mode === 'content' && syncColumns && show === 0) {
      asyncColumns(valuesInner)
    }
  }, [show, valuesInner])

  useLayoutEffect(
    function () {
      if (Array.isArray(children) && children.length) {
        setColumns().catch(() => {})
      }
    },
    [columns, children],
  )

  const emit = function (event: any) {
    const type = event?.currentTarget?.dataset['type']
    const simple = columns && columns.length && !columns[0].values
    if (typeof event === 'number' || !type) {
      const event_ = {}
      handleIndex.current = event
      const v = simple ? getColumnValue(0) : getValues()
      const i = simple ? getColumnIndex(0) : event
      // 异步请求的情况下需要更新
      if (syncColumns) {
        const colunmsInnerNew = [...columnsInner]
        for (let a = i + 1; a < v?.length; a++) {
          children.current[a].setIndex(0, true)
          v[a] = undefined
        }
        for (let a = i + 1; a < colunmsInnerNew?.length; a++) {
          colunmsInnerNew[a] = []
        }
        setColumnsInner(colunmsInnerNew)
        asyncColumns(v, i)
      }
      if (onChange) {
        Object.defineProperties(event_, {
          detail: {
            value: {
              picker: {
                setColumnValue,
                getColumnValue,
                setColumnValues,
                getColumnValues: (index: number) =>
                  children.current[index].options,
                getIndexes,
                setIndexes: (indexes: number[]) => {
                  const stack = indexes.map((optionIndex, columnIndex) =>
                    setColumnIndex(columnIndex, optionIndex),
                  )
                  return Promise.all(stack)
                },
                setColumnIndex,
                getColumnIndex,
                getValues,
                setColumns,
                children,
                setValues,
                columns,
              },
              value: v,
              index: simple ? getColumnIndex(0) : event,
            },
          },
        })
        onChange(event_ as PickerChangeEvents)
      }
    } else if (type === 'cancel') {
      setShow(0)
      if (onCancel) {
        Object.defineProperty(event, 'detail', {
          value: {
            value: simple ? getColumnValue(0) : getValues(),
            index: simple ? getColumnIndex(0) : getIndexes(),
          },
        })
        onCancel(event)
      }
    } else if (type === 'confirm') {
      const vv = simple ? getColumnValue(0) : getValues()
      const originIsArray = Array.isArray(vv)
      Object.defineProperty(event, 'detail', {
        value: {
          value: vv,
          index: simple ? getColumnIndex(0) : getIndexes(),
        },
      })
      if (mode === 'content') {
        let vs = Array.isArray(vv) ? vv : [vv]
        vs = vs.map((it) => (typeof it === 'string' ? it : it?.[idKey]))
        setValuesInner(vs)
        onInput?.({ detail: originIsArray ? vs : vs[0] })
        setShow(false)
      }
      if (onConfirm) {
        onConfirm(event)
      }
    }
  }

  const getColumnValue = useCallback(function (index: number) {
    const column = children.current[index]
    return column && column.getValue()
  }, [])

  const getColumnIndex = useCallback(function (columnIndex: number) {
    return (children.current[columnIndex] || {})?.getCurrentIndex()
  }, [])

  const setColumns = useCallback(
    function () {
      const simple = columns && columns.length && !columns[0].values
      const columns_ = simple ? [{ values: columns }] : columns
      const stack = (columns_ || []).map((column, index) =>
        setColumnValues(index, column.values),
      )
      return Promise.all(stack)
    },
    [columns],
  )

  const setColumnValues = useCallback(function (index, options) {
    if (index <= handleIndex.current) return Promise.resolve(getValues())
    const column = children.current[index]
    if (column == null) {
      return Promise.reject(new Error('setColumnValues: 对应列不存在'))
    }
    const isSame =
      JSON.stringify(column.props.options || {}) ===
      JSON.stringify(options || {})
    if (isSame) {
      return Promise.resolve(getValues())
    }
    const cIndex = column.getCurrentIndex()
    return new Promise((resolve) => {
      column.set({ options }).then(() => {
        nextTick(() => {
          if (cIndex > options.length) {
            column.setIndex(0)
            handleIndex.current = -1
          }

          nextTick(() => {
            columnsInner[index] = options
            setColumnsInner([...columnsInner])
            resolve(getValues())
          })
        })
      })
    })
  }, [])

  const getValues = useCallback(
    function () {
      return (
        children.current?.map((child) => {
          return child?.getValue()
        }) || []
      )
    },
    [children],
  )

  const getIndexes = useCallback(function () {
    return children.current.map((child) => child.getCurrentIndex())
  }, [])

  const onChange_ = emit

  const setColumnIndex = useCallback(function (index, optionIndex) {
    const column = children.current[index]
    if (column == null) {
      return Promise.reject(new Error('setColumnIndex: 对应列不存在'))
    }
    return column.setIndex(optionIndex)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      setColumnValue,
      getColumnValue,
      setColumnValues,
      getColumnValues: (index: number) => children.current[index].options,
      getIndexes,
      setIndexes: (indexes: number[]) => {
        const stack = indexes.map((optionIndex, columnIndex) =>
          setColumnIndex(columnIndex, optionIndex),
        )
        return Promise.all(stack)
      },
      setColumnIndex,
      getColumnIndex,
      getValues,
      setColumns,
      children,
      setValues,
      columns,
    } as any
  })

  const setValues = function (values: any) {
    const stack = values?.map((value: any, index: number) =>
      setColumnValue(index, value),
    )
    return Promise.all(stack)
  }

  useEffect(() => {
    if (value && mode === 'content') {
      setValuesInner(Array.isArray(value) ? value : [value])
    }
  }, [value])

  const setColumnValue = function (index: any, value: any) {
    const column = children.current[index]
    if (column == null) {
      return Promise.reject(
        new Error(`setColumnValue[${index}]: 对应列不存在${value}`),
      )
    }
    return column.setValue(value)
  }

  const onTouchMove_ = useCallback(function (event) {
    event.preventDefault()
    event.stopPropagation()
  }, [])

  const columnsUsed = useMemo(() => {
    return (
      computed.columns(
        columnsInner && columnsInner.length ? columnsInner : columns,
      ) || []
    )
  }, [columns, columnsInner])

  useEffect(() => {
    if (valuesInner && mode === 'content' && show) {
      setTimeout(() => {
        onShow?.()
        setValues(valuesInner)
      }, 200)
    }
  }, [valuesInner, show])

  const mainRender = (
    <View
      className={`van-picker  ${className}`}
      style={utils.style([style])}
      {...others}
      onTouchMove={onTouchMove_}
    >
      {toolbarPosition === 'top' && showToolbar && (
        <View className="van-picker__toolbar toolbar-class">
          <View
            className="van-picker__cancel"
            hoverClass="van-picker__cancel--hover"
            hoverStayTime={70}
            data-type="cancel"
            onClick={emit}
          >
            {cancelButtonText || '取消'}
          </View>
          {title && (
            <View className="van-picker__title van-ellipsis">{title}</View>
          )}
          <View
            className="van-picker__confirm"
            hoverClass="van-picker__confirm--hover"
            hoverStayTime={70}
            data-type="confirm"
            onClick={emit}
          >
            {confirmButtonText || '确定'}
          </View>
        </View>
      )}
      {loading && (
        <View className="van-picker__loading">
          <Loading color="#1989fa"></Loading>
        </View>
      )}
      <View
        className="van-picker__columns"
        style={computed.columnsStyle({
          itemHeight,
          visibleItemCount,
        })}
        onTouchMove={onTouchMove_}
        // @ts-ignore
        catchMove
      >
        {columnsUsed?.map((item: any, index: number) => {
          return (
            <PickerColumn
              className="van-picker__column column-class"
              key={`van-picker__column_${index}column-class`}
              data-index={index}
              index={index}
              valueKey={valueKey}
              initialOptions={item}
              defaultIndex={item?.defaultIndex || defaultIndex}
              itemHeight={itemHeight}
              visibleItemCount={visibleItemCount}
              activeClass="active-class"
              onChange={onChange_}
              idKey={idKey}
              ref={(el) => (children.current[index] = el)}
            ></PickerColumn>
          )
        })}
        <View
          className="van-picker__mask"
          style={computed.maskStyle({
            itemHeight,
            visibleItemCount,
          })}
        ></View>
        <View
          className="van-picker__frame van-hairline--top-bottom"
          style={computed.frameStyle({
            itemHeight,
          })}
        ></View>
      </View>
      {toolbarPosition === 'bottom' && showToolbar && (
        <View className="van-picker__toolbar toolbar-class">
          <View
            className="van-picker__cancel"
            hoverClass="van-picker__cancel--hover"
            hoverStayTime={70}
            data-type="cancel"
            onClick={emit}
          >
            {cancelButtonText}
          </View>
          {title && (
            <View className="van-picker__title van-ellipsis">{title}</View>
          )}
          <View
            className="van-picker__confirm"
            hoverClass="van-picker__confirm--hover"
            hoverStayTime={70}
            data-type="confirm"
            onClick={emit}
          >
            {confirmButtonText}
          </View>
        </View>
      )}
    </View>
  )

  useDeepCompareEffect(() => {
    const vs = valuesInner
    let dd: any[] | null = []
    if (vs?.length && columnsUsed?.length) {
      dd = vs.map((it, i) => {
        const filter = columnsUsed[i]?.filter((c) => {
          return c[idKey] === it || c === it
        })
        return filter?.[0]
      })
    } else dd = null

    setcurrentData(dd?.filter((it) => it !== undefined) || null)
  }, [valuesInner, columnsUsed])

  const renderContentInner = useMemo(() => {
    if (currentData) {
      return currentData
        .map((it) => {
          return typeof it === 'string' ? it : it?.[valueKey]
        })
        .join(',')
    } else {
      return placeholder
    }
  }, [currentData, placeholder])

  const clear = function () {
    setValuesInner([])
    onInput?.({
      detail: [],
    })
    onClear?.()
  }

  const setShow_ = () => {
    if (!disabled) setShow(true)
  }

  if (mode === 'normal') {
    return mainRender
  } else {
    return (
      <View className="van-picker-content-Wrapper">
        <View
          className={classNames({
            'van-picker-content': true,
            [contentClassName]: !!contentClassName,
            'van-picker-nocontent': !currentData,
            'van-picker-disabled': !!disabled,
          })}
          style={
            placeholderColor && !currentData ? { color: placeholderColor } : {}
          }
          onClick={setShow_}
        >
          {renderContent ? renderContent(currentData) : renderContentInner}
        </View>
        <View>
          {currentData && allowClear && (
            <Icon
              onClick={clear}
              className="van-icon-clear"
              name="clear"
              size="18px"
            />
          )}
        </View>
        {renderContentRight && (
          <View onClick={setShow_}>{renderContentRight}</View>
        )}
        {showArrowDown && (
          <Icon
            className="check-list-arrow"
            onClick={setShow_}
            name="arrow-down"
            size="14px"
          />
        )}
        {showArrowRight && (
          <Icon
            className="check-list-arrow"
            onClick={setShow_}
            name="arrow"
            size="14px"
          />
        )}
        <Popup show={!!show} position="bottom" onClose={() => setShow(0)}>
          {mainRender}
        </Popup>
      </View>
    )
  }
})
export { Picker }
export default Picker
