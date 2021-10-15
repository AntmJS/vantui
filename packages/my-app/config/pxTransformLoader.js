const { getOptions, stringifyRequest } = require('loader-utils')
const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

module.exports = function (source) {
  const options = getOptions(this)
  if (
    options.pxTransformConfig &&
    options.pxTransformConfig.designWidth !== 750 &&
    options.pxTransformConfig.deviceRatio
  ) {
    // 找到initPxTransform入参对象
    const objAst = parse(`({
      designWidth: ${options.pxTransformConfig.designWidth},
      deviceRatio: ${JSON.stringify(options.pxTransformConfig.deviceRatio)}
    })`).program.body[0].expression

    const ast = parse(source, {
      sourceType: 'module',
    })

    traverse(ast, {
      CallExpression(path) {
        if (path.node.callee.name === 'initPxTransform') {
          // 赋值对象
          path.node.arguments = [objAst]
        }
      },
    })
    return generator(ast).code
  }
  return source
}
