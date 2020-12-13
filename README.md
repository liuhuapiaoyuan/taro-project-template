### 模板说明：

该模板自带```tarojs-plugin-generator ```
工具，方便创建```component```,```page```


# 第一步：配置模板源 config templateSource
```taro config set templateSource github:liuhuapiaoyuan/taro-project-template#master```

# 第二步：初始化项目
 `taro init`

# 第三步：使用命令行 创建页面
```
 taro gen --page home/home
```
插件会自动更新app.json



### tao-gen插件的使用参考：

### 命令行参数

generator插件支持以下参数

| 参数项 | 类型 | 是否可选 | 用途 |
| :-----| :---- | :---- | :---- |
| --component | string | 是 | 创建一个组件/页面级组件 |
| --page | string | 是 | 创建一个页面 |


#### 使用案例

##### 1.创建项目组件
```bash
 taro gen --component Button
```
生成结果：
```
-- 组件:      components/Button/index.tsx
-- 组件样式:  components/Button/index.less
```



##### 2.创建页面组件
```bash
 taro gen --component index/Button  // index为页面文件夹名称，自动查询为 pages/index
```

生成结果：
```
-- 组件:      pages/index/components/Button/index.tsx
-- 组件样式:  pages/index/components/Button/index.less
```



##### 3.创建页面(简化版)
```bash
 taro gen --page mime 
```

生成结果：
```
-- 页面:          pages/mime/mime.tsx
-- 页面配置:       pages/mime/mime.config.tsx
-- 页面样式:      pages/mime/mime.less
```



##### 4.创建页面(指定具体页面名称)
```bash
 taro gen --page index/search 
```

生成结果：
```
-- 页面:          pages/index/search.tsx
-- 页面配置:       pages/index/search.config.tsx
-- 页面样式:      pages/index/search.less
```

```其中注意，页面组件命名自动为页面首字母大写，如上则生成页面为：SearchPage
```


