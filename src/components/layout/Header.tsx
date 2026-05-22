import { Link } from 'react-router-dom';
import { Briefcase, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-surface font-bold text-sm transition-transform group-hover:scale-110">
            <Briefcase className="h-4.5 w-4.5" strokeWidth={2.5} />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-text-primary">
            职引力
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
            >
              发现职位
            </Link>
            <Link
              to="/post"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
            >
              发布职位
            </Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-lg border border-border-subtle bg-surface-elevated flex items-center justify-center text-text-muted hover:text-accent hover:border-accent-border transition-all"
            aria-label={theme === 'dark' ? '切换到亮色主题' : '切换到深色主题'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}