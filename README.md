<h2 align="center">Imcoder - Admin 后台管理模板</h2>
<div align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.2-blue.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.12.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://www.echartsjs.com/zh/index.html">
    <img src="https://img.shields.io/badge/echarts-4.4.0-orange" alt="echarts">
  </a>
  <a href="https://github.com/dongdong-cloud/dd-admin-web">
    <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="echarts">
  </a>
</div>

Dd-Admin 是一个前端解决方案，基于 vue 2 和 element-ui 2.12.0 开发的后台管理模板。功能涵盖动态路由、富文本编辑、图表统计等多种丰富组件。能够快速帮助中小型企业搭建后台产品模型。


### 功能简介
-----

- 登录 / 注销

- 动态路由
  - 登录验证
  - 权限控制（开发中）
- 全局功能
  - 全屏显示
  - 菜单控制
  - 多级路由（菜单）嵌套
  - 面包屑设置
  - 个性页签视图
  - 多种图表实例
  - 丰富字体图标
  - 页面自适应
  - 个性化皮肤（开发中）
  - 国际化语言切换
  - 支持外部链接
  - 支持菜单点击
- 基础组件
  - 表格
    - 基础表格
    - 分页表格
    - 可编辑表格
    - 拖拽表格（支持行拖拽和列拖拽）
  - 表单
    - 垂直表单
    - 行内表单
    - 多列表单
  - 楼层切换
  - 树形选择器
  - 树形组件
  - 颜色选择器
  - 动态数字
  - 顶部吸附（开发中）
  - 图片剪裁
  - 一键分享
- 字体图标
- 编辑器
  - ueditor
  - 代码编辑器
- 文件操作
  - Excel导入导出
  - PDf预览
- 错误页面
  - 401 页面
  - 404 页面
  - 500 页面

### 演示地址
-----

演示地址 [https://www.imcoder.fun/imcoder-admin](https://www.imcoder.fun/imcoder-admin)
  
### 系统截图
-----

![首页](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/1.jpg)
![表格](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/2.jpg)
![表单](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/3.jpg)
![编辑器](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/4.jpg)
![编辑器](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/5.jpg)
![设置](https://gitee.com/imcoder-cloud/imcoder-admin/raw/master/src/assets/images/6.jpg)

### 安装步骤
-----

``` bash
# 安装依赖
npm install

# 访问地址 localhost:8088
npm run dev

# 编译打包
npm run build
```

### 目录结构
-----

```
├── build                       // help
├── config                      // 配置文件
├── src                         // 核心代码
│   ├── assets                  
│   │   ├── css                 // 自定义样式文件
│   │   └── images              // 图片文件
│   ├── auth                    // 登录认证相关
│   ├── components              // vue 组件
│   ├── config                  // 配置控制
│   ├── json                    // json 文件
│   ├── router                  // 路由控制
│   ├── store                   // vuex 存储
│   │   ├── modules
│   │   ├── getter.js
│   │   └── index.js
│   ├── utils                   // 工具
│   ├── views                   // 视图
│   │   ├── basic               // 基础组件
│   │   ├── components          // 视图组件
│   │   ├── donate              // 捐赠
│   │   ├── editor              // 编辑器组件
│   │   ├── error               // 错误页面
│   │   ├── file                // 文件操作
│   │   ├── icon                // 字体图标
│   │   ├── menu-1              // 多级菜单
│   │   ├── home.vue            // 项目主框架
│   │   ├── login.vue           // 登录
│   │   └── settings.vue        // 侧边设置
│   ├── App.vue                 // 根路由视图
│   └── main.js                 // 项目入口
├── static
│   ├── ueditor                 // ueditor插件
│   └── .gitkeep
├── test                        
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js          
├── .gitignore
├── .postcssrc.js
├── README.md                     // read me
├── index.html                    // 项目首页
├── package-lock.json
└── package.json
```

### 浏览器兼容
-----

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Opera |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions

### 捐赠
---
项目的创作离不开您的支持，如果你觉得此项目能够帮助到您，不如请作者喝杯咖啡吧。<br>
<br>
<div style="display:flex">
  <div style="display:flex;flex-direction:column;align-items:center;width:150px">
    <span>支付宝</span>
    <br>
    <img src="./src/assets/images/zfb.jpg" style="width:100%;">
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;width:150px;pxmargin-left:50px">
    <span>微信</span>
    <br>
    <img src="./src/assets/images/wx.jpg" style="width:100%;">
  </div>
</div>

### 其他
---
本项目部分灵感来源于其他开源项目el-admin
