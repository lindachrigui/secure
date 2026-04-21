import { useEffect, useMemo, useState } from "react";
import { Activity, FolderOpenDot, Globe2, ShieldAlert } from "lucide-react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import TopBar from "../components/TopBar";
import { getSessionUser, logout } from "../lib/auth";
import { decodeBase64List } from "../lib/clues";
import { fetchBriefing } from "../lib/mockApi";
import { useNavigate } from "react-router-dom";

const activityItems = [
  "Asset inventory synced with regional workspace.",
  "Archive retention policy reviewed by compliance lead.",
  "Daily routing summary generated for training dataset.",
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [briefing, setBriefing] = useState(null);

  useEffect(() => {
    fetchBriefing().then(setBriefing).catch(() => setBriefing(null));
  }, []);

  const userEmail = getSessionUser() || "unknown";
  const tilePreview = useMemo(() => {
    const source = sessionStorage.getItem("nb_map_tiles");

    if (!source) {
      return [];
    }

    try {
      return decodeBase64List(JSON.parse(source)).slice(0, 3);
    } catch {
      return [];
    }
  }, []);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl gap-6">
        <Sidebar />

        <main className="flex-1 space-y-6">
          <TopBar userEmail={userEmail} onLogout={handleLogout} />

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Tracked assets" value="148" detail="12 changes in the last 24 hours" />
            <StatCard label="Incident queue" value="03" detail="No critical escalations detected" />
            <StatCard label="Regional feeds" value="11" detail="Last refresh 08:42 CET" />
            <StatCard label="Analyst coverage" value="97%" detail="Training environment only" />
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <article className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                    Field activity
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    Daily coordination summary
                  </h3>
                </div>
                <Activity className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-6 space-y-3">
                {activityItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                    Analyst profile
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    Session snapshot
                  </h3>
                </div>
                <ShieldAlert className="h-5 w-5 text-slate-400" />
              </div>

              <dl className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <dt className="text-slate-500">User</dt>
                  <dd className="mt-1 font-medium text-slate-900">{userEmail}</dd>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <dt className="text-slate-500">Workspace</dt>
                  <dd className="mt-1 font-medium text-slate-900">OSINT Familiarization Pod</dd>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <dt className="text-slate-500">Access level</dt>
                  <dd className="mt-1 font-medium text-slate-900">Read-only training scope</dd>
                </div>
              </dl>
            </article>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <article className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                    Assets
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    Tagged repositories
                  </h3>
                </div>
                <FolderOpenDot className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  "Regional vehicle register",
                  "Operator contact handbook",
                  "Quarterly route variance log",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                    Live feed
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    Mock telemetry digest
                  </h3>
                </div>
                <Globe2 className="h-5 w-5 text-slate-400" />
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">
                  Service message: {briefing?.notice || "Loading digest..."}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Tile fragments cached this session:{" "}
                  <span className="font-medium text-slate-900">
                    {tilePreview.join(" | ") || "Unavailable"}
                  </span>
                </p>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
