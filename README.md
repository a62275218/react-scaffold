### init project
1. yarn create react-app react-scaffold --template typescript

## css
1. css module
   to use scoped css  css ending with .module.scss
2. using sass
   yarn add node-sass
3. global scss variable and mixins
   yarn add sass-resources-loader
4. css normalize
   using https://github.com/csstools by using @import-normalize in index.scss
   override it by modifying reset.scss

## environment variables
1. use custom environment variables starting with REACT_APP_ in .env.xxxxx file
2. public url path: PUBLIC_URL
3. yarn start: .env.development
   yarn build:test: .env.predeploy
   yarn build: .env.production

## router 
1. yarn add @types/react-router-dom

## alias
1. @: src/*