import Image from 'next/image';
import React from 'react';
import styles from './TopNav.module.scss';

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

// TODO Color scheme impl.
const mode = 'light';

export default function TopNav() {
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
        <button>
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
        <button>
          {mode === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z"
                fill="currentColor"
              ></path>
              <path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path>
              <path d="M2 15.005h5v2H2z" fill="currentColor"></path>
              <path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path>
              <path d="M15 25.005h2v5h-2z" fill="currentColor"></path>
              <path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path>
              <path d="M25 15.005h5v2h-5z" fill="currentColor"></path>
              <path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path>
              <path d="M15 2.005h2v5h-2z" fill="currentColor"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
