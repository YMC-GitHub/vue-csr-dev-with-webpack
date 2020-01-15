# vue-csr-dev-with-webpack

## desc

vue app csr develop with webpack  (csr mode)

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
- webpack-dev-server (use him as a simple server when develop)

note: remember to take care of their version with each other.

## some config

get detail [here](./note/some-config-desc.md)

## some command

```sh
#install his deps
: <<cmd
#npm run install
npm install
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
