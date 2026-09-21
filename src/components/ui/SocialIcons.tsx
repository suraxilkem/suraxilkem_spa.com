import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Brand marks for footer social links. lucide-react (current major) dropped
 * brand/logo icons, so these are minimal inline SVGs -- same pattern the
 * original site used for its icon set, just hand-written instead of pulled
 * from a library.
 */

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.8 21.8 0 0 0 14.3 3.7c-2.36 0-3.98 1.44-3.98 4.08v2.24H7.65v3.08h2.67V21h3.18Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.44 20.5v-6.6c0-3.53-1.89-5.17-4.4-5.17-2.03 0-2.94 1.12-3.45 1.9V8.5H9.2c.05.98 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.98.29-.72.95-1.47 2.06-1.47 1.45 0 2.03 1.11 2.03 2.73v6.42h3.63Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M22 12s0-3.36-.43-4.98a2.78 2.78 0 0 0-1.96-1.97C17.98 4.6 12 4.6 12 4.6s-5.98 0-7.61.45A2.78 2.78 0 0 0 2.43 7.02C2 8.64 2 12 2 12s0 3.36.43 4.98a2.78 2.78 0 0 0 1.96 1.97c1.63.45 7.61.45 7.61.45s5.98 0 7.61-.45a2.78 2.78 0 0 0 1.96-1.97C22 15.36 22 12 22 12Z" />
      <path d="M10 15.5V8.5L16 12l-6 3.5Z" fill="var(--ink)" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" {...props}>
      <path d="M13.9 10.6 21 3h-2.1l-6.15 6.6L7.7 3H3l7.44 10.3L3 21h2.1l6.6-7.1L16.9 21H21.6l-7.7-10.4Zm-2.34 2.52-.77-1.06L5.7 4.5h2.1l4.9 6.75.76 1.06 6.4 8.8h-2.1l-5.2-7.19Z" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3.46 18.35c-.05-.79-.09-2 .02-2.86.1-.78.66-4.98.66-4.98s-.17-.34-.17-.83c0-.79.46-1.37 1.03-1.37.48 0 .72.36.72.8 0 .49-.31 1.22-.47 1.9-.13.57.29 1.04.85 1.04 1.02 0 1.8-1.08 1.8-2.63 0-1.38-.99-2.34-2.4-2.34-1.64 0-2.6 1.23-2.6 2.5 0 .49.19.02.19 1.08 0 .13-.05.25-.13.34-.14.16-.36.06-.42-.07-.15-.33-.24-.75-.24-1.21 0-1.97 1.43-3.78 4.13-3.78 2.17 0 3.86 1.55 3.86 3.61 0 2.16-1.36 3.9-3.25 3.9-.63 0-1.23-.33-1.43-.72l-.39 1.49c-.14.55-.52 1.23-.77 1.65A9.5 9.5 0 1 0 12 2.5Z" />
    </svg>
  );
}
