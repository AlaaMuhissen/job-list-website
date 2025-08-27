import React from "react";

/**
 * @param {{
 *   value: string,
 *   onChange: (v: string) => void,
 *   onClear?: () => void
 * }} props
 */
export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="mt-4">
    <label
        htmlFor="search"
        className="block text-sm font-medium mb-1 text-gray-700 dark:text-zinc-300"
        >
        Search by title
    </label>

    <div className="relative inline-block w-full">
        <input
            id="search"
            type="text"
            placeholder="e.g., React, Frontend, Junior…"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Search jobs by title"
            className="w-full max-w-xl rounded-xl 
                    border border-gray-300 dark:border-zinc-700 
                    bg-white dark:bg-zinc-900 
                    text-gray-900 dark:text-zinc-100 
                    placeholder-gray-400 dark:placeholder-zinc-500
                    px-4 py-3 pr-12 
                    outline-none shadow-card 
                    focus:ring-2 focus:ring-indigo-500/40 
                    transition"
        />
        {!!value && (
            <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            title="Clear"
            className="absolute right-3 top-1/2 -translate-y-1/2 
                        text-gray-400 hover:text-gray-600 
                        dark:text-zinc-500 dark:hover:text-zinc-200 
                        text-xl transition-colors"
            >
            ×
            </button>
        )}
        </div>

    </div>
  );
}
