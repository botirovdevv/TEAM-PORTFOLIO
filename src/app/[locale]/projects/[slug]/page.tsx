import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { projects, getProject } from "@/data/projects";
import { getMember, team } from "@/data/team";
import { t as tr } from "@/data/types";
import Avatar from "@/components/Avatar";
import { Tag } from "@/components/Section";
import { formatDate, PlaceBadge } from "@/components/ProjectCard";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ExternalIcon, GithubIcon } from "@/components/Icons";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: tr(p.title, locale), description: tr(p.summary, locale) };
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const story = [
    { n: "01", title: t("problem"), text: tr(project.problem, locale), color: "text-rose-500", bar: "bg-rose-500" },
    { n: "02", title: t("solution"), text: tr(project.solution, locale), color: "text-emerald-500", bar: "bg-emerald-500" },
    { n: "03", title: t("result"), text: tr(project.result, locale), color: "text-accent", bar: "bg-accent" },
  ];

  const links = [
    { href: project.links?.github, label: t("github"), Icon: GithubIcon },
    { href: project.links?.demo, label: t("demo"), Icon: ExternalIcon },
    { href: project.links?.presentation, label: t("presentation"), Icon: ExternalIcon },
  ].filter((l) => l.href);

  return (
    <article className="relative">
      <div className="bg-grid pointer-events-none absolute inset-x-0 -top-20 h-[560px]" />
      <div className="orb -top-32 right-1/4 h-96 w-96 bg-accent/25" />

      <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <ArrowLeftIcon width={16} height={16} />
          {t("back")}
        </Link>

        {/* Sarlavha */}
        <header className="animate-fade-up mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs">
              <CalendarIcon width={13} height={13} />
              {tr(project.hackathon.name, locale)} · {formatDate(project.hackathon.date, locale)}
            </span>
            {project.hackathon.place && <PlaceBadge place={tr(project.hackathon.place, locale)} />}
          </div>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{tr(project.title, locale)}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{tr(project.summary, locale)}</p>

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ href, label, Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                    i === 0 ? "bg-fg text-bg hover:opacity-90" : "border border-border bg-surface hover:border-accent"
                  }`}
                >
                  <Icon width={16} height={16} />
                  {label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Asosiy raqamlar */}
        <div className="animate-fade-up delay-2 mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.value + m.label.en} className="card card-glow p-6">
              <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm text-muted">{tr(m.label, locale)}</p>
            </div>
          ))}
        </div>

        {/* Muammo → Yechim → Natija */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {story.map((s) => (
            <section key={s.n} className="card reveal relative overflow-hidden p-6">
              <span className={`absolute inset-x-0 top-0 h-1 ${s.bar}`} />
              <p className={`font-mono text-xs ${s.color}`}>{s.n}</p>
              <h2 className="mt-2 text-xl font-bold">{s.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">{s.text}</p>
            </section>
          ))}
        </div>

        {/* Skrinshotlar */}
        {project.images && project.images.length > 0 && (
          <Block title={t("gallery")}>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt={tr(project.title, locale)}
                  width={1200}
                  height={750}
                  className="h-auto w-full rounded-2xl border border-border"
                />
              ))}
            </div>
          </Block>
        )}

        <div className="grid items-start gap-6 md:grid-cols-[1.6fr_1fr]">
          {/* Kim nima qildi */}
          <Block title={t("contributions")}>
            <div className="space-y-3">
              {project.contributions.map((c) => {
                const m = getMember(c.member);
                if (!m) return null;
                const name = tr(m.name, locale);
                return (
                  <Link
                    key={c.member}
                    href={`/team/${m.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-bg/40 p-4 transition hover:border-accent/60"
                  >
                    <Avatar name={name} photo={m.photo} size={46} index={team.indexOf(m)} rounded="rounded-xl" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-muted">{tr(c.task, locale)}</p>
                    </div>
                    <ArrowRightIcon width={16} height={16} className="text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                );
              })}
            </div>
          </Block>

          <Block title={t("tech")}>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Block>
        </div>

        {/* Keyingi loyiha */}
        {next !== project && (
          <Link
            href={`/projects/${next.slug}`}
            className="card card-hover reveal group mt-6 flex items-center justify-between gap-4 p-6 sm:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("next")}</p>
              <p className="mt-2 text-2xl font-extrabold tracking-tight">{tr(next.title, locale)}</p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-fg text-bg transition group-hover:translate-x-1">
              <ArrowRightIcon width={20} height={20} />
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card reveal mt-6 p-6">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">{title}</h2>
      {children}
    </section>
  );
}
