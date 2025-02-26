import { View } from '@tarojs/components'
import classNames from 'classnames'
import * as utils from '../wxs/utils'
import { ColProps } from '../../types/col'
import { get } from '../default-props'
import * as computed from './wxs'

const d = get().Col

export function Col(props: ColProps): JSX.Element {
  const {
    span,
    offset,
    gutter = 14,
    children,
    className,
    style,
    ...others
  } = {
    ...d,
    ...props,
  }

  return (
    <View
      className={classNames(
        utils.bem('col', [span]),
        offset ? 'van-col--offset-' + offset : '',
        className,
      )}
      style={utils.style([
        computed.rootStyle({
          gutter,
        }),
        style,
      ])}
      {...others}
    >
      {children}
    </View>
  )
}
export default Col
