import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { t as tr } from "@/data/types";
import { team } from "@/data/team";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Avatar from "./Avatar";
import { PlaceBadge } from "./ProjectCard";
import { TrophyIcon } from "./Icons";

/** Hero ostidagi qisqa ko'rsatkichlar — hammasi data fayllardan hisoblanadi */
export default function Bento() {
  const locale = useLocale();
  const t = useTranslations("bento");

  const awarded = projects.filter((p) => p.hackathon.place);
  const hackathons = new Set(projects.map((p) => p.hackathon.name.en)).size;
  const tech = site.stack.flatMap((g) => g.items);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
      {/* Mukofotlar */}
      <div className="card card-glow animate-fade-up delay-2 relative col-span-2 overflow-hidden p-6 md:row-span-2 sm:p-8">
        <div className="orb -top-20 -right-20 h-64 w-64 bg-amber-400/25" />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("awards")}</p>
            <p className="mt-2 text-7xl font-extrabold tracking-tight">{awarded.length}</p>
          </div>
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-black shadow-lg shadow-orange-500/30">
            <TrophyIcon width={26} height={26} />
          </span>
        </div>
        <ul className="relative mt-8 space-y-2">
          {awarded.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-bg/40 px-4 py-3 text-sm transition hover:border-accent"
              >
                <span className="min-w-0">
                  <span className="block truncate font-semibold">{tr(p.title, locale)}</span>
                  <span className="block truncate text-xs text-muted">{tr(p.hackathon.name, locale)}</span>
                </span>
                <PlaceBadge place={tr(p.hackathon.place!, locale)} className="shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Loyihalar */}
      <Stat className="delay-3" value={projects.length} label={t("projects")} hint={t("projectsHint")} />
      {/* Hackatonlar */}
      <Stat className="delay-3" value={hackathons} label={t("hackathons")} hint={t("hackathonsHint")} />

      {/* Jamoa */}
      <div className="card animate-fade-up delay-4 col-span-2 flex flex-col justify-between gap-6 p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("team")}</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex -space-x-3">
            {team.map((m, i) => (
              <span key={m.slug} className="rounded-full ring-4 ring-surface">
                <Avatar name={tr(m.name, locale)} photo={m.photo} size={52} index={i} rounded="rounded-full" />
              </span>
            ))}
          </div>
          <ul className="flex flex-wrap gap-1.5 text-xs">
            {team.map((m) => (
              <li key={m.slug} className="rounded-full border border-border px-2.5 py-1 text-muted">
                {tr(m.role, locale)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Texnologiyalar lentasi */}
      <div className="card animate-fade-up delay-4 col-span-2 overflow-hidden py-5 md:col-span-4">
        <p className="mb-4 px-6 font-mono text-xs uppercase tracking-widest text-muted">
          {t("stack")} · {tech.length}
        </p>
        <div className="marquee overflow-hidden">
          <div className="marquee-track gap-3 pr-3">
            {[...tech, ...tech].map((s, i) => (
              <span
                key={i}
                aria-hidden={i >= tech.length}
                className="rounded-xl border border-border bg-surface-2/70 px-4 py-2 font-mono text-sm whitespace-nowrap"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, hint, className = "" }: { value: number; label: string; hint: string; className?: string }) {
  return (
    <div className={`card animate-fade-up flex flex-col justify-between gap-6 p-6 ${className}`}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
      <div>
        <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">{value}</p>
        <p className="mt-1 text-sm text-muted">{hint}</p>
      </div>
    </div>
  );
}
