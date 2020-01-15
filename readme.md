# vue-csr-dev-with-webpack

## desc

vue app spa develop with webpack  (csr mode)

note: you can also start your project with [Vue CLI](https://cli.vuejs.org/)

## project diretory constructor

get detail [here](./note/dir-construtor.md)

## some important deps for csr develop

- eslint (lint .js .vue file)
- babel (handle es6+)
- webpack (pack lib)
- postcss (handle css style with future feat)
- node-sass (handle sass/scss style (optional))
- less (handle less style (optional))

note: remember to take care of their version with each other.

## some config

`webpack.base.conf.js`

01.set file context dir [config](./build/webpack.base.conf.js#L42)

02.set files enty [config](./build/webpack.base.conf.js#L44-#L46)

03.set files output with project config [config](./build/webpack.base.conf.js#L48-#L54)

04.set where to find npm lib [config](./build/webpack.base.conf.js#L56-#L62)

05.set files match and how to handle the matched files [config](./build/webpack.base.conf.js#L63-#L103)

06.use eslint to lint with project config [config](./build/webpack.base.conf.js#L67-#L67)

07.handle .vue files with vue-loader [config](./build/webpack.base.conf.js#L68-#L72)

08.handle .js files with babel-loader [config](./build/webpack.base.conf.js#L73-#L77)

09.match image files and handle  with url-loader or file-loader [config](./build/webpack.base.conf.js#L78-#L85)

10.match mp4,mp3 and other media files and handle  with url-loader or file-loader [config](./build/webpack.base.conf.js#L86-#L93)

11.match font files and handle  with url-loader or file-loader [config](./build/webpack.base.conf.js#L94-#L101)

12.use freindly formmater for eslint [config](./build/webpack.base.conf.js#L35-#L35)

`webpack.dev.conf.js`

01.set style loader for css/less/sass/scss/stylus/styl/postcss file  [config](./build/webpack.dev.conf.js#L24-#L24)

02.set devtool for dev mode  [config](./build/webpack.dev.conf.js#L27-#L27)

03.set webpack-dev-server options  [config](./build/webpack.dev.conf.js#L30-#L52)

04.set process.env for webpack dev env with DefinePlugin  [config](./build/webpack.dev.conf.js#L54-#L56)

05.set hot module replace  [config](./build/webpack.dev.conf.js#L57-#L57)

06.tell HMR shows correct file names in console on update  [config](./build/webpack.dev.conf.js#L58-#L58)

07.tell no emit on errors  [config](./build/webpack.dev.conf.js#L59-#L59)

08.auto genarate index.html  [config](./build/webpack.dev.conf.js#L61-#L65)

09.copy custom static assets  [config](./build/webpack.dev.conf.js#L67-#L73)

10.set friendly errors  [config](./build/webpack.dev.conf.js#L84-#L91)

11.set notify on errors with project config  [config](./build/webpack.dev.conf.js#L88-#L91)

`webpack.prod.conf.js`

01.set style loader for css/less/sass/scss/stylus/styl/postcss file  [config](./build/webpack.prod.conf.js#L52-#L56)

02.set the devtool tool with config  [config](./build/webpack.prod.conf.js#L59-#L59)

03.set files output with project config  [config](./build/webpack.prod.conf.js#L60-#L65)

04.set process.env for webpack pro env with DefinePlugin  [config](./build/webpack.prod.conf.js#L69-#L71)

05.set uglify js  [config](./build/webpack.prod.conf.js#L73-#L81)

06.extract css into its own file  [config](./build/webpack.prod.conf.js#L83-#L90)

07.compress extracted CSS  [config](./build/webpack.prod.conf.js#L93-#L97)

08.generate index.html  with template for pro or test  [config](./build/webpack.prod.conf.js#L101-#L115)

09.keep module.id stable when vendor modules does not change  [config](./build/webpack.prod.conf.js#L117-#L117)

10.enable scope hoisting  [config](./build/webpack.prod.conf.js#L119-#L119)

11.split vendor js into its own file  [config](./build/webpack.prod.conf.js#L121-#L133)

12.extract webpack runtime and module manifest to its own file  [config](./build/webpack.prod.conf.js#L136-#L139)

13.extracts shared chunks from code splitted chunks and bundles them  [config](./build/webpack.prod.conf.js#L143-#L148)

14.copy custom static assets  [config](./build/webpack.prod.conf.js#L151-#L157)

15.use gzip with config data  [config](./build/webpack.prod.conf.js#L162-#L178)

16.use bundle analyzer with config data  [config](./build/webpack.prod.conf.js#L180-#L183)

`webpack.test.conf.js`

01.set process.env for webpack test env with DefinePlugin  [config](./build/webpack.test.conf.js#L26-#L28)

02.to make lang="scss" work in test  [config](./build/webpack.test.conf.js#L19-#L22)

03.set style loader for css/less/sass/scss/stylus/styl/postcss file  [config](./build/webpack.test.conf.js#L15-#L15)

04.no need for app entry during tests  [config](./build/webpack.test.conf.js#L33-#L33)

05.set the devtool tool with config  [config](./build/webpack.test.conf.js#L17-#L17)


`.babelrc`

\# for default env:

01.tell babel to use env presets? [config](.babelrc#L4-#L4)

02.tell babel to your code has been in es5 syntax? [config](.babelrc#L6-#L6)

03.tell babel to set what env translate to(browser x?)? [config](.browserslistrc#L1-#L3)

04.tell babel to set what env translate to(node?..?)? [config](.babelrc#L4-#L7)

05.tell babel to use transform for runtime in web app? [config](.babelrc#L12-#L12)

06.tell babel to use dynamic import syntax? [config](.babelrc#L13-#L13)

07.tell babel to use jsx for vue? [config](.babelrc#L14-#L14)

08.tell babel to use some es7 feat in babel6? [config](.babelrc#L9-#L9)


\# for test env:

01.set test env flag? [config](.babelrc#L17-#L17)

02.set lib module type is es6+? [config](.babelrc#L19-#L19)

03.use coverage collection? [config](.babelrc#L26-#L26)


`.eslintrc.js`

01.tell eslint he is the root config? [config](.eslintrc.js#L4-#L4)

02.tell eslint to lint all valid babel code with the fantastic ESLint? [config](.eslintrc.js#L5-#L5)

03.tell eslint your code is in ECMAScript modules?no for "script" and yes for "module" [config](.eslintrc.js#L7-#L7)

04.tell eslint to translate your code syntax to  esx(3,5,6,7,8-?)? [config](.eslintrc.js#L8-#L8)

05.tell eslint to predefine global variables for new ES6 global variables? [config](.eslintrc.js#L13-#L13)

06.tell eslint to predefine  global variables for browser env? [config](.eslintrc.js#L11-#L11)

07.tell eslint to predefine  global variables for node env? [config](.eslintrc.js#L12-#L12)

08.tell eslint to use some rule from some extend? [config](.eslintrc.js#L15-#L17)

09.tell eslint to use some plugin to handle some rule? [config](.eslintrc.js#L19-#L21)

10.tell eslint to add some custom rules? [config](.eslintrc.js#L31-#L54)

11.tell eslint to use eslint-config-airbnb-base 's rule? [config](.eslintrc.js#L16-#L16)

12.tell eslint to use eslint-plugin-html to lin .vue file? [config](.eslintrc.js#L20-#L20)

13.tell eslint to use webpack's resolver to check if imports actually resolve [config](.eslintrc.js#L23-#L29)

`.postcssrc.js`

01.to transform @import rules by inlining content?

02.to rebase, inline or copy on url()?

03.to fix an element's dimensions to an aspect ratio?

04.write SVGs directly in CSS?

05.to use the latest CSS syntax today?

06.generates rem units from pixel units?

07.automatically append content property for viewport-units-buggyfill?

08.minify with cssno ?

09.automatically append prefixer?

## some command

```sh
#install his deps
: <<cmd
npm run install
cmd

#devleop him
: <<cmd
npm run dev
cmd

#test him
: <<cmd
#npm run test
#npm run test:unit
#npm run test:e2e
cmd

#build him
: <<cmd
npm run build
cmd

#lint him(optional)
: <<cmd
npm run lint
npm run lint:no-fix
cmd

#beautify him(optional)
: <<cmd
#npm run format
cmd

#publish him
: <<cmd
#pushish to github code manage,npm registry
#npm run release
cmd

#run him
: <<cmd
npm run start
cmd
```

## get more

## author

yemiancheng <ymc-github@gmail.com>

## contributor

Evan You <yyx990803@gmail.com>

## License

MIT
