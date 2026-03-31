'use client';
import { useState } from 'react';

interface Reference {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: string;
  url: string;
}

export default function References({ references }: { references: Reference[] }) {
  const [open, setOpen] = useState(false);

  if (!references || references.length === 0) return null;

  return (
    <div className="mt-10 border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="font-semibold text-navy-900 text-sm">
          Key References ({references.length} studies cited)
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 space-y-3 bg-white">
          {references.map((ref, i) => (
            <div key={ref.id} className="text-sm text-gray-600 leading-relaxed">
              <span className="text-gray-400 mr-2">[{i + 1}]</span>
              {ref.authors}. &ldquo;{ref.title}.&rdquo; <em>{ref.journal}</em>, {ref.year}.{' '}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-800 underline"
              >
                PubMed
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
