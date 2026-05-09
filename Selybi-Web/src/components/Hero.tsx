import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Sparkles, Globe2 } from "lucide-react";

/* Light-mode palette */
const D = {
  bg:         "#f8fafc",            /* slate-50 */
  foreground: "#0f172a",            /* slate-900 */
  mutedFg:    "#64748b",            /* slate-500 */
  primary:    "#3b82f6",            /* blue-500 */
  card:       "rgba(0,0,0,0.03)",
  border:     "rgba(0,0,0,0.08)",
};

const AIInfraVisual = () => (
  <div className="relative aspect-square w-full max-w-[560px] lg:max-w-none [overflow:visible]">
    {/* Ambient glow */}
    <div className="absolute inset-8 -z-10 rounded-full blur-3xl" style={{ background: `${D.primary}1a` }} />
    <div className="absolute inset-20 -z-10 rounded-full blur-2xl" style={{ background: `${D.primary}26` }} />


    <svg
      viewBox="0 0 500 500"
      className="h-full w-full overflow-visible"
      style={{ overflow: "visible" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
          <stop offset="50%" stopColor="#eab308" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#111827" stopOpacity="1" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eab308" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(148,163,184,0.2)" />
        </pattern>
      </defs>

      {/* Outer dotted circle backdrop */}
      <circle cx="250" cy="250" r="240" fill="url(#dots)" opacity="0.25" />

      {/* Concentric rings */}
      {[80, 130, 180, 230].map((r, i) => (
        <circle
          key={r}
          cx="250"
          cy="250"
          r={r}
          stroke="rgba(248,250,252,1)"
          strokeOpacity={0.06 + i * 0.02}
          strokeWidth={i === 1 ? 1.5 : 1}
          strokeDasharray={i % 2 ? "2 6" : undefined}
        />
      ))}

      {/* Rotating orbit ring */}
      <g color="#3b82f6">
        <circle
          cx="250"
          cy="250"
          r="180"
          stroke="url(#orbit)"
          strokeWidth="2"
          style={{ transformOrigin: "250px 250px" }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="250"
          cy="250"
          r="130"
          stroke="url(#orbit)"
          strokeWidth="1.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 250 250"
            to="0 250 250"
            dur="22s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Neural network connections */}
      <g stroke="rgba(234,179,8,0.35)" strokeWidth="0.8">
        {[
          [250, 70, 380, 160],
          [250, 70, 120, 160],
          [380, 160, 420, 320],
          [120, 160, 80, 320],
          [420, 320, 320, 430],
          [80, 320, 180, 430],
          [320, 430, 180, 430],
          [250, 70, 250, 250],
          [380, 160, 250, 250],
          [120, 160, 250, 250],
          [420, 320, 250, 250],
          [80, 320, 250, 250],
          [320, 430, 250, 250],
          [180, 430, 250, 250],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* Outer neural nodes */}
      {[
        { x: 250, y: 70 },
        { x: 380, y: 160 },
        { x: 420, y: 320 },
        { x: 320, y: 430 },
        { x: 180, y: 430 },
        { x: 80, y: 320 },
        { x: 120, y: 160 },
      ].map((p, i) => (
        <g key={i} color="#eab308">
          <circle cx={p.x} cy={p.y} r="16" fill="url(#nodeGlow)" />
          <circle cx={p.x} cy={p.y} r="5" fill="#111827" />
          <circle
            cx={p.x}
            cy={p.y}
            r="9"
            stroke="#eab308"
            strokeWidth="1"
            opacity="0.5"
          >
            <animate
              attributeName="r"
              values="9;14;9"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur={`${3 + (i % 3)}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Hexagonal core */}
      <g color="#eab308" style={{ transformOrigin: "250px 250px" }}>
        <polygon
          points="250,200 293,225 293,275 250,300 207,275 207,225"
          stroke="#111827"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="20s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          points="250,215 280,232 280,268 250,285 220,268 220,232"
          stroke="#eab308"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 250 250"
            to="0 250 250"
            dur="14s"
            repeatCount="indefinite"
          />
        </polygon>
      </g>

      {/* Center hub */}
      <g color="#eab308">
        <circle cx="250" cy="250" r="50" fill="url(#hub)" opacity="0.35" />
        <circle cx="250" cy="250" r="22" fill="#111827" />
        <circle
          cx="250"
          cy="250"
          r="22"
          stroke="#eab308"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* Core pulse */}
        <circle
          cx="250"
          cy="250"
          r="22"
          stroke="#eab308"
          strokeWidth="2"
          fill="none"
        >
          <animate attributeName="r" values="22;60;22" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Data packets traveling along connections */}
      {[
        { path: "M250,70 L250,250", dur: "3s" },
        { path: "M380,160 L250,250", dur: "4s" },
        { path: "M120,160 L250,250", dur: "3.5s" },
        { path: "M420,320 L250,250", dur: "4.5s" },
        { path: "M80,320 L250,250", dur: "3.2s" },
        { path: "M320,430 L250,250", dur: "5s" },
        { path: "M180,430 L250,250", dur: "4.2s" },
      ].map((p, i) => (
        <circle key={i} r="2.5" fill="#eab308">
          <animateMotion dur={p.dur} repeatCount="indefinite" path={p.path} />
        </circle>
      ))}

      {/* Free-roaming orb (extends beyond viewBox, no clipping) */}
      <g>
        <circle r="6" fill="#111827" opacity="0.9">
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            path="M -80,250 C 50,-60 450,-60 580,250 C 450,560 50,560 -80,250 Z"
          />
          <animate attributeName="opacity" values="0;1;1;0;1;1;0" dur="14s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="#eab308" opacity="0.2">
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            path="M -80,250 C 50,-60 450,-60 580,250 C 450,560 50,560 -80,250 Z"
          />
        </circle>
        <circle r="4" fill="#eab308" opacity="0.9">
          <animateMotion
            dur="11s"
            repeatCount="indefinite"
            path="M 250,-60 C 560,80 560,420 250,560 C -60,420 -60,80 250,-60 Z"
          />
          <animate attributeName="opacity" values="1;1;0;1;1;0;1" dur="11s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Corner data fragments */}
      <g fill="rgba(148,163,184,0.4)" fontSize="8" fontFamily="monospace">
        <text x="20" y="30">01001</text>
        <text x="430" y="30">10110</text>
        <text x="20" y="485">11010</text>
        <text x="430" y="485">00101</text>
      </g>
    </svg>
  </div>
);

const principles = [
  { label: "Solution", icon: Lightbulb },
  { label: "Innovation", icon: Sparkles },
  { label: "Impact", icon: Globe2 },
];

const Hero = () => {
  return (
    <section
      className="relative"
      style={{ background: D.bg, color: D.foreground, height: '80vh' }}
    >
      {/* Aurora backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(59,130,246,0.12) 0%, transparent 70%), " +
            "radial-gradient(50% 50% at 10% 90%, rgba(20,184,166,0.08) 0%, transparent 70%), " +
            "radial-gradient(40% 40% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl" style={{ background: 'rgba(59,130,246,0.1)' }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl" style={{ background: 'rgba(59,130,246,0.06)' }} />

      <div className="container relative mx-auto grid grid-cols-1 items-center gap-4 px-6 h-full lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl order-last lg:order-first">
          {/* Eyebrow */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] backdrop-blur sm:text-xs"
            style={{ border: `1px solid ${D.border}`, background: D.card, color: D.mutedFg }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: D.primary }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: D.primary }} />
            </span>
            AI Infrastructure
          </span>

          <h1
            className="mt-3 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: D.foreground, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Selybi<span style={{ color: D.primary }}>.</span>
          </h1>

          {/* Three principles */}
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-8">
            {principles.map(({ label, icon: Icon }) => (
              <li key={label} className="group flex items-center gap-2 text-sm font-medium sm:text-base" style={{ color: D.foreground }}>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
                  style={{ border: `1px solid ${D.border}`, background: D.card }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: D.mutedFg }} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-3 max-w-md text-sm" style={{ color: D.mutedFg }}>
            Engineering the infrastructure that turns intelligence into outcomes.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <Link
              to="/platform"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#111827', boxShadow: '0 4px 20px rgba(0,0,0,0.18)' }}
            >
              Explore Platform <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:bg-yellow-400 hover:text-black"
              style={{ border: '1px solid #eab308', background: 'transparent', color: '#111827' }}
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="flex items-center justify-center lg:justify-end order-first lg:order-last min-h-0">
          <AIInfraVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
