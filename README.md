## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/KevinQiaoL/gas/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/KevinQiaoL/gas/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
## 江西政务系统
### GAS - Government Affairs System
#### 基于uni-app开发的小程序wgt包
#### 目录结构
- pages存放页面
- components存放组件（包括函数式组件）
- static 存放静态资源
  - imgs 图片
  - fonts 字体/字体图标
- utils 存放公共函数及混入(mixins)函数
  - http.js ajax请求，基于axios封装
  - config.js 项目的相关配置。eg. server domain
  - api.js 管理API，模块化引用
  - common.js 公共函数
  - store.js vuex数据仓库
- uni.scss 样式基础配置，页面或组件中使用scss编写样式时，可以直接使用
- pages.json 路由及页面配置
