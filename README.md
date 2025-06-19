# 🌟 高睿浠的成长乐园

一个专为儿童打造的成长记录平台，记录学习成长的每一个美好瞬间。

## ✨ 项目特色

- 🎓 **学习导航** - 英语、数学、语文等学科的趣味学习
- 📸 **成长瞬间** - 记录宝贝每一个珍贵的成长时刻
- 💝 **成长寄语** - 来自家人朋友的温暖祝福与鼓励
- 🎨 **精美设计** - 迪士尼风格的梦幻界面设计
- 📱 **响应式布局** - 完美适配各种设备屏幕

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **路由**: React Router DOM
- **部署平台**: Cloudflare Pages

## 📦 项目结构

```
src/
├── components/          # 公共组件
│   ├── ErrorBoundary.tsx   # 全局错误边界
│   └── Navigation.tsx      # 导航组件
├── pages/              # 页面组件
│   ├── Home.tsx           # 首页
│   ├── Learning.tsx       # 学习导航
│   ├── Moments.tsx        # 成长瞬间
│   └── Messages.tsx       # 成长寄语
├── data/               # 数据文件
│   ├── quotes.ts          # 励志语录
│   └── messages.ts        # 寄语数据
├── App.tsx             # 根组件
├── main.tsx           # 应用入口
└── index.css          # 全局样式
```

## 🛠️ 本地开发

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🌐 部署说明

### Cloudflare Pages 部署

1. **推送代码到 GitHub 仓库**
2. **在 Cloudflare Pages 中连接仓库**
3. **配置构建设置**:
   - 构建命令: `npm run build`
   - 输出目录: `dist`
   - Node.js 版本: 18 或更高
4. **部署完成**

### 其他部署平台

项目支持部署到任何支持静态网站的平台：
- Vercel
- Netlify  
- GitHub Pages
- 阿里云 OSS
- 腾讯云 COS

## 📋 功能说明

### 🎓 学习导航
- 支持英语、数学、语文、科学、道德与法制五个学科
- 按年级和学期组织学习内容
- 一年级下学期英语和数学已接入在线学习平台
- 其他年级显示"暂未开放"状态

### 📸 成长瞬间
- 按类别展示成长照片和视频
- 支持学习时光、快乐游戏、家庭时光等分类
- 点击查看大图和详细信息
- 统计总回忆数、照片数、视频数等

### 💝 成长寄语
- 自动滚动展示所有寄语
- 支持添加新的温暖寄语
- 随机分配头像和颜色主题
- 统计参与人数和寄语总数

### 🏠 首页
- 迪士尼城堡背景的梦幻设计
- 轮换显示励志语录（彩虹光照效果）
- 成长相片展示区
- 液态玻璃效果的功能卡片

## 🎨 设计特色

- **迪士尼风格**: 梦幻城堡背景，童话般的视觉体验
- **彩虹效果**: 首页语录采用彩虹光照动画
- **液态玻璃**: 毛玻璃效果的现代化界面
- **微交互**: 丰富的悬浮和点击动画效果
- **响应式**: 完美适配手机、平板、桌面设备

## 🔧 自定义配置

### 修改学习链接

在 `src/pages/Learning.tsx` 中修改 `subjectLinks` 对象：

```typescript
const subjectLinks: { [key: string]: { [key: string]: string } } = {
  'english': {
    '一年级下学期': 'https://your-english-site.com/'
  },
  'math': {
    '一年级下学期': 'https://your-math-site.com/'
  }
};
```

### 添加励志语录

在 `src/data/quotes.ts` 中添加新的语录：

```typescript
export const quotes = [
  "你的新语录...",
  // 其他语录
];
```

### 修改初始寄语

在 `src/data/messages.ts` 中修改 `initialMessages` 数组。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues
- Email: [your-email@example.com]

---

⭐ 如果这个项目对你有帮助，请给它一个星标！