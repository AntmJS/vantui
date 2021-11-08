import { Icon } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import { navigateBack, pageScrollTo, useRouter } from '@tarojs/taro'
import React, { useEffect } from 'react'
import './index.less'

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props

  const router = useRouter()
  useEffect(() => {
    if (process.env.LIBRARY_ENV === 'react') {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    } else {
      pageScrollTo({
        scrollTop: 0,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.path])

  return (
    <View className="demo-page">
      {'h5' === process.env.TARO_ENV && (
        <View className="demo-nav">
          <Icon
            name="arrow-left"
            className="demo-nav__back"
            onClick={() => navigateBack()}
          />
          <View className="demo-nav__title">{title} </View>
        </View>
      )}
      {children}
    </View>
  )
}
