import { Activity, FolderKanban, LayoutDashboard, ShieldCheck } from "lucide-react";

const items = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Assets", icon: FolderKanban, active: false },
  { label: "Activity", icon: Activity, active: false },
  { label: "Security", icon: ShieldCheck, active: false },
];

export default function Sidebar() {
  return (
    <aside className="panel hidden h-[calc(100vh-3rem)] w-72 shrink-0 p-6 lg:flex lg:flex-col">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          Northbridge
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Security Console
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Environment de simulation interne pour la supervision des actifs et le suivi
          d'activite.
        </p>

        <nav className="mt-10 space-y-2">
          {items.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium ${
                active
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-6 text-xs font-medium text-slate-400">
        maded by lindachrigui
      </div>
    </aside>
  );
}
