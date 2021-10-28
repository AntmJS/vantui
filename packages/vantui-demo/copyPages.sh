#!/bin/bash



echo '删除'

rm -rf  ./src/pages/


echo '平移'

cp  -r ./../react-demo/src/pages ./src/pages
