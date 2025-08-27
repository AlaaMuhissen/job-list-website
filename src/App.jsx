import React, { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="transition-colors bg-gray-50 dark:bg-zinc-950">
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDark((d) => !d)}
        className="px-3 py-1.5 text-sm rounded-full
                   border border-gray-200 dark:border-zinc-700
                   bg-white/80 dark:bg-zinc-900/80
                   text-gray-700 dark:text-zinc-200
                   backdrop-blur
                   hover:bg-gray-100 dark:hover:bg-zinc-800
                   shadow-card transition-colors"
      >
        {dark ? "☀ Light" : "🌙 Dark"} mode
      </button>
    </div>
    <Home />
    <Toaster
  position="bottom-right"
  toastOptions={{
    className: "rounded-lg px-4 py-2 shadow-card transition-colors",
    style: {
      background: "#fff",
      color: "#111",
    },
    success: {
      className:
        "bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 border border-gray-200 dark:border-zinc-700",
      iconTheme: {
        primary: "#4ade80", // green-400
        secondary: "#fff",
      },
    },
    error: {
      className:
        "bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 border border-red-300 dark:border-red-600",
      iconTheme: {
        primary: "#f87171", // red-400
        secondary: "#fff",
      },
    },
  }}
/>

  </div>
  
  );
}
