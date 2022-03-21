# Gz-UI

- 初始化项目
```
vue create demo
```

- 安装组件库
```
npm install gz-ui
```

- 全局导入
```
import GzUI from 'gz-ui
import 'gz-ui/lib/gz-ui.css'

Vue.use(GzUi)
```

- 使用组件
```
<template>
  <div id="app">
    <gz-button type="primary">按钮</gz-button>
  </div>
</template>
```