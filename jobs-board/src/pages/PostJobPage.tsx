import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowLeft, Plus } from 'lucide-react';
import { PostJobForm } from '@/components/jobs/PostJobForm';
import type { PostJobForm as PostJobFormType } from '@/types/postJob';
import { formToJob } from '@/types/postJob';
import { addJob } from '@/data/jobs';

export function PostJobPage() {
  const [submitted, setSubmitted] = useState(false);
  const [newJobId, setNewJobId] = useState('');

  function handleSubmit(formData: PostJobFormType) {
    const job = formToJob(formData);
    addJob(job);
    setNewJobId(job.id);
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        返回首页
      </a>

      <div className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
          发布新职位
        </h1>
        <p className="text-text-secondary mt-2">填写以下信息，发布你的招聘职位</p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col items-center text-center py-12">
              <div className="h-16 w-16 rounded-2xl bg-accent-muted flex items-center justify-center mb-5">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-text-primary">发布成功</h2>
              <p className="text-text-secondary mt-2">你的职位已成功发布，现在可以被求职者看到</p>
              <div className="flex gap-3 mt-8">
                <Link
                  to={`/jobs/${newJobId}`}
                  className="h-11 px-6 inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-surface font-bold rounded-xl text-sm transition-colors"
                >
                  查看职位
                </Link>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setNewJobId('');
                  }}
                  className="h-11 px-6 inline-flex items-center justify-center gap-2 border border-border-subtle text-text-secondary hover:text-text-primary rounded-xl text-sm transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  继续发布
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PostJobForm onSubmit={handleSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}