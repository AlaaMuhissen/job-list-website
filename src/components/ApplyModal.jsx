import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ApplyModal({ open, onClose, job }) {
  const dialogRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", portfolio: "", cv: null, });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) setErrors({});
  }, [open]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    return e;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length) return;
  

    console.log("Application submitted:", {
      job,
      ...form,
      cv: form.cv ? form.cv.name : null,
    });
  
    toast.success("Application submitted successfully 🎉");
  
    // clear form
    setForm({ name: "", email: "", portfolio: "", cover: "", cv: null });
    onClose?.();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-title"
      ref={dialogRef}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div className="relative w-[min(92vw,560px)] rounded-2xl p-5 md:p-6
                      bg-white dark:bg-zinc-900
                      border border-gray-200 dark:border-zinc-700
                      shadow-card animate-fadeIn">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="apply-title" className="text-xl font-semibold text-gray-900 dark:text-zinc-100">
              Apply for {job?.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-zinc-400">{job?.company} • {job?.location}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 hover:text-gray-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-zinc-300">Full name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100
                         px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-zinc-300">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100
                         px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="jane@example.com"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-zinc-300">
            Upload CV (PDF or DOCX)
        </label>
        <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={(e) =>
            setForm((prev) => ({ ...prev, cv: e.target.files[0] || null }))
            }
            className="w-full rounded-lg border border-gray-300 dark:border-zinc-700
                    bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100
                    px-3 py-2 outline-none file:mr-3 file:px-3 file:py-1.5
                    file:rounded-md file:border-0
                    file:bg-indigo-600 file:text-white
                    hover:file:bg-indigo-700
                    dark:file:bg-indigo-500 dark:hover:file:bg-indigo-400"
        />
        {form.cv && (
            <p className="text-xs text-gray-600 dark:text-zinc-400 mt-1">
            Selected: {form.cv.name}
            </p>
        )}
        </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-zinc-300">Portfolio / LinkedIn (optional)</label>
            <input
              name="portfolio"
              type="url"
              value={form.portfolio}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100
                         px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="https://…"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-zinc-300">Cover letter (optional)</label>
            <textarea
              name="cover"
              rows={4}
              value={form.cover}
              onChange={onChange}
              className="w-full rounded-lg border border-gray-300 dark:border-zinc-700
                         bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100
                         px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Briefly tell us why you're a great fit…"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm rounded-md border
                         border-gray-300 dark:border-zinc-700
                         bg-white dark:bg-zinc-900
                         text-gray-700 dark:text-zinc-200
                         hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-sm font-medium rounded-lg
                         bg-indigo-600 text-white hover:bg-indigo-700
                         dark:bg-indigo-500 dark:hover:bg-indigo-400
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                         transition-colors"
            >
              Submit application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
