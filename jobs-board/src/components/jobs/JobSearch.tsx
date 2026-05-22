import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface JobSearchProps {
  value: string;
  onSearch: (value: string) => void;
}

export function JobSearch({ value, onSearch }: JobSearchProps) {
  return (
    <div className="relative group">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-text-muted group-focus-within:text-accent transition-colors" />
      <Input
        type="text"
        placeholder="搜索职位、公司或关键词..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
        className="h-12 pl-11 pr-10 bg-surface-elevated border-border-subtle text-text-primary placeholder:text-text-muted rounded-xl text-base focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
      />
      {value && (
        <button
          onClick={() => onSearch('')}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}