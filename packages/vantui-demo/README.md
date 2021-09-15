## Taro快速开发模版

### 选型

Taro + React + Less

### 特性

- 非UI全局缓存能力
- UI全局缓存能力

### 规范

Commitlint + Husky + lint-staged + Prettier + Eslint + Stylelint + TSC

- Eslint: @typescript-eslint + import + react + react-hooks + prettier
- Stylelint: stylelint-config-standard + stylelint-config-prettier

### Vscode

Prettier - Code formatter + Eslint + stylelint


### 工程使用

git clone git@github.com:AntmJS/temptaro.git

rm -rf .git

git init

yarn install

npx husky install

git add .

git commit -m 'feat: 初始化'

git remote add origin ...

git push origin master

### 应用变更

project.weapp.json - projectname description

project.tt.json - projectname description

package.json - name description appId(环境对应API_ENV) Taro版本

config/index.js - projectName date h5.webpackChain.publicPath

src/app.config.ts - window.navigationBarTitleText

src/utils/request/innerRequest/index.ts - statusCode为200的判断依据返回是否和约定一致，其他均为失败

src/components/container.tsx - MiniBar的homeUrl

### 注意事项

- 路径引用可以使用 '@/xxx'
- 主题可以放在src/style/index.less下面
- API_ENV: stable real pre dev

### 执行顺序 useDidShow 优先于useEffect执行

- app show
- app launch

- index com show
- index page show
- index com load
- index page load

- index com hide
- index page hide

- second com show
- second page show
- second com load
- second page load

- index com show
- index pageshow

- second page unload
- second com unload

### 已添加

- Cache
- Store
- Monitor

### 待完善

- hack Taro API
- Boundary Error
- request loading error 结合React
- theme
- action ts
- 分页快速模版