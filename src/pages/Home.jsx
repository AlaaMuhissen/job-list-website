import React, { useEffect, useState } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "../components/JobCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Spinner from "../components/Spinner.jsx";
import FiltersPanel from "../components/FiltersPanel.jsx";
import useDebounce from "../hooks/useDebounce.js";
import { filterJobs } from "../utils/filters.js";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // filter state
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ type: "", location: "", tags: [], postedSince: 0 });

  // fake fetch
  useEffect(() => {
    setTimeout(() => { setJobs(jobsData); setLoading(false); }, 400);
  }, []);

  const debouncedQuery = useDebounce(query, 250);
  const filtered = filterJobs(jobs, { query: debouncedQuery, ...filters });

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(99,102,241,0.12),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(99,102,241,0.15),transparent)] ">

        <div className="w-full p-6 md:p-8 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200/60 dark:border-zinc-800/60 shadow-card">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="gradient-text">Find your next role</span>
        </h1>
     
        <p className="text-gray-600 dark:text-zinc-400 mt-2">
            Search, filter, and explore openings—fast.
        </p>

        <div className="mt-4">
            <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />
        </div>
        <FiltersPanel filters={filters} setFilters={setFilters} jobs={jobs} />

        <p className="text-sm text-gray-600 dark:text-zinc-400 mt-3">
        {loading ? "Loading…" : `Showing ${filtered.length} of ${jobs.length} jobs`}
        </p>
        {loading && <Spinner />}
        {!loading && filtered.length > 0 && (
          <section className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-5 mt-6">
            {filtered.map(job => <JobCard key={job.id} job={job} />)}
          </section>
        )}
        {!loading && filtered.length === 0 && (
        <div
            className="bg-white dark:bg-zinc-900 
                    border border-gray-200 dark:border-zinc-700 
                    rounded-xl p-5 mt-5 
                    shadow-card transition-colors"
        >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">
            No results found
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 mt-1">
            Try adjusting your filters or search.
            </p>
        </div>
        )}

      </div>
    </main>
  );
}
