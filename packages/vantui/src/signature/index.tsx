/* eslint-disable react-hooks/exhaustive-deps */
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from 'react'
import Taro from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'
import { ISignatureProps, ISignatureInstance } from '../../types/signature'
import { requestAnimationFrame } from '../common/utils'
import { get } from '../default-props'

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
  const [d] = useState(get().Signature)
  const { canvasId, lineWidth, strokeStyle, className, ...rest } = {
    ...defaultProps,
    ...d,
    ...props,
  }
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const ctx = useRef<any>(null)
  const [compIndex] = useState(componentIndex++)

  const startEventHandler = () => {
    if (ctx.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = lineWidth as number
      ctx.current.strokeStyle = strokeStyle as string
    }
  }

  const moveEventHandler = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    if (ctx.current) {
      requestAnimationFrame(() => {
        const evt = event.changedTouches[0]
        let mouseX = evt.x || evt.clientX
        let mouseY = evt.y || evt.clientY

        if (Taro.getEnv() === 'WEB' && canvasRef.current) {
          const coverPos = canvasRef.current.getBoundingClientRect()
          mouseX = evt.clientX - coverPos.left
          mouseY = evt.clientY - coverPos.top
        }
        ctx.current?.lineTo(mouseX, mouseY)
        ctx.current?.stroke()
      })
    }
  }

  const endEventHandler = () => {}

  const handleClear = () => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.current.closePath()
    }
  }

  const getImage = (): Promise<{
    base64: string
    tempFilePath: string
    canvas: HTMLCanvasElement
  }> => {
    return new Promise((resolve, reject) => {
      const base64 = ctx.current?.canvas?.toDataURL(`image/${props.type}`, 0.8)

      base64ToFile(base64 as string)
        .then((filePath) => {
          resolve({
            tempFilePath: filePath,
            base64: base64,
            canvas: ctx.current?.canvas,
          })
        })
        .catch((err) => {
          console.error(`@anmjs/vantui: signature 转换图片失败:`, err)
          reject(err)
        })
    })
  }

  const base64ToFile = (base64: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const data = base64.replace(/^data:image\/\w+;base64,/, '')
      const buffer = Taro.base64ToArrayBuffer(data)
      const randomFileName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}.png`
      const filePath = `${Taro.env.USER_DATA_PATH}/${randomFileName}`

      Taro.getFileSystemManager().writeFile({
        filePath,
        data: buffer,
        encoding: 'binary',
        success: () => {
          resolve(filePath)
        },
        fail: (err) => {
          console.error('@anmjs/vantui: signature failed to save file: ', err)
          reject(err)
        },
      })
    })
  }

  const canvasSetting = (canvasDom: any, width: number, height: number) => {
    if (canvasDom) {
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
  }

  const initCanvas = () => {
    Taro.nextTick(() => {
      setTimeout(() => {
        if (process.env.TARO_ENV !== 'h5') {
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
