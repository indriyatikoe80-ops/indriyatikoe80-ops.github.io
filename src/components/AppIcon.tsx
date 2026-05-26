import React from 'react';

interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
}

const AppIcon = ({ name, size = 32, color = 'currentColor' }: AppIconProps) => {
  const icons: Record<string, React.ReactElement> = {
    gamepad: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" fill={color} fillOpacity="0.1"/>
        <path d="M6 12h4M8 10v4"/>
        <circle cx="15" cy="12" r="1" fill={color}/>
        <circle cx="18" cy="10" r="1" fill={color}/>
      </svg>
    ),
    sound: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill={color} fillOpacity="0.2"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    ),
    abc: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19l4-8 4 8"/>
        <path d="M5.5 16h5"/>
        <path d="M15 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
        <path d="M19 11v6"/>
      </svg>
    ),
    number: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9h4"/>
        <path d="M6 7v8"/>
        <path d="M12 7h2a2 2 0 0 1 0 4h-2v4h4"/>
        <path d="M20 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/>
      </svg>
    ),
    offline: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1" fill={color}/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill={color} fillOpacity="0.15"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    premium: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={color} fillOpacity="0.2"/>
      </svg>
    ),
    report: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
    therapy: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" fill={color} fillOpacity="0.15"/>
        <path d="M12 7v5l3 3"/>
        <path d="M5 17a7 7 0 0 1 14 0"/>
        <circle cx="12" cy="21" r="1" fill={color}/>
      </svg>
    ),
    book: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill={color} fillOpacity="0.15"/>
        <path d="M8 7h8M8 11h6"/>
      </svg>
    ),
    puzzle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.5 16c0 1.38-1.12 2.5-2.5 2.5V21a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2.5A2.5 2.5 0 0 1 3.5 16a2.5 2.5 0 0 1 2.5-2.5V11a2 2 0 0 1 2-2h2.5A2.5 2.5 0 0 1 13 6.5 2.5 2.5 0 0 1 15.5 9H18a2 2 0 0 1 2 2v2.5c1.38 0 2.5 1.12 2.5 2.5z" fill={color} fillOpacity="0.1"/>
      </svg>
    ),
    image: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill={color} fillOpacity="0.1"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill={color}/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    sentence: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="17" y1="10" x2="3" y2="10"/>
        <line x1="21" y1="6" x2="3" y2="6"/>
        <line x1="21" y1="14" x2="3" y2="14"/>
        <line x1="17" y1="18" x2="3" y2="18"/>
      </svg>
    ),
    write: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill={color} fillOpacity="0.15"/>
      </svg>
    ),
    word: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill={color} fillOpacity="0.1"/>
        <path d="M8 9h8M8 13h5"/>
      </svg>
    ),
    animal: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="13" r="5" fill={color} fillOpacity="0.1"/>
        <path d="M7 7c0-2 1.5-3 3-3s2 1 2 2"/>
        <path d="M17 7c0-2-1.5-3-3-3s-2 1-2 2"/>
        <circle cx="9" cy="13" r="1" fill={color}/>
        <circle cx="15" cy="13" r="1" fill={color}/>
        <path d="M9.5 16.5s.5 1 2.5 1 2.5-1 2.5-1"/>
      </svg>
    ),
    fruit: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 5-4 11-9 11S3 16 3 11a9 9 0 0 1 9-9z" fill={color} fillOpacity="0.15"/>
        <path d="M12 2c0 0-1-3 2-4"/>
        <path d="M12 2c0 0 1-3-2-4"/>
      </svg>
    ),
    transport: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" fill={color} fillOpacity="0.1"/>
        <path d="M16 8h4l3 3v5h-7V8z" fill={color} fillOpacity="0.1"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    activity: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" fill={color} fillOpacity="0.3"/>
        <path d="M12 7v7"/>
        <path d="M8 10l4-3 4 3"/>
        <path d="M9 17l3 3 3-3"/>
      </svg>
    ),
    body: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" fill={color} fillOpacity="0.3"/>
        <path d="M12 6v8"/>
        <path d="M8 8h8"/>
        <path d="M10 14l-2 6"/>
        <path d="M14 14l2 6"/>
      </svg>
    ),
    tool: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill={color} fillOpacity="0.1"/>
      </svg>
    ),
    pair: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="8" height="8" rx="2" fill={color} fillOpacity="0.2"/>
        <rect x="14" y="12" width="8" height="8" rx="2" fill={color} fillOpacity="0.1"/>
        <path d="M10 8h4M12 6v4"/>
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" fill={color} fillOpacity="0.1"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M8 11h6M11 8v6"/>
      </svg>
    ),
    pattern: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="5" height="5" rx="1" fill={color} fillOpacity="0.6"/>
        <rect x="9.5" y="2" width="5" height="5" rx="1" fill={color} fillOpacity="0.3"/>
        <rect x="17" y="2" width="5" height="5" rx="1" fill={color} fillOpacity="0.6"/>
        <rect x="2" y="9.5" width="5" height="5" rx="1" fill={color} fillOpacity="0.3"/>
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill={color} fillOpacity="0.6"/>
        <rect x="17" y="9.5" width="5" height="5" rx="1" fill={color} fillOpacity="0.2" strokeDasharray="2 2"/>
        <path d="M9.5 17h13" strokeDasharray="3 2"/>
      </svg>
    ),
    group: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9" rx="2" fill={color} fillOpacity="0.2"/>
        <rect x="13" y="2" width="9" height="9" rx="2" fill={color} fillOpacity="0.1"/>
        <rect x="2" y="13" width="9" height="9" rx="2" fill={color} fillOpacity="0.1"/>
        <rect x="13" y="13" width="9" height="9" rx="2" fill={color} fillOpacity="0.2"/>
      </svg>
    ),
    sequence: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="5" height="8" rx="1" fill={color} fillOpacity="0.6"/>
        <rect x="9.5" y="5" width="5" height="11" rx="1" fill={color} fillOpacity="0.4"/>
        <rect x="17" y="2" width="5" height="14" rx="1" fill={color} fillOpacity="0.2"/>
        <path d="M2 20h20"/>
      </svg>
    ),
    memory: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill={color} fillOpacity="0.1"/>
        <path d="M12 22V12"/>
        <path d="M3.27 6.96 12 12.01l8.73-5.05"/>
      </svg>
    ),
    emotion: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.1"/>
        <path d="M8 13s1.5 2 4 2 4-2 4-2"/>
        <circle cx="9" cy="10" r="1" fill={color}/>
        <circle cx="15" cy="10" r="1" fill={color}/>
      </svg>
    ),
    star: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    play: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
    lock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill={color} fillOpacity="0.1"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    unlock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill={color} fillOpacity="0.1"/>
        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
      </svg>
    ),
  };

  return icons[name] ?? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.1"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
};

export default AppIcon;
