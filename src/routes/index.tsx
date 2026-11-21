import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Year in Review — PostFinance" },
      { name: "description", content: "Your year with PostFinance: 142 new connections." },
      { property: "og:title", content: "Year in Review — PostFinance" },
      { property: "og:description", content: "Your year with PostFinance: 142 new connections." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path className="fill-brand" d="M9 2h6l-1.5 7H22l-1 6h-8.5L11 22H5l1.5-7H2l1-6h4.5z" />
    </svg>
  );
}

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink p-4">
      <section className="relative flex h-[780px] w-full max-w-[400px] flex-col overflow-hidden rounded-3xl bg-mint">
        <header className="relative z-10 px-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-bold text-ink">PostFinance</span>
              <span className="text-ink/70">· Year in Review</span>
            </div>
            <button aria-label="Close" className="text-ink"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-5 flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? "bg-ink" : "bg-ink/20"}`} />
            ))}
          </div>
        </header>

        <div className="relative z-10 px-7 pt-12 text-ink">
          <p className="text-2xl leading-tight">Now you're wrapping the year with more people in your corner</p>
          <p className="mt-6 text-8xl font-extrabold tracking-tight">142</p>
          <p className="text-2xl">new connections</p>
        </div>

        <svg viewBox="0 0 400 420" className="absolute bottom-0 left-0 w-full" aria-hidden>
          <rect x="-20" y="60" width="200" height="200" rx="100" className="fill-ink" />
          <rect x="40" y="120" width="80" height="80" rx="40" className="fill-mint" />
          <path className="fill-brand" d="M200 40h110l-28 130h140l-20 110H262l-30 160H122l30-160H20l20-110h140z" />
          <rect x="250" y="300" width="200" height="200" rx="40" className="fill-card" />
          <rect x="-40" y="320" width="220" height="140" rx="70" className="fill-card" />
        </svg>
        <div className="absolute bottom-3 left-1/2 z-10 h-1.5 w-32 -translate-x-1/2 rounded-full bg-ink" />
      </section>
    </main>
  );
}
