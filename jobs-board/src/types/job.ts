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

export type JobType = Job['type'];

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  'full-time': '全职',
  'part-time': '兼职',
  'contract': '合同制',
  'internship': '实习',
};

export const CATEGORIES = [
  '前端开发',
  '后端开发',
  '全栈开发',
  'DevOps',
  'UI/UX设计',
  '产品经理',
  '数据工程',
  '移动开发',
  '人工智能',
  'AI Agent',
  '测试',
] as const;

export const LOCATIONS = [
  '北京',
  '上海',
  '深圳',
  '杭州',
  '广州',
  '成都',
  '远程',
] as const;
