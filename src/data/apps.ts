import { DownloadOption, DownloadsCollection } from "@/lib/downloads";

export interface Feature {
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface Screenshot {
  url: string;
  caption: string;
  isCover?: boolean;
}

export interface InstallationStep {
  step: number;
  title: string;
  description: string;
  warning?: string;
  tip?: string;
}

export interface SystemRequirements {
  os: string;
  processor: string;
  ram: string;
  storage: string;
  architecture: string;
  additional?: string[];
}

export interface ReleaseNote {
  version: string;
  date: string;
  isLatest?: boolean;
  highlight?: string;
  changes: string[];
  fixes?: string[];
  knownIssues?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AppData {
  id: string;
  name: string;
  tagline: string;
  version: string;
  status: "available" | "development" | "coming_soon";
  category: "Windows Applications" | "AI Tools" | "Productivity" | "Developer Tools" | "Experimental Projects";
  description: string;
  longDescription: string;
  problemSolved: string;
  whoIsItFor: string;
  logo: string;
  platform: string;
  fileSize?: string;
  releaseDate: string;
  featured?: boolean;
  githubUrl?: string;
  downloads: DownloadsCollection;
  features: Feature[];
  screenshots: Screenshot[];
  installation: InstallationStep[];
  requirements: SystemRequirements;
  releases: ReleaseNote[];
  faq: FAQItem[];
}

export const apps: AppData[] = [
  {
    id: "xtreme-ai-browser",
    name: "Xtreme AI Browser",
    tagline: "AI-Powered Next-Generation Desktop Browser",
    version: "0.6.0",
    status: "available",
    category: "AI Tools",
    description: "An AI-powered desktop browser with integrated Rafail AI, profiles, identity management, and advanced privacy tools.",
    longDescription:
      "Xtreme AI Browser redefines how you interact with the modern web. Engineered from the ground up for power users, developers, and researchers, it seamlessly embeds Rafail AI directly into your browsing workflows. From multi-identity sandboxes and instant page summarization to script-assisted automation and native ad-blocking, Xtreme AI Browser keeps your browsing fast, isolated, and intelligent.",
    problemSolved:
      "Standard web browsers consume gigabytes of memory, track user activities relentlessly, and isolate AI into disjointed chat tabs. Xtreme AI Browser brings local AI assistance directly to the DOM and user viewport while enforcing strict zero-telemetry identity boundaries between your tasks.",
    whoIsItFor:
      "Developers, researchers, and privacy-conscious users seeking an AI-integrated browser with local sandboxing, multiple isolated profiles, and direct desktop automation.",
    logo: "/images/apps/xtreme-browser.svg",
    platform: "Windows 10 / 11 (64-bit)",
    fileSize: "84.2 MB",
    releaseDate: "2024-10-18",
    featured: true,
    githubUrl: "https://github.com/Xtremerpie",
    downloads: {
      windowsInstaller: {
        label: "Windows Installer (.exe)",
        url: "PASTE_GOOGLE_DRIVE_LINK_HERE", // Replace with your Google Drive share or direct link
        fileSize: "84.2 MB",
        checksum: "8f7e2a9b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
        format: "exe",
        platform: "windows",
        isPrimary: true,
      },
      portable: {
        label: "Portable Version (.zip)",
        url: "PASTE_PORTABLE_LINK_HERE",
        fileSize: "78.6 MB",
        format: "portable",
        platform: "windows",
      },
    },
    features: [
      {
        title: "Rafail AI In-Browser Copilot",
        description: "Summarize research papers, explain complex web documentation, extract structured data, and translate in real-time.",
        iconName: "Bot",
        highlight: true,
      },
      {
        title: "Multi-Identity Sandboxing",
        description: "Run multiple isolated browser instances simultaneously with distinct cookies, session data, and proxy configurations.",
        iconName: "Shield",
        highlight: true,
      },
      {
        title: "Privacy Shield & Zero Telemetry",
        description: "Aggressive tracker blocking, fingerprinting protection, and zero background analytics to protect your digital sovereignty.",
        iconName: "Lock",
      },
      {
        title: "Integrated Developer Toolkit",
        description: "Built-in network inspection, quick script injector, and DOM telemetry designed for rapid web inspection.",
        iconName: "Code2",
      },
      {
        title: "Low Memory Architecture",
        description: "Aggressively sleeps inactive background tabs to maintain peak system responsiveness and reduce RAM spikes.",
        iconName: "Cpu",
      },
      {
        title: "Futuristic Dark UI",
        description: "Custom-crafted interface styled in graphite, gold, and crimson with keyboard-driven commands and quick-switcher palette.",
        iconName: "Layers",
      },
    ],
    screenshots: [
      {
        url: "/images/screenshots/browser-main.svg",
        caption: "Main browser window with Rafail AI sidebar assistant and quick-launch bookmarks.",
        isCover: true,
      },
      {
        url: "/images/screenshots/browser-profiles.svg",
        caption: "Identity manager displaying multi-profile sandboxes and custom proxy toggles.",
      },
    ],
    installation: [
      {
        step: 1,
        title: "Download the Official Installer",
        description: "Click the primary Windows Installer button above to download the latest setup executable.",
        tip: "Save the installer to your Downloads folder or Desktop for easy access.",
      },
      {
        step: 2,
        title: "Run the Installer Executable",
        description: "Double-click the downloaded setup file to begin the installation procedure.",
        warning: "Because this is an independent developer build, Windows Defender SmartScreen may display 'Windows protected your PC'. Click 'More info' and then select 'Run anyway'.",
      },
      {
        step: 3,
        title: "Select Installation Preferences",
        description: "Choose your preferred destination folder and whether to create a desktop shortcut and taskbar pin.",
      },
      {
        step: 4,
        title: "Complete Setup & Launch",
        description: "Click Finish to complete installation. Xtreme AI Browser will automatically launch and initiate your initial configuration.",
      },
      {
        step: 5,
        title: "Initial Configuration",
        description: "Configure your initial profile name, default search engine, and toggle Rafail AI sidebar options in Settings.",
      },
    ],
    requirements: {
      os: "Windows 10 / Windows 11",
      processor: "64-bit Dual Core 2.0 GHz or higher",
      ram: "4 GB minimum (8 GB recommended for heavy tab multitasking)",
      storage: "300 MB free hard drive space",
      architecture: "x64 (64-bit Intel/AMD)",
      additional: ["Internet connection for Rafail AI features", "Microsoft Visual C++ Redistributable (included in installer)"],
    },
    releases: [
      {
        version: "0.6.0",
        date: "2024-10-18",
        isLatest: true,
        highlight: "Rafail AI 2.0 sidebar integration, enhanced multi-profile sandboxing, and reduced memory footprint.",
        changes: [
          "Introduced real-time AI contextual sidebar with page summarization.",
          "Implemented isolated profile compartments with unique storage states.",
          "Overhauled tab suspension engine to free up to 45% RAM when idle.",
          "Added custom theme controls with gold/crimson accent schemes.",
        ],
        fixes: [
          "Fixed session restore bug when reopening closed windows.",
          "Resolved GPU acceleration flickering on select NVIDIA cards.",
        ],
        knownIssues: [
          "Extension store synchronization is currently in progress for a future update.",
        ],
      },
      {
        version: "0.5.2",
        date: "2024-08-30",
        highlight: "Stability improvements, enhanced tracker shielding, and quick command palette.",
        changes: [
          "Added Ctrl+K Command Palette for instant navigation and tool toggles.",
          "Integrated advanced Privacy Shield ruleset.",
        ],
        fixes: [
          "Fixed cookie isolation between incognito and main workspaces.",
        ],
      },
    ],
    faq: [
      {
        question: "Why does Windows SmartScreen show an unrecognized app warning?",
        answer: "Xtreme AI Browser is an independently developed open project. Commercial code-signing certificates cost hundreds of dollars per year. To proceed, click 'More info' and then 'Run anyway'. The application is safe, contains zero spyware, and never collects telemetry.",
      },
      {
        question: "Can I use Chrome extensions with Xtreme AI Browser?",
        answer: "Xtreme AI Browser is built on a Chromium-compatible foundation. Manual CRX extension loading is supported in Developer Mode, with full one-click extension store integration planned for v0.8.0.",
      },
      {
        question: "Does Rafail AI send my personal browsing data to remote servers?",
        answer: "No. Rafail AI only processes data when you explicitly ask it to analyze or summarize a page. In default mode, no browsing history, credentials, or personal queries are ever stored or uploaded.",
      },
      {
        question: "How do I update to the newest version?",
        answer: "Simply download the latest installer from this App Hub and run it over your current installation. Your profiles, bookmarks, and settings will remain completely intact.",
      },
    ],
  },
  {
    id: "awaken",
    name: "Awaken",
    tagline: "Customizable Hourly Wake-Up, Alert & Focus Application",
    version: "1.0.0",
    status: "available",
    category: "Productivity",
    description: "A customizable hourly wake-up and alert application for Windows with user-selected media and low-footprint background alerts.",
    longDescription:
      "Awaken is an intuitive, lightweight desktop utility created to solve time blindness, eye strain, and physical fatigue during long programming and computer sessions. It quietly sits in your Windows system tray and triggers customizable hourly audio chimes, voice reminders, or custom media files to remind you to stretch, hydrate, and maintain physical alignment without disrupting your flow.",
    problemSolved:
      "Developers and professionals routinely sit for 6+ hours without moving, leading to severe fatigue, back pain, and burnout. Generic alarms are jarring and intrusive, while simple timers lack flexibility. Awaken provides elegant, customizable, ambient hourly reminders tailored specifically for focused desk workers.",
    whoIsItFor:
      "Programmers, designers, gamers, students, and desk workers who need structured, non-intrusive reminders to stay hydrated, active, and focused throughout the day.",
    logo: "/images/apps/awaken.svg",
    platform: "Windows 10 / 11 (64-bit)",
    fileSize: "24.5 MB",
    releaseDate: "2024-09-12",
    featured: true,
    githubUrl: "https://github.com/Xtremerpie",
    downloads: {
      windowsInstaller: {
        label: "Windows Download (.exe)",
        url: "PASTE_GOOGLE_DRIVE_LINK_HERE",
        fileSize: "24.5 MB",
        checksum: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        format: "exe",
        platform: "windows",
        isPrimary: true,
      },
      portable: {
        label: "Portable Standalone",
        url: "PASTE_PORTABLE_LINK_HERE",
        fileSize: "19.8 MB",
        format: "portable",
        platform: "windows",
      },
    },
    features: [
      {
        title: "Customizable Hourly Reminders",
        description: "Choose gentle audio chimes, soothing tone sequences, spoken time announcements, or load your custom audio track.",
        iconName: "Bell",
        highlight: true,
      },
      {
        title: "User-Selected Media Integration",
        description: "Easily load any MP3, WAV, or audio cue from your local drive to personalize your wake-up cues.",
        iconName: "Music",
        highlight: true,
      },
      {
        title: "Silent Tray Minimization",
        description: "Runs seamlessly in the Windows notification area with near-zero memory footprint (< 25 MB RAM).",
        iconName: "Minimize2",
      },
      {
        title: "Focus & Gaming DND Mode",
        description: "Automatically or manually pause notifications during full-screen applications, video games, or video calls.",
        iconName: "Moon",
      },
      {
        title: "Modern Dark Dashboard",
        description: "Sleek graphite interface with countdown clocks, visual sound previews, and instant toggle switches.",
        iconName: "Clock",
      },
      {
        title: "Startup & Auto-Resume",
        description: "Optionally launch on Windows boot and quietly resume your preset schedules without manual setup.",
        iconName: "Power",
      },
    ],
    screenshots: [
      {
        url: "/images/screenshots/awaken-main.svg",
        caption: "Main timer dashboard with hourly chime toggles, time display, and audio cue selector.",
        isCover: true,
      },
    ],
    installation: [
      {
        step: 1,
        title: "Download Awaken Setup",
        description: "Download the Windows Setup (.exe) or Portable Standalone executable using the buttons above.",
      },
      {
        step: 2,
        title: "Run the Installer",
        description: "Run 'Awaken-Setup-1.0.0.exe'. If prompted by Windows SmartScreen, click 'More info' and select 'Run anyway'.",
      },
      {
        step: 3,
        title: "Configure Media & Alerts",
        description: "Launch Awaken from your Desktop or Start menu. Select your favorite chime or browse your computer for a custom MP3/WAV file.",
      },
      {
        step: 4,
        title: "Enable System Tray Mode",
        description: "Click the minimize button to send Awaken to the background tray. It will keep time silently until your next interval.",
      },
    ],
    requirements: {
      os: "Windows 10 / Windows 11 (64-bit)",
      processor: "1.0 GHz or higher",
      ram: "2 GB RAM",
      storage: "60 MB free disk space",
      architecture: "x64",
      additional: ["Audio output device (speakers or headphones)"],
    },
    releases: [
      {
        version: "1.0.0",
        date: "2024-09-12",
        isLatest: true,
        highlight: "Official stable release with custom media playback and tray minimization.",
        changes: [
          "Initial public release of Awaken for Windows.",
          "Custom MP3 / WAV audio file loader.",
          "System tray minimization with right-click quick controls.",
          "DND schedule rules for nighttime and deep work blocks.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I use my own custom audio files for the alerts?",
        answer: "Yes! Awaken supports standard .mp3, .wav, and .ogg audio formats. You can browse and select any audio file from your computer.",
      },
      {
        question: "Does Awaken consume high battery or CPU?",
        answer: "No. Awaken is engineered with event-driven timers that use less than 0.1% CPU and approximately 20 MB of RAM while minimized to the tray.",
      },
    ],
  },
  {
    id: "rafail-ai",
    name: "Rafail AI",
    tagline: "Your AI Assistant & Intelligent Desktop Environment Project",
    version: "0.2.0",
    status: "development",
    category: "AI Tools",
    description: "An AI assistant and intelligent desktop environment project designed for autonomous execution and local desktop orchestration.",
    longDescription:
      "Rafail AI is an ambitious personal AI companion and desktop assistant created to unify local task automation, intelligent context understanding, and developer workflows. Rafail AI acts as your primary interactive interface: listening for commands, reviewing codebases, executing terminal scripts in sandboxes, and orchestrating everyday digital workflows.",
    problemSolved:
      "Current AI tools are confined to browser tabs or mobile apps without real access to local file systems, development tools, or system shortcuts. Rafail AI bridges the divide between intelligent LLM reasoning and local operating system control.",
    whoIsItFor:
      "Developers, automators, and power users eager to explore proactive desktop AI assistants with terminal scripting abilities.",
    logo: "/images/apps/rafail-ai.svg",
    platform: "Windows 10 / 11 (Cross-platform in development)",
    fileSize: "Coming Soon",
    releaseDate: "In Development",
    featured: true,
    githubUrl: "https://github.com/Xtremerpie",
    downloads: {
      windowsInstaller: {
        label: "Windows Early Access",
        url: "", // In development, will show Coming Soon badge
        fileSize: "Pending build",
        format: "exe",
        platform: "windows",
        isPrimary: true,
      },
    },
    features: [
      {
        title: "System-Wide Quick Summon",
        description: "Global keyboard shortcut brings up an obsidian-black command prompt ready to interpret natural language.",
        iconName: "Terminal",
        highlight: true,
      },
      {
        title: "Local Script Automation",
        description: "Generates and executes verified Python and PowerShell snippets to manage files, convert media, and organize directories.",
        iconName: "Cpu",
        highlight: true,
      },
      {
        title: "Multi-Model Flexibility",
        description: "Engineered to connect with local offline models (via Ollama/GGUF) or cloud intelligence APIs.",
        iconName: "Network",
      },
      {
        title: "Contextual Screen & Code Inspector",
        description: "Intelligently understands active code files or clipboard content to assist in debugging and rapid prototyping.",
        iconName: "Eye",
      },
    ],
    screenshots: [
      {
        url: "/images/screenshots/rafail-preview.svg",
        caption: "Early prototype of Rafail AI desktop command interface with real-time prompt telemetry.",
        isCover: true,
      },
    ],
    installation: [
      {
        step: 1,
        title: "Development Phase",
        description: "Rafail AI is actively under development. Public build downloads will become accessible here as soon as closed alpha testing concludes.",
        tip: "Follow the Xtremerpie GitHub repository for early preview updates and devlogs.",
      },
    ],
    requirements: {
      os: "Windows 10 / Windows 11 (64-bit)",
      processor: "Intel Core i5 / AMD Ryzen 5 or higher",
      ram: "8 GB RAM minimum (16 GB recommended for local model inference)",
      storage: "500 MB free disk space",
      architecture: "x64",
    },
    releases: [
      {
        version: "0.2.0-dev",
        date: "Current Progress",
        isLatest: true,
        highlight: "Core automation engine, keyboard HUD overlay, and model adapter layer.",
        changes: [
          "Developed local command dispatcher with safety sandbox.",
          "Implemented global hotkey HUD interface with Framer Motion transitions.",
          "Added support for Python background scripts.",
        ],
      },
    ],
    faq: [
      {
        question: "When will Rafail AI be available for public download?",
        answer: "Rafail AI is currently undergoing active private developer testing. A public preview build will be released on this App Hub once the core safety sandboxing and initial assistant commands are finalized.",
      },
    ],
  },
  {
    id: "vyrxone-forge",
    name: "VYRXONE Forge",
    tagline: "Developer Studio & Workflow Automation Workbench",
    version: "0.1.0",
    status: "coming_soon",
    category: "Developer Tools",
    description: "An experimental developer workspace and automation pipeline tool engineered for rapid prototyping and system management.",
    longDescription:
      "VYRXONE Forge is an experimental developer workbench designed to streamline repetitive local workflows, environment variables, build triggers, and microservice testing into a unified high-tech dashboard.",
    problemSolved:
      "Modern developers juggle dozens of terminal tabs, conflicting environment configs, and disconnected scripts. VYRXONE Forge unifies these into one reactive control center.",
    whoIsItFor:
      "Software engineers and independent creators managing multi-project pipelines and automation routines.",
    logo: "/images/apps/vyrxone-forge.svg",
    platform: "Windows / Linux",
    releaseDate: "Upcoming 2025",
    githubUrl: "https://github.com/Xtremerpie",
    downloads: {
      windowsInstaller: {
        label: "Upcoming Release",
        url: "",
        format: "exe",
        platform: "windows",
      },
    },
    features: [
      {
        title: "Pipeline Orchestration",
        description: "Visual nodes for chaining build steps, test suites, and deployment tasks.",
        iconName: "Workflow",
      },
      {
        title: "Environment Vault",
        description: "Secure, encrypted local storage for API tokens and environment secrets.",
        iconName: "Key",
      },
    ],
    screenshots: [
      {
        url: "/images/screenshots/forge-preview.png",
        caption: "Conceptual architecture of VYRXONE Forge workspace.",
        isCover: true,
      },
    ],
    installation: [
      {
        step: 1,
        title: "Under Architecture Design",
        description: "This project is currently in early conceptual development. Releases will be posted when ready.",
      },
    ],
    requirements: {
      os: "Windows 10 / 11 or Linux",
      processor: "Multi-core 64-bit CPU",
      ram: "4 GB RAM",
      storage: "200 MB",
      architecture: "x64",
    },
    releases: [
      {
        version: "0.1.0-alpha",
        date: "Design Phase",
        isLatest: true,
        changes: ["Architecture blueprint and UI design system conceptualization."],
      },
    ],
    faq: [
      {
        question: "What is the primary language used to build VYRXONE Forge?",
        answer: "It is being engineered primarily in TypeScript and Python for optimal performance and cross-platform automation capabilities.",
      },
    ],
  },
];

export function getAppById(id: string): AppData | undefined {
  return apps.find((app) => app.id.toLowerCase() === id.toLowerCase());
}

export function getFeaturedApps(): AppData[] {
  return apps.filter((app) => app.featured);
}
