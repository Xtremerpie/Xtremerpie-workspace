export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description: string;
    icon: string;
    tag: string;
  }[];
}

export interface DeveloperProfile {
  name: string;
  tagline: string;
  headline: string;
  role: string;
  location: string;
  bio: string;
  journey: string[];
  goals: string[];
  currentFocus: string[];
  interests: {
    title: string;
    description: string;
    icon: string;
  }[];
  technologies: {
    name: string;
    category: "Languages" | "Frameworks" | "Platforms" | "Tools";
    highlight?: boolean;
    description?: string;
  }[];
  links: {
    github: string;
    email: string;
    discord?: string;
    twitter?: string;
    youtube?: string;
  };
  principles: {
    title: string;
    description: string;
  }[];
}

export const profile: DeveloperProfile = {
  name: "Xtremerpie",
  tagline: "Build. Create. Evolve.",
  headline: "BUILDING THE FUTURE, ONE PROJECT AT A TIME.",
  role: "Independent Software Developer & AI Systems Explorer",
  location: "Independent / Digital Space",
  bio: "I'm Xtremerpie — a self-taught developer exploring AI, automation, software engineering, and intelligent systems. I specialize in building practical desktop utilities, custom browser technologies, and automation tools designed to give users sovereignty and fluid digital workflows.",
  journey: [
    "Started with relentless curiosity about how software, operating systems, and automation logic work under the hood.",
    "Taught myself modern programming paradigms by building real desktop utilities, scripts, and software experiments.",
    "Ventured into AI integrations, developing custom AI companions (Rafail AI) and specialized browsers (Xtreme AI Browser).",
    "Continually crafting and shipping independent software designed with clean dark aesthetics and rock-solid privacy.",
  ],
  goals: [
    "Build practical desktop software that operates independently of corporate walled gardens.",
    "Integrate local intelligence and autonomous agent workflows into everyday productivity tools.",
    "Maintain zero-telemetry and privacy-first foundations across every distributed application.",
    "Continuously master software architecture, systems engineering, and modern web platforms.",
  ],
  currentFocus: [
    "Refining Xtreme AI Browser with local model integrations and tab sandboxing.",
    "Advancing Rafail AI desktop orchestration framework.",
    "Designing seamless cross-platform utilities in Python, Electron, and TypeScript.",
  ],
  interests: [
    {
      title: "Python Development",
      description: "Crafting background automation, system tools, algorithmic scripts, and AI pipelines.",
      icon: "Code2",
    },
    {
      title: "AI & Intelligent Assistants",
      description: "Developing responsive assistants like Rafail AI that bridge local code with reasoning models.",
      icon: "Sparkles",
    },
    {
      title: "Desktop Applications",
      description: "Building responsive, modern desktop software with native OS integration and clean dark interfaces.",
      icon: "Monitor",
    },
    {
      title: "Browser Development",
      description: "Exploring chromium internals, custom privacy protections, multi-profile isolation, and tab management.",
      icon: "Globe",
    },
    {
      title: "Automation & Scripting",
      description: "Eliminating repetitive computer friction through automated tasks, hotkeys, and pipelines.",
      icon: "Zap",
    },
    {
      title: "Operating Systems",
      description: "Studying system calls, process management, memory optimization, and environment sandboxing.",
      icon: "Cpu",
    },
    {
      title: "Web Development",
      description: "Engineering reactive, ultra-fast web interfaces with Next.js, TypeScript, and Tailwind CSS.",
      icon: "Layout",
    },
    {
      title: "Game Development",
      description: "Exploring game loops, procedural mechanics, physics, and immersive interactive graphics.",
      icon: "Gamepad2",
    },
  ],
  technologies: [
    { name: "Python", category: "Languages", highlight: true, description: "Primary language for automation, AI experiments, and backend scripting" },
    { name: "TypeScript", category: "Languages", highlight: true, description: "Type-safe development for scalable web applications and desktop tools" },
    { name: "JavaScript", category: "Languages", highlight: false, description: "Core web foundations and dynamic browser script injection" },
    { name: "Next.js", category: "Frameworks", highlight: true, description: "High-performance React framework for modern web applications" },
    { name: "React", category: "Frameworks", highlight: true, description: "Declarative component-driven user interfaces" },
    { name: "Electron", category: "Platforms", highlight: true, description: "Cross-platform desktop application packaging and OS bridging" },
    { name: "Tailwind CSS", category: "Frameworks", highlight: false, description: "Utility-first design architecture for rapid UI prototyping" },
    { name: "Framer Motion", category: "Frameworks", highlight: false, description: "Cinematic, smooth 60 FPS animations and layout transitions" },
    { name: "AI Integrations", category: "Tools", highlight: true, description: "LLM prompt orchestrations, context injection, and agent tools" },
    { name: "GitHub", category: "Tools", highlight: true, description: "Version control, release distribution, and open-source tracking" },
    { name: "Automation", category: "Tools", highlight: true, description: "Batch scripting, system triggers, and scheduled workflow pipelines" },
  ],
  links: {
    github: "https://github.com/Xtremerpie",
    email: "contact@xtremerpie.dev", // User can replace this easily
    discord: "https://discord.gg", // Configurable
    twitter: "https://x.com", // Configurable
  },
  principles: [
    {
      title: "Real Utilities First",
      description: "Every application is built to solve a concrete everyday problem, not just as a visual mockup.",
    },
    {
      title: "Zero Telemetry & User Sovereignty",
      description: "Your computer belongs to you. No tracking pixels, hidden analytics, or invasive data harvesting.",
    },
    {
      title: "Craft & Performance",
      description: "Optimized memory footprint, responsive dark aesthetics, and attention to detail down to every millisecond.",
    },
    {
      title: "Honest Independent Building",
      description: "No fabricated claims, fake metrics, or venture capital bloat — genuine independent engineering.",
    },
  ],
};
