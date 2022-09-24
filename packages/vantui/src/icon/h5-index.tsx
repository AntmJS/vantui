import { IconProps } from '../../types/icon'
import { Info } from '../info/h5-index'

export function Icon(props: IconProps) {
  const {
    classPrefix = 'van-icon',
    name,
    color,
    size,
    dot,
    info,
    style,
    className,
    ...others
  } = props
  return (
    <div
      className={
        rootClass({
          classPrefix,
          name,
        }) + ` ${className || ''}`
      }
      style={{
        color: color,
        fontSize: size,
        ...(style as React.CSSProperties),
      }}
      {...(others as any)}
    >
      {(info || info === 0 || dot) && (
        <Info dot={dot} info={info} className="van-icon__info"></Info>
      )}
      {isImage(name) && <img src={name!} className="van-icon__image" />}
    </div>
  )
}
export default Icon

function rootClass(data: any) {
  const classes: any[] = []

  if (data.classPrefix != null) {
    classes.push(data.classPrefix)
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image')
  } else if (data.classPrefix != null) {
    classes.push(data.classPrefix + '-' + data.name)
  }

  return classes.join(' ')
}

function isImage(name: any) {
  return name.indexOf('/') !== -1
}
