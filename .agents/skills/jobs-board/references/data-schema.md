# Job Data Schema & Sample Data

## TypeScript Interface

```ts
export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  category: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;
  applyUrl: string;
}
```

## Field descriptions

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier, e.g. "job-001" |
| title | string | Job title in Chinese, e.g. "前端开发工程师" |
| company | string | Company name |
| logo | string | Placeholder URL or empty string. Use `https://ui-avatars.com/api/?name=CompanyName&background=random` for generated avatars |
| location | string | City name in Chinese: 北京, 上海, 深圳, 杭州, 广州, 成都, 远程 |
| category | string | Job category: 前端开发, 后端开发, 全栈开发, DevOps, UI/UX设计, 产品经理, 数据工程, 移动开发, 人工智能, 测试 |
| type | string | Employment type enum |
| salary | string | Salary range in Chinese, e.g. "25k-40k" |
| description | string | Full job description in Chinese, 2-4 paragraphs |
| requirements | string[] | List of requirements in Chinese |
| benefits | string[] | List of benefits in Chinese |
| postedAt | string | ISO 8601 date string |
| applyUrl | string | Placeholder URL, e.g. "#apply" |

## Sample data

Below is sample data for `src/data/jobs.ts`. Include at least 15 entries covering diverse categories, locations, and types.

