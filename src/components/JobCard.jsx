import React, { useState } from "react";

import ApplyModal from "./ApplyModal.jsx";
/**
 * @param {{ job: {
 *   id: number|string,
 *   title: string,
 *   company: string,
 *   location: string,
 *   type?: string,
 *   postedAt?: string,
 *   description?: string,
 *   tags?: string[]
 * }}} props
 */
export default function JobCard({ job }) {
  const { id, title, company, location, type, postedAt, description, tags = [] } = job;
  const [open, setOpen] = useState(false);
  return (
    <>
    <article
    className="bg-white dark:bg-zinc-900 
               border border-gray-100 dark:border-zinc-800 
               rounded-2xl p-5 
               shadow-card hover:shadow-cardHover 
               transition-shadow duration-300 
               will-change-transform hover:-translate-y-0.5"
    aria-labelledby={`job-title-${id}`}
  >
    <header className="mb-2">
      <h3
        id={`job-title-${id}`}
        className="text-lg font-semibold leading-snug text-gray-900 dark:text-zinc-100"
      >
        {title}
      </h3>
      <p className="text-gray-600 dark:text-zinc-400 mt-1">
        {company} • {location}{type ? ` • ${type}` : ""}
      </p>
    </header>
  
    {description && (
      <p className="text-sm text-gray-800 dark:text-zinc-200 mt-3 clamp-2">
        {description}
      </p>
    )}
  
    {/* Tags */}
    {tags?.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full 
                       bg-gray-50 dark:bg-zinc-800 
                       text-gray-700 dark:text-zinc-300 
                       border border-gray-200 dark:border-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    )}
  
    <footer className="mt-4 flex items-center justify-between">
      <span className="text-xs text-gray-500 dark:text-zinc-400">
        Posted: {new Date(postedAt).toLocaleDateString()}
      </span>
  
      {/* Apply button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-1.5 text-sm font-medium rounded-lg
                   bg-indigo-600 text-white 
                   hover:bg-indigo-700 
                   dark:bg-indigo-500 dark:hover:bg-indigo-400 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                   transition-colors"
      >
        Apply
      </button>
    </footer>
  </article>
     <ApplyModal open={open} onClose={() => setOpen(false)} job={job} />
  
</>
  );
}
