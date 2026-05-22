import { useState } from 'react';
import { useJobs } from '@/hooks/useJobs';
import type { JobType } from '@/types/job';
import { HeroSection } from '@/components/jobs/HeroSection';
import { JobSearch } from '@/components/jobs/JobSearch';
import { JobFilters } from '@/components/jobs/JobFilters';
import { JobList } from '@/components/jobs/JobList';

export function HomePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [type, setType] = useState<string>('all');

  const { jobs: filteredJobs, filterOptions } = useJobs({
    search,
    category: category === 'all' ? '' : category,
    location: location === 'all' ? '' : location,
    type: type === 'all' ? undefined : (type as JobType),
  });

  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search & Filters */}
        <div className="space-y-4 mb-8">
          <JobSearch value={search} onSearch={setSearch} />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <JobFilters
              categories={filterOptions.categories}
              locations={filterOptions.locations}
              types={filterOptions.types}
              selectedCategory={category}
              selectedLocation={location}
              selectedType={type}
              onCategoryChange={setCategory}
              onLocationChange={setLocation}
              onTypeChange={setType}
            />
            <span className="text-sm text-text-muted whitespace-nowrap">
              共 <span className="text-accent font-medium">{filteredJobs.length}</span> 个职位
            </span>
          </div>
        </div>

        {/* Job Grid */}
        <JobList jobs={filteredJobs} />
      </div>
    </div>
  );
}