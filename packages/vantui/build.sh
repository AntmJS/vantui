#!/bin/bash

rm -rf ./docs_build

npx antm-doc-start

npx prettier --write '**/*.{js,jsx,ts,tsx,md,html,css,less}'

cd ./../vantui-demo

pwd
yarn real:h5Doc

cd  ./../vantui-doc

mv  ./../vantui-demo/build/js  ./docs_build/js
mv  ./../vantui-demo/build/assets  ./docs_build/assets

mv  ./../vantui-demo/build/index.html  ./docs_build/mobile.html
