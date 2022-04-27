declare namespace Unite {
  type IAnyObject = Record<string, any>
  type IFunctionObject = Record<string, (arg?: any) => any>
  type IError = { code: string; message: string; data: any }

  interface State<TState extends IAnyObject> {
    /** 组件的内部数据，和 `properties` 一同用于组件的模板渲染 */
    state: StateOpt<TState>
  }
  interface ILifetime {
    onLoad(): Promise<void>
    onShow(): Promise<void>
    onReady(): Promise<void>
    onHide(): void | Promise<void>
    onUnload(): void | Promise<void>
    onReachBottom(): void | Promise<void>
  }

  interface Inner<TAll extends IAnyObject> {
    __mounted: boolean
    __init: boolean
    setLoading: (
      obj: Partial<{ [K in keyof PromiseProperties<TAll>]: boolean }>,
    ) => void
  }

  interface InstanceMethods<TState extends IAnyObject> {
    setState: (
      state: Partial<StateOpt<TState>> | React.SetStateAction<StateOpt<TState>>,
    ) => void
    setError: React.Dispatch<React.SetStateAction<IError | undefined>>
    onRefresh: <T extends boolean>(
      catchRefresh?: T,
    ) => T extends true
      ? Promise<{ code: string; message: string; data: any }>
      : void
    setHooks: (hooks: IAnyObject) => void
  }
  interface InstanceProperty<
    TAll extends IAnyObject,
    TProps extends IAnyObject,
  > {
    error: IError
    props: TProps
    hooks: IAnyObject
    location: Taro.RouterInfo
    loading: Partial<
      { [K in keyof PromiseProperties<TAll>]: boolean } & {
        pullDownRefresh: boolean
      }
    >
  }

  type StateOpt<T> = {
    [K in keyof T]: T[K] extends null | undefined
      ? any
      : T[K] extends never[]
      ? any[]
      : T[K] extends IAnyObject
      ? T[K] & IAnyObject
      : T[K]
  }
  type FunctionPropertyNames<T extends IAnyObject> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? K : never
  }[keyof T]
  type PromisePropertyNames<T extends IFunctionObject> = {
    [K in keyof T]: ReturnType<T[K]> extends Promise<any> ? K : never
  }[keyof T]
  type FunctionProperties<T extends IAnyObject> = Pick<
    T,
    FunctionPropertyNames<T>
  >
  type PromiseProperties<T extends IAnyObject> = Pick<
    T,
    PromisePropertyNames<FunctionProperties<T>>
  >
  type DefinedMatch<TObject, VType> = {
    [K in keyof TObject]: TObject[K] extends VType ? never : TObject[K]
  }
  type DefinedExculdeMatch<TObject, VObject> = {
    [K in keyof TObject]: K extends keyof VObject ? never : TObject[K]
  }

  type Instance<
    TState extends IAnyObject,
    TAll extends IAnyObject,
    TProps extends IAnyObject,
  > = State<TState> &
    InstanceProperty<TAll, TProps> &
    InstanceMethods<TState> &
    StateOpt<TAll>

  type Option<
    TState extends IAnyObject,
    TAll extends IAnyObject,
    TProps extends IAnyObject,
  > = State<TState> &
    Partial<ILifetime> &
    DefinedExculdeMatch<
      TAll,
      Inner<TAll> & InstanceMethods<TState> & InstanceProperty<TAll, TProps>
    > &
    ThisType<Omit<Instance<TState, TAll, TProps>, 'setHooks'>>

  type EventEnhancementResponse<
    TAll extends IAnyObject,
    TState extends IAnyObject,
  > = {
    events: FunctionProperties<TAll> & InstanceMethods<TState>
    loading: Partial<{ [K in keyof PromiseProperties<TAll>]: boolean }>
  }

  type Response<TState extends IAnyObject, TAll extends IAnyObject> = {
    state: StateOpt<TState>
    error: IError | undefined
  } & EventEnhancementResponse<TAll, TState>
}

declare function Unite<
  TState extends Unite.IAnyObject,
  TAll extends Unite.IAnyObject,
  TProps extends Unite.IAnyObject,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(
  config: Unite.Option<TState, TAll, TProps>,
  render: (data: Unite.Response<TState, TAll>, props: TProps) => JSX.Element,
  options?: {
    page?: boolean
    cancelInterception?: Partial<{
      [K in keyof Unite.PromiseProperties<TAll>]: boolean
    }>
  },
): (props: TProps) => any

export { Unite }
