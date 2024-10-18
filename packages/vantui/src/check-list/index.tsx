import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Popup from '../popup/index'
import Search from '../search/index'
import Checkbox from '../checkbox/index'
import { Button } from '../button/index'
import { CheckListProps } from '../../types/check-list'
import Loading from '../loading/index'
import Empty from '../empty/index'
import Icon from '../icon/index'

export function CheckList(props: CheckListProps) {
  const {
    disabled = false,
    data = [],
    labelName = 'name',
    bodyHeight,
    renderShow,
    fieldName = 'id',
    value,
    onChange,
    searchLoading = false,
    searchData,
    checkAll,
    limit,
    allowClear = true,
    placeholder = '请选择',
    searchPlaceholder = '请输入搜索关键词',
    placeholderColor,
    searchShow = true,
    showArrowDown = false,
    showArrowRight = false,
    ...others
  } = props
  const [show, setShow] = useState<boolean>(false)
  const [checked, setChecked] = useState<Array<number | string>>([])
  const [checkedData, setCheckedData] = useState<Array<Record<string, any>>>([])
  const [keyWord, setKeyWord] = useState('')
  const [innerData, setData] = useState<Record<string, any>[]>([])
  const [loading, setLoading] = useState(false)
  const [innerAllData, setInnerAllData] = useState<Array<Record<string, any>>>(
    [],
  )

  const clear = useCallback(() => {
    onChange?.(
      {
        detail: [],
      },
      [],
    )
    setChecked([])
    setCheckedData([])
  }, [])

  const handleCheck = useCallback(
    (d: number | string) => {
      if (loading) return
      let checkedNew = [...checked]
      if (checkedNew.includes(d)) {
        checkedNew = checkedNew.filter((it) => it !== d)
      } else {
        checkedNew.push(d)
      }
      setChecked([...checkedNew])
    },
    [checked, loading],
  )

  const set_Show = () => {
    if (!disabled) {
      setShow(true)
    }
  }

  const renderShowInner = useCallback(() => {
    if (!checkedData?.length) {
      return <View onClick={set_Show}>{placeholder}</View>
    } else if (checkedData.length === 1) {
      return (
        <>
          <View onClick={set_Show}>{checkedData[0]?.[labelName] || '--'}</View>
          {allowClear && !disabled && (
            <View className="clear-box" onClick={clear}>
              <Icon name="clear" size="18px" />
            </View>
          )}
        </>
      )
    } else {
      return (
        <>
          <View onClick={set_Show}>{`已选${checkedData.length}项`}</View>
          {allowClear && (
            <View className="clear-box" onClick={clear}>
              <Icon name="clear" size="18px" />
            </View>
          )}
        </>
      )
    }
  }, [checkedData, allowClear])

  useEffect(() => {
    if (value && Array.isArray(value)) {
      const ddd = data?.length ? data : innerAllData
      const checkedData = ddd.filter((it) => value.includes(it[fieldName]))
      setCheckedData(checkedData)
    }
  }, [value])

  useEffect(() => {
    if (!show) {
      setChecked([])
      setKeyWord('')
    } else {
      setChecked(
        checkedData.map((it) => {
          return it[fieldName]
        }),
      )
    }
  }, [show])

  const handleConfirm = useCallback(() => {
    const ddd = data?.length ? data : innerAllData
    const cData = ddd.filter((d) => checked.includes(d[fieldName]))
    setCheckedData(cData)
    onChange?.(
      {
        detail: checked,
      },
      cData,
    )
    setShow(false)
  }, [checked, data, innerAllData])

  const handleCheckAll = useCallback(() => {
    if (loading) return
    const ddd = data?.length ? data : innerAllData
    if (checked.length === ddd.length) {
      setChecked([])
    } else {
      setChecked(ddd.map((it) => it[fieldName]))
    }
  }, [checked, innerData, innerAllData, loading])

  useEffect(() => {
    setLoading(searchLoading)
  }, [searchLoading])

  const searchDataInner = useCallback(
    async (vv) => {
      if (searchData) {
        setLoading(true)
        try {
          const res = await searchData(vv)
          if (!vv) {
            setInnerAllData(res)
          }
          setData(res)
        } catch (err) {
          throw new Error(err?.toString())
        } finally {
          setLoading(false)
        }
      }
    },
    [searchData],
  )

  useLayoutEffect(() => {
    if (searchData && !innerAllData?.length) {
      searchDataInner('')
    } else if (searchData) {
      setData(innerAllData)
    }
    if (!searchData) {
      setData(data)
    }
  }, [])

  useDebounce(
    keyWord,
    async (vv) => {
      if (show) {
        if (searchData) {
          searchDataInner(vv)
          return
        }
        if (vv) {
          const fData =
            data?.filter((it) => {
              return it[labelName].includes(vv)
            }) || []
          setData(fData)
        } else {
          setData(data)
        }
      } else {
        const ddd = data?.length ? data : innerAllData

        setData(ddd)
      }
    },
    800,
  )

  const disabledItem = useCallback(
    (key) => {
      if (checked.length === limit && !checked.includes(key)) {
        return true
      } else return false
    },
    [checked, limit],
  )

  return (
    <View className="van-check-list-wrapper" {...others}>
      <View
        className={classNames({
          'check-list-content': true,
          'check-list-nocontent': checkedData.length === 0,
          'check-list-disabled': !!disabled,
        })}
        style={
          placeholderColor && checkedData.length === 0
            ? { color: placeholderColor }
            : {}
        }
      >
        {renderShow ? renderShow(checkedData, set_Show) : renderShowInner()}
      </View>
      {showArrowDown && (
        <Icon
          className="check-list-arrow-down"
          onClick={set_Show}
          name="arrow-down"
          size="14px"
        />
      )}
      {showArrowRight && (
        <Icon
          className="check-list-arrow-down"
          onClick={set_Show}
          name="arrow"
          size="14px"
        />
      )}
      <Popup show={show} position="bottom" onClose={() => setShow(false)}>
        <View className="check-list-title">{placeholder}</View>
        {searchShow && (
          <Search
            value={keyWord}
            onChange={(e) => setKeyWord(e.detail)}
            placeholder={searchPlaceholder}
            background="#f5f5f5"
          />
        )}
        <View
          className="check-list-body"
          style={{ height: bodyHeight || '40vh' }}
        >
          {loading && (
            <View className="check-list-loading">
              <Loading />
            </View>
          )}
          {!loading && innerData.length === 0 && (
            <View className="check-list-empty">
              <Empty description="暂无数据" />
            </View>
          )}
          {checkAll && limit === undefined && (
            <View className="check-list-item" onClick={handleCheckAll}>
              <Checkbox
                shape="square"
                value={
                  checked.length !== 0 &&
                  (checked.length === data.length ||
                    checked.length === innerAllData.length)
                }
                disabled={disabledItem('ALL')}
                parent={undefined}
              ></Checkbox>
              <View className="check-label-name">全选</View>
            </View>
          )}
          {innerData?.map((it, index) => (
            <View
              className="check-list-item"
              key={`check-list-${index}-${it[labelName]}`}
            >
              <Checkbox
                onChange={() => handleCheck(it[fieldName])}
                disabled={disabledItem(it[fieldName])}
                shape="square"
                value={checked.includes(it[fieldName])}
                parent={undefined}
              >
                <View className="check-label-name">{it[labelName] || '-'}</View>
              </Checkbox>
            </View>
          ))}
        </View>
        <View className="check-list-footer">
          <Button
            square
            block
            className="check-list-cancel-btn"
            onClick={() => setShow(false)}
          >
            取消
          </Button>
          <Button square block type="primary" onClick={handleConfirm}>
            确定
          </Button>
        </View>
      </Popup>
    </View>
  )
}

export default CheckList

function useDebounce(value, fn, delay) {
  const timer = useRef<any>(null)

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      fn(value)
    }, delay)

    return () => {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [value])
}
