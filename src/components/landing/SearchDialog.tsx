import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { searchEntries, type SearchEntry } from "@/data/search";

type PageEntry = Extract<SearchEntry, { group: "Halaman" }>;
type ProductEntry = Extract<SearchEntry, { group: "Produk" }>;
type ProgramEntry = Extract<SearchEntry, { group: "Program" }>;
type StoryEntry = Extract<SearchEntry, { group: "Cerita" }>;
type ArticleEntry = Extract<SearchEntry, { group: "Artikel" }>;
type AudienceEntry = Extract<SearchEntry, { group: "Solusi" }>;

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const itemClass =
  "group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-none";

function matches(entry: SearchEntry, query: string) {
  return [entry.label, entry.description, ...entry.keywords].some((text) =>
    text.toLowerCase().includes(query),
  );
}

function ResultLink({ entry, onSelect }: { entry: SearchEntry; onSelect: () => void }) {
  const content = (
    <>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-navy">{entry.label}</span>
        <span className="block truncate text-[0.72rem] text-muted-foreground">
          {entry.description}
        </span>
      </span>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-forest" />
    </>
  );

  if (entry.group === "Halaman") {
    return (
      <Link to={entry.path} onClick={onSelect} className={itemClass}>
        {content}
      </Link>
    );
  }

  if (entry.group === "Produk") {
    return (
      <Link
        to="/products/$slug"
        params={{ slug: entry.slug }}
        onClick={onSelect}
        className={itemClass}
      >
        {content}
      </Link>
    );
  }

  if (entry.group === "Program") {
    return (
      <Link
        to="/program/$slug"
        params={{ slug: entry.slug }}
        onClick={onSelect}
        className={itemClass}
      >
        {content}
      </Link>
    );
  }

  if (entry.group === "Cerita") {
    return (
      <Link
        to="/cerita/$slug"
        params={{ slug: entry.slug }}
        onClick={onSelect}
        className={itemClass}
      >
        {content}
      </Link>
    );
  }

  if (entry.group === "Artikel") {
    return (
      <Link
        to="/artikel/$slug"
        params={{ slug: entry.slug }}
        onClick={onSelect}
        className={itemClass}
      >
        {content}
      </Link>
    );
  }

  return (
    <Link to="/untuk/$slug" params={{ slug: entry.slug }} onClick={onSelect} className={itemClass}>
      {content}
    </Link>
  );
}

function ResultGroup({
  title,
  entries,
  onSelect,
}: {
  title: string;
  entries: SearchEntry[];
  onSelect: () => void;
}) {
  if (entries.length === 0) return null;

  return (
    <div>
      <p className="px-3 pb-1 pt-3 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-forest">
        {title}
      </p>
      <ul>
        {entries.map((entry) => (
          <li key={entry.path}>
            <ResultLink entry={entry} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const hits = useMemo(() => searchEntries.filter((entry) => matches(entry, q)), [q]);

  const pageHits = hits.filter((entry): entry is PageEntry => entry.group === "Halaman");
  const productHits = hits.filter((entry): entry is ProductEntry => entry.group === "Produk");
  const programHits = hits.filter((entry): entry is ProgramEntry => entry.group === "Program");
  const storyHits = hits.filter((entry): entry is StoryEntry => entry.group === "Cerita");
  const articleHits = hits.filter((entry): entry is ArticleEntry => entry.group === "Artikel");
  const audienceHits = hits.filter((entry): entry is AudienceEntry => entry.group === "Solusi");

  const close = () => {
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={(next) => (next ? onOpenChange(true) : close())}>
      <DialogContent className="top-[12%] w-[calc(100%-2rem)] max-w-lg translate-y-0 gap-0 rounded-3xl p-0 sm:rounded-3xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Cari di Kampung IT Solo</DialogTitle>
          <DialogDescription>
            Cari halaman, program, produk, artikel, atau solusi, lalu pilih hasilnya.
          </DialogDescription>
        </DialogHeader>
        <label className="flex items-center gap-3 border-b border-border px-5 py-4 pr-12">
          <Search className="size-4 shrink-0 text-forest" aria-hidden="true" />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari program, artikel, atau solusi..."
            aria-label="Kata kunci pencarian"
            className="w-full bg-transparent text-sm text-navy placeholder:text-muted-foreground focus:outline-none"
          />
        </label>

        <div className="max-h-[55vh] overflow-y-auto p-3">
          <ResultGroup title="Halaman" entries={pageHits} onSelect={close} />
          <ResultGroup title="Produk" entries={productHits} onSelect={close} />
          <ResultGroup title="Program" entries={programHits} onSelect={close} />
          <ResultGroup title="Cerita" entries={storyHits} onSelect={close} />
          <ResultGroup title="Artikel" entries={articleHits} onSelect={close} />
          <ResultGroup title="Solusi" entries={audienceHits} onSelect={close} />

          {hits.length === 0 && (
            <p role="status" className="px-3 py-8 text-center text-sm text-muted-foreground">
              Tidak ada hasil untuk "{query.trim()}".
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
