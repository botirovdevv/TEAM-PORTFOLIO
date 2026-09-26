import type { Locale } from "@/i18n/routing";

/** Har bir matn 3 tilda yoziladi */
export type L = Record<Locale, string>;

export type Socials = {
  github?: string;
  linkedin?: string;
  telegram?: string;
  email?: string;
  website?: string;
  instagram?: string;
  x?: string;
};

export type Experience = {
  /** "2023-06 — 2023-09" yoki 3 tilda: { uz: "2024 — hozir", ... } */
  period?: string | L;
  title: L;
  /** Kompaniya / tashkilot / kurs nomi */
  place: L;
  description?: L;
};

export type Member = {
  slug: string;
  name: L;
  role: L;
  /** public/team/ ichidagi rasm, masalan "/team/ali.jpg". Bo'lmasa bosh harflar ko'rsatiladi */
  photo?: string;
  shortBio: L;
  bio: L;
  /** Texnologiyalar — nomlari src/data/site.ts dagi `stack` bilan bir xil yozilsin */
  skills: string[];
  education: L;
  achievements: L[];
  socials: Socials;
  /** Shahar, masalan { uz: "Toshkent", ... } */
  location?: L;
  /** Ish / amaliyot / kurslar tajribasi — sahifada timeline ko'rinishida */
  experience?: Experience[];
  /** Biladigan tillari: "O'zbek — ona tili", "English — B2" */
  languages?: L[];
  /** Qiziqishlari / hobbilari */
  interests?: L[];
  /** Shaxsiy loyihalari / qilgan ishlari: nomi + (ixtiyoriy) roli, masalan "Asoschi" */
  works?: { name: string; role?: L }[];
  /** public/ ichidagi rezyume fayli, masalan "/cv/ali.pdf" */
  cv?: string;
};

export type Metric = {
  /** Katta raqam: "48h", "95%", "500+" */
  value: string;
  label: L;
};

export type Project = {
  slug: string;
  title: L;
  /** Qisqa tavsif (karta uchun) */
  summary: L;
  hackathon: {
    name: L;
    /** "2025-11" formatida */
    date: string;
    /** "1-o'rin", "Finalist" ... Bo'lmasa — mukofotsiz qatnashuv */
    place?: L;
  };
  /** 2-3 ta asosiy natija raqami */
  metrics: Metric[];
  problem: L;
  solution: L;
  result: L;
  tech: string[];
  /** Kim nima qilgan: member slug + vazifa */
  contributions: { member: string; task: L }[];
  links?: { github?: string; demo?: string; presentation?: string };
  /** public/projects/ ichidagi rasmlar, masalan "/projects/app-1.png" */
  images?: string[];
};

export const t = (text: L, locale: string) => text[locale as Locale] ?? text.uz;
