import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    const updateCursor = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        cursor.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
        cursorDot.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
    </>
  );
}
