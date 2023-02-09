#!/bin/bash

rm -rf ./site

npx antm-vantui-cli docs --mode production

npx prettier --write '**/*.{js,jsx,ts,tsx,md,html,css,less}'

cd ./../vantui-demo

pwd
yarn real:h5Doc

cd  ./../vantui-doc

mv  ./../vantui-demo/build/js  ./site/js
mv  ./../vantui-demo/build/assets  ./site/assets

mv  ./../vantui-demo/build/index.html  ./site/mobile.html
