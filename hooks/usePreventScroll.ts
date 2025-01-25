"use client";

import { useEffect, useCallback } from "react";

export function usePreventScroll(isOpen: boolean) {
  const preventDefault = useCallback((e: TouchEvent) => {
    // Allow scrolling on form elements
    const target = e.target as HTMLElement;
    if (target.closest('input, textarea, select')) {
      return;
    }
    e.preventDefault();
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('modal-open');

      document.addEventListener('touchmove', preventDefault, { passive: false });

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.classList.remove('modal-open');
        window.scrollTo(0, scrollY);
        document.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isOpen, preventDefault]);
}

