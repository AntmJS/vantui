### 博客地址

[点击查看](https://antmjs.github.io/vantui/)

### 拽写文章说明

1. 拉取代码，执行 yarn install

2. 切出一个独立的分支，执行 yarn run dev

3. 更新 vant.config.js 的 nav 配置

```json
{
  "nav": [
    {
      "title": "博客",
      "items": [
        {
          "path": "home",
          "title": "简介",
          "hideSimulator": true
        }
      ]
    },
    {
      "title": "前端工程建设",
      "items": [
        {
          "path": "construction-home",
          "title": "概览",
          "hideSimulator": true
        }
      ]
    }
  ]
}
```

注：不支持目录结构，所以如果有分组需求的可以以前缀作为分组，比如 construction-\*

4. docs 目录里面添加 path 对应的 markdown 文件，比如 construction-\*.md，编辑文件

5. 提交 PR，Review 通过之后 yarn run build-site
