import type { Member } from "./types";

// ⚠️ PLACEHOLDER — real ma'lumotlar bilan almashtiring.
export const team: Member[] = [
  {
    slug: "usmon-reyimberganov",
    name: { uz: "Usmon Reyimberganov", ru: "Усмон Рейимберганов", en: "Usmon Reyimberganov" },
    role: {
      uz: "Jamoa kapitani · Full Stack dasturchi",
      ru: "Капитан команды · Full Stack разработчик",
      en: "Team Captain · Full Stack Developer",
    },
    photo: "/team/usmon.jpg",
    shortBio: {
      uz: "4+ yillik tajribaga ega full stack dasturchi — interfeysdan ma'lumotlar bazasigacha zamonaviy, kengaytiriladigan veb-ilovalar yaratadi.",
      ru: "Full stack разработчик с опытом 4+ лет — создаёт современные масштабируемые веб-приложения от интерфейса до базы данных.",
      en: "Full stack developer with 4+ years of experience building modern, scalable web applications — from the interface to the database.",
    },
    bio: {
      uz: "Usmon — jamoa kapitani va ko'p yillik tajribaga ega full stack dasturchi. 4 yildan beri frilans sifatida veb-ilovalar yaratib keladi: frontendda React, Next.js va TypeScript, backendda Node.js, Express, MongoDB va SQL bilan ishlaydi.\n\nHozirda Al-Xorazmiy universitetida Software Engineering yo'nalishida 1-kursda o'qiydi. smile-movies.uz veb-saytining asoschisi.",
      ru: "Усмон — капитан команды и full stack разработчик с многолетним опытом. Уже 4 года создаёт веб-приложения на фрилансе: на фронтенде работает с React, Next.js и TypeScript, на бэкенде — с Node.js, Express, MongoDB и SQL.\n\nСейчас учится на 1 курсе направления Software Engineering в университете Аль-Хорезми. Основатель сайта smile-movies.uz.",
      en: "Usmon is the team captain and a full stack developer with years of experience. For 4 years he has been building web applications as a freelancer: React, Next.js and TypeScript on the frontend, Node.js, Express, MongoDB and SQL on the backend.\n\nHe is currently a 1st-year Software Engineering student at Al-Khwarizmi University and the founder of smile-movies.uz.",
    },
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "SQL"],
    education: {
      uz: "Al-Xorazmiy universiteti — Software Engineering, 1-kurs",
      ru: "Университет Аль-Хорезми — Software Engineering, 1 курс",
      en: "Al-Khwarizmi University — Software Engineering, 1st year",
    },
    achievements: [
      { uz: "IELTS 7.0", ru: "IELTS 7.0", en: "IELTS 7.0" },
      { uz: "SAT 1230", ru: "SAT 1230", en: "SAT 1230" },
      { uz: "smile-movies.uz asoschisi", ru: "Основатель smile-movies.uz", en: "Founder of smile-movies.uz" },
    ],
    socials: {
      github: "https://github.com/usm0n",
      linkedin: "https://linkedin.com/in/usm0n",
      telegram: "https://t.me/usmondev",
      email: "usmonw@icloud.com",
      website: "https://smile-movies.uz",
    },
    location: { uz: "Urganch", ru: "Ургенч", en: "Urgench" },
    experience: [
      {
        period: { uz: "2022 — hozir", ru: "2022 — н.в.", en: "2022 — present" },
        title: { uz: "Full Stack dasturchi", ru: "Full Stack разработчик", en: "Full Stack Developer" },
        place: { uz: "Frilans", ru: "Фриланс", en: "Freelance" },
        description: {
          uz: "Mijozlar uchun interfeysdan ma'lumotlar bazasigacha to'liq veb-ilovalar ishlab chiqish.",
          ru: "Разработка веб-приложений для клиентов — от интерфейса до базы данных.",
          en: "Building complete web applications for clients — from the interface to the database.",
        },
      },
    ],
    works: [
      { name: "smile-movies.uz", role: { uz: "Asoschi", ru: "Основатель", en: "Founder" } },
      { name: "xorazmvbsks.uz" },
    ],
    languages: [
      { uz: "O'zbek — ona tili", ru: "Узбекский — родной", en: "Uzbek — native" },
      { uz: "Ingliz — IELTS 7.0", ru: "Английский — IELTS 7.0", en: "English — IELTS 7.0" },
    ],
  },
  {
    slug: "mustafo-botirov",
    name: { uz: "Mustafo Botirov", ru: "Мустафо Ботиров", en: "Mustafo Botirov" },
    role: { uz: "Frontend dasturchi", ru: "Frontend-разработчик", en: "Frontend Developer" },
    photo: "/team/mustafo.jpg",
    shortBio: {
      uz: "3 yillik tajribaga ega frontend dasturchi — turli loyihalarda zamonaviy veb va mobil interfeyslar yaratgan.",
      ru: "Frontend-разработчик с опытом 3 года — создавал современные веб- и мобильные интерфейсы в разных проектах.",
      en: "Frontend developer with 3 years of experience building modern web and mobile interfaces across various projects.",
    },
    bio: {
      uz: "Mustafo — 3 yillik tajribaga ega frontend dasturchi. Shu paytgacha turli loyihalarda frontend dasturchi sifatida ishlagan: JavaScript, React, Next.js va React Native bilan interfeyslar yaratadi va ularni API'larga ulaydi.\n\n1 yildan beri frilans sifatida ishlaydi, mahalliy mijozlar bilan ham hamkorlik qilgan. Hozirda Al-Xorazmiy universitetida Software Engineering yo'nalishida 1-kursda o'qiydi. prep-zone.uz veb-saytining asoschisi.",
      ru: "Мустафо — frontend-разработчик с опытом 3 года. Работал frontend-разработчиком в разных проектах: создаёт интерфейсы на JavaScript, React, Next.js и React Native и подключает их к API.\n\nУже год работает на фрилансе, сотрудничал в том числе с местными клиентами. Сейчас учится на 1 курсе направления Software Engineering в университете Аль-Хорезми. Основатель сайта prep-zone.uz.",
      en: "Mustafo is a frontend developer with 3 years of experience. He has worked as a frontend developer on various projects, building interfaces with JavaScript, React, Next.js and React Native and connecting them to APIs.\n\nHe has been freelancing for a year, including work with local clients. He is currently a 1st-year Software Engineering student at Al-Khwarizmi University and the founder of prep-zone.uz.",
    },
    skills: ["JavaScript", "React", "Next.js", "React Native", "REST API"],
    education: {
      uz: "Al-Xorazmiy universiteti — Software Engineering, 1-kurs",
      ru: "Университет Аль-Хорезми — Software Engineering, 1 курс",
      en: "Al-Khwarizmi University — Software Engineering, 1st year",
    },
    achievements: [
      { uz: "English B2 sertifikati", ru: "Сертификат English B2", en: "English B2 certificate" },
      { uz: "prep-zone.uz asoschisi", ru: "Основатель prep-zone.uz", en: "Founder of prep-zone.uz" },
    ],
    socials: {
      github: "https://github.com/botirovdevv",
      linkedin: "https://linkedin.com/in/botirovdev",
      telegram: "https://t.me/mustafo_dv",
      instagram: "https://instagram.com/dilmuradov1ch_",
      email: "botirovdev7@gmail.com",
    },
    location: { uz: "Urganch", ru: "Ургенч", en: "Urgench" },
    experience: [
      {
        period: { uz: "3 yil", ru: "3 года", en: "3 years" },
        title: { uz: "Frontend dasturchi", ru: "Frontend-разработчик", en: "Frontend Developer" },
        place: { uz: "Turli loyihalar", ru: "Разные проекты", en: "Various projects" },
      },
      {
        period: { uz: "1 yil", ru: "1 год", en: "1 year" },
        title: { uz: "Frontend dasturchi", ru: "Frontend-разработчик", en: "Frontend Developer" },
        place: { uz: "Frilans", ru: "Фриланс", en: "Freelance" },
        description: {
          uz: "Mahalliy mijozlar uchun veb-loyihalar.",
          ru: "Веб-проекты для местных клиентов.",
          en: "Web projects for local clients.",
        },
      },
    ],
    works: [
      { name: "prep-zone.uz", role: { uz: "Asoschi", ru: "Основатель", en: "Founder" } },
      { name: "Online Movie Bot" },
    ],
    languages: [
      { uz: "O'zbek — ona tili", ru: "Узбекский — родной", en: "Uzbek — native" },
      { uz: "Ingliz — B2", ru: "Английский — B2", en: "English — B2" },
    ],
  },
  {
    slug: "member-3",
    name: { uz: "Ism Familiya 3", ru: "Имя Фамилия 3", en: "Name Surname 3" },
    role: { uz: "UI/UX dizayner & Mobil", ru: "UI/UX дизайнер и мобильная разработка", en: "UI/UX Designer & Mobile" },
    shortBio: {
      uz: "Dizayn, prototiplar va mobil ilovalar bilan shug'ullanadi.",
      ru: "Занимается дизайном, прототипами и мобильными приложениями.",
      en: "Works on design, prototypes and mobile apps.",
    },
    bio: {
      uz: "Bu yerda a'zo haqida batafsil ma'lumot bo'ladi.",
      ru: "Здесь будет подробная информация об участнике.",
      en: "Detailed information about the member goes here.",
    },
    skills: ["Figma", "Flutter", "Firebase", "Python"],
    education: { uz: "Universitet nomi, 2-kurs", ru: "Название университета, 2 курс", en: "University name, 2nd year" },
    achievements: [{ uz: "Eng yaxshi dizayn nominatsiyasi", ru: "Номинация «Лучший дизайн»", en: "Best Design award" }],
    socials: { telegram: "https://t.me/", email: "member3@example.com" },
  },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);

/** Shu texnologiyani biladigan a'zolar */
export const membersWithSkill = (skill: string) => team.filter((m) => m.skills.includes(skill));
