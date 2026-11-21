export interface UpdateItem {
  id: string;
  date: string;
  title: string;
  category: "release" | "feature" | "announcement" | "devlog";
  appId?: string;
  appName?: string;
  version?: string;
  summary: string;
  details: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export const updates: UpdateItem[] = [
  {
    id: "update-xtreme-browser-0-6",
    date: "2026-10-18",
    title: "Xtreme AI Browser v0.6.0 Released",
    category: "release",
    appId: "xtreme-ai-browser",
    appName: "Xtreme AI Browser",
    version: "0.6.0",
    summary: "Major release featuring the new Rafail AI sidebar copilot, multi-profile isolation compartments, and reduced memory footprint.",
    details: [
      "Integrated Rafail AI right into the browser sidebar for instant page queries and summaries.",
      "Added multi-profile sandbox manager with independent cookie jars and session cookies.",
      "Overhauled tab suspend architecture to lower idle RAM consumption by 45%.",
      "Fixed window state restoration issue on multi-monitor setups.",
    ],
    links: [
      { label: "View Release", url: "/apps/xtreme-ai-browser" },
    ],
  },
  {
    id: "update-awaken-1-0",
    date: "2026-09-12",
    title: "Awaken v1.0.0 Stable Windows Launch",
    category: "release",
    appId: "awaken",
    appName: "Awaken",
    version: "1.0.0",
    summary: "The official v1.0.0 release of Awaken is now available for Windows users.",
    details: [
      "Custom audio cue loader supporting user-selected MP3 and WAV files.",
      "Hourly alert cycles with gentle chimes or spoken time.",
      "Background minimization to Windows system tray (< 25 MB RAM).",
      "One-click mute and focus mode for deep programming sessions.",
    ],
    links: [
      { label: "Download Awaken", url: "/apps/awaken" },
    ],
  },
  {
    id: "update-hub-launch",
    date: "2026-11-19",
    title: "Official Xtremerpie App Hub Launched",
    category: "announcement",
    summary: "The brand new official software distribution and developer portfolio platform is live.",
    details: [
      "Direct downloads and verified checksums for all official applications.",
      "Dedicated detailed app pages with complete installation guides and system requirements.",
      "Cinematic dark futuristic interface with champagne gold and crimson accents.",
      "Centralized release notes and direct Google Drive file distribution.",
    ],
    links: [
      { label: "Explore Apps", url: "/apps" },
      { label: "About Xtremerpie", url: "/about" },
    ],
  },
  {
    id: "update-rafail-devlog-1",
    date: "2026-11-05",
    title: "Rafail AI Architecture Devlog: Local Automation",
    category: "devlog",
    appId: "rafail-ai",
    appName: "Rafail AI",
    summary: "A behind-the-scenes look at how Rafail AI handles sandboxed local command execution and keyboard HUD summon.",
    details: [
      "Benchmarked local vs cloud inference latency for keyboard quick-summon HUD.",
      "Drafted permission sandbox for automated file operations and script generation.",
      "Established hotkey dispatcher with zero frame drops during active gameplay or coding.",
    ],
    links: [
      { label: "Project Preview", url: "/apps/rafail-ai" },
    ],
  },
];
