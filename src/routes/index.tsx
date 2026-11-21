import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/postfinance-ch-logo.png.asset.json";
import logoIcon from "@/assets/postfinance-icon-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your 2025 in Review — PostFinance" },
      { name: "description", content: "Your year with PostFinance in six stories." },
      { property: "og:title", content: "Your 2025 in Review — PostFinance" },
      { property: "og:description", content: "Your year with PostFinance in six stories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Theme = "brand" | "ink" | "mint";
type Slide = { theme: Theme; label: string; amount?: string; text: ReactNode; art: ReactNode; extra?: ReactNode };

const surface: Record<Theme, string> = {
  brand: "bg-brand text-ink",
  ink: "bg-ink text-mint",
  mint: "bg-mint text-ink",
};

const slides: Slide[] = [
  {
    theme: "ink", label: "Your year in one line", amount: "8'652.74",
    text: <>CHF 8'652.74 stayed.</>,
    art: <div className="relative"><img src={logoIcon.url} alt="" className="w-3/4 translate-x-16" /><div className="absolute bottom-2 left-6 h-24 w-24 rounded-full bg-brand" /></div>,
  },
  {
    theme: "mint", label: "Where the money lives", amount: "44'165.10",
    text: <>23% of your spending went to Rent. Next: Veloshop 12%, Krankenkasse 12%.</>,
    art: <svg viewBox="0 0 400 300"><rect x="-20" y="40" width="250" height="300" rx="40" className="fill-ink" /><rect x="240" y="120" width="180" height="220" rx="40" className="fill-brand" /><rect x="160" y="200" width="120" height="140" rx="60" className="fill-card" /></svg>,
  },
  {
    theme: "brand", label: "Your rhythm",
    text: <>Thursday is your busiest day for payments: <b>71</b> of 453 in 2025.</>,
    art: <svg viewBox="0 0 400 300">{[40, 90, 120, 210, 70, 50, 30].map((h, i) => (<rect key={i} x={20 + i * 54} y={300 - h} width="44" height={h + 40} rx="22" className={i === 3 ? "fill-ink" : "fill-card"} />))}</svg>,
  },
  {
    theme: "ink", label: "3 tough months, one cause", amount: "18'395.00",
    text: <>3 months ended in the minus. In each, one large purchase made the difference.</>,
    art: <svg viewBox="0 0 400 300">{Array.from({ length: 12 }).map((_, i) => (<circle key={i} cx={40 + (i % 6) * 64} cy={130 + Math.floor(i / 6) * 80} r="26" className={[2, 6, 9].includes(i) ? "fill-brand" : "fill-mint/20"} />))}</svg>,
  },
  {
    theme: "mint", label: "Small things add up", amount: "1'616.15",
    text: <>121 small payments at Kantine AG came to CHF 1'616.15 in 2025.</>,
    art: <svg viewBox="0 0 400 300">{Array.from({ length: 30 }).map((_, i) => (<circle key={i} cx={30 + (i % 10) * 38} cy={150 + Math.floor(i / 10) * 40} r="14" className={i % 7 === 0 ? "fill-brand" : "fill-ink"} />))}</svg>,
  },
  {
    theme: "brand", label: "Next year starts here", amount: "3'830.45",
    text: <>Based on 2025, simple saving rules would have collected approximately CHF 3'830.45.</>,
    art: null,
    extra: (
      <div className="mt-8 space-y-4">
        <button className="w-full rounded-full bg-ink py-4 text-lg font-bold text-mint">In your pot ✓ · manage</button>
        <p className="text-xs leading-relaxed opacity-70">Prototype made for the PostFinance hackathon challenge «Beyond the List», Bern 2026. Pots are simulated; all amounts are calculated from the transactions.</p>
      </div>
    ),
  },
];

function Index() {
  const [i, setI] = useState(0);
  const s = slides[i]!;
  const onInk = s.theme === "ink";
  return (
    <main className="flex min-h-screen items-center justify-center bg-mint p-4">
      <section className={`relative flex h-[820px] w-full max-w-[400px] flex-col overflow-hidden rounded-[2.5rem] shadow-2xl transition-colors duration-500 ${surface[s.theme]}`}>
        <header className="relative z-10 px-6 pt-6">
          <div className="flex gap-1">
            {slides.map((_, k) => (
              <span key={k} className={`h-1 flex-1 rounded-full ${k <= i ? (onInk ? "bg-brand" : "bg-ink") : "bg-current opacity-20"}`} />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <img src={logo.url} alt="PostFinance" className="h-9 rounded-lg" />
            <button aria-label="Close" className="rounded-full p-2 hover:bg-current/10"><X className="h-5 w-5" /></button>
          </div>
        </header>

        <div key={i} className="relative z-10 animate-in fade-in slide-in-from-bottom-4 px-7 pt-10 duration-500">
          <p className="text-sm font-bold opacity-70">{i + 1} / {slides.length} · {s.label}</p>
          {s.amount && (
            <p className="mt-4 flex items-baseline gap-2 font-extrabold tracking-tight">
              <span className="text-2xl">CHF</span>
              <span className={`text-6xl ${onInk ? "text-brand" : ""}`}>{s.amount}</span>
            </p>
          )}
          <p className="mt-4 text-2xl leading-snug">{s.text}</p>
          {s.extra}
        </div>

        {s.art && <div key={`a${i}`} className="pointer-events-none absolute inset-x-0 bottom-0 animate-in fade-in duration-700 [&>svg]:w-full">{s.art}</div>}

        <nav className="absolute inset-x-0 bottom-6 z-10 flex justify-between px-6">
          <button disabled={i === 0} onClick={() => setI(i - 1)} className="flex items-center gap-1 rounded-full bg-background px-5 py-3 font-bold text-ink shadow disabled:opacity-0"><ChevronLeft className="h-4 w-4" />Back</button>
          <button disabled={i === slides.length - 1} onClick={() => setI(i + 1)} className="flex items-center gap-1 rounded-full bg-ink px-5 py-3 font-bold text-mint shadow ring-2 ring-mint/30 disabled:opacity-0">Next<ChevronRight className="h-4 w-4" /></button>
        </nav>
      </section>
    </main>
  );
}
