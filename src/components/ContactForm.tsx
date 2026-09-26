"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const inputCls =
  "w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !data.reach?.trim() || !data.message?.trim()) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot: botlar to'ldiradi, odamlar ko'rmaydi */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">{t("name")}</span>
          <input name="name" required maxLength={100} className={inputCls} />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">{t("reach")}</span>
          <input name="reach" required maxLength={100} className={inputCls} placeholder="@username / you@mail.com" />
        </label>
      </div>
      <label className="block space-y-1.5">
        <span className="text-sm font-medium">{t("message")}</span>
        <textarea name="message" required maxLength={2000} rows={5} className={`${inputCls} resize-y`} />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          role="status"
          className={`text-sm ${status === "success" ? "text-emerald-500" : "text-rose-500"}`}
        >
          {status === "success" && t("success")}
          {status === "error" && t("error")}
          {status === "invalid" && t("invalid")}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-fg px-6 py-3.5 text-sm font-semibold text-bg transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? t("sending") : t("send")}
        </button>
      </div>
    </form>
  );
}
