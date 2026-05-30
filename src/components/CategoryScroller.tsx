import { Icon } from "./Icon";
import { categories } from "@/lib/data";

export function CategoryScroller() {
  return (
    <div className="no-scrollbar flex gap-6 overflow-x-auto px-container-margin">
      {categories.map((cat) => (
        <button key={cat.id} type="button" className="flex shrink-0 flex-col items-center gap-2">
          <span
            className={`flex h-16 w-16 items-center justify-center rounded-xl ${cat.tint} ${cat.color} transition-transform active:scale-90`}
          >
            <Icon name={cat.icon} size={30} />
          </span>
          <span className="text-label-sm text-on-surface-variant">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
