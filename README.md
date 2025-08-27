# Job List App

A simple React application that displays job postings with filtering and a search bar.
Built with **Vite**, **React 19**, and **TailwindCSS**.

---

## Features

* **Job Cards**
  Each job is displayed in a card with:

  * Title
  * Company
  * Location
  * Type (Full-time, Part-time, etc.)
  * Tags
  * Description (short preview)
  * Posted date
  * **Apply button** that opens an application form

* **Filters**

  * Search by title (case-insensitive, live filtering)
  * Filter by job type
  * Filter by location
  * Filter by tags
  * Filter by date posted (All / Last 7 days / Last 30 days)
  * Clear all filters with one click

* **Apply Form**

  * Fields: Name, Email, Portfolio/LinkedIn, Cover letter
  * Upload CV (PDF or DOCX)
  * Validation for required fields
  * Shows success toast on submit
  * Clears form after submission

* **Responsive Design**
  Works on desktop and mobile screens.

* **Dark Mode**
  Full support for light and dark themes with a toggle.

---

## Tech Stack

* [React 19](https://react.dev) — UI framework
* [Vite](https://vitejs.dev) — fast dev/build tool
* [TailwindCSS](https://tailwindcss.com) — utility-first styling
* [react-hot-toast](https://react-hot-toast.com) — lightweight toast notifications

---

## Project Structure

```
src/
  components/
    ApplyModal.jsx
    FiltersPanel.jsx
    JobCard.jsx
    SearchBar.jsx
    Spinner.jsx
  pages/
    Home.jsx
  data/
    jobs.json
  hooks/
    useDebounce.js
  utils/
    filters.js
  styles/
    index.css
  App.jsx
  main.jsx
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/job-list-app.git
cd job-list-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173).

### 4. Build for production

```bash
npm run build
```

---

## Usage

1. Start typing in the **search bar** to filter jobs by title.
2. Use the **dropdowns** and **chips** to filter further.
3. Click **Apply** on any job card to open the form.
4. Fill out the form, upload a CV, and click **Submit application**.

   * A toast will confirm success.
   * The form clears automatically.

---

## Notes

* This project uses mock data (`src/data/jobs.json`).
* Replace it with an API call if you want live job data.
* File uploads (CV) are only kept in state; to actually send them, hook the form up to a backend with `FormData`.

---

## License

MIT — free to use and modify.
