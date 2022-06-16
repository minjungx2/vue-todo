const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 컴포넌트의 이름이 합성어가 아니면 에러 발생
  lintOnSave:false
})
