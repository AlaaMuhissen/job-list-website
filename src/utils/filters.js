export function getUnique(list, key) {
    return Array.from(new Set(list.map((x) => x[key]).filter(Boolean)));
  }
  export function filterJobs(jobs, { query, location, type, tags, postedSince }) {
    const q = (query || "").trim().toLowerCase();
    
    return jobs.filter((job) => {
      const matchesQuery = !q || job.title.toLowerCase().includes(q);
      const matchesLocation = !location || job.location === location;
      const matchesType = !type || job.type === type;
      const matchesTags = !tags?.length || tags.every((t) => job.tags?.includes(t));
      const matchesDate = !postedSince || new Date(job.postedAt) >= new Date(Date.now() - postedSince);
      return matchesQuery && matchesLocation && matchesType && matchesTags && matchesDate;
    });
  }
  