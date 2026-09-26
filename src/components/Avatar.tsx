import Image from "next/image";

const gradients = [
  "from-accent to-accent-3",
  "from-accent-2 to-accent",
  "from-accent-3 to-accent-2",
];

export default function Avatar({
  name,
  photo,
  size = 96,
  index = 0,
  rounded = "rounded-2xl",
}: {
  name: string;
  photo?: string;
  size?: number;
  /** Rasm bo'lmaganda gradient rangini tanlash uchun */
  index?: number;
  rounded?: string;
}) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        width={size * 2}
        height={size * 2}
        className={`${rounded} object-cover`}
        style={{ width: size, height: size }}
      />
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={`grid shrink-0 place-items-center bg-gradient-to-br ${gradients[index % gradients.length]} ${rounded} font-extrabold text-white`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
