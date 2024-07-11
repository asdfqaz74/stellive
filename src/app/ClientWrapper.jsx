'use client';

import useSmoothScroll from '@/hooks/useSmoothScroll';

export default function ClientWrapper({ children }) {
  useSmoothScroll();

  return <>{children}</>;
}
