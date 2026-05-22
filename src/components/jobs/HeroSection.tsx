import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-muted px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent">每日更新优质职位</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 tracking-tight text-text-primary leading-[1.1]"
        >
          发现你的
          <span className="text-accent">下一份</span>
          <br className="hidden sm:block" />
          理想工作
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 text-lg text-text-secondary max-w-xl mx-auto"
        >
          汇聚顶尖科技公司职位，智能匹配你的技能与期望
        </motion.p>
      </div>
    </section>
  );
}