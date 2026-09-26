import type { ReactNode } from "react";

export default function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="reveal mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {index && <span className="text-muted">{index}</span>}
              <span className="h-px w-8 bg-accent/50" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
        </div>
        {subtitle && <p className="text-base leading-relaxed text-muted sm:text-lg md:justify-self-end md:text-right">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
