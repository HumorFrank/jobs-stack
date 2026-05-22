export function Footer() {
  return (
    <footer className="border-t border-border-subtle mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-text-primary">职引力</span>
            <span className="text-text-muted text-sm">— 发现你的下一份工作</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <span>关于我们</span>
            <span>隐私政策</span>
            <span>联系我们</span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-text-muted">
          © 2026 职引力. All rights reserved.
        </div>
      </div>
    </footer>
  );
}