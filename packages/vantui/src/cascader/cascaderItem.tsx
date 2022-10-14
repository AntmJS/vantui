import { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { Icon } from '../icon'
import { Loading } from '../loading'

interface OptiosInfo {
  text: string
  value: string
  paneKey: string
  disabled?: boolean
  loading?: boolean
  children?: OptiosInfo[]
}

export interface CascaderItemProps {
  data: {
    text: string
    value: string
    paneKey: string
    disabled?: boolean
    loading?: boolean
    children?: OptiosInfo[]
  }
  checked: boolean
  chooseItem: (data: any) => void
  id: string
}

const defaultProps = {
  data: {
    text: '',
    value: '',
    paneKey: '',
    disabled: false,
    loading: false,
    children: [],
  },
  checked: false,
  chooseItem: () => {},
  id: '',
} as CascaderItemProps

const InternalCascaderItem = (props: CascaderItemProps) => {
  const { data, checked, chooseItem, id } = {
    ...defaultProps,
    ...props,
  }

  const [loading, setLoading] = useState(false)

  const classes = classNames(
    {
      active: checked,
      disabled: data.disabled,
    },
    'van-cascader-item',
  )

  useEffect(() => {
    initData()
  }, [data])

  const initData = () => {
    // console.log('------data', data)
  }

  return (
    <View
      id={id}
      className={classes}
      onClick={async () => {
        setLoading(true)
        await chooseItem(data)
        setLoading(false)
      }}
    >
      <View className="van-cascader-item__title">{data.text}</View>
      {loading ? (
        <Loading color="#969799" size={30} />
      ) : (
        <Icon style={checked ? {} : { display: 'none' }} name="success" />
      )}
    </View>
  )
}

export const CascaderItem = InternalCascaderItem
