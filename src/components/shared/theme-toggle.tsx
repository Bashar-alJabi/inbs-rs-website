'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const KEY = 'inbs-theme';

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem(KEY);
    const initial: Theme = stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    root.dataset.theme = initial;
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = (theme || document.documentElement.dataset.theme) === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(KEY, next);
    setTheme(next);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={label} title={label}>
      {theme === 'dark' ? <Sun aria-hidden="true" size={19} /> : <Moon aria-hidden="true" size={19} />}
    </button>
  );
}
