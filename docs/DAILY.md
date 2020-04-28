# DAILY

## 每日记录

### 2020-04-29

- 今天做一些总结
  - 使用 `electron-forge` 搭建项目
    - 可分多个页面
    - 支持 `preload`
  - 使用 `vue-cli` 搭建项目
    - 是单页应用, 如果分多个页面, 配置要麻烦许多
    - 不支持 `preload`, 待研究
  - 使用 `webpack-electron` 搭建项目
    - 是单页应用, 不支持多个分页, 只有一个 `renderer`
    - 对 `preload` 的支持很蛋疼, 要么无法引入, 要么没有编译
  - 对 `typescript` 的感想
    - 问题集中在使用 `.tsx` 并引入ui库时, 经常报类型错误

### 2020-04-28

- __electron-tmp2__
  - 项目重启, 要添加一个带标签页的窗口
  - 使用 `electron-tabs`, 遇到问题
    - 不能直接引入包内的css文件, 要修改 `webpack` 配置估计
      - 解决: 将包内的css文件内容复制到 `index.css` 中
    - 打开新的 `webview` 后, 原 `webview` 也会跳转页面
      - 解决: 监听 `webview` 的 `did-navigate-in-page` 事件, 对原 `webview` 使用 `goBack()` 方法
  - 添加 `.vscode/setting.json` 文件, 并加入配置: 使用 `node_modules` 里的 `typescript` 版本
  - 完成 `tabs` 的demo后, 项目暂停
- __electron-tmp4__
  - 先加入 `typescript`, 而不是 `standard`
    - 使用 `npx create-react-app react-typescript-demo --typescript` 创建了一个 `react` 项目
    - 然后将其ts配置转移进来
    - 暂时没有ts报错了
  - 加入 `material-ui`, 发现一些问题
    - `node_modules` 的字体文件无法引入
    - `__static` 不好用
    - `prop-types` 不知该怎么改成ts的写法
  - 使用 `material-ui` 里的 `tabs` 做了一个tab页
  - 项目暂停

### 2020-04-25

- __electron-tmp2__
  - 今天的项目没有任何进展, 研究了一下 `markdown` 的 `diff` 写法并改写了 `DAILY.md`
    - 参考的 `gitlab` 中的写法, 问题是在代码块中无法显示, 但在代码块外正常
      - `[- 删掉的 -]`
      - `[+ 添加的 +]`
    - `github` 的写法, 代码块内外都无法显示
      - `- 删掉的`
      - `+ 添加的`
  - 项目暂停
- __electron-tmp3__
  - 添加 `src/components/TestElementUI.tsx`
  - 添加 `src/components/TestVuetify.tsx`
  - 依然有ts报错, 无法解决
  - 项目暂停

### 2020-04-24

- __electron-tmp2__
  - 遇到新的问题:
    - `vuetify` 主题不能生效
- __electron-tmp4__
  - 创建项目 `electron-tmp4`
  - 使用 `electron-webpack-quick-start` 进行初始化
  - 使用 `ncu -u && yarn` 升级依赖
  - 后续几天对项目有修改, 主要集中在 `typescript` 和 `preload` 上
  - 可惜, 遇到很多问题
    - ts 报错
    - preload 无法引入
      - `preload/index.ts` 无法直接引入
      - 改成 `preload/index.js` 报错, 编译错误
      - 转移到 `static/preload/index.js` 后, 报 `__static` 未定义
    - css 中的字体文件无法引入
  - `git reset` 了两次后, 失去了很多提交记录, 之后的请看04.28的

### 2020-04-23

- __electron-tmp2__
  - 对ts报错和字体引入的问题进行几次尝试, 无法解决
- __electron-tmp3__
  - 创建了 `electron-tmp3` 项目
  - 使用 `vue create .` 初始化
  - 使用 `vue add element-ui` 安装 `element-ui`
  - 使用 `vue add vuetify` 安装 `vuetify`
  - 使用 `vue add electron-builder` 安装 `electron`
  - 使用 `ncu -u && yarn` 将所以依赖更新到最新版本

### 2020-04-22

- __electron-tmp2__
  - 本地添加了一个git仓库, 相当于有两个远程源需要推送
  - 添加了 `docs` 文件夹, 用于存放文档, 目前有:
    - `TODO.md` 要做的事情
    - `DAILY.md` 每日记录
  - 添加了 `vuetify`, 遇到问题
    - 有ts报错, 虽然不影响编译结果, 要参考tmp3
    - 字体引入的问题, `url-loader` 和 `file-loader` 都不好用

### 2020-04-21

- __electron-tmp2__
  - 创建了 `electron-tmp2` 项目
  - 使用 `electron-forge` 进行初始化, 需要在前面加上环境变量 `ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/`
  - 添加 `.eslintrc`, 在其中引入 `standard`

    ``` json
    {
      ...
      "extends": [
        [- "eslint:recommended", -]
        [+ "standard", +]
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
        [- "transform-decorators-legacy", -]
        [- "transform-class-properties" -]
        [+ ["@babel/plugin-proposal-decorators", { "legacy": true }], +]
        [+ ["@babel/plugin-proposal-class-properties", { "loose": true }] +]
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
    [- { -]
    [-   test: /\.tsx?$/, -]
    [-   exclude: /(node_modules|\.webpack)/, -]
    [-   use: { -]
    [-     loader: 'ts-loader', -]
    [-     options: { -]
    [-       transpileOnly: true -]
    [-     } -]
    [-   } -]
    [- }, -]
    [+ { +]
    [+   test: /\.tsx$/, +]
    [+   exclude: /(node_modules|\.webpack)/, +]
    [+   use: { +]
    [+     loader: 'babel-loader' +]
    [+   } +]
    [+ } +]
    ...
    ```

### 2020-04-14

- __electron-tmp__
  - 创建了 `electron-tmp` 项目
  - 使用 `vue create` 创建了一个vue项目
    - 使用了 `typescript`
      - 发现只是在 `.vue` 文件中使用了 `script[lang='ts']`, 而不是直接 `.tsx` 文件
  - 使用 `vue add element-ui` 添加了 `element-ui`
  - 手动添加 `app` 文件夹并加入 `electron` 相关内容
    - 使用 `yarn serve` 开启 `vue-cli-server`
    - 使用 `yarn start` 开启 `electron`
    - 发现问题:
      1. 如何将两个命令合成一个
      2. 打包后的 `electron` 如何引入入口文件
      3. 打包时如何去掉 `node` 和 `electron` 相关的包
  - 尝试使用 `.tsx` 格式的vue组件
  - 项目暂停
