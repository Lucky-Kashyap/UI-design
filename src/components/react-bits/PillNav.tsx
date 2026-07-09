import { cn } from '@/lib/utils';

export type PillNavItem = {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
};

type PillNavProps = {
  items: PillNavItem[];
  className?: string;
  solid?: boolean;
};

const PillNav = ({ items, className, solid = false }: PillNavProps) => {
  const activeIndex = items.findIndex((item) => item.isActive);

  return (
    <nav
      className={cn(
        'relative inline-flex items-center gap-0.5 rounded-tg-pill border p-1',
        solid
          ? 'border-tg-line/80 bg-tg-soft/80 backdrop-blur-xl'
          : 'border-white/10 bg-white/5 backdrop-blur-2xl',
        className,
      )}
      aria-label="Primary"
    >
      {activeIndex >= 0 && (
        <span
          className="absolute top-1 bottom-1 rounded-tg-pill bg-prism-band transition-all duration-300 ease-tg"
          style={{
            left: `calc(${activeIndex} * (100% / ${items.length}) + 0.25rem)`,
            width: `calc(100% / ${items.length} - 0.5rem)`,
            opacity: solid ? 0.12 : 0.2,
          }}
          aria-hidden="true"
        />
      )}
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={item.onClick}
          aria-current={item.isActive ? 'page' : undefined}
          className={cn(
            'relative z-10 rounded-tg-pill px-2 py-1.5 text-[0.7rem] font-medium transition-colors duration-300 xs:px-3 xs:py-2 xs:text-[0.8125rem] xl:px-4',
            item.isActive
              ? solid
                ? 'text-tg-navy'
                : 'text-white'
              : solid
                ? 'text-tg-ink/70 hover:text-tg-navy'
                : 'text-white/65 hover:text-white',
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default PillNav;
