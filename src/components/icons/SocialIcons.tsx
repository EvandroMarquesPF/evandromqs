import React from 'react';

export const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const XIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const YoutubeIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

export const TiktokIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.07 2.35 2.24 1.07.18 2.21-.2 2.89-.98.54-.57.85-1.35.88-2.14.04-3.69.02-7.39.03-11.08.01-.01 0-.02 0-.03z" />
  </svg>
);

export const ThreadsIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.186 24C5.454 24 0 18.675 0 12.083 0 5.49 5.455.167 12.186.167c6.68 0 12.082 5.253 12.082 11.916 0 .524-.04 1.04-.121 1.547a1.144 1.144 0 0 1-1.134.966c-.63 0-1.14-.51-1.14-1.14 0-.457.032-.916.032-1.373 0-5.328-4.32-9.664-9.72-9.664-5.399 0-9.72 4.336-9.72 9.664 0 5.329 4.321 9.665 9.72 9.665 3.328 0 6.27-1.637 8.04-4.22.42-.613 1.258-.77 1.87-.35.612.42.77 1.258.35 1.87-2.193 3.199-5.836 5.228-9.957 5.228zm.093-7.514c-2.482 0-4.495-2.013-4.495-4.495 0-2.482 2.013-4.495 4.495-4.495 2.483 0 4.496 2.013 4.496 4.495 0 .61-.122 1.192-.34 1.725-.333.815-1.137 1.346-2.018 1.346-.576 0-1.077-.247-1.428-.646-.067.89-.806 1.59-1.71 1.59zm0-2.288c1.22 0 2.207-.988 2.207-2.207 0-1.22-.988-2.207-2.207-2.207-1.219 0-2.207.988-2.207 2.207 0 1.22.988 2.207 2.207 2.207z" />
  </svg>
);
