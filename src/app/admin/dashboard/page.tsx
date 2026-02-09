import { FolderGit2, HandPlatter, BookOpenCheck, Activity } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Projects", value: "12", icon: FolderGit2, color: "text-primary" },
    { label: "Active Services", value: "6", icon: HandPlatter, color: "text-accent" },
    { label: "Reviews", value: "24", icon: BookOpenCheck, color: "text-abyss-100" },
    { label: "System Status", value: "Online", icon: Activity, color: "text-emerald-400" },
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header>
        <h1 className="font-title text-4xl font-bold text-text-main">Overview</h1>
        <p className="text-text-muted mt-2">Welcome back! Here is what&apos;s happening in your abyss.</p>
      </header>

      {/* Quantitative Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="bg-bg-card border border-abyss-800 p-6 rounded-2xl shadow-sm hover:border-primary transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-bold mt-2 text-text-main">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-abyss-900/50 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <section className="bg-bg-card border border-abyss-800 rounded-2xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
        <Activity size={48} className="text-abyss-700 mb-4 opacity-20" />
        <h3 className="font-title text-xl font-medium text-text-muted">No recent activities</h3>
        <p className="text-text-muted max-w-sm mx-auto mt-2">Start managing your projects or services to see updates here.</p>
      </section>
    </div>
  );
}