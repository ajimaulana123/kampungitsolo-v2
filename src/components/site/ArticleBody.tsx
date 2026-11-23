import type { ArticleBlock } from "@/data/articles";
import { headingId } from "@/lib/article";

export function ArticleToc({ blocks }: { blocks: ArticleBlock[] }) {
  const headings = blocks.filter(
    (block): block is Extract<ArticleBlock, { type: "heading" }> =>
      block.type === "heading" && (block.level ?? 2) === 2,
  );

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Daftar isi"
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <p className="eyebrow">Daftar isi</p>
      <ol className="mt-3 space-y-2 text-[0.76rem] leading-snug">
        {headings.map((heading, index) => (
          <li key={heading.text} className="flex gap-2">
            <span className="font-extrabold text-forest">{String(index + 1).padStart(2, "0")}</span>
            <a
              href={`#${headingId(heading.text)}`}
              className="text-ink hover:text-forest hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="max-w-3xl space-y-5 text-[0.97rem] leading-[1.8] text-ink [&_a]:font-semibold [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_h2]:scroll-mt-28 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-navy [&_h3]:scroll-mt-28 [&_h3]:pt-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy [&_li]:mt-2 [&_strong]:font-bold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={`${block.type}-${index}`}>{block.text}</p>;
        }

        if (block.type === "heading") {
          const id = headingId(block.text);
          return block.level === 3 ? (
            <h3 key={`${block.type}-${index}`} id={id}>
              {block.text}
            </h3>
          ) : (
            <h2 key={`${block.type}-${index}`} id={id}>
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={`${block.type}-${index}`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="rounded-2xl border-l-4 border-forest bg-surface p-5 text-base font-medium leading-relaxed text-navy"
            >
              {block.text}
              {block.cite && (
                <footer className="mt-2 text-[0.72rem] font-normal text-muted-foreground">
                  {block.cite}
                </footer>
              )}
            </blockquote>
          );
        }

        return (
          <figure key={`${block.type}-${index}`} className="overflow-hidden rounded-2xl">
            <img
              src={block.src}
              alt={block.alt}
              width={1280}
              height={768}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            {block.caption && (
              <figcaption className="mt-2 text-[0.7rem] text-muted-foreground">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
