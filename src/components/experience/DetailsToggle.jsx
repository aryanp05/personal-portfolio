import React from "react";

const DetailsToggle = ({ expanded, onToggle }) => {
  return (
    <div className="mt-7 flex justify-center">
      <button
        type="button"
        onClick={onToggle}
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950/40 px-8 py-3 text-lg font-semibold tracking-tight text-white shadow-lg shadow-black/30 backdrop-blur transition duration-300 ease-in-out hover:bg-neutral-950/60 focus:outline-none focus:ring-0"
      >
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          {expanded ? "Show less" : "Show more"}
        </span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={["h-6 w-10 transition-transform duration-300", expanded ? "rotate-180" : "rotate-0"].join(" ")}
        >
          <path
            d="M4 9l8 8 8-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-200/90 group-hover:text-white"
          />
        </svg>
      </button>
    </div>
  );
};

export default DetailsToggle;
