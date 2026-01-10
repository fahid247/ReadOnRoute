export const SkeletonCard = () => (
  <div className="bg-base-100 rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="h-52 bg-base-300" />
    <div className="p-6 space-y-3">
      <div className="h-4 bg-base-300 rounded w-3/4" />
      <div className="h-3 bg-base-300 rounded w-1/2" />
      <div className="h-3 bg-base-300 rounded w-full" />
      <div className="h-8 bg-base-300 rounded w-32 mt-4" />
    </div>
  </div>
);
