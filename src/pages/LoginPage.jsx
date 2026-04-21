import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { demoCredentials } from "../config/runtimeProfile";
import { loginWithDemoCredentials } from "../lib/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const result = loginWithDemoCredentials(email, password);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="panel relative flex min-h-[640px] flex-col overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/60 via-transparent to-slate-100" />
          <div className="relative flex flex-1 flex-col">
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <ShieldCheck className="h-4 w-4" />
              Internal Security Lab
            </div>

            <h1 className="mt-8 max-w-lg text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Northbridge Secure Access
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500">
              Plateforme pedagogique locale destinee a des exercices internes de
              sensibilisation a l'analyse front-end et a l'hygiene applicative.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5">
                <p className="text-sm text-slate-500">Environment</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Training</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5">
                <p className="text-sm text-slate-500">Region</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">EU-West</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-5">
                <p className="text-sm text-slate-500">Review</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">Quarterly</p>
              </div>
            </div>

            <div className="mt-auto pt-10 text-left text-sm font-medium text-slate-400">
              Created by lindachrigui
            </div>
          </div>
        </section>

        <section className="panel p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Login
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">
            Analyst sign-in
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Utilisez les identifiants de demonstration fournis dans le lab pour
            acceder au dashboard.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="analyst@northbridge.lab"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
                required
              />
            </label>

            {error ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-medium text-white transition hover:bg-brand-700"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">
            Demo account: <span className="font-medium text-slate-800">{demoCredentials.email}</span>
          </div>
        </section>
      </div>
    </div>
  );
}
