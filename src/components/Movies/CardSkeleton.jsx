import React from "react";

export default function CardSkeleton() {
  return (
    <div className="animate-pulse flex h-[650px]   flex-col md:flex-row w-full max-w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-10 gap-6">
      {/* Left Side Skeleton */}
      <div className="relative w-full md:w-3/5 flex flex-col gap-4 h-[600px] ">
        <div className="absolute top-0 left-0 h-full w-16 sm:w-20 bg-slate-300 rounded"></div>

        <div className="ml-20 sm:ml-24 mt-4 flex items-start gap-6">
          <div className="w-28 h-28 sm:w-40 sm:h-40 bg-gray-300 rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="h-6 sm:h-8 bg-gray-300 rounded w-40 sm:w-56" />
            <div className="h-6 sm:h-8 bg-gray-300 rounded w-40 sm:w-56" />
            <div className="h-5 bg-gray-300 rounded w-32" />
          </div>
        </div>

        <div className="ml-20 sm:ml-24 h-4 bg-gray-300 w-[70%] sm:w-[400px] mt-4 rounded" />
        <div className="ml-20 sm:ml-24 h-[2px] bg-gray-300 w-[60%] sm:w-[300px] my-4 rounded" />

        <div className="ml-20 sm:ml-24 flex flex-col gap-2">
          <div className="h-4 bg-gray-300 rounded w-60 sm:w-80" />
          <div className="h-4 bg-gray-300 rounded w-52 sm:w-72" />
          <div className="h-4 bg-gray-300 rounded w-64 sm:w-64" />
        </div>
      </div>

      {/* Right Side Skeleton */}
      <div className="w-full md:w-2/5 flex flex-col gap-4 h-[600px] ">
        {/* YouTube Skeleton */}
        <div className="aspect-video w-full bg-gray-300 rounded-lg" />

        {/* Instagram Skeleton */}
        <div className="w-full bg-gray-300 h-[600px] sm:h-[120px] rounded-lg" />
      </div>
    </div>
  );
}
