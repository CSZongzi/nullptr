import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ColorSchemeIcon from './ColorSchemeIcon';
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M18 19h6v2h-6z" fill="currentColor"></path>
            <path d="M18 15h12v2H18z" fill="currentColor"></path>
            <path d="M18 11h12v2H18z" fill="currentColor"></path>
            <path
              d="M14 21v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3z"
              fill="currentColor"
            ></path>
            <path
              d="M11.167 13h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button aria-label="Toggle color scheme" onClick={colorScheme.toggleMode}>
          <ColorSchemeIcon colorScheme={currentColorScheme} />
        </button>
      </div>
    </section>
  );
}
