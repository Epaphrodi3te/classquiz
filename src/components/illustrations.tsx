export function PhoneProfileIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Phone */}
      <rect x="155" y="20" width="90" height="160" rx="14" stroke="#25F4EE" strokeWidth="2" fill="#111" />
      <rect x="163" y="32" width="74" height="136" rx="4" fill="#1a1a2e" />
      <circle cx="200" cy="26" r="3" fill="#333" />
      {/* Profile avatar */}
      <circle cx="200" cy="70" r="18" fill="#25F4EE" opacity="0.2" />
      <circle cx="200" cy="65" r="8" stroke="#25F4EE" strokeWidth="1.5" fill="none" />
      <path d="M188 82a12 12 0 0 1 24 0" stroke="#25F4EE" strokeWidth="1.5" fill="none" />
      {/* Username line */}
      <rect x="180" y="92" width="40" height="4" rx="2" fill="#25F4EE" opacity="0.4" />
      {/* Bio lines */}
      <rect x="174" y="102" width="52" height="3" rx="1.5" fill="#333" />
      <rect x="178" y="110" width="44" height="3" rx="1.5" fill="#333" />
      {/* Stats */}
      <rect x="170" y="122" width="20" height="8" rx="2" fill="#FE2C55" opacity="0.2" />
      <rect x="195" y="122" width="20" height="8" rx="2" fill="#25F4EE" opacity="0.2" />
      {/* Follow button */}
      <rect x="178" y="138" width="44" height="14" rx="7" fill="#FE2C55" />
      {/* Decorative elements */}
      <circle cx="60" cy="50" r="30" fill="#FE2C55" opacity="0.05" />
      <circle cx="340" cy="150" r="40" fill="#25F4EE" opacity="0.05" />
      <circle cx="80" cy="160" r="3" fill="#25F4EE" opacity="0.3" />
      <circle cx="320" cy="40" r="3" fill="#FE2C55" opacity="0.3" />
      <circle cx="50" cy="100" r="2" fill="#25F4EE" opacity="0.2" />
      <circle cx="350" cy="90" r="2" fill="#FE2C55" opacity="0.2" />
    </svg>
  );
}

export function FireTrendIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Trend graph */}
      <path d="M40 160 L100 140 L140 145 L180 110 L220 90 L260 60 L300 30 L340 25 L360 20" stroke="#FE2C55" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M40 160 L100 140 L140 145 L180 110 L220 90 L260 60 L300 30 L340 25 L360 20 L360 160 L40 160Z" fill="url(#fireGrad)" opacity="0.15" />
      <defs>
        <linearGradient id="fireGrad" x1="200" y1="20" x2="200" y2="160">
          <stop offset="0%" stopColor="#FE2C55" />
          <stop offset="100%" stopColor="#FE2C55" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Data points */}
      <circle cx="100" cy="140" r="4" fill="#FE2C55" />
      <circle cx="180" cy="110" r="4" fill="#FE2C55" />
      <circle cx="260" cy="60" r="5" fill="#FE2C55" />
      <circle cx="340" cy="25" r="6" fill="#FE2C55" />
      {/* Bars at bottom */}
      <rect x="60" y="170" width="20" height="15" rx="2" fill="#25F4EE" opacity="0.2" />
      <rect x="90" y="165" width="20" height="20" rx="2" fill="#25F4EE" opacity="0.25" />
      <rect x="120" y="168" width="20" height="17" rx="2" fill="#25F4EE" opacity="0.2" />
      <rect x="150" y="158" width="20" height="27" rx="2" fill="#25F4EE" opacity="0.3" />
      <rect x="180" y="155" width="20" height="30" rx="2" fill="#25F4EE" opacity="0.3" />
      <rect x="210" y="148" width="20" height="37" rx="2" fill="#FE2C55" opacity="0.3" />
      <rect x="240" y="140" width="20" height="45" rx="2" fill="#FE2C55" opacity="0.35" />
      <rect x="270" y="135" width="20" height="50" rx="2" fill="#FE2C55" opacity="0.4" />
      <rect x="300" y="125" width="20" height="60" rx="2" fill="#FE2C55" opacity="0.45" />
      <rect x="330" y="120" width="20" height="65" rx="2" fill="#FE2C55" opacity="0.5" />
      {/* Decorative */}
      <circle cx="50" cy="40" r="20" fill="#FE2C55" opacity="0.05" />
    </svg>
  );
}

