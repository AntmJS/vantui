// 将_antm.config.js 的_去掉，然后更新下方的access_token
module.exports = {
  warning: {
    monitorFiles: [
      './packages/[!node_modules]**/package.json',
      './package.json',
    ],
    webhooks: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=xxxx',
    },
  },
}
