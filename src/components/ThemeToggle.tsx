"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("nav");

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t("theme")}
      title={t("theme")}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition hover:border-accent hover:text-fg"
    >
      {/* Ikkala ikonka ham render qilinadi, CSS orqali ko'rsatiladi — hydration xatosiz */}
      <SunIcon className="hidden dark:block" width={18} height={18} />
      <MoonIcon className="block dark:hidden" width={18} height={18} />
    </button>
  );
}
