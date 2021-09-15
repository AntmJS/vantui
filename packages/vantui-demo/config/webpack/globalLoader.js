// Taro不支持改编译中文件的插件HOOK，先用loader解决
module.exports = function (source) {
  let newSource = source
  if (process.env.TARO_ENV === 'alipay') {
    newSource = newSource.replace(
      'module.exports = g;',
      `
    if (!g || JSON.stringify(g) === '{}') {
      g = {Boolean:Boolean,Object:Object,Number:Number,Array:Array,ArrayBuffer:ArrayBuffer,DataView:DataView,Date:Date,Error:Error,Float32Array:Float32Array,Float64Array:Float64Array,Function:Function,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Map:Map,Math:Math,Object:Object,Promise:Promise,RegExp:RegExp,Set:Set,String:String,Symbol:Symbol,TypeError:TypeError,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Uint16Array:Uint16Array,Uint32Array:Uint32Array,WeakMap:WeakMap,clearTimeout:clearTimeout,isFinite:isFinite,parseInt:parseInt,parseFloat:parseFloat,setTimeout:setTimeout};
    }
    module.exports = g;
    `,
    )
  }

  return newSource
}
