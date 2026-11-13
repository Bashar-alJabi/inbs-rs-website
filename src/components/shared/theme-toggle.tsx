'use client';

import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const KEY = 'inbs-theme';

/** Theme is reflected by the document attribute; no duplicated React state. */
export function ThemeToggle({ label }: { label: string }) {
  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    const initial: Theme = stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const current = document.documentElement.dataset.theme;
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(KEY, next);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
      <Sun className="theme-icon-sun" aria-hidden="true" size={19} />
      <Moon className="theme-icon-moon" aria-hidden="true" size={19} />
    </button>
  );
}
