# Cassette Futurism UI - React 组件化重构

这是一个将原有单文件HTML应用重构为模块化React组件的项目，采用Cassette Futurism设计风格，支持16:9固定比例显示。

## 项目结构

```
e:\test\MM\
├── src/
│   ├── components/          # React组件
│   │   ├── DataTable.jsx    # 数据表格组件
│   │   ├── LogConsole.jsx   # 日志控制台组件
│   │   └── UserInfoModal.jsx # 用户信息弹窗组件
│   ├── data/
│   │   └── config.js        # 数据配置和工具函数
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口文件
│   └── styles.css           # 样式文件
├── index.html               # HTML入口文件
├── package.json             # 项目配置
├── vite.config.js           # Vite构建配置
└── README.md               # 项目说明
```

## 组件说明

### DataTable.jsx
- 功能：显示数据表格，支持列冻结和表头点击
- 特性：可滚动的表格视图，菱形图标指示可点击列

### LogConsole.jsx  
- 功能：实时显示系统日志流
- 特性：自动滚动，支持不同日志类型（info/warn/error）

### UserInfoModal.jsx
- 功能：显示用户信息和权限矩阵的弹窗
- 特性：菱形设计风格，权限状态可视化

### App.jsx
- 功能：主应用组件，整合所有子组件
- 特性：标签页切换，状态管理，事件处理

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 设计特色

- **16:9固定比例**：自适应不同屏幕尺寸，保持16:9显示比例
- **Cassette Futurism风格**：复古未来主义设计，菱形元素贯穿整个界面
- **响应式布局**：支持宽屏和窄屏自适应
- **模块化组件**：可复用的React组件，便于维护和扩展

## 技术栈

- React 18
- Vite (构建工具)
- CSS3 (自定义属性和现代布局)
- ES6+ (现代JavaScript语法)