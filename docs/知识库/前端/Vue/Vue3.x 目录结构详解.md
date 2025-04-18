# Vue3.x 目录结构详解

![img](https://uv4fs8d5x5w.feishu.cn/space/api/box/stream/download/asynccode/?code=YmIzZDQyNjEzOWMxZTQ1YmViM2ZlNDgwYzYyYmU1NjdfNW1XVlJZdGc2elpKOUxkNmZRc3o5RzUwUER3c1FRalpfVG9rZW46SU9yUGI0ODBYb2R5b1h4UWdFVGM5aGVkbnRkXzE3NDEyMjk4MDE6MTc0MTIzMzQwMV9WNA)

```JavaScript
|-node_modules       -- 所有的项目依赖包都放在这个目录下
|-public             -- 公共文件夹，存放不需要经过构建处理的静态资源，直接复制到输出目录。比如一些第三方库、favicon.ico、robots.txt 等。
---|favicon.ico      -- 网站的显示图标
---|index.html       -- 入口的html文件
|-src                -- 源文件目录，编写的代码基本都在这个目录下
---|assets           -- 放置静态文件的目录，存放需要经过构建处理的静态资源，会被webpack处理后打包到输出目录。比如logo.pn就放在这里
---|components       -- Vue的组件文件，自定义的组件都会放到这
---|router           -- vue-router vue路由的配置文件，
---|store            -- 存放 vuex/pinia 为vue专门开发的状态管理器
---|views            -- 存放视图文件，
---|App.vue          -- 根组件，这个在Vue2中也有
---|main.ts          -- 入口文件，因为采用了TypeScript所以是ts结尾
---|shims-vue.d.ts   -- 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件
|-.browserslistrc    -- 在不同前端工具之间公用目标浏览器和node版本的配置文件，作用是设置兼容性
|-.eslintrc.js       -- Eslint的配置文件，不用作过多介绍
|-.gitignore         -- 用来配置那些文件不归git管理
|-package.json       -- 命令配置和包管理文件
|-README.md          -- 项目的说明文件，使用markdown语法进行编写
|-vue.config.json    -- 请求代理, webpack 配置, 打包输出等都会在这里配置
|-yarn.lock          -- 使用yarn后自动生成的文件，由Yarn管理，安装yarn包时的重要信息存储到yarn.lock文件中
```
