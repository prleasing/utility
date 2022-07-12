#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs
cd docs
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:prleasing/utility.git main:gh-pages
cd -
