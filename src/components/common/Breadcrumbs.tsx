import React, { useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { BASE_URL } from '../../lib/seo';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  useEffect(() => {
    // Generate BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${BASE_URL}/${item.label.toLowerCase().replace(/\s+/g, '-')}`,
      })),
    };

    let script = document.querySelector('script[data-breadcrumb-schema="true"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-breadcrumb-schema', 'true');
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(breadcrumbSchema);
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-neutral-100/80 rounded-2xl border border-neutral-200/80 my-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-600">
        <li>
          <button
            onClick={() => items[0]?.onClick?.()}
            className="flex items-center gap-1 hover:text-[#E86A2D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E86A2D] rounded px-1"
            aria-label="Home Page"
          >
            <Home className="w-3.5 h-3.5 text-neutral-500" />
            <span className="font-semibold">Home</span>
          </button>
        </li>

        {items.slice(1).map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" aria-hidden="true" />
            {item.active ? (
              <span
                className="font-bold text-[#E86A2D] truncate max-w-[200px] sm:max-w-none"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <button
                onClick={item.onClick}
                className="hover:text-[#E86A2D] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#E86A2D] rounded px-1 truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
