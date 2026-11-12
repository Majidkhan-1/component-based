import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg">
      
      {/* Image Skeleton */}
      <div className="h-64 animate-pulse bg-zinc-900">
        <div className="h-full w-full bg-zinc-800" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <div className="mb-4 h-5 w-3/4 animate-pulse rounded bg-zinc-800" />

        {/* Price + Quantity */}
        <div className="mb-5 flex items-center justify-between">

          <div className="h-7 w-20 animate-pulse rounded bg-zinc-800" />

          <div className="h-8 w-20 animate-pulse rounded-lg bg-zinc-800" />

        </div>

        {/* Button */}
        <div className="h-12 w-full animate-pulse rounded-xl bg-zinc-800" />

      </div>
    </div>
  );
};

export default ProductCardSkeleton;