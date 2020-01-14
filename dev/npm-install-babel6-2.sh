#!/bin/sh

function list_to_one() {
  local list=
  local arr=
  local i=
  local str=
  list=$(
    cat <<EOF
"koa": "^2.5.1",
EOF
  )
  if [ -n "${1}" ]; then
    list="${1}"
  fi

  list=$(echo "$list" | sed "/^ *#/d" | sed "/^$/d")
  list=$(echo "$list" | sed "s/^ *//g" | sed "s/ *//g")
  list=$(echo "$list" | sed "s/,$//g")
  #list=$(echo "$list" | sed "s/,$//g" | sed "s/:/@/g")
  #=>"koa-bodyparser"@"^4.2.1"
  #list=$(echo "$list" | sed "s/^\"//g" | sed "s/\":/@/g")
  #=>koa-bodyparser@"^4.2.1"
  list=$(echo "$list" | sed "s/\"//g" | sed "s/:/@/g")
  #=>koa-bodyparser@^4.2.1
  list=$(echo "$list" | sed "s/@^/@/g")
  #=>koa-bodyparser@4.2.1

  #arr=${list//,/ }
  #str=
  #for i in "${arr[@]}"; do
  #str="$str $i"
  #done
  #str=$(echo "$str" | sed "s/^ *//g" | sed "s/ *$//g")
  #echo "$str"
  echo $list
}
function install() {
  opts=$(echo "$listOpts" | sed "/^ *#/d" | sed "/^$/d")
  libs=$(list_to_one "$listLib")
  echo "npm install $libs $opts" && npm install $libs $opts
}
function uninstall() {
  opts=$(echo "$listOpts" | sed "/^ *#/d" | sed "/^$/d")
  libs=$(list_to_one "$listLib")
  libs=$(echo "$libs" | sed "s/@^[0-9]\.[0-9]\.[0-9]//g")
  echo "npm uninstall $libs $opts" && npm uninstall $libs $opts
}

listOpts=$(
  cat <<EOF
#--save-prod
--save-dev
#--registry=https://registry.npm.taobao.org
EOF
)

#use babel6
listLib=$(
  cat <<EOF
"babel-core": "^6.26.0",
#"babel-eslint": "^8.1.2",
#"babel-loader": "^7.1.2",
"babel-plugin-syntax-dynamic-import": "^6.18.0",
"babel-plugin-transform-runtime": "^6.23.0",
"babel-preset-env": "^1.6.0",
"babel-preset-stage-2": "^6.24.1",
#for jsx
"babel-plugin-syntax-jsx": "^6.18.0",
"babel-plugin-transform-vue-jsx": "^3.7.0",
"babel-helper-vue-jsx-merge-props": "^2.0.3",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#file-usage
#./dev/npm-install-babel6-2.sh
