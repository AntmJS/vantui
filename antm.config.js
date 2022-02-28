module.exports = {
  warning: {
    monitorFiles: [
      './packages/[!node_modules]**/package.json',
      './package.json',
    ],
    webhooks: {
      url: 'https://oapi.dingtalk.com/robot/send?access_token=c2ca61d59a4e22f5d60b8d841494ab5ab570ec190accb16bbee10562092c8fe8',
    },
  },
}
