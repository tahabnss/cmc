"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export function TiltCard({
  children,
  className = "",
  scale = 1.03,
  maxRotate = 8,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
  maxRotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform =
      `perspective(600px) rotateX(${-y * maxRotate}deg) rotateY(${x * maxRotate}deg) scale3d(${scale},${scale},${scale})`;
    el.style.boxShadow = `${x * 10}px ${y * 10}px 30px color-mix(in srgb, var(--accent) ${Math.abs(x * y) * 30}%, transparent)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    el.style.boxShadow = "none";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
