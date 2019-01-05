export default {
  // 其他配置

  extraBabelPlugins:[
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": true }]
  ],
  lessLoaderOptions: { // 向 CSS 相关的 loader 传递选项
        javascriptEnabled: true
  }
}

