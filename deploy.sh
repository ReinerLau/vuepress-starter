#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ReinerLau/vuepress-starter.git master:gh-pages
# git push -f git@gitee.com:ReinerLau/vuepress-starter.git master:gh-pages
git push -f git@43.139.99.48:/home/www/website/ts.git master



cd -