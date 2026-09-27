import type { Member } from "./types";

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
      { name: "smile-movies.uz", url: "https://smile-movies.uz", role: { uz: "Asoschi", ru: "Основатель", en: "Founder" } },
      { name: "xorazmvbsks.uz", url: "https://xorazmvbsks.uz" },
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
      { name: "prep-zone.uz", url: "https://prep-zone.uz", role: { uz: "Asoschi", ru: "Основатель", en: "Founder" } },
      { name: "xorazmvbsks.uz", url: "https://xorazmvbsks.uz" },
      { name: "Online Movie Bot" },
    ],
    languages: [
      { uz: "O'zbek — ona tili", ru: "Узбекский — родной", en: "Uzbek — native" },
      { uz: "Ingliz — B2", ru: "Английский — B2", en: "English — B2" },
    ],
  },
  {
    slug: "azizbek-erkayev",
    name: { uz: "Azizbek Erkayev", ru: "Азизбек Эркаев", en: "Azizbek Erkayev" },
    role: {
      uz: "Sun'iy intellekt · Startaplar",
      ru: "Искусственный интеллект · Стартапы",
      en: "Artificial Intelligence · Startups",
    },
    photo: "/team/Azizbek.png",
    shortBio: {
      uz: "Xato qilishdan qo'rqmaydigan va ulardan tez xulosa chiqaradigan inson — sun'iy intellekt asosida startaplar qurishni maqsad qilgan.",
      ru: "Человек, который не боится ошибаться и быстро делает из них выводы, — стремится строить стартапы на основе искусственного интеллекта.",
      en: "Not afraid of making mistakes and quick to learn from them — aiming to build startups powered by artificial intelligence.",
    },
    bio: {
      uz: "Azizbek 2008-yilda Xorazm viloyatida tug'ilgan. Yangibozor tumanidagi IMI ni bitirgach, Al-Xorazmiy universitetiga 4 yillik grant asosida o'qishga kirgan. Hozir sun'iy intellekt yo'nalishida 2-kurs talabasi.\n\nStartap qurish bo'yicha tajribaga ega: \"UPSHIFT\" loyihasida 1-o'rinni egallab, 14 mln so'm investitsiya jalb qilgan. 2 yildan beri Urganch shahrida SAT bo'yicha mentorlik qiladi. Ko'plab sport turlari, kitob o'qish va shaxmatga qiziqadi. Maqsadi — sun'iy intellekt bilan turli startaplar qurib, ularni rivojlantirish.",
      ru: "Азизбек родился в 2008 году в Хорезмской области. После окончания IMI в Янгибазарском районе поступил в университет Аль-Хорезми на 4-летний грант. Сейчас студент 2 курса направления «Искусственный интеллект».\n\nИмеет опыт создания стартапов: занял 1-е место в проекте «UPSHIFT» и привлёк 14 млн сумов инвестиций. Уже 2 года работает SAT-ментором в Ургенче. Увлекается многими видами спорта, чтением книг и шахматами. Цель — создавать и развивать стартапы на основе искусственного интеллекта.",
      en: "Azizbek was born in 2008 in the Khorezm region. After graduating from IMI in Yangibazar district, Azizbek entered Al-Khwarizmi University on a 4-year grant and is now a 2nd-year Artificial Intelligence student.\n\nAzizbek has hands-on startup experience, having won 1st place in the \"UPSHIFT\" project and raised 14 million UZS in investment, and has been working as a SAT mentor in Urgench for 2 years. Interests include many sports, reading and chess. The goal: to build and grow startups powered by artificial intelligence.",
    },
    skills: ["AI", "Startup", "SAT Math", "English C1"],
    education: {
      uz: "Al-Xorazmiy universiteti — Sun'iy intellekt, 2-kurs (grant)",
      ru: "Университет Аль-Хорезми — Искусственный интеллект, 2 курс (грант)",
      en: "Al-Khwarizmi University — Artificial Intelligence, 2nd year (grant)",
    },
    achievements: [
      {
        uz: "\"UPSHIFT\" loyihasida 1-o'rin va 14 mln so'm investitsiya",
        ru: "1-е место в проекте «UPSHIFT» и 14 млн сумов инвестиций",
        en: "1st place in \"UPSHIFT\" and 14M UZS investment",
      },
      {
        uz: "Al-Xorazmiy universitetiga 4 yillik grant",
        ru: "4-летний грант в университет Аль-Хорезми",
        en: "4-year grant to Al-Khwarizmi University",
      },
      { uz: "Ingliz tili — C1", ru: "Английский — C1", en: "English — C1" },
    ],
    socials: {
      github: "https://github.com/Jentelmen01",
      linkedin: "https://www.linkedin.com/in/azizbek-erkayev-7066a9415",
      telegram: "https://t.me/sat_math_mentor",
      instagram: "https://instagram.com/azizbek_mentor",
      email: "azizbekerkayev814@gmail.com",
    },
    location: { uz: "Urganch", ru: "Ургенч", en: "Urgench" },
    experience: [
      {
        period: { uz: "2 yil", ru: "2 года", en: "2 years" },
        title: { uz: "SAT mentori", ru: "SAT-ментор", en: "SAT Mentor" },
        place: { uz: "Urganch", ru: "Ургенч", en: "Urgench" },
      },
      {
        title: { uz: "1-o'rin", ru: "1-е место", en: "1st place" },
        place: { uz: "UPSHIFT", ru: "UPSHIFT", en: "UPSHIFT" },
        description: {
          uz: "Loyiha 1-o'rinni egalladi va 14 mln so'm investitsiya jalb qilindi.",
          ru: "Проект занял 1-е место и привлёк 14 млн сумов инвестиций.",
          en: "The project won 1st place and raised 14 million UZS in investment.",
        },
      },
    ],
    works: [
      {
        name: "UPSHIFT",
        award: { uz: "1-o'rin", ru: "1-е место", en: "1st place" },
        description: {
          uz: "14 mln so'm investitsiya jalb qilingan startap loyiha.",
          ru: "Стартап-проект, привлёкший 14 млн сумов инвестиций.",
          en: "Startup project that raised 14 million UZS in investment.",
        },
      },
    ],
    languages: [
      { uz: "O'zbek — ona tili", ru: "Узбекский — родной", en: "Uzbek — native" },
      { uz: "Ingliz — C1", ru: "Английский — C1", en: "English — C1" },
    ],
    interests: [
      { uz: "Sport", ru: "Спорт", en: "Sports" },
      { uz: "Shaxmat", ru: "Шахматы", en: "Chess" },
      { uz: "Kitob o'qish", ru: "Чтение книг", en: "Reading" },
      { uz: "Kino ko'rish", ru: "Кино", en: "Movies" },
    ],
  },
];

export const getMember = (slug: string) => team.find((m) => m.slug === slug);

/** Shu texnologiyani biladigan a'zolar */
export const membersWithSkill = (skill: string) => team.filter((m) => m.skills.includes(skill));
