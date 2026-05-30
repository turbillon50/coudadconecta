interface SectionHeaderProps {
  title: string;
  action?: string;
  className?: string;
}

export function SectionHeader({ title, action, className }: SectionHeaderProps) {
  return (
    <div className={`mb-4 flex items-center justify-between ${className ?? ""}`}>
      <h3 className="text-title-lg font-semibold text-on-surface">{title}</h3>
      {action ? (
        <button type="button" className="text-label-md font-bold text-primary hover:underline">
          {action}
        </button>
      ) : null}
    </div>
  );
}
