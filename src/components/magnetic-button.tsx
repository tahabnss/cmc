"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export function MagneticButton({
  children,
  className = "",
  as = "div",
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a";
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const Tag = as;

  return (
    <Tag
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
