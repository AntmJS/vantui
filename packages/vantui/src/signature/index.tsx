/* eslint-disable react-hooks/exhaustive-deps */
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from 'react'
import Taro, { CanvasContext } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import { ISignatureProps, ISignatureInstance } from '../../types/signature'

const defaultProps = {
  canvasId: 'spcanvas',
  type: 'png',
  lineWidth: 2,
  strokeStyle: '#000',
  className: '',
} as ISignatureProps

let componentIndex = 0

const Signature = forwardRef(function Signature(
  props: ISignatureProps,
  ref: ForwardedRef<ISignatureInstance>,
): JSX.Element {
  const { canvasId, lineWidth, strokeStyle, className, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const ctx = useRef<CanvasContext | null>(null)
  const [compIndex] = useState(componentIndex++)

  const startEventHandler = () => {
    if (ctx.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const moveEventHandler = (event: any) => {
    if (ctx.current) {
      const evt = event.changedTouches[0]
      let mouseX = evt.x || evt.clientX
      let mouseY = evt.y || evt.clientY

      if (Taro.getEnv() === 'WEB' && canvasRef.current) {
        const coverPos = canvasRef.current.getBoundingClientRect()
        mouseX = evt.clientX - coverPos.left
        mouseY = evt.clientY - coverPos.top
      }
      Taro.nextTick(() => {
        ctx.current?.lineTo(mouseX, mouseY)
        ctx.current?.stroke()
      })
    }
  }

  const endEventHandler = () => {}

  const handleClear = () => {
    console.info('clear')
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
  }

  const getImage = (): Promise<string> => {
    return new Promise((resolve) => {
      Taro.createSelectorQuery()
        .select(`#${canvasId}${compIndex}`)
        .fields({
          node: true,
          size: true,
        })
        .exec((res) => {
          Taro.canvasToTempFilePath({
            canvas: res[0].node,
            fileType: props.type,
            canvasId: `${canvasId}${compIndex}`,
            success: (res) => {
              resolve(res.tempFilePath)
            },
            fail: (res) => {
              console.error(`@anmjs/vantui: signature 转换图片失败:`, res)
            },
          })
        })
    })
  }

  const canvasSetting = (canvasDom: any, width: number, height: number) => {
    const canvas = canvasDom
    canvas.current = canvas

    ctx.current = canvas.getContext('2d')
    setCanvasWidth(width)
    setCanvasHeight(height)
    canvas.width = width
    canvas.height = height
    if (ctx.current) {
      ctx.current.clearRect(0, 0, width, height)
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const initCanvas = () => {
    Taro.nextTick(() => {
      setTimeout(() => {
        if (Taro.getEnv() === 'WEAPP' || Taro.getEnv() === 'JD') {
          Taro.createSelectorQuery()
            .select(`#${canvasId}${compIndex}`)
            .fields(
              {
                node: true,
                size: true,
              },
              (res) => {
                const { node, width, height } = res
                canvasSetting(node, width, height)
              },
            )
            .exec()
        } else {
          const canvasDom: HTMLElement | null = document.getElementById(
            `${canvasId}${compIndex}`,
          )
          let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
          if (canvasDom?.tagName !== 'CANVAS') {
            canvas = canvasDom?.getElementsByTagName(
              'canvas',
            )[0] as HTMLCanvasElement
          }
          canvasSetting(
            canvas,
            canvasDom?.offsetWidth as number,
            canvasDom?.offsetHeight as number,
          )
        }
      }, 1000)
    })
  }

  useEffect(() => {
    initCanvas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useImperativeHandle(ref, () => {
    return {
      getImage,
      clear: handleClear,
    }
  })

  return (
    <View className={`van-signature ${className}`} {...(rest as any)}>
      <View className={`van-signature__inner spcanvas_WEAPP`} ref={wrapRef}>
        <Canvas
          className="van-signature-canvas"
          id={`${canvasId}${compIndex}`}
          ref={canvasRef}
          canvasId={`${canvasId}${compIndex}`}
          disableScroll
          type="2d"
          onTouchStart={startEventHandler}
          onTouchMove={moveEventHandler}
          onTouchEnd={endEventHandler}
        />
      </View>
    </View>
  )
})

export { Signature }

export default Signature
