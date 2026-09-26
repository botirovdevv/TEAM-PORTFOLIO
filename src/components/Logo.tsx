import { site } from "@/data/site";

/**
 * Logo joyi: src/data/site.ts dagi `logo` maydoniga fayl yo'lini yozing.
 * Fayl shaffof fonli bir rangli PNG/SVG bo'lsin — logo mavzuga qarab
 * matn rangida (tungi rejimda oq, kunduzgida qora) chiziladi.
 */
export default function Logo({ size = 36 }: { size?: number }) {
  if (site.logo) {
    const mask = `url(${site.logo}) center / contain no-repeat`;
    return (
      <span
        role="img"
        aria-label={site.name}
        className="inline-block shrink-0 bg-fg"
        style={{ width: size, height: size, mask, WebkitMask: mask }}
      />
    );
  }
  return (
    <span
      className="grid place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 font-extrabold text-accent-fg"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
      aria-hidden
    >
      S
    </span>
  );
}
