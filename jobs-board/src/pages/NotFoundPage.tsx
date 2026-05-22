import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="font-display text-7xl font-900 text-accent">404</span>
        <h2 className="font-display text-2xl font-bold text-text-primary mt-4">页面不存在</h2>
        <p className="text-text-muted mt-2">你访问的页面可能已被移除</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
        >
          返回首页
        </Link>
      </motion.div>
    </div>
  );
}