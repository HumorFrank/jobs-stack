import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import type { PostJobForm } from '@/types/postJob';
import type { JobType } from '@/types/job';
import { POST_JOB_FILTERS } from '@/types/postJob';
import { JOB_TYPE_LABELS } from '@/types/job';

interface PostJobFormProps {
  onSubmit: (form: PostJobForm) => void;
}

const initialForm: PostJobForm = {
  title: '',
  company: '',
  location: '',
  category: '',
  type: 'full-time',
  salary: '',
  description: '',
  requirements: [],
  benefits: [],
  applyUrl: '',
};

interface FormErrors {
  [key: string]: string;
}

export function PostJobForm({ onSubmit }: PostJobFormProps) {
  const [form, setForm] = useState<PostJobForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [reqInput, setReqInput] = useState('');
  const [benInput, setBenInput] = useState('');

  const inputClass =
    'h-10 bg-surface-elevated border-border-subtle text-text-primary rounded-lg text-sm focus:ring-accent/30 focus:border-accent';
  const textareaClass =
    'bg-surface-elevated border-border-subtle text-text-primary rounded-lg text-sm focus:ring-accent/30 focus:border-accent min-h-[120px]';
  const selectClass =
    'h-10 bg-surface-elevated border-border-subtle text-text-primary rounded-lg text-sm focus:ring-accent/30';

  function updateField<K extends keyof PostJobForm>(key: K, value: PostJobForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function addItem(field: 'requirements' | 'benefits', value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setForm((prev) => ({ ...prev, [field]: [...prev[field], trimmed] }));
  }

  function removeItem(field: 'requirements' | 'benefits', index: number) {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  }

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.title.trim()) e.title = '请输入职位名称';
    if (!form.company.trim()) e.company = '请输入公司名称';
    if (!form.location) e.location = '请选择工作地点';
    if (!form.category) e.category = '请选择职位类别';
    if (!form.salary.trim()) e.salary = '请输入薪资范围';
    if (!form.description.trim()) e.description = '请输入职位描述';
    if (!form.applyUrl.trim()) e.applyUrl = '请输入申请链接';
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
  }

  const errorBorder = 'border-red-500/60 focus:border-red-500';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 基本信息 */}
      <Card className="bg-surface-elevated border-border-subtle rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-text-primary mb-6">基本信息</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <Label className="text-text-secondary text-sm mb-1.5 block">职位名称 *</Label>
            <Input
              placeholder="例如：高级前端开发工程师"
              value={form.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('title', e.target.value)}
              className={`${inputClass} ${errors.title ? errorBorder : ''}`}
            />
            {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
          </div>

          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">公司名称 *</Label>
            <Input
              placeholder="例如：字节跳动"
              value={form.company}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('company', e.target.value)}
              className={`${inputClass} ${errors.company ? errorBorder : ''}`}
            />
            {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
          </div>

          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">薪资范围 *</Label>
            <Input
              placeholder="例如：30k-50k"
              value={form.salary}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('salary', e.target.value)}
              className={`${inputClass} ${errors.salary ? errorBorder : ''}`}
            />
            {errors.salary && <p className="text-red-400 text-xs mt-1">{errors.salary}</p>}
          </div>

          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">工作地点 *</Label>
            <Select value={form.location} onValueChange={(v: string | null) => updateField('location', v ?? '')}>
              <SelectTrigger className={`${selectClass} ${errors.location ? errorBorder : ''}`}>
                {form.location || '选择地点'}
              </SelectTrigger>
              <SelectContent>
                {POST_JOB_FILTERS.locations.map((loc) => (
                  <SelectItem key={loc} value={loc} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
          </div>

          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">职位类别 *</Label>
            <Select value={form.category} onValueChange={(v: string | null) => updateField('category', v ?? '')}>
              <SelectTrigger className={`${selectClass} ${errors.category ? errorBorder : ''}`}>
                {form.category || '选择类别'}
              </SelectTrigger>
              <SelectContent>
                {POST_JOB_FILTERS.categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
          </div>

          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">工作类型</Label>
            <Select value={form.type} onValueChange={(v: string | null) => updateField('type', (v ?? 'full-time') as JobType)}>
              <SelectTrigger className={selectClass}>
                {JOB_TYPE_LABELS[form.type]}
              </SelectTrigger>
              <SelectContent>
                {POST_JOB_FILTERS.types.map((t) => (
                  <SelectItem key={t.value} value={t.value} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* 职位描述 */}
      <Card className="bg-surface-elevated border-border-subtle rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-text-primary mb-6">职位描述</h2>

        <div className="space-y-5">
          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">职位描述 *</Label>
            <Textarea
              placeholder="描述这个职位的主要职责和工作内容..."
              value={form.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateField('description', e.target.value)}
              className={`${textareaClass} ${errors.description ? errorBorder : ''}`}
            />
            {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
          </div>

          {/* 任职要求 */}
          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">任职要求</Label>
            <div className="flex gap-2">
              <Input
                placeholder="输入一条要求后点击添加"
                value={reqInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReqInput(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addItem('requirements', reqInput);
                    setReqInput('');
                  }
                }}
                className={inputClass}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  addItem('requirements', reqInput);
                  setReqInput('');
                }}
                className="h-10 px-3 border-accent-border text-accent hover:bg-accent-muted shrink-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {form.requirements.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {form.requirements.map((req, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-border-default text-text-secondary gap-1 pr-1"
                  >
                    {req}
                    <button
                      type="button"
                      onClick={() => removeItem('requirements', i)}
                      className="ml-1 h-4 w-4 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors flex items-center justify-center"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* 福利待遇 */}
          <div>
            <Label className="text-text-secondary text-sm mb-1.5 block">福利待遇</Label>
            <div className="flex gap-2">
              <Input
                placeholder="输入一条福利后点击添加"
                value={benInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBenInput(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addItem('benefits', benInput);
                    setBenInput('');
                  }
                }}
                className={inputClass}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  addItem('benefits', benInput);
                  setBenInput('');
                }}
                className="h-10 px-3 border-accent-border text-accent hover:bg-accent-muted shrink-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {form.benefits.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {form.benefits.map((ben, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-accent-border text-accent bg-accent-muted gap-1 pr-1"
                  >
                    {ben}
                    <button
                      type="button"
                      onClick={() => removeItem('benefits', i)}
                      className="ml-1 h-4 w-4 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors flex items-center justify-center"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* 申请方式 */}
      <Card className="bg-surface-elevated border-border-subtle rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-text-primary mb-6">申请方式</h2>
        <div>
          <Label className="text-text-secondary text-sm mb-1.5 block">申请链接 *</Label>
          <Input
            placeholder="例如：https://jobs.example.com/apply"
            value={form.applyUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateField('applyUrl', e.target.value)}
            className={`${inputClass} ${errors.applyUrl ? errorBorder : ''}`}
          />
          {errors.applyUrl && <p className="text-red-400 text-xs mt-1">{errors.applyUrl}</p>}
        </div>
      </Card>

      {/* 提交 */}
      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => setForm(initialForm)}
          className="h-11 px-6 border-border-subtle text-text-secondary hover:text-text-primary rounded-xl"
        >
          重置
        </Button>
        <Button
          type="submit"
          className="h-11 px-8 bg-accent hover:bg-accent-hover text-surface font-bold rounded-xl text-sm"
        >
          发布职位
        </Button>
      </div>
    </form>
  );
}