# 职引力 — Jobs Board

基于 React + TypeScript + Vite 的招聘信息 Web 应用。采用 Shadcn/ui + Tailwind CSS 构建，支持深色/亮色双主题切换，内置 32 条中文 Mock 职位数据。

> **声明**：本项目为纯前端演示项目，所有职位及招聘信息均为模拟生成的虚拟数据，不构成真实招聘要约。项目不涉及任何后端服务、数据库或第三方 API，发布职位功能的数据仅存储在浏览器 localStorage 中。

---

## 目录

- [技术栈](#技术栈)
- [功能特性](#功能特性)
- [项目目录](#项目目录)
- [数据模型](#数据模型)
- [主题系统](#主题系统)
- [数据流](#数据流)
- [快速开始](#快速开始)
- [可用脚本](#可用脚本)
- [扩展方向](#扩展方向)

---

## 技术栈

| 类别      | 技术                  | 版本               |
| --------- | --------------------- | ------------------ |
| 前端框架  | React                 | 19                 |
| 类型系统  | TypeScript            | ~6                 |
| 构建工具  | Vite                  | ~8                 |
| CSS 方案  | Tailwind CSS          | v4 (Vite 插件模式) |
| UI 组件库 | Shadcn/ui (base-nova) | latest             |
| UI 原语   | @base-ui/react        | latest             |
| 动画库    | Motion                | latest             |
| 路由      | React Router          | ~7                 |
| 图标      | Lucide React          | latest             |
| 包管理器  | pnpm                  | —                  |

---

## 功能特性

### 职位浏览

- 响应式网格布局展示职位卡片（1/2/3 列自适应）
- 32 条 Mock 职位数据，覆盖 11 个职位类别、7 个城市、4 种工作类型
- 卡片 hover 顶部琥珀色扫描线动画
- 交错入场动画（Motion 驱动）

### 搜索与筛选

- 关键词搜索（匹配职位名称、公司、描述）
- 按职位类别、工作地点、工作类型下拉筛选
- 筛选结果实时计数
- 空结果友好提示

### 职位详情

- 完整职位描述、任职要求、福利待遇
- 薪资范围突出显示
- "立即申请"按钮
- 返回列表导航

### 发布职位

- 3 区块 Card 表单：基本信息、职位描述、申请方式
- 任职要求/福利待遇支持动态添加/删除条目
- 必填字段校验，错误状态红色提示
- 提交成功动画提示，支持"查看职位"和"继续发布"
- 发布数据存入 localStorage，刷新后保留

### 双主题切换

- 深色主题：暗黑底 + 琥珀色 accent
- 亮色主题：暖白底 + 深青色 accent
- Header 右侧 Sun/Moon 图标一键切换
- 主题偏好持久化到 localStorage

---

## 项目目录

```
jobs-stack/
├── .agents/
│   └── skills/
│       ├── frontend-design/          # 前端设计规范 Skill
│       │   └── SKILL.md
│       └── jobs-board/               # 招聘网站构建 Skill
│           ├── SKILL.md
│           └── references/
│               └── data-schema.md    # 职位数据 Schema 与示例
├── jobs-board/                       # ★ 主应用目录
│   ├── public/                       # 静态资源
│   ├── src/
│   │   ├── components/
│   │   │   ├── jobs/                 # 业务组件
│   │   │   │   ├── HeroSection.tsx   # 首页 Hero 区域
│   │   │   │   ├── JobCard.tsx       # 职位卡片
│   │   │   │   ├── JobDetail.tsx     # 职位详情内容
│   │   │   │   ├── JobFilters.tsx    # 筛选器（类别/地点/类型）
│   │   │   │   ├── JobList.tsx       # 职位列表网格
│   │   │   │   ├── JobSearch.tsx     # 搜索输入框
│   │   │   │   └── PostJobForm.tsx   # 发布职位表单
│   │   │   ├── layout/              # 布局组件
│   │   │   │   ├── Header.tsx       # 顶部导航栏（含主题切换）
│   │   │   │   └── Footer.tsx       # 底部页脚
│   │   │   └── ui/                  # Shadcn/ui 基础组件
│   │   │       ├── badge.tsx
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── label.tsx
│   │   │       ├── select.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       └── textarea.tsx
│   │   ├── data/
│   │   │   └── jobs.ts              # 32 条 Mock 数据 + localStorage 读写
│   │   ├── hooks/
│   │   │   ├── useJobs.tsx          # 搜索 + 筛选逻辑 Hook
│   │   │   └── useTheme.tsx         # 主题切换 Context + Hook
│   │   ├── lib/
│   │   │   └── utils.ts             # cn() className 合并工具
│   │   ├── pages/
│   │   │   ├── HomePage.tsx         # 首页（搜索 + 筛选 + 列表）
│   │   │   ├── JobDetailPage.tsx    # 职位详情页
│   │   │   ├── PostJobPage.tsx      # 发布职位页
│   │   │   └── NotFoundPage.tsx     # 404 页面
│   │   ├── types/
│   │   │   ├── job.ts               # Job 接口 + 类别/地点/类型常量
│   │   │   └── postJob.ts           # 发布表单类型 + formToJob 转换
│   │   ├── App.tsx                  # 路由配置 + ThemeProvider
│   │   ├── index.css                # 双主题 CSS 变量定义
│   │   └── main.tsx                 # 入口文件（BrowserRouter）
│   ├── components.json              # Shadcn/ui 配置
│   ├── index.html                   # HTML 入口（Google Fonts）
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   └── vite.config.ts               # Vite + Tailwind + 路径别名
└── skills-lock.json                 # Skill 注册锁文件
```

---

## 数据模型

### Job 接口

```typescript
interface Job {
  id: string; // 唯一标识，如 "job-001"
  title: string; // 职位名称，如 "高级前端开发工程师"
  company: string; // 公司名称
  logo: string; // 公司头像 URL（ui-avatars.com 生成）
  location: string; // 工作地点
  category: string; // 职位类别
  type: JobType; // 工作类型
  salary: string; // 薪资范围，如 "35k-55k"
  description: string; // 职位描述
  requirements: string[]; // 任职要求列表
  benefits: string[]; // 福利待遇列表
  postedAt: string; // 发布时间 (ISO 8601)
  applyUrl: string; // 申请链接
}

type JobType = "full-time" | "part-time" | "contract" | "internship";
```

### 职位类别

前端开发、后端开发、全栈开发、DevOps、UI/UX设计、产品经理、数据工程、移动开发、人工智能、AI Agent、测试

### 工作地点

北京、上海、深圳、杭州、广州、成都、远程

### 工作类型

| 值           | 中文标签 |
| ------------ | -------- |
| `full-time`  | 全职     |
| `part-time`  | 兼职     |
| `contract`   | 合同制   |
| `internship` | 实习     |

---

## 主题系统

通过 `data-theme` 属性切换 CSS 自定义变量，所有组件通过语义化 class 引用颜色（如 `bg-surface`、`text-accent`、`border-border-subtle`），切换主题无需修改任何组件代码。

### 主题变量对照

| CSS 变量                   | 深色主题         | 亮色主题         |
| -------------------------- | ---------------- | ---------------- |
| `--color-surface`          | `#0a0a0b`        | `#fafaf9`        |
| `--color-surface-elevated` | `#141416`        | `#ffffff`        |
| `--color-surface-overlay`  | `#1c1c1f`        | `#f5f5f4`        |
| `--color-border-subtle`    | `#27272a`        | `#e7e5e4`        |
| `--color-text-primary`     | `#fafafa`        | `#1c1917`        |
| `--color-text-secondary`   | `#a1a1aa`        | `#57534e`        |
| `--color-accent`           | `#f59e0b` (琥珀) | `#0d9488` (深青) |
| `--color-accent-hover`     | `#fbbf24`        | `#14b8a6`        |

### 字体

| 用途      | 字体                    | 来源         |
| --------- | ----------------------- | ------------ |
| 标题      | Playfair Display (衬线) | Google Fonts |
| 正文      | DM Sans (无衬线)        | Google Fonts |
| 代码/薪资 | JetBrains Mono (等宽)   | Google Fonts |

### 持久化

主题偏好存储在 `localStorage` 的 `jobs-board-theme` key 中，值为 `"dark"` 或 `"light"`。

---

## 数据流

```
┌─────────────────┐     ┌──────────────┐     ┌───────────┐     ┌──────────┐
│ 静态 Mock 数据    │     │ localStorage  │     │ useJobs   │     │ 页面渲染  │
│ (32条, jobs.ts)  │────▶│ (用户发布)     │────▶│ Hook      │────▶│          │
└─────────────────┘     └──────────────┘     │ (搜索+筛选)│     │ - 首页   │
                                             └───────────┘     │ - 详情页 │
                                                               │ - 发布页 │
                                                               └──────────┘
```

- `getAllJobs()` 合并静态数据与 localStorage 中的用户发布数据
- `addJob(job)` 将新职位写入 localStorage
- 用户发布的职位刷新后仍可见，与静态数据共存
- 后续对接真实 API 时只需替换 `getAllJobs()` 和 `addJob()` 的数据源

---

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm

### 安装与运行

```bash
# 进入应用目录
cd jobs-board

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 生产构建
pnpm build

# 预览构建产物
pnpm preview
```

开发服务器启动后访问 `http://localhost:5173`。

---

## 可用脚本

| 脚本     | 命令                                    | 说明                                |
| -------- | --------------------------------------- | ----------------------------------- |
| 开发     | `pnpm dev`                              | 启动 Vite 开发服务器，支持 HMR      |
| 构建     | `pnpm build`                            | TypeScript 类型检查 + Vite 生产构建 |
| 预览     | `pnpm preview`                          | 本地预览生产构建产物                |
| 类型检查 | `npx tsc -p tsconfig.app.json --noEmit` | 仅运行 TypeScript 类型检查          |

---

## 扩展方向

- **对接真实 API** — 替换 `getAllJobs()` 和 `addJob()` 为 REST/GraphQL 调用
- **用户认证** — 求职者/雇主登录注册
- **职位收藏** — localStorage 或 API 书签功能
- **分页支持** — 大数据集下的分页加载
- **雇主管理后台** — 已发布职位的编辑/下架/统计
- **简历投递** — 在线简历填写与投递追踪
- **部署** — `pnpm build` 产出静态文件，可部署至 Vercel / Netlify / Cloudflare Pages
