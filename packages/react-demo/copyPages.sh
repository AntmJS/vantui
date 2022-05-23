#!/bin/bash

path=$(cd $(dirname $0); pwd) 
if [  `echo $path | grep -e vantui$`  ];then 
  echo '在根目录'
  echo '删除'
  rm -rf  ./packages/vantui-demo/src/pages/
  echo '平移'
  cp  -r ./packages/vantui-demo/src/pages ./packages/react-ui/src/pages
else
  echo '在react-ui项目内'
  echo '删除'
  rm -rf  ./src/pages/
  rm -rf  ./src/pages/config.json
  echo '平移'
  cp  -r ./../vantui-demo/src/pages ./src/pages
  cp  -r ./../vantui-demo/src/config.json ./src/config.json
fi