export function AiVideoIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Brain/AI shape */}
      <circle cx="140" cy="100" r="50" stroke="#25F4EE" strokeWidth="1" fill="#25F4EE" fillOpacity="0.05" />
      <circle cx="140" cy="100" r="35" stroke="#25F4EE" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Neural network nodes */}
      <circle cx="120" cy="85" r="4" fill="#25F4EE" opacity="0.6" />
      <circle cx="140" cy="75" r="4" fill="#25F4EE" opacity="0.8" />
      <circle cx="160" cy="85" r="4" fill="#25F4EE" opacity="0.6" />
      <circle cx="125" cy="105" r="4" fill="#25F4EE" opacity="0.7" />
      <circle cx="155" cy="105" r="4" fill="#25F4EE" opacity="0.7" />
      <circle cx="140" cy="120" r="4" fill="#25F4EE" opacity="0.5" />
      {/* Connections */}
      <line x1="120" y1="85" x2="140" y2="75" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="160" y1="85" x2="140" y2="75" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="120" y1="85" x2="125" y2="105" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="160" y1="85" x2="155" y2="105" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="125" y1="105" x2="140" y2="120" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="155" y1="105" x2="140" y2="120" stroke="#25F4EE" strokeWidth="0.5" opacity="0.4" />
      <line x1="120" y1="85" x2="155" y2="105" stroke="#25F4EE" strokeWidth="0.5" opacity="0.2" />
      <line x1="160" y1="85" x2="125" y2="105" stroke="#25F4EE" strokeWidth="0.5" opacity="0.2" />
      {/* Arrow */}
      <path d="M200 100 L230 100" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" />
      <path d="M225 95 L232 100 L225 105" stroke="#FE2C55" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Video frame */}
      <rect x="250" y="60" width="110" height="80" rx="8" stroke="#FE2C55" strokeWidth="1.5" fill="#FE2C55" fillOpacity="0.05" />
      {/* Play button */}
      <circle cx="305" cy="100" r="18" fill="#FE2C55" opacity="0.2" />
      <path d="M298 90 L316 100 L298 110Z" fill="#FE2C55" />
      {/* Video lines */}
      <rect x="260" y="148" width="30" height="3" rx="1.5" fill="#333" />
      <rect x="295" y="148" width="55" height="3" rx="1.5" fill="#333" />
      <rect x="260" y="156" width="50" height="3" rx="1.5" fill="#333" opacity="0.5" />
      {/* Decorative */}
      <circle cx="40" cy="30" r="15" fill="#25F4EE" opacity="0.05" />
      <circle cx="380" cy="170" r="20" fill="#FE2C55" opacity="0.05" />
    </svg>
  );
}

export function AlgorithmIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Central gear */}
      <circle cx="200" cy="100" r="40" stroke="#25F4EE" strokeWidth="1" fill="none" opacity="0.2" />
      <circle cx="200" cy="100" r="28" stroke="#25F4EE" strokeWidth="1.5" fill="#25F4EE" fillOpacity="0.05" />
      <circle cx="200" cy="100" r="8" fill="#25F4EE" opacity="0.3" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 36 * Math.cos(rad);
        const y1 = 100 + 36 * Math.sin(rad);
        const x2 = 200 + 46 * Math.cos(rad);
        const y2 = 100 + 46 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#25F4EE" strokeWidth="3" strokeLinecap="round" opacity="0.3" />;
      })}
      {/* Connected nodes */}
      {/* Left cluster */}
      <circle cx="80" cy="60" r="12" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      <circle cx="60" cy="120" r="10" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      <circle cx="100" cy="150" r="8" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      {/* Right cluster */}
      <circle cx="320" cy="50" r="10" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      <circle cx="340" cy="110" r="12" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      <circle cx="310" cy="160" r="8" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.1" />
      {/* Connection lines */}
      <line x1="92" y1="60" x2="160" y2="88" stroke="#FE2C55" strokeWidth="0.5" opacity="0.3" />
      <line x1="70" y1="120" x2="160" y2="105" stroke="#FE2C55" strokeWidth="0.5" opacity="0.3" />
      <line x1="108" y1="150" x2="170" y2="115" stroke="#FE2C55" strokeWidth="0.5" opacity="0.2" />
      <line x1="310" y1="50" x2="240" y2="88" stroke="#FE2C55" strokeWidth="0.5" opacity="0.3" />
      <line x1="328" y1="110" x2="240" y2="105" stroke="#FE2C55" strokeWidth="0.5" opacity="0.3" />
      <line x1="302" y1="160" x2="230" y2="115" stroke="#FE2C55" strokeWidth="0.5" opacity="0.2" />
      {/* Small dots */}
      <circle cx="80" cy="60" r="3" fill="#FE2C55" opacity="0.5" />
      <circle cx="60" cy="120" r="3" fill="#FE2C55" opacity="0.5" />
      <circle cx="320" cy="50" r="3" fill="#FE2C55" opacity="0.5" />
      <circle cx="340" cy="110" r="3" fill="#FE2C55" opacity="0.5" />
    </svg>
  );
}

