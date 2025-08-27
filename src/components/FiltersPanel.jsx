import React, { useMemo } from "react";
import { getUnique } from "../utils/filters.js";

export default function FiltersPanel({ filters, setFilters, jobs }) {
  const typeOptions = useMemo(() => getUnique(jobs, "type"), [jobs]);
  const locationOptions = useMemo(() => getUnique(jobs, "location"), [jobs]);
  const tagOptions = useMemo(() => Array.from(new Set(jobs.flatMap(j => j.tags || []))), [jobs]);
  const clearAll = () => setFilters({ type: "", location: "", tags: [], postedSince: 0 });

  const toggleTag = (t) =>
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(t) ? prev.tags.filter(x => x !== t) : [...prev.tags, t]
    }));

  return (
<section className="mt-4 rounded-2xl p-4 md:p-5 glass shadow-card animate-fadeIn">
  <div className="grid md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-300">Job type</label>
            <select
        className="w-full rounded-lg 
                    border border-gray-300 dark:border-zinc-700 
                    bg-white dark:bg-zinc-900 
                    text-gray-900 dark:text-zinc-100 
                    px-3 py-2 outline-none
                    focus:ring-2 focus:ring-indigo-500/40
                   "
        value={filters.type}
        onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}
        >
        <option value="" className="text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 ">
            All
        </option>
        {typeOptions.map((opt) => (
            <option
            key={opt}
            value={opt}
            className="text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900"
            >
            {opt}
            </option>
        ))}
        </select>

    </div>

    <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-300">
            Location
        </label>
        <select
            className="w-full rounded-lg 
                    border border-gray-300 dark:border-zinc-700 
                    bg-white dark:bg-zinc-900 
                    text-gray-900 dark:text-zinc-100 
                    px-3 py-2 outline-none 
                    focus:ring-2 focus:ring-indigo-500/40"
            value={filters.location}
            onChange={(e) => setFilters(f => ({ ...f, location: e.target.value }))}
        >
            <option value="" className="text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900">
            All
            </option>
            {locationOptions.map((opt) => (
            <option
                key={opt}
                value={opt}
                className="text-gray-900 dark:text-zinc-100 bg-white dark:bg-zinc-900"
            >
                {opt}
            </option>
            ))}
        </select>
        </div>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-300">Date posted</label>
      <div className="flex gap-2 flex-wrap">
        {[
          { label: "All", val: 0 },
          { label: "7 days", val: 7 * 24 * 60 * 60 * 1000 },
          { label: "30 days", val: 30 * 24 * 60 * 60 * 1000 },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            onClick={() => setFilters(f => ({ ...f, postedSince: o.val }))}
            className={`text-sm px-3 py-1 rounded-full border transition-colors ${
              filters.postedSince === o.val
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Tags */}
  <div className="mt-4">
    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-300">Tags</label>
    <div className="flex flex-wrap gap-2">
      {tagOptions.map((t) => {
        const active = filters.tags.includes(t);
        return (
          <button
            key={t}
            type="button"
            onClick={toggleTag}
            aria-pressed={active}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              active
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-gray-50 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  </div>

  {/* Clear */}
  <div className="mt-4">
  <button
    type="button"
    onClick={clearAll}
    className="text-sm px-3 py-1 rounded-md 
               border border-gray-300 dark:border-zinc-700 
               bg-white dark:bg-zinc-900 
               text-gray-700 dark:text-zinc-200
               hover:bg-gray-100 dark:hover:bg-zinc-800 
               transition-colors"
  >
    Clear all
  </button>
</div>

</section>

  );
}
