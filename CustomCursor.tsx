"use client";

import { useEffect, useState } from "react";

type ClickBurst = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [bursts, setBursts] = useState<ClickBurst[]>([]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);
    const onClick = (event: MouseEvent) => {
      const id = Date.now();
      setBursts((items) => [
        ...items.slice(-5),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(() => {
        setBursts((items) => items.filter((item) => item.id !== id));
      }, 650);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-ember/70 mix-blend-difference transition-[opacity,transform] duration-150 md:block ${
          visible ? "opacity-100" : "opacity-0"
        } ${active ? "scale-75" : "scale-100"}`}
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember" />
      </div>

      {bursts.map((burst) => (
        <span
          key={burst.id}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[59] hidden h-3 w-3 animate-click-burst rounded-full border border-ember/80 bg-ember/20 md:block"
          style={{
            transform: `translate3d(${burst.x - 6}px, ${burst.y - 6}px, 0)`,
          }}
        />
      ))}
    </>
  );
}
