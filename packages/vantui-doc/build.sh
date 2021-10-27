#!/bin/bash

# npm run build-site

# cd ./../vantui-demo

# pwd
# npm run real:h5Doc

# cd  ./../vantui-doc

# mv  ./../vantui-demo/build/assets  ./site

# mv  ./../vantui-demo/build/index.html  ./site/mobile.html


git  add .

git stash

git checkout gh-pages



echo '=========='
cd ./../../
ls
pwd
echo '-------------'
git checkout feat/demo-ui

git stash pop