"use client";
import { CATEGORIES } from "@/constants/constants";

const ProjectFilter = (
    {filter, setFilter}: {filter: string; setFilter: (filter: string) => void}
) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-20">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-primary border-primary text-abyss-900 shadow-xl shadow-primary/30 scale-105"
                  : "border-primary/10 text-text-muted hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
  )
}

export default ProjectFilter