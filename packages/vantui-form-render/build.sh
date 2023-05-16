#!/bin/bash

rm -rf ./doc_build

npx antm-doc-build

npx prettier --write '**/*.{js,jsx,ts,tsx,md,html,css,less}'

cd ./../vantui-demo

pwd
yarn real:h5Doc

cd  ./../vantui

mv  ./../vantui-demo/build/js  ./doc_build/js
mv  ./../vantui-demo/build/assets  ./doc_build/assets

mv  ./../vantui-demo/build/index.html  ./doc_build/mobile.html
