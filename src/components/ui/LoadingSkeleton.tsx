import React from 'react';

export const LoadingSkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-6 space-y-4 animate-pulse shadow-sm">
      <div className="h-48 bg-neutral-200 rounded-2xl w-full" />
      <div className="space-y-2">
        <div className="h-4 bg-neutral-200 rounded w-3/4" />
        <div className="h-3 bg-neutral-200 rounded w-1/2" />
      </div>
      <div className="space-y-2 pt-2">
        <div className="h-3 bg-neutral-100 rounded w-full" />
        <div className="h-3 bg-neutral-100 rounded w-5/6" />
      </div>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <div className="h-10 bg-neutral-200 rounded-xl" />
        <div className="h-10 bg-neutral-200 rounded-xl" />
      </div>
    </div>
  );
};

export const LoadingSkeletonGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <LoadingSkeletonCard key={idx} />
      ))}
    </div>
  );
};
