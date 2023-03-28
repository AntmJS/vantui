import { useState, useEffect, useMemo } from 'react'
import { View } from '@tarojs/components'
import { Button } from '../../../button'

type IProps = {
  data: number[]
  current: number
  setScrollIntoView: (monthId: string, mIndex: number) => void
}

export function LongSpan(props: IProps) {
  const { current, setScrollIntoView } = props
  const [monthData, setMonthData] = useState<{ index: number; name: number }[]>(
    [],
  )
  const [currentIndex, setCurrentIndex] = useState<number>()
  const [currentYear, setCurrentYear] = useState<number>()

  const data = useMemo(() => {
    const res: any = []
    const yearMap = {}
    for (let i = 0; i < props.data.length; i++) {
      // @ts-ignore
      const dd = new Date(props.data[i])
      const year = dd.getFullYear()
      const month = dd.getMonth() + 1
      if (yearMap[year] === undefined) {
        yearMap[year] = res.length
        res.push({
          year: year,
          month: [
            {
              name: month,
              index: i,
            },
          ],
        })
      } else {
        const yearIndex = yearMap[year]
        res[yearIndex].month.push({
          name: month,
          index: i,
        })
      }
    }

    return res
  }, [props.data])

  useEffect(() => {
    if (current) {
      const dd = new Date(current)
      const year = dd.getFullYear()
      const month = dd.getMonth() + 1
      const ms = data.filter((item) => item.year === year)[0].month
      setMonthData(ms)
      setCurrentYear(year)
      const tIndex = ms.filter((item) => item.name === month)[0].index
      setCurrentIndex(tIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const switchAction_ = () => {
    if (currentIndex !== undefined) {
      setScrollIntoView(`month_${props.data[currentIndex]}`, currentIndex)
    }
  }

  return (
    <View className="van-calendar-longspan">
      <View className="van-calendar__header-title">切换年月</View>

      <View className="van-calendar-longspan-title">年份选择</View>
      <View className="van-calendar-longspan-box">
        {data.map((item, index) => (
          <Button
            plain={item.year === currentYear ? false : true}
            hairline={item.year === currentYear ? false : true}
            type="primary"
            key={`longspan-year-item${index}`}
            className="van-calendar-longspan-item"
            onClick={() => {
              if (currentYear !== item.year) {
                setCurrentYear(item.year)
                setMonthData(item.month)
                setCurrentIndex(item.month[0]?.index)
              }
            }}
          >
            {item.year}年
          </Button>
        ))}
      </View>
      <View className="van-calendar-longspan-title">月选择</View>
      <View className="van-calendar-longspan-box">
        {monthData.map((item) => (
          <Button
            plain={item.index === currentIndex ? false : true}
            hairline={item.index === currentIndex ? false : true}
            type="primary"
            key={`longspan-year-item-m${item.index}`}
            className="van-calendar-longspan-item"
            onClick={() => {
              setCurrentIndex(item.index)
            }}
          >
            {item.name}月
          </Button>
        ))}
      </View>
      <Button
        block
        type="primary"
        className="van-calendar__switch"
        onClick={switchAction_}
      >
        切换
      </Button>
    </View>
  )
}
