import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { t as tr, type Member } from "@/data/types";
import { projectsOf } from "@/data/projects";
import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";
import { Tag } from "./Section";
import { ArrowRightIcon } from "./Icons";

export default function MemberCard({ member, index }: { member: Member; index: number }) {
  const locale = useLocale();
  const t = useTranslations("team");
  const name = tr(member.name, locale);
  const count = projectsOf(member.slug).length;

  return (
    <article className="card card-hover reveal group relative flex cursor-pointer flex-col overflow-hidden">
      {/* Rasm maydoni */}
      <div className="relative flex h-56 items-end justify-center overflow-hidden bg-surface-2">
        <div className="bg-grid absolute inset-0 opacity-70" />
        <div className="orb -bottom-16 h-48 w-48 bg-accent/30" />
        <div className="relative mb-[-2.5rem] rounded-[1.75rem] p-1 ring-1 ring-border bg-surface">
          <Avatar name={name} photo={member.photo} size={132} index={index} rounded="rounded-3xl" />
        </div>
        <span className="absolute top-4 left-4 font-mono text-xs text-muted">0{index + 1}</span>
        <span className="absolute top-4 right-4 rounded-full border border-border bg-surface/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur">
          {count} {t("projectsCount")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-14 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">{tr(member.role, locale)}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{tr(member.shortBio, locale)}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-1.5">
          {member.skills.slice(0, 4).map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
          <div className="relative z-10">
            <SocialLinks socials={member.socials} compact />
          </div>
          {/* after: — butun kartani bosiladigan qiladi */}
          <Link
            href={`/team/${member.slug}`}
            className="after:absolute after:inset-0 after:content-[''] inline-flex items-center gap-1.5 rounded-lg bg-fg px-3.5 py-2 text-sm font-semibold text-bg transition hover:opacity-85"
          >
            {t("more")}
            <ArrowRightIcon width={15} height={15} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
