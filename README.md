# Solution — jamoa portfolio sayti

Next.js 16 · TypeScript · Tailwind CSS 4 · next-intl (uz/ru/en) · next-themes (dark/light)

## Ishga tushirish
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Kontentni o'zgartirish
| Nima | Fayl |
|---|---|
| Jamoa a'zolari (3 kishi) | `src/data/team.ts` |
| Loyihalar (muammo → yechim → natija, asosiy raqamlar) | `src/data/projects.ts` |
| Logo, jamoa havolalari, jamoa texnologiyalari (stack) | `src/data/site.ts` |
| Interfeys matnlari (menyu, tugmalar) | `src/messages/{uz,ru,en}.json` |

- **Logo:** faylni `public/logo.svg` (yoki `.png`) ga qo'ying va `src/data/site.ts` da `logo: "/logo.svg"` deb yozing.
- **Rasmlar:** a'zolar — `public/team/`, loyihalar — `public/projects/`; yo'lini data faylda `photo: "/team/ism.jpg"` / `images: ["/projects/1.png"]` ko'rinishida yozing.
- **Tarjima:** data fayllardagi har bir matn `{ uz, ru, en }` ko'rinishida — 3 tilni ham to'ldiring.
- **Stack:** `site.ts` dagi texnologiya nomi a'zoning `skills` ro'yxatidagi nom bilan bir xil yozilsa, kim bilishi avtomatik ko'rsatiladi.

## Aloqa formasi (Telegram)
1. @BotFather orqali bot yarating, tokenni oling.
2. Botga `/start` yozing, chat ID ni oling (masalan @userinfobot orqali).
3. `.env.example` ni `.env.local` ga nusxalang va to'ldiring.
4. Vercel'da: Project Settings → Environment Variables ga shu 2 ta o'zgaruvchini qo'shing.

## Deploy (Vercel)
GitHub'ga yuklang → vercel.com → "Import Project" → avtomatik aniqlanadi.
