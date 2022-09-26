import { useState } from 'react'
import { LoadingProps } from '../../types/loading'

export function Loading(props: LoadingProps): JSX.Element {
  const {
    vertical,
    type = 'circular',
    color,
    size,
    textSize,
    className = '',
    children,
    style,
    ...others
  } = props

  const [array12] = useState(Array.from({ length: 12 }))

  return (
    <div
      className={`van-loading ${
        vertical ? 'van-loading--vertical' : ''
      } ${className}`}
      style={style as React.CSSProperties}
      {...(others as any)}
    >
      <div
        className={'van-loading__spinner van-loading__spinner--' + type}
        style={{
          color: color,
          fontSize: size,
        }}
      >
        {type === 'spinner' && (
          <>
            {array12.map((_, index: number) => {
              return (
                <div
                  key={`van-loading__dot_${index}`}
                  className="van-loading__dot"
                ></div>
              )
            })}
          </>
        )}
      </div>
      <div
        className="van-loading__text"
        style={{
          fontSize: textSize,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Loading
