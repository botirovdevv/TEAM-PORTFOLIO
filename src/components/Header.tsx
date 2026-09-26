import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const links = [
    { href: "/#team", label: t("team") },
    { href: "/#projects", label: t("projects") },
    { href: "/#stack", label: t("stack") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/70 pr-2 pl-3 shadow-lg shadow-black/5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight">
          <Logo size={30} />
          <span className="hidden text-lg sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-3 py-1.5 transition hover:bg-surface-2 hover:text-fg">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Mobil navigatsiya */}
      <nav className="mx-auto mt-2 flex max-w-6xl justify-between gap-1 overflow-x-auto rounded-xl border border-border/80 bg-surface/70 p-1 text-xs font-medium text-muted backdrop-blur-xl md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="flex-1 rounded-lg px-2 py-1.5 text-center whitespace-nowrap transition hover:bg-surface-2 hover:text-fg">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
