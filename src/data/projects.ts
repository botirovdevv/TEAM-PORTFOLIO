import type { Project } from "./types";

// ⚠️ PLACEHOLDER — real loyihalar bilan almashtiring.
// Tartib: birinchi yozilgani saytda birinchi chiqadi.
export const projects: Project[] = [
  {
    slug: "project-1",
    title: { uz: "Loyiha nomi 1", ru: "Название проекта 1", en: "Project name 1" },
    summary: {
      uz: "Loyiha haqida bir-ikki gaplik qisqa tavsif.",
      ru: "Краткое описание проекта в одно-два предложения.",
      en: "A short one or two sentence description of the project.",
    },
    hackathon: {
      name: { uz: "Hackaton nomi 1", ru: "Хакатон 1", en: "Hackathon 1" },
      date: "2025-11",
      place: { uz: "1-o'rin", ru: "1 место", en: "1st place" },
    },
    metrics: [
      { value: "48h", label: { uz: "ichida qurildi", ru: "на разработку", en: "to build" } },
      { value: "95%", label: { uz: "model aniqligi", ru: "точность модели", en: "model accuracy" } },
      { value: "500+", label: { uz: "foydalanuvchi", ru: "пользователей", en: "users" } },
    ],
    problem: {
      uz: "Qanday muammo mavjud edi? Kimga ta'sir qilardi? Nega muhim?",
      ru: "Какая была проблема? На кого она влияла? Почему это важно?",
      en: "What was the problem? Who did it affect? Why does it matter?",
    },
    solution: {
      uz: "Biz qanday yechim taklif qildik va uni qanday qurdik?",
      ru: "Какое решение мы предложили и как его построили?",
      en: "What solution did we propose and how did we build it?",
    },
    result: {
      uz: "Natija: raqamlar, mukofot, foydalanuvchilar fikri.",
      ru: "Результат: цифры, награда, отзывы пользователей.",
      en: "Outcome: numbers, awards, user feedback.",
    },
    tech: ["Next.js", "FastAPI", "PostgreSQL"],
    contributions: [
      { member: "usmon-reyimberganov", task: { uz: "Backend va API", ru: "Backend и API", en: "Backend & API" } },
      { member: "mustafo-botirov", task: { uz: "Veb interfeys", ru: "Веб-интерфейс", en: "Web interface" } },
      { member: "member-3", task: { uz: "Dizayn va taqdimot", ru: "Дизайн и презентация", en: "Design & pitch" } },
    ],
    links: { github: "https://github.com/", demo: "https://example.com/" },
  },
  {
    slug: "project-2",
    title: { uz: "Loyiha nomi 2", ru: "Название проекта 2", en: "Project name 2" },
    summary: {
      uz: "Loyiha haqida bir-ikki gaplik qisqa tavsif.",
      ru: "Краткое описание проекта в одно-два предложения.",
      en: "A short one or two sentence description of the project.",
    },
    hackathon: {
      name: { uz: "Hackaton nomi 2", ru: "Хакатон 2", en: "Hackathon 2" },
      date: "2025-06",
      place: { uz: "Finalist", ru: "Финалист", en: "Finalist" },
    },
    metrics: [
      { value: "36h", label: { uz: "ichida qurildi", ru: "на разработку", en: "to build" } },
      { value: "3", label: { uz: "platforma", ru: "платформы", en: "platforms" } },
    ],
    problem: { uz: "Qanday muammo mavjud edi?", ru: "Какая была проблема?", en: "What was the problem?" },
    solution: { uz: "Biz qanday yechim taklif qildik?", ru: "Какое решение мы предложили?", en: "What solution did we propose?" },
    result: { uz: "Qanday natijaga erishdik?", ru: "Какого результата мы достигли?", en: "What did we achieve?" },
    tech: ["Flutter", "Firebase", "Python"],
    contributions: [
      { member: "usmon-reyimberganov", task: { uz: "ML model", ru: "ML-модель", en: "ML model" } },
      { member: "member-3", task: { uz: "Mobil ilova", ru: "Мобильное приложение", en: "Mobile app" } },
    ],
    links: { github: "https://github.com/" },
  },
  {
    slug: "project-3",
    title: { uz: "Loyiha nomi 3", ru: "Название проекта 3", en: "Project name 3" },
    summary: {
      uz: "Loyiha haqida bir-ikki gaplik qisqa tavsif.",
      ru: "Краткое описание проекта в одно-два предложения.",
      en: "A short one or two sentence description of the project.",
    },
    hackathon: { name: { uz: "Hackaton nomi 3", ru: "Хакатон 3", en: "Hackathon 3" }, date: "2025-03" },
    metrics: [
      { value: "24h", label: { uz: "ichida qurildi", ru: "на разработку", en: "to build" } },
      { value: "1k+", label: { uz: "bot xabarlari", ru: "сообщений бота", en: "bot messages" } },
    ],
    problem: { uz: "Qanday muammo mavjud edi?", ru: "Какая была проблема?", en: "What was the problem?" },
    solution: { uz: "Biz qanday yechim taklif qildik?", ru: "Какое решение мы предложили?", en: "What solution did we propose?" },
    result: { uz: "Qanday natijaga erishdik?", ru: "Какого результата мы достигли?", en: "What did we achieve?" },
    tech: ["React", "Node.js", "Telegram Bot API"],
    contributions: [
      { member: "mustafo-botirov", task: { uz: "Frontend", ru: "Frontend", en: "Frontend" } },
      { member: "usmon-reyimberganov", task: { uz: "Telegram bot", ru: "Telegram-бот", en: "Telegram bot" } },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectsOf = (memberSlug: string) =>
  projects.filter((p) => p.contributions.some((c) => c.member === memberSlug));
