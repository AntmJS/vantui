declare type IMdCodeParams = {
  mode: 'create' | 'watch' | 'run-start' | 'run-build'
  type: 'h5' | 'weapp' | 'alipay' | 'dd' | 'qq' | 'swan' | 'kwai' | 'tt'
}
export declare function mdCode(params: IMdCodeParams): Promise<void>
export {}
