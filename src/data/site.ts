import type { L, Socials } from "./types";

export const site = {
  name: "Solution",
  /**
   * LOGO: faylni public/ papkasiga qo'ying (masalan public/logo.svg yoki public/logo.png)
   * va yo'lini shu yerga yozing: logo: "/logo.svg"
   * null bo'lsa, logo o'rnida bosh harf "S" ko'rsatiladi.
   */
  logo: "/logo.png" as string | null,
  /** Jamoaning umumiy aloqa havolalari (footer va aloqa bo'limida) */
  socials: {
    telegram: "https://t.me/",
    github: "https://github.com/",
    email: "team@example.com",
  } satisfies Socials,
  /**
   * Jamoa texnologiyalari — yo'nalishlar bo'yicha.
   * Kim qaysi texnologiyani bilishi team.ts dagi `skills` dan avtomatik aniqlanadi.
   */
  stack: [
    { area: { uz: "Frontend", ru: "Frontend", en: "Frontend" }, items: ["JavaScript", "React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"] },
    { area: { uz: "Backend", ru: "Backend", en: "Backend" }, items: ["Python", "FastAPI", "Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { area: { uz: "Mobil", ru: "Мобильная", en: "Mobile" }, items: ["Flutter", "Firebase"] },
    { area: { uz: "Dizayn & DevOps", ru: "Дизайн и DevOps", en: "Design & DevOps" }, items: ["Figma", "Docker", "Telegram Bot API"] },
  ] satisfies { area: L; items: string[] }[],
};
