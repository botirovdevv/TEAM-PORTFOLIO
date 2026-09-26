import { useLocale } from "next-intl";
import { t as tr } from "@/data/types";
import { site } from "@/data/site";
import { membersWithSkill, team } from "@/data/team";
import Avatar from "./Avatar";

export default function TechStack() {
  const locale = useLocale();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {site.stack.map((group, gi) => (
        <div key={group.area.en} className="card card-hover reveal p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{tr(group.area, locale)}</h3>
            <span className="font-mono text-xs text-muted">0{gi + 1}</span>
          </div>
          <ul className="mt-5 space-y-2.5">
            {group.items.map((item) => {
              const who = membersWithSkill(item);
              return (
                <li key={item} className="flex items-center justify-between gap-3 rounded-lg bg-surface-2/60 px-3 py-2">
                  <span className="font-mono text-sm">{item}</span>
                  <span className="flex -space-x-1.5">
                    {who.map((m) => {
                      const name = tr(m.name, locale);
                      return (
                        <span key={m.slug} title={name} className="rounded-full ring-2 ring-surface-2">
                          <Avatar name={name} photo={m.photo} size={22} index={team.indexOf(m)} rounded="rounded-full" />
                        </span>
                      );
                    })}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
