import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { projects } from "@/data/projects";
import Logo from "@/components/Logo";
import Section from "@/components/Section";
import Bento from "@/components/Bento";
import MemberCard from "@/components/MemberCard";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { ArrowRightIcon } from "@/components/Icons";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 overflow-hidden pt-20">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="orb -top-32 left-[10%] h-96 w-96 bg-accent/30" />
        <div className="orb top-10 right-[5%] h-80 w-80 bg-accent-3/20" style={{ animationDelay: "-5s" }} />
        <div className="orb top-80 left-[40%] h-72 w-72 bg-accent-2/20" style={{ animationDelay: "-9s" }} />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-24">
          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-up mb-8">
              <Logo size={76} />
            </div>

            <p className="animate-fade-up delay-1 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
              {t("hero.badge")}
            </p>

            <h1 className="animate-fade-up delay-1 mt-7 max-w-4xl text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-7xl lg:text-[5.5rem]">
              {t.rich("hero.title", { g: (chunks) => <span className="text-gradient">{chunks}</span> })}
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted text-balance">
              {t("hero.subtitle")}
            </p>

            <div className="animate-fade-up delay-3 mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-fg px-6 py-3.5 text-sm font-semibold text-bg shadow-xl shadow-accent/20 transition hover:opacity-90"
              >
                {t("hero.ctaProjects")}
                <ArrowRightIcon width={16} height={16} className="transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/#contact"
                className="rounded-xl border border-border bg-surface/70 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-accent"
              >
                {t("hero.ctaContact")}
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <Bento />
          </div>
        </div>
      </section>

      {/* JAMOA */}
      <Section id="team" index="01" eyebrow={t("team.eyebrow")} title={t("team.title")} subtitle={t("team.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <MemberCard key={m.slug} member={m} index={i} />
          ))}
        </div>
      </Section>

      {/* LOYIHALAR */}
      <Section id="projects" index="02" eyebrow={t("projects.eyebrow")} title={t("projects.title")} subtitle={t("projects.subtitle")}>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* TEXNOLOGIYALAR */}
      <Section id="stack" index="03" eyebrow={t("stack.eyebrow")} title={t("stack.title")} subtitle={t("stack.subtitle")}>
        <TechStack />
      </Section>

      {/* ALOQA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="card card-glow reveal relative grid gap-10 overflow-hidden p-6 sm:p-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="orb -bottom-24 -left-24 h-72 w-72 bg-accent/25" />
          <div className="relative">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="text-muted">04</span>
              <span className="h-px w-8 bg-accent/50" />
              {t("contact.eyebrow")}
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t("contact.title")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{t("contact.subtitle")}</p>
            <div className="mt-8">
              <SocialLinks socials={site.socials} withLabels />
            </div>
          </div>
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
