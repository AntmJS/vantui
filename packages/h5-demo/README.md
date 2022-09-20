# api-ui-demo

项目中简单的使用@antmjs/api-ui

## 启动

1. yarn
2. 启动服务、文档服务、mock 服务
   yarn start、yarn mock
   mock 服务只启动了 api 下面的 common 模块
3. yarn swagger 生成后端 sagger 定义的接口
   yarn api:file 生成前端 api 文件下定义的几口
4. 打包：yarn build、yarn api:build

- 可以前端定义接口和后端 swagger 定义接口混着用

- 加入后端 swagger 定义接口，前端又没有用 ts，可以将 path 设置在.cache 文件下作为临时文件, 仅使用 yarn mock 来实现 sagger mock
