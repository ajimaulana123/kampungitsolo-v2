export function SectionLabel({ lead, rest }: { lead: string; rest: string }) {
  return (
    <p className="eyebrow flex items-center gap-2">
      <span>
        <span className="text-lime">{lead}</span> {rest}
      </span>
      <span className="h-px w-12 bg-lime" />
    </p>
  );
}
