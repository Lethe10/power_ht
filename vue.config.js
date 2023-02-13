const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist', // 默认dist
  // 用于嵌套生成的静态资产（js,css,img,fonts）目录
  // assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html', // Default: 'index.html'
})