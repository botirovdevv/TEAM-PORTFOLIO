import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-32 text-center">
      <p className="font-mono text-6xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold">{t("title")}</h1>
      <Link href="/" className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-fg">
        {t("back")}
      </Link>
    </div>
  );
}
