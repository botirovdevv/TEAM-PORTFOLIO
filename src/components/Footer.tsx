import { useTranslations } from "next-intl";
import { site } from "@/data/site";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5 text-sm text-muted">
          <Logo size={24} />
          <span>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </span>
        </div>
        <SocialLinks socials={site.socials} />
      </div>
    </footer>
  );
}