export function RocketViralIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Growth curve */}
      <path d="M40 170 Q100 165 150 150 Q200 130 230 100 Q260 70 290 35 Q310 15 340 10" stroke="#25F4EE" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 170 Q100 165 150 150 Q200 130 230 100 Q260 70 290 35 Q310 15 340 10 L340 170Z" fill="url(#rocketGrad)" opacity="0.1" />
      <defs>
        <linearGradient id="rocketGrad" x1="200" y1="10" x2="200" y2="170">
          <stop offset="0%" stopColor="#25F4EE" />
          <stop offset="100%" stopColor="#25F4EE" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Rocket */}
      <g transform="translate(310, 20) rotate(45)">
        <ellipse cx="0" cy="0" rx="8" ry="16" fill="#FE2C55" />
        <ellipse cx="0" cy="-12" rx="4" ry="6" fill="#FE2C55" opacity="0.8" />
        <circle cx="0" cy="-2" r="3" fill="#fff" opacity="0.3" />
        {/* Flames */}
        <ellipse cx="-3" cy="16" rx="3" ry="8" fill="#25F4EE" opacity="0.5" />
        <ellipse cx="3" cy="16" rx="3" ry="8" fill="#25F4EE" opacity="0.5" />
        <ellipse cx="0" cy="18" rx="2" ry="6" fill="#fff" opacity="0.2" />
      </g>
      {/* Milestone markers */}
      <circle cx="100" cy="163" r="5" fill="#25F4EE" opacity="0.3" />
      <text x="100" y="185" textAnchor="middle" fill="#555" fontSize="9" fontFamily="sans-serif">100</text>
      <circle cx="180" cy="138" r="5" fill="#25F4EE" opacity="0.4" />
      <text x="180" y="185" textAnchor="middle" fill="#555" fontSize="9" fontFamily="sans-serif">1K</text>
      <circle cx="250" cy="85" r="6" fill="#25F4EE" opacity="0.5" />
      <text x="250" y="185" textAnchor="middle" fill="#555" fontSize="9" fontFamily="sans-serif">10K</text>
      <circle cx="310" cy="32" r="7" fill="#25F4EE" opacity="0.6" />
      <text x="310" y="185" textAnchor="middle" fill="#555" fontSize="9" fontFamily="sans-serif">100K</text>
      {/* Stars */}
      <circle cx="360" cy="60" r="2" fill="#FE2C55" opacity="0.4" />
      <circle cx="350" cy="80" r="1.5" fill="#25F4EE" opacity="0.3" />
      <circle cx="370" cy="45" r="1.5" fill="#FE2C55" opacity="0.3" />
    </svg>
  );
}

export function MoneyIllustration() {
  return (
    <svg viewBox="0 0 400 200" fill="none" className="w-full h-auto rounded-xl">
      <rect width="400" height="200" rx="12" fill="#0a0a1a" />
      {/* Coin stacks */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = 80 + i * 60;
        const height = 30 + i * 22;
        const y = 150 - height;
        return (
          <g key={i}>
            <rect x={x - 18} y={y} width="36" height={height} rx="2" fill="#25F4EE" opacity={0.1 + i * 0.08} />
            <ellipse cx={x} cy={y} rx="18" ry="6" fill="#25F4EE" opacity={0.2 + i * 0.1} />
            <ellipse cx={x} cy={150} rx="18" ry="6" fill="#25F4EE" opacity="0.1" />
            {/* Coin lines */}
            {Array.from({ length: Math.floor(height / 12) }).map((_, j) => (
              <ellipse key={j} cx={x} cy={y + 8 + j * 12} rx="18" ry="3" stroke="#25F4EE" strokeWidth="0.5" fill="none" opacity="0.15" />
            ))}
          </g>
        );
      })}
      {/* Dollar sign */}
      <circle cx="320" cy="80" r="35" stroke="#FE2C55" strokeWidth="1" fill="#FE2C55" fillOpacity="0.05" />
      <line x1="320" y1="55" x2="320" y2="105" stroke="#FE2C55" strokeWidth="2" opacity="0.4" />
      <path d="M335 70 Q335 62 320 62 Q305 62 305 72 Q305 82 320 82 Q335 82 335 92 Q335 100 320 100 Q305 100 305 92" stroke="#FE2C55" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      {/* Growth arrow */}
      <path d="M75 155 L335 40" stroke="#FE2C55" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      {/* Decorative */}
      <circle cx="40" cy="40" r="15" fill="#25F4EE" opacity="0.04" />
      <circle cx="370" cy="160" r="20" fill="#FE2C55" opacity="0.04" />
    </svg>
  );
}

export function getIllustration(slug: string) {
  const map: Record<string, () => React.ReactElement> = {
    "creer-compte-tiktok": PhoneProfileIllustration,
    "niches-virales": FireTrendIllustration,
    "creer-videos-ia": AiVideoIllustration,
    "algorithme-tiktok": AlgorithmIllustration,
    "devenir-viral": RocketViralIllustration,
    "monetisation": MoneyIllustration,
  };
  const Component = map[slug];
  return Component ? <Component /> : null;
}
