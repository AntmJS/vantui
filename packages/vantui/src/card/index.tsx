import { View, Text, Image } from '@tarojs/components'
import { useEffect, useState } from 'react'
import * as utils from '../wxs/utils'
import { jumpLink } from '../common/jumpLink'
import { Tag } from '../tag'
import { CardProps } from '../../types/card'

export function Card(props: CardProps) {
  const {
    tag,
    num,
    desc,
    thumb,
    title,
    price,
    centered,
    lazyLoad,
    thumbLink,
    originPrice,
    thumbMode = 'aspectFit',
    currency = '¥',
    renderFooter,
    renderBottom,
    renderNum,
    renderOriginPrice,
    renderPriceTop,
    renderThumb,
    renderPrice,
    renderDesc,
    renderTag,
    renderTitle,
    renderTags,
    style,
    className,
    ...others
  } = props
  const [state, setState] = useState({
    integerStr: '',
    decimalStr: '',
  })
  const { integerStr, decimalStr } = state
  useEffect(
    function () {
      const priceArr = price.toString().split('.')
      setState((pre: any) => {
        return {
          ...pre,
          integerStr: priceArr[0],
          decimalStr: priceArr[1] ? `.${priceArr[1]}` : '',
        }
      })
    },
    [price],
  )
  return (
    <View className={`van-card  ${className || ''}`} style={style} {...others}>
      <View
        className={utils.bem('card__header', {
          center: centered,
        })}
      >
        <View
          className="van-card__thumb"
          onClick={() => {
            thumbLink && jumpLink(thumbLink)
          }}
        >
          {thumb ? (
            <Image
              src={thumb}
              mode={thumbMode}
              lazyLoad={lazyLoad}
              className="van-card__img thumb-class"
            ></Image>
          ) : (
            renderThumb
          )}
          <View>
            {tag ? (
              <Tag mark type="danger" className="van-card__tag">
                {tag}
              </Tag>
            ) : (
              renderTag
            )}
          </View>
        </View>
        <View
          className={
            'van-card__content ' +
            utils.bem('card__content', {
              center: centered,
            })
          }
        >
          <View>
            <View>
              {title ? (
                <View className="van-card__title title-class">{title}</View>
              ) : (
                renderTitle
              )}
            </View>
            <View>
              {desc ? (
                <View className="van-card__desc desc-class">{desc}</View>
              ) : (
                renderDesc
              )}
            </View>
            {renderTags}
          </View>
          <View className="van-card__bottom">
            {renderPriceTop}
            <View>
              {price ? (
                <View className="van-card__price price-class">
                  <Text>{currency}</Text>
                  <Text className="van-card__price-integer">{integerStr}</Text>
                  <Text className="van-card__price-decimal">{decimalStr}</Text>
                </View>
              ) : (
                renderPrice
              )}
            </View>
            <View>
              {originPrice ? (
                <View className="van-card__origin-price origin-price-class">
                  {currency + ' ' + originPrice}
                </View>
              ) : (
                renderOriginPrice
              )}
            </View>
            <View>
              {num ? (
                <View className="van-card__num num-class">{'x ' + num}</View>
              ) : (
                renderNum
              )}
            </View>
            {renderBottom}
          </View>
        </View>
      </View>
      <View className="van-card__footer">{renderFooter}</View>
    </View>
  )
}
export default Card
