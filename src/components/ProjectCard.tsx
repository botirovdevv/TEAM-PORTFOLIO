import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { t as tr, type Project } from "@/data/types";
import { getMember, team } from "@/data/team";
import Avatar from "./Avatar";
import { Tag } from "./Section";
import { ArrowRightIcon, CalendarIcon, TrophyIcon } from "./Icons";

export function formatDate(date: string, locale: string) {
  const [y, m] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "uz" ? "uz-Latn" : locale, { year: "numeric", month: "long" }).format(
    new Date(y, (m || 1) - 1),
  );
}

export function PlaceBadge({ place, className = "" }: { place: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-bold text-black shadow-md shadow-orange-500/20 ${className}`}
    >
      <TrophyIcon width={13} height={13} />
      {place}
    </span>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card card-hover reveal group grid overflow-hidden md:grid-cols-[1.5fr_1fr]"
    >
      {/* Asosiy qism */}
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-mono text-4xl leading-none font-extrabold text-gradient">0{index + 1}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono sm:ml-2">
            <CalendarIcon width={13} height={13} />
            {tr(project.hackathon.name, locale)} · {formatDate(project.hackathon.date, locale)}
          </span>
          {project.hackathon.place && <PlaceBadge place={tr(project.hackathon.place, locale)} />}
        </div>

        <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">{tr(project.title, locale)}</h3>
        <p className="mt-2 text-muted">{tr(project.summary, locale)}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-bg/50 p-4">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-rose-500">{t("problem")}</dt>
            <dd className="mt-1.5 line-clamp-3 text-sm text-muted">{tr(project.problem, locale)}</dd>
          </div>
          <div className="rounded-xl border border-border bg-bg/50 p-4">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-emerald-500">{t("solution")}</dt>
            <dd className="mt-1.5 line-clamp-3 text-sm text-muted">{tr(project.solution, locale)}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-8">
          <div className="flex -space-x-2">
            {project.contributions.map((c) => {
              const m = getMember(c.member);
              if (!m) return null;
              const name = tr(m.name, locale);
              return (
                <span key={m.slug} className="rounded-full ring-2 ring-surface" title={name}>
                  <Avatar name={name} photo={m.photo} size={34} index={team.indexOf(m)} rounded="rounded-full" />
                </span>
              );
            })}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
            {t("more")}
            <ArrowRightIcon width={16} height={16} className="transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* Raqamlar */}
      <div className="relative flex flex-col justify-center gap-px overflow-hidden border-t border-border bg-surface-2/60 md:border-t-0 md:border-l">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="orb -right-10 -bottom-10 h-40 w-40 bg-accent/25" />
        <p className="relative px-8 pt-6 font-mono text-[11px] uppercase tracking-widest text-muted">{t("metrics")}</p>
        <div className="relative grid grid-cols-3 gap-4 p-6 sm:p-8 md:grid-cols-1 md:gap-6">
          {project.metrics.map((m) => (
            <div key={m.value + m.label.en}>
              <p className="text-3xl font-extrabold tracking-tight sm:text-5xl">{m.value}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{tr(m.label, locale)}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
