"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div role="group" aria-label={t("language")} className="flex rounded-lg border border-border p-0.5 font-mono text-xs">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l, scroll: false })}
          aria-pressed={l === locale}
          className={`rounded-md px-2 py-1 uppercase transition ${
            l === locale ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
