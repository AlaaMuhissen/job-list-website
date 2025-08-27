import React from "react";

export default function Spinner({ label = "Loading" }) {
  return (
    <div className="grid place-items-center my-6" role="status" aria-live="polite">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
