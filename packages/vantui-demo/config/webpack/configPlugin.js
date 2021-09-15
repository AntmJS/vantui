/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const configName = {
  weapp: {
    srcConfigName: 'project.weapp.json',
    distConfigName: 'project.config.json',
  },
  alipay: {
    srcConfigName: 'project.alipay.json',
    distConfigName: 'mini.project.json',
  },
  tt: {
    srcConfigName: 'project.tt.json',
    distConfigName: 'project.config.json',
  },
}

module.exports = function (ctx) {
  ctx.onBuildFinish(() => {
    if (process.env.TARO_ENV !== 'h5') {
      const { appPath, sourcePath, outputPath } = ctx.paths
      const { printLog, processTypeEnum, fs } = ctx.helper
      const pkg = fs.readJSONSync(path.resolve(process.cwd(), './package.json'))
      const srcConfigName =
        configName[ctx.initialConfig.outputRoot].srcConfigName
      const distConfigName =
        configName[ctx.initialConfig.outputRoot].distConfigName

      if (fs.existsSync(`${outputPath}/${distConfigName}`)) {
        if (process.env.TARO_ENV === 'tt') {
          const origProjectConfig = fs.readJSONSync(
            `${outputPath}/${distConfigName}`,
          )
          if (origProjectConfig.appid) return
        } else {
          return
        }
      }

      // 生成 project.config.json
      const projectConfigFileName = srcConfigName
      let projectConfigPath = path.join(appPath, projectConfigFileName)
      if (!fs.existsSync(projectConfigPath)) {
        // 若项目根目录不存在对应平台的 projectConfig 文件，则尝试从源代码目录查找
        projectConfigPath = path.join(sourcePath, projectConfigFileName)
        if (!fs.existsSync(projectConfigPath)) return
      }

      const origProjectConfig = fs.readJSONSync(projectConfigPath)
      // compileType 是 plugin 时不修改 miniprogramRoot 字段
      let distProjectConfig = origProjectConfig
      if (origProjectConfig.compileType !== 'plugin') {
        distProjectConfig = Object.assign({}, origProjectConfig, {
          miniprogramRoot: './',
        })
        if (
          ctx.initialConfig.outputRoot === 'weapp' ||
          ctx.initialConfig.outputRoot === 'tt'
        ) {
          distProjectConfig.appid =
            pkg.appId[ctx.initialConfig.outputRoot][process.env.API_ENV]
          if (
            process.env.API_ENV === 'dev' ||
            process.env.API_ENV === 'stable'
          ) {
            distProjectConfig.setting.urlCheck = false
          }
        }
      }
      ctx.writeFileToDist({
        filePath: distConfigName,
        content: JSON.stringify(distProjectConfig, null, 2),
      })
      printLog(
        processTypeEnum.GENERATE,
        '工具配置',
        `${outputPath}/${distConfigName}`,
      )
    }
  })
}
