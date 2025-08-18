import React, { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import "@/index.css"; // make sure CSS is loaded

interface Props {
  children: React.ReactNode;
}

const FadeSection: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <div ref={ref} className={`fade-section ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default FadeSection;