```ts
import { Job } from '@/types/job';

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: '高级前端开发工程师',
    company: '字节跳动',
    logo: 'https://ui-avatars.com/api/?name=ByteDance&background=4F46E5&color=fff',
    location: '北京',
    category: '前端开发',
    type: 'full-time',
    salary: '35k-55k',
    description: '我们正在寻找一位经验丰富的前端开发工程师，加入我们的核心产品团队。你将负责构建高性能、可扩展的Web应用程序，服务于数亿用户。团队采用React + TypeScript技术栈，使用微前端架构，追求极致的用户体验和工程效率。',
    requirements: [
      '5年以上前端开发经验',
      '精通React、TypeScript及现代前端工具链',
      '熟悉微前端架构和大型应用状态管理',
      '具备性能优化经验，了解浏览器渲染原理',
      '良好的沟通能力和团队协作精神',
    ],
    benefits: [
      '免费三餐及下午茶',
      '弹性工作制',
      '年度体检',
      '股票期权',
      '技术分享和成长空间',
    ],
    postedAt: '2026-05-20T10:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-002',
    title: '后端开发工程师',
    company: '阿里巴巴',
    logo: 'https://ui-avatars.com/api/?name=Alibaba&background=FF6B00&color=fff',
    location: '杭州',
    category: '后端开发',
    type: 'full-time',
    salary: '30k-50k',
    description: '加入阿里云核心团队，参与大规模分布式系统的设计与开发。你将负责高并发、高可用服务的架构设计和实现，处理海量数据的存储与计算挑战。我们使用Java/Go技术栈，深度使用云原生技术。',
    requirements: [
      '3年以上后端开发经验',
      '精通Java或Go语言',
      '熟悉分布式系统设计和高并发处理',
      '了解Kubernetes、Docker等云原生技术',
      '有大规模系统经验者优先',
    ],
    benefits: [
      '六险一金',
      '年度旅游',
      '内部技术培训',
      '购房无息贷款',
      '弹性工作',
    ],
    postedAt: '2026-05-19T08:30:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-003',
    title: '全栈开发工程师',
    company: '美团',
    logo: 'https://ui-avatars.com/api/?name=Meituan&background=FFD100&color=333',
    location: '北京',
    category: '全栈开发',
    type: 'full-time',
    salary: '28k-45k',
    description: '负责美团到店业务的全栈开发，从需求分析到上线运维全流程参与。前端使用React，后端使用Node.js/Java，需要具备全栈思维，能够独立完成功能模块的设计与实现。',
    requirements: [
      '3年以上全栈开发经验',
      '前端精通React，后端熟悉Node.js或Java',
      '了解数据库设计和API设计',
      '具备产品思维，关注用户体验',
      '有O2O或电商行业经验者优先',
    ],
    benefits: [
      '餐饮补贴',
      '弹性工作',
      '年度体检',
      '技术成长空间',
      '团建活动',
    ],
    postedAt: '2026-05-18T14:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-004',
    title: 'DevOps工程师',
    company: '腾讯',
    logo: 'https://ui-avatars.com/api/?name=Tencent&background=07C160&color=fff',
    location: '深圳',
    category: 'DevOps',
    type: 'full-time',
    salary: '30k-50k',
    description: '负责腾讯云基础设施的自动化运维体系建设，包括CI/CD流水线优化、容器化部署、监控告警和故障排查。你将与开发团队紧密合作，提升研发效率和系统稳定性。',
    requirements: [
      '3年以上DevOps或SRE经验',
      '精通Kubernetes、Docker、Terraform',
      '熟悉Jenkins、GitLab CI等CI/CD工具',
      '了解Prometheus、Grafana等监控体系',
      '具备故障排查和性能调优能力',
    ],
    benefits: [
      '股票期权',
      '弹性工作',
      '年度体检',
      '技术培训',
      '免费班车',
    ],
    postedAt: '2026-05-17T09:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-005',
    title: 'UI/UX设计师',
    company: '小红书',
    logo: 'https://ui-avatars.com/api/?name=RedNote&background=FE2C55&color=fff',
    location: '上海',
    category: 'UI/UX设计',
    type: 'full-time',
    salary: '25k-40k',
    description: '负责小红书核心产品功能的用户体验设计和视觉设计。你需要深入理解年轻用户的需求和行为，通过设计提升产品的易用性和美观度。与产品经理和开发团队紧密协作，推动设计方案落地。',
    requirements: [
      '3年以上互联网产品UI/UX设计经验',
      '精通Figma等设计工具',
      '具备用户研究和数据驱动设计能力',
      '有移动端设计经验',
      '优秀的审美和设计品味',
    ],
    benefits: [
      '弹性工作',
      '免费三餐',
      '年度旅游',
      '设计工具补贴',
      '成长空间',
    ],
    postedAt: '2026-05-16T11:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-006',
    title: '产品经理',
    company: '拼多多',
    logo: 'https://ui-avatars.com/api/?name=PDD&background=E02E24&color=fff',
    location: '上海',
    category: '产品经理',
    type: 'full-time',
    salary: '30k-50k',
    description: '负责电商核心功能的产品规划与迭代，通过数据分析和用户调研驱动产品决策。你需要协调设计、开发、测试团队，确保产品按时高质量交付，并持续优化用户体验和业务指标。',
    requirements: [
      '3年以上互联网产品经理经验',
      '具备数据分析能力，熟练使用SQL',
      '优秀的沟通协调和项目管理能力',
      '有电商或社交产品经验者优先',
      '结果导向，抗压能力强',
    ],
    benefits: [
      '股票期权',
      '弹性工作',
      '年度体检',
      '餐饮补贴',
      '快速晋升通道',
    ],
    postedAt: '2026-05-15T16:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-007',
    title: '数据工程师',
    company: '网易',
    logo: 'https://ui-avatars.com/api/?name=NetEase&background=C8161D&color=fff',
    location: '杭州',
    category: '数据工程',
    type: 'full-time',
    salary: '28k-45k',
    description: '负责网易大数据平台的建设与优化，包括数据仓库设计、ETL流程开发、实时计算和离线计算任务调度。你将处理PB级数据，为业务决策提供可靠的数据支撑。',
    requirements: [
      '3年以上数据工程经验',
      '精通Spark、Flink等大数据框架',
      '熟悉Hive、ClickHouse等数据仓库技术',
      '了解数据治理和数据质量管理',
      '有实时计算经验者优先',
    ],
    benefits: [
      '免费三餐',
      '弹性工作',
      '年度体检',
      '股票期权',
      '技术培训',
    ],
    postedAt: '2026-05-14T10:30:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-008',
    title: 'iOS开发工程师',
    company: '快手',
    logo: 'https://ui-avatars.com/api/?name=Kuaishou&background=FF4906&color=fff',
    location: '北京',
    category: '移动开发',
    type: 'full-time',
    salary: '30k-50k',
    description: '负责快手主站iOS客户端的核心功能开发与性能优化。你将参与短视频播放、直播互动等核心场景的技术方案设计和实现，追求极致的流畅体验。',
    requirements: [
      '3年以上iOS开发经验',
      '精通Swift和Objective-C',
      '熟悉iOS性能优化和内存管理',
      '了解音视频编解码技术',
      '有大型App开发经验者优先',
    ],
    benefits: [
      '免费三餐',
      '弹性工作',
      '年度体检',
      '股票期权',
      '技术分享',
    ],
    postedAt: '2026-05-13T09:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-009',
    title: 'AI算法工程师',
    company: '百度',
    logo: 'https://ui-avatars.com/api/?name=Baidu&background=2932E1&color=fff',
    location: '北京',
    category: '人工智能',
    type: 'full-time',
    salary: '40k-70k',
    description: '加入百度文心大模型团队，参与大语言模型的训练、优化和应用落地。你将负责模型架构设计、训练策略优化、推理性能提升等核心工作，推动AI技术在搜索、推荐、对话等场景的应用。',
    requirements: [
      '硕士及以上学历，计算机或相关专业',
      '精通PyTorch，有深度学习模型训练经验',
      '熟悉Transformer架构和大模型训练技术',
      '了解模型压缩、量化、蒸馏等优化方法',
      '有顶会论文发表者优先',
    ],
    benefits: [
      '股票期权',
      '弹性工作',
      'GPU算力资源',
      '学术交流机会',
      '年度体检',
    ],
    postedAt: '2026-05-12T14:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-010',
    title: '前端开发工程师（实习）',
    company: '京东',
    logo: 'https://ui-avatars.com/api/?name=JD&background=E4393C&color=fff',
    location: '北京',
    category: '前端开发',
    type: 'internship',
    salary: '200-300/天',
    description: '京东零售前端团队实习生岗位，参与电商核心页面的开发与维护。你将在导师指导下学习React技术栈和前端工程化实践，参与真实项目的需求开发和Bug修复。',
    requirements: [
      '本科及以上学历，计算机相关专业在读',
      '掌握HTML、CSS、JavaScript基础',
      '了解React或Vue框架',
      '每周至少出勤4天，实习3个月以上',
      '有个人项目或开源贡献者优先',
    ],
    benefits: [
      '免费班车',
      '餐饮补贴',
      '实习证明',
      '转正机会',
      '技术培训',
    ],
    postedAt: '2026-05-20T08:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-011',
    title: '测试开发工程师',
    company: '滴滴',
    logo: 'https://ui-avatars.com/api/?name=DiDi&background=FF8C00&color=fff',
    location: '北京',
    category: '测试',
    type: 'full-time',
    salary: '25k-40k',
    description: '负责滴滴出行核心业务的质量保障工作，包括自动化测试框架开发、性能测试、接口测试等。你需要构建高效的测试体系，保障线上服务的稳定性和可靠性。',
    requirements: [
      '3年以上测试开发经验',
      '精通Python或Java，有自动化测试框架开发经验',
      '熟悉性能测试工具和方法',
      '了解持续集成和DevOps流程',
      '有大型互联网公司测试经验者优先',
    ],
    benefits: [
      '弹性工作',
      '年度体检',
      '股票期权',
      '免费晚餐',
      '技术培训',
    ],
    postedAt: '2026-05-11T10:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-012',
    title: '远程全栈开发工程师',
    company: 'Shopify',
    logo: 'https://ui-avatars.com/api/?name=Shopify&background=96BF48&color=fff',
    location: '远程',
    category: '全栈开发',
    type: 'full-time',
    salary: '30k-50k',
    description: '加入Shopify全球远程团队，参与电商平台核心功能的开发。前端使用React + GraphQL，后端使用Ruby on Rails。我们拥抱远程工作文化，提供灵活的工作时间和全球协作机会。',
    requirements: [
      '3年以上全栈开发经验',
      '前端精通React，后端熟悉Ruby on Rails或Node.js',
      '英语沟通能力良好',
      '具备远程工作经验或自我管理能力',
      '了解GraphQL和RESTful API设计',
    ],
    benefits: [
      '完全远程办公',
      '弹性工作时间',
      '年度学习津贴',
      '家庭办公设备补贴',
      '全球团队协作',
    ],
    postedAt: '2026-05-10T12:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-013',
    title: 'Android开发工程师',
    company: '小米',
    logo: 'https://ui-avatars.com/api/?name=Xiaomi&background=FF6700&color=fff',
    location: '北京',
    category: '移动开发',
    type: 'full-time',
    salary: '28k-45k',
    description: '负责小米商城Android客户端的开发与优化，参与电商购物流程、支付系统等核心模块的技术方案设计和实现。追求极致的性能和用户体验。',
    requirements: [
      '3年以上Android开发经验',
      '精通Kotlin和Java',
      '熟悉Android性能优化和架构设计',
      '了解Jetpack组件和MVVM架构',
      '有电商App开发经验者优先',
    ],
    benefits: [
      '员工内购优惠',
      '弹性工作',
      '年度体检',
      '股票期权',
      '技术培训',
    ],
    postedAt: '2026-05-09T15:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-014',
    title: '兼职前端开发',
    company: '创业公司',
    logo: 'https://ui-avatars.com/api/?name=Startup&background=8B5CF6&color=fff',
    location: '远程',
    category: '前端开发',
    type: 'part-time',
    salary: '200-400/小时',
    description: '一家AI驱动的教育科技创业公司正在寻找兼职前端开发工程师。你将负责公司官网和用户端产品的开发，使用React + TypeScript技术栈。工作时间灵活，每周约15-20小时。',
    requirements: [
      '2年以上React开发经验',
      '精通TypeScript',
      '具备独立开发和交付能力',
      '良好的沟通和自我管理能力',
      '对教育科技有兴趣',
    ],
    benefits: [
      '远程办公',
      '灵活工作时间',
      '期权激励',
      '成长空间大',
      '扁平管理',
    ],
    postedAt: '2026-05-21T09:00:00Z',
    applyUrl: '#apply',
  },
  {
    id: 'job-015',
    title: '合同制DevOps顾问',
    company: '华为云',
    logo: 'https://ui-avatars.com/api/?name=Huawei&background=CF0A2C&color=fff',
    location: '深圳',
    category: 'DevOps',
    type: 'contract',
    salary: '40k-60k',
    description: '华为云团队正在寻找一位资深DevOps顾问，为期6个月的合同制岗位。你将负责客户项目的云原生架构咨询和落地实施，包括容器化改造、CI/CD流水线建设、监控体系搭建等。',
    requirements: [
      '5年以上DevOps或云原生架构经验',
      '精通Kubernetes生态和云原生最佳实践',
      '具备客户咨询和方案设计能力',
      '了解华为云或主流公有云平台',
      '优秀的文档和沟通能力',
    ],
    benefits: [
      '高薪合同',
      '华为食堂',
      '项目奖金',
      '大厂背书',
      '人脉积累',
    ],
    postedAt: '2026-05-08T11:00:00Z',
    applyUrl: '#apply',
  },
];
```

## Category values

Use these exact category strings for consistency across the app:

- 前端开发
- 后端开发
- 全栈开发
- DevOps
- UI/UX设计
- 产品经理
- 数据工程
- 移动开发
- 人工智能
- 测试

## Location values

- 北京
- 上海
- 深圳
- 杭州
- 广州
- 成都
- 远程

## Job type values

- `full-time` — 全职
- `part-time` — 兼职
- `contract` — 合同制
- `internship` — 实习