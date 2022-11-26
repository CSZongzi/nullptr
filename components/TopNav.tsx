import ColorSchemeIcon from '@/icons/ColorSchemeIcon';
import LanguageIcon from '@/icons/LanguageIcon';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './TopNav.module.scss';

export default function TopNav() {
  const avatarRotate = {
    ref: React.createRef<HTMLDivElement>(),
    rotating: false,
    timer: null as null | NodeJS.Timer,

    doRotate: () => {
      // If avatar is rotating, nothing to do
      if (avatarRotate.rotating) {
        return;
      }

      // If ref.current is null, nothing to do
      if (!avatarRotate.ref.current) {
        return;
      }

      avatarRotate.rotating = true;
      avatarRotate.ref.current.style.transition = 'all 0.75s';
      avatarRotate.ref.current.style.transform = '';
      avatarRotate.ref.current.style.transform = 'rotate(1turn)';

      // After 750ms, the rotation should finish
      setTimeout(() => {
        // If ref.current is null, nothing to do
        if (!avatarRotate.ref.current) {
          return;
        }

        avatarRotate.ref.current.removeAttribute('style');
        avatarRotate.rotating = false;
      }, 750);
    },

    handleAvatarClick: (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      avatarRotate.doRotate();
    },

    handleAvatarMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();

      // Wait 300ms to start rotation
      avatarRotate.timer = setTimeout(() => {
        avatarRotate.doRotate();
      }, 300);
    },

    handleAvatarMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();

      // If the mouse leaves, stop waiting
      if (avatarRotate.timer) {
        clearTimeout(avatarRotate.timer);
        avatarRotate.timer = null;
      }
    },
  };

  const router = useRouter();

  const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (router.locale === 'en') {
      router.push('/', '', { locale: 'zh' });
    } else {
      router.push('/', '', { locale: 'en' });
    }
  };

  const [currentColorScheme, setCurrentColorScheme] = useState('auto');

  const colorScheme = {
    applyMode: (scheme: 'light' | 'dark') => {
      document.body.className = `color-${scheme}`;
      setCurrentColorScheme(scheme);
    },
    toggleMode: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      switch (currentColorScheme) {
        case 'light':
          colorScheme.applyMode('dark');
          break;
        case 'dark':
          colorScheme.applyMode('light');
          break;
      }
    },
  };

  useEffect(() => {
    if (currentColorScheme === 'auto') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorScheme.applyMode('dark');
      } else {
        colorScheme.applyMode('light');
      }
    }
  });

  return (
    <section className={styles.topNav}>
      <div
        ref={avatarRotate.ref}
        className={styles.avatar}
        onClick={avatarRotate.handleAvatarClick}
        onMouseEnter={avatarRotate.handleAvatarMouseEnter}
        onMouseLeave={avatarRotate.handleAvatarMouseLeave}
      >
        <Image src="/avatar.png" alt="CSZongzi's avatar" fill draggable={false} />
      </div>
      <div className={styles.buttons}>
        <button aria-label="Toggle language" onClick={toggleLanguage}>
          <LanguageIcon />
        </button>
        <button aria-label="Toggle color scheme" onClick={colorScheme.toggleMode}>
          <ColorSchemeIcon colorScheme={currentColorScheme} />
        </button>
      </div>
    </section>
  );
}
