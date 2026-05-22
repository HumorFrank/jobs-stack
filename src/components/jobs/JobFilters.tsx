import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import type { JobType } from '@/types/job';
import { JOB_TYPE_LABELS } from '@/types/job';

interface JobFiltersProps {
  categories: string[];
  locations: string[];
  types: { value: JobType; label: string }[];
  selectedCategory: string;
  selectedLocation: string;
  selectedType: string;
  onCategoryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export function JobFilters({
  categories,
  locations,
  types,
  selectedCategory,
  selectedLocation,
  selectedType,
  onCategoryChange,
  onLocationChange,
  onTypeChange,
}: JobFiltersProps) {
  const selectClass =
    'h-10 bg-surface-elevated border-border-subtle text-text-primary rounded-lg text-sm focus:ring-accent/30';

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Select value={selectedCategory} onValueChange={(v: string | null) => onCategoryChange(v ?? 'all')}>
        <SelectTrigger className={`${selectClass} sm:w-[160px]`}>
          {selectedCategory === 'all' ? '职位类别' : selectedCategory}
        </SelectTrigger>
        <SelectContent className="bg-surface-elevated border-border-subtle">
          <SelectItem value="all" className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">全部类别</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedLocation} onValueChange={(v: string | null) => onLocationChange(v ?? 'all')}>
        <SelectTrigger className={`${selectClass} sm:w-[140px]`}>
          {selectedLocation === 'all' ? '工作地点' : selectedLocation}
        </SelectTrigger>
        <SelectContent className="bg-surface-elevated border-border-subtle">
          <SelectItem value="all" className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">全部地点</SelectItem>
          {locations.map((loc) => (
            <SelectItem key={loc} value={loc} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
              {loc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedType} onValueChange={(v: string | null) => onTypeChange(v ?? 'all')}>
        <SelectTrigger className={`${selectClass} sm:w-[140px]`}>
          {selectedType === 'all' ? '工作类型' : JOB_TYPE_LABELS[selectedType as JobType]}
        </SelectTrigger>
        <SelectContent className="bg-surface-elevated border-border-subtle">
          <SelectItem value="all" className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">全部类型</SelectItem>
          {types.map((t) => (
            <SelectItem key={t.value} value={t.value} className="text-text-secondary focus:text-text-primary focus:bg-accent-muted">
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}