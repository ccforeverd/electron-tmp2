# DAILY

## 每日记录

### 2020-04-22

- 本地添加了一个git仓库, 相当于有两个远程源需要推送
- 添加了 `docs` 文件夹, 用于存放文档, 目前有:
  - `TODO.md` 要做的事情
  - `DAILY.md` 每日记录
- 添加了 `vuetify`, 但是有ts报错需要解决, 虽然不影响编译结果, 要参考tmp3

### 2020-04-21

- 使用 `electron-forge` 进行初始化, 需要在前面加上环境变量 `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`
- 添加 `.eslintrc`, 在其中引入 `standard`

  ``` json
  {
    ...
    "extends": [
      [-] "eslint:recommended",
      [+] "standard",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    ...
  }
  ```

- 执行了 `eslint --fix` 方法
- 添加了 `lint-staged` 和对应的配置(在 `package.json` 里), 这是一个只对git要提交的文件进行操作的工具
- 添加了 `pre-commit` 和对应的配置(在 `package.json` 里), 这是一个在git提交前执行 `package.json` 中 `script` 命令的工具
- 将 `webpack` 文件都移到了 `build` 文件夹中
- 在 `tsconfig` 和 `webpack` 中添加 `alias`
- 添加了 `windows` 文件, 存放窗口文件, 分为:
  - `components` 文件夹, 用于存放页面单独使用的组件
  - `renderer.ts` 文件, 渲染进程
  - `preload.ts` 文件, 预加载
  - `index.ts` 文件, 对外文件, 包含:
    - `createWindow` 方法
- 添加了 `vue`, 并实现了 `vue-jsx` 和 `.tsx` 的编译
- 添加了 `.babelrc`, 以下是标准的 `vue-tsx` 编译配置

  ``` json
  {
    "presets": [
      "@babel/preset-typescript",
      "@babel/preset-env",
      "@vue/babel-preset-jsx"
    ],
    "plugins": [
      [-] "transform-decorators-legacy",
      [-] "transform-class-properties"
      [+] ["@babel/plugin-proposal-decorators", { "legacy": true }],
      [+] ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
  }
  ```

- 添加了规定:
  - 必须使用 typescript 开发
  - 组件必须使用 .tsx 格式
- 搞定了 `preload` 的编译, 添加了 `preloads` 文件夹
- 添加了 `public` 文件夹, 存放公用文件
- 添加了 `components` 文件夹, 存放通用组件
- 编写第一个组件 `App.ts`, 在 `src/windows/main/components` 中
- 完善 `tsconfig`
- 修改了 `webpack` 里对 `.tsx` 文件的编译配置

  ``` js
  ...
  [-] {
  [-]   test: /\.tsx?$/,
  [-]   exclude: /(node_modules|\.webpack)/,
  [-]   use: {
  [-]     loader: 'ts-loader',
  [-]     options: {
  [-]       transpileOnly: true
  [-]     }
  [-]   }
  [-] },
  [+] {
  [+]   test: /\.tsx$/,
  [+]   exclude: /(node_modules|\.webpack)/,
  [+]   use: {
  [+]     loader: 'babel-loader'
  [+]   }
  [+] }
  ...
  ```
