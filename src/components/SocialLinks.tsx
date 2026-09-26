import type { Socials } from "@/data/types";
import { GithubIcon, GlobeIcon, InstagramIcon, LinkedinIcon, MailIcon, TelegramIcon, XIcon } from "./Icons";

const items = [
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "telegram", label: "Telegram", Icon: TelegramIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "x", label: "X", Icon: XIcon },
  { key: "email", label: "Email", Icon: MailIcon },
  { key: "website", label: "Website", Icon: GlobeIcon },
] as const;

export default function SocialLinks({
  socials,
  withLabels = false,
  compact = false,
}: {
  socials: Socials;
  withLabels?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-wrap ${compact ? "gap-1" : "gap-2"}`}>
      {items.map(({ key, label, Icon }) => {
        const value = socials[key];
        if (!value) return null;
        const href = key === "email" ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`inline-flex items-center gap-2 rounded-lg text-sm text-muted transition hover:text-fg ${
              compact ? "h-8 w-8 justify-center hover:bg-surface-2" : "h-10 border border-border px-3 hover:border-accent"
            }`}
          >
            <Icon width={17} height={17} />
            {withLabels && <span>{key === "email" ? value : label}</span>}
          </a>
        );
      })}
    </div>
  );
}
