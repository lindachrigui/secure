import { Bell, Search } from "lucide-react";

export default function TopBar({ userEmail, onLogout }) {
  return (
    <div className="panel flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
          Dashboard
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          Operations overview
        </h2>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500">
          <Search className="h-4 w-4" />
          <span>Search reports, assets, analysts...</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-500 transition hover:text-slate-900"
          >
            <Bell className="h-4 w-4" />
          </button>

          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white">
            {userEmail}
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
