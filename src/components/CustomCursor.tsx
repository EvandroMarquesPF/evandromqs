import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.project-card') ||
          target.classList.contains('tech-pill') ||
          target.classList.contains('filter-btn'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`cursor-dot ${isVisible ? 'is-visible' : ''}`}
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
        }}
      />
      <div
        className={`cursor-ring ${isVisible ? 'is-visible' : ''} ${
          isHovering ? 'is-hovering' : ''
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovering ? 25 : 17)}px, ${
            position.y - (isHovering ? 25 : 17)
          }px, 0)`,
        }}
      />
    </>
  );
};
