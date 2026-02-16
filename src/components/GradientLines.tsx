"use client";

export function GradientLines({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1200 200"
      className={`pointer-events-none absolute w-full opacity-20 ${className}`}
      preserveAspectRatio="none"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="30%" stopColor="#3b82f6" />
          <stop offset="70%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0" />
          <stop offset="30%" stopColor="#f472b6" />
          <stop offset="70%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,100 C200,40 400,160 600,80 C800,0 1000,140 1200,100"
        className="gradient-line"
        stroke="url(#grad1)"
      />
      <path
        d="M0,120 C300,60 500,180 700,100 C900,20 1100,160 1200,80"
        className="gradient-line"
        stroke="url(#grad2)"
      />
    </svg>
  );
}
