import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { team, getMember } from "@/data/team";
import { projectsOf } from "@/data/projects";
import { t as tr } from "@/data/types";
import Avatar from "@/components/Avatar";
import SocialLinks from "@/components/SocialLinks";
import { Tag } from "@/components/Section";
import { PlaceBadge } from "@/components/ProjectCard";
import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon, MapPinIcon, TrophyIcon } from "@/components/Icons";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => team.map((m) => ({ locale, slug: m.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const m = getMember(slug);
  if (!m) return {};
  return { title: tr(m.name, locale), description: tr(m.shortBio, locale) };
}

export default async function MemberPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const member = getMember(slug);
  if (!member) notFound();

  const t = await getTranslations("member");
  const index = team.indexOf(member);
  const name = tr(member.name, locale);
  const memberProjects = projectsOf(member.slug);
  const next = team[(index + 1) % team.length];

  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none absolute inset-x-0 -top-20 h-[520px]" />
      <div className="orb -top-32 left-1/4 h-80 w-80 bg-accent/25" />

      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Link href="/#team" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <ArrowLeftIcon width={16} height={16} />
          {t("back")}
        </Link>

        {/* Profil kartasi */}
        <header className="card card-glow animate-fade-up mt-8 flex flex-col gap-8 p-6 sm:flex-row sm:items-center sm:p-10">
          <Avatar name={name} photo={member.photo} size={148} index={index} rounded="rounded-3xl" />
          <div className="flex-1">
            <p className="font-mono text-xs text-muted">0{index + 1} / 0{team.length}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{name}</h1>
            <p className="mt-2 text-lg font-semibold text-accent">{tr(member.role, locale)}</p>
            {member.location && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPinIcon width={15} height={15} />
                {tr(member.location, locale)}
              </p>
            )}
            <p className="mt-4 max-w-xl text-muted">{tr(member.shortBio, locale)}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {member.cv && (
                <a
                  href={member.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-fg px-4 text-sm font-semibold text-bg transition hover:opacity-85"
                >
                  <DownloadIcon width={16} height={16} />
                  {t("cv")}
                </a>
              )}
              <SocialLinks socials={member.socials} />
            </div>
          </div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <Card title={t("about")}>
              <p className="whitespace-pre-line leading-relaxed text-muted">{tr(member.bio, locale)}</p>
            </Card>

            {member.experience && member.experience.length > 0 && (
              <Card title={t("experience")}>
                <ol className="relative space-y-6 border-l border-border pl-6">
                  {member.experience.map((e, i) => (
                    <li key={i} className="relative">
                      <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface" />
                      {e.period && (
                        <p className="font-mono text-xs text-muted">
                          {typeof e.period === "string" ? e.period : tr(e.period, locale)}
                        </p>
                      )}
                      <p className="mt-1 font-semibold">{tr(e.title, locale)}</p>
                      <p className="text-sm text-accent">{tr(e.place, locale)}</p>
                      {e.description && (
                        <p className="mt-2 text-sm leading-relaxed text-muted">{tr(e.description, locale)}</p>
                      )}
                    </li>
                  ))}
                </ol>
              </Card>
            )}

            {member.works && member.works.length > 0 && (
              <Card title={t("works")}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {member.works.map((w) => (
                    <div key={w.name} className="rounded-xl border border-border bg-bg/40 p-4">
                      <p className="font-semibold">{w.name}</p>
                      {w.role && <p className="mt-1 text-sm text-accent">{tr(w.role, locale)}</p>}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {memberProjects.length > 0 && (
              <Card title={t("projects")}>
                <div className="space-y-3">
                  {memberProjects.map((p) => {
                    const task = p.contributions.find((c) => c.member === member.slug)?.task;
                    return (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-bg/40 p-4 transition hover:border-accent/60"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold">{tr(p.title, locale)}</p>
                            {p.hackathon.place && <PlaceBadge place={tr(p.hackathon.place, locale)} />}
                          </div>
                          <p className="mt-1 text-xs text-muted">{tr(p.hackathon.name, locale)}</p>
                          {task && (
                            <p className="mt-2 inline-block rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                              {tr(task, locale)}
                            </p>
                        )}
                      </div>
                      <ArrowRightIcon width={18} height={18} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
                    </Link>
                  );
                })}
              </div>
            </Card>
            )}
          </div>

          <aside className="space-y-6">
            <Card title={t("skills")}>
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Card>
            <Card title={t("education")}>
              <p className="text-sm text-muted">{tr(member.education, locale)}</p>
            </Card>
            {member.achievements.length > 0 && (
              <Card title={t("achievements")}>
                <ul className="space-y-3">
                  {member.achievements.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-black">
                        <TrophyIcon width={14} height={14} />
                      </span>
                      <span className="pt-1 text-muted">{tr(a, locale)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            {member.languages && member.languages.length > 0 && (
              <Card title={t("languages")}>
                <ul className="space-y-1.5 text-sm text-muted">
                  {member.languages.map((l, i) => (
                    <li key={i}>{tr(l, locale)}</li>
                  ))}
                </ul>
              </Card>
            )}
            {member.interests && member.interests.length > 0 && (
              <Card title={t("interests")}>
                <div className="flex flex-wrap gap-1.5">
                  {member.interests.map((x, i) => (
                    <Tag key={i}>{tr(x, locale)}</Tag>
                  ))}
                </div>
              </Card>
            )}
            <Card title={t("contacts")}>
              <SocialLinks socials={member.socials} withLabels />
            </Card>
          </aside>
        </div>

        {next !== member && (
          <Link
            href={`/team/${next.slug}`}
            className="card card-hover reveal group mt-6 flex items-center justify-between gap-4 p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <Avatar name={tr(next.name, locale)} photo={next.photo} size={56} index={team.indexOf(next)} rounded="rounded-2xl" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("next")}</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight">{tr(next.name, locale)}</p>
              </div>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-fg text-bg transition group-hover:translate-x-1">
              <ArrowRightIcon width={20} height={20} />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card reveal p-6">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">{title}</h2>
      {children}
    </section>
  );
}
