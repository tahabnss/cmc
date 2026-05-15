"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      if (ref.current) ref.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (ref.current) ref.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 100}px, ${pos.current.y - 100}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9998] opacity-0 transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        opacity: 0.15,
      }}
    />
  );
}
