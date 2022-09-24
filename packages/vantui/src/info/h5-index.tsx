import { InfoProps } from '../../types/info'

export function Info(props: InfoProps) {
  const { dot, info = null, style, className, ...others } = props

  return (
    <>
      {(info || info === 0 || dot) && (
        <div
          className={`van-info ${className || ''}`}
          style={style as React.CSSProperties}
          {...(others as any)}
        >
          {dot ? '' : info}
        </div>
      )}
    </>
  )
}
export default Info
