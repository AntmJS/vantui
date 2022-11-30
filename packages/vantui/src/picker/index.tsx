/* eslint-disable react-hooks/exhaustive-deps */
import {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import {
  PickerProps,
  IPickerInstance,
  PickerChangeEvents,
} from '../../types/picker'
import { PickerColumn } from '../picker-column/index'
import * as utils from '../wxs/utils'
import { Loading } from '../loading/index'
import * as computed from './wxs'

const Picker = forwardRef(function Index(
  props: PickerProps,
  ref: React.ForwardedRef<IPickerInstance>,
): JSX.Element {
  const {
    valueKey = 'text',
    toolbarPosition = 'top',
    defaultIndex,
    columns,
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
    onConfirm,
    showToolbar = true,
    ...others
  } = props

  const children = useRef<Array<any>>([])
  const handleIndex = useRef<number>(-1)

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
      if (onChange) {
        const event_ = {}
        handleIndex.current = event
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
              value: simple ? getColumnValue(0) : getValues(),
              index: simple ? getColumnIndex(0) : event,
            },
          },
        })
        onChange(event_ as PickerChangeEvents)
      }
    } else if (type === 'cancel') {
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
      if (onConfirm) {
        Object.defineProperty(event, 'detail', {
          value: {
            value: simple ? getColumnValue(0) : getValues(),
            index: simple ? getColumnIndex(0) : getIndexes(),
          },
        })
        onConfirm(event)
      }
    }
  }

  const getColumnValue = useCallback(function (index: number) {
    const column = children.current[index]
    return column && column.getValue()
  }, [])

  const getColumnIndex = useCallback(function (columnIndex: number) {
    return (children.current[columnIndex] || {}).getCurrentIndex()
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
      JSON.stringify(column.props.options) === JSON.stringify(options)
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
            resolve(getValues())
          })
        })
      })
    })
  }, [])

  const getValues = useCallback(
    function () {
      return children.current.map((child) => {
        return child.getValue()
      })
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
    const stack = values.map((value: any, index: number) =>
      setColumnValue(index, value),
    )
    return Promise.all(stack)
  }

  const setColumnValue = function (index: any, value: any) {
    const column = children.current[index] || {}
    if (column == null) {
      return Promise.reject(new Error('setColumnValue: 对应列不存在'))
    }
    return column.setValue(value)
  }

  const onTouchMove_ = useCallback(function (event) {
    event.preventDefault()
    event.stopPropagation()
  }, [])

  return (
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
        {computed.columns(columns).map((item: any, index: number) => {
          return (
            <PickerColumn
              className="van-picker__column column-class"
              key={`van-picker__column_${index}column-class`}
              data-index={index}
              index={index}
              valueKey={valueKey}
              initialOptions={item.values}
              defaultIndex={item.defaultIndex || defaultIndex}
              itemHeight={itemHeight}
              visibleItemCount={visibleItemCount}
              activeClass="active-class"
              onChange={onChange_}
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
})
export { Picker }
export default Picker
