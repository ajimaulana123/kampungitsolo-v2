import { products } from "@/data/products";

/** Infinite marquee strip listing the ecosystem products. Pure CSS; pauses on hover. */
export function Ticker() {
  const items = [
    ...products.map((p) => p.name),
    "16 Modul Elfan System",
    "Bin Alfan Group",
    "Eduwisata IT",
  ];
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-6 pr-6">
      {items.map((n) => (
        <span key={n} className="flex items-center gap-6 whitespace-nowrap">
          <span className="text-[0.72rem] font-bold uppercase tracking-wide text-ink/75">{n}</span>
          <span aria-hidden="true" className="size-1.5 rounded-full bg-lime" />
        </span>
      ))}
    </div>
  );
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-border bg-surface/60 py-3">
      <div className="animate-marquee flex w-max">{[row("a"), row("b")]}</div>
    </div>
  );
}
