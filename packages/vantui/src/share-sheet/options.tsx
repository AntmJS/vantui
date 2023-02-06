import { View, Button, Image } from '@tarojs/components'
import * as utils from '../wxs/utils'
import * as computed from './wxs'
import { ShareSheetOption } from './../../types/share-sheet'
export default function Index(props: ShareSheetOption) {
  const { showBorder, onSelect, options } = props

  return (
    <View className={utils.bem('share-sheet__options', { border: showBorder })}>
      {options.map((item, index) => (
        <View
          key={index}
          className="van-share-sheet__option"
          onClick={() => onSelect?.(item, index)}
        >
          <Button
            className="van-share-sheet__button"
            open-type={item.openType || ''}
          >
            {item.renderIcon ? (
              item.renderIcon
            ) : (
              <Image
                src={computed.getIconURL(item.icon)}
                className="van-share-sheet__icon"
              />
            )}
            {item.name && (
              <View className="van-share-sheet__name">{item.name}</View>
            )}
            {item.description && (
              <View className="van-share-sheet__option-description">
                {item.description}
              </View>
            )}
          </Button>
        </View>
      ))}
    </View>
  )
}
