#!/bin/bash
npx antm-vantui-cli mdcode --mode create

npx antm-vantui-cli docs --mode production

cd ./../vantui-demo

pwd
npm run real:h5Doc

cd  ./../vantui-doc

mv  ./../vantui-demo/build/assets  ./site

mv  ./../vantui-demo/build/index.html  ./site/mobile.html