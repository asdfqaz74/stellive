import { useEffect } from 'react';

function easeOutQuad(t) {
  return t * (2 - t);
}

export default function useSmoothScroll() {
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      const delta = e.deltaY || e.detail || e.wheelDelta;
      const scrollAmount = 3; // 스크롤 이동 거리
      const duration = 250; // 애니메이션 지속 시간 (밀리는 듯한 효과를 위해 조절)

      let start = null;
      let startPosition = window.scrollY;
      let targetPosition = startPosition + delta * scrollAmount;

      const smoothScroll = (timestamp) => {
        if (!start) start = timestamp;

        const progress = timestamp - start;
        const time = Math.min(progress / duration, 1);
        const ease = easeOutQuad(time);

        window.scrollTo(
          0,
          startPosition + (targetPosition - startPosition) * ease,
        );

        if (progress < duration) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
}
