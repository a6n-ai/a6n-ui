import { LucideIcon, Brain, MessageSquare, DollarSign, BarChart, Code, Settings, Headphones, Target } from "lucide-react";

export interface CaseStudy {
  id: string;
  department: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
  tagColor: string;
  detailContent: {
    overview: string;
    challenge: string;
    solution: string;
    benefits: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hr-onboarding",
    department: "HR AI",
    title: "Go from brainstorm to roadmap",
    description: "Onboard a new hire",
    icon: Brain,
    color: "from-purple-500/20 to-purple-600/20",
    hoverColor: "hover:from-purple-500/30 hover:to-purple-600/30",
    tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    detailContent: {
      overview: "Transform your HR onboarding process with AI-powered automation that creates comprehensive roadmaps from initial brainstorming sessions.",
      challenge: "Traditional onboarding processes are time-consuming, inconsistent, and often leave gaps in new employee training and integration.",
      solution: "Our AI analyzes your company structure, role requirements, and team dynamics to generate personalized onboarding roadmaps that ensure every new hire has a smooth start.",
      benefits: [
        "Reduce onboarding time by 60%",
        "Ensure consistent experience across all departments",
        "Automatically generate personalized training schedules",
        "Track progress and identify bottlenecks in real-time"
      ]
    }
  },
  {
    id: "marketing-campaigns",
    department: "Marketing AI",
    title: "Turn meetings into social posts",
    description: "Turn briefs into campaigns",
    icon: MessageSquare,
    color: "from-pink-500/20 to-pink-600/20",
    hoverColor: "hover:from-pink-500/30 hover:to-pink-600/30",
    tagColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    detailContent: {
      overview: "Convert marketing meetings and briefs into ready-to-publish social media campaigns with AI-powered content generation.",
      challenge: "Marketing teams spend countless hours converting meeting notes and campaign briefs into actual social media content.",
      solution: "Our AI listens to your meetings, extracts key messaging, and automatically generates platform-optimized social posts with relevant hashtags and CTAs.",
      benefits: [
        "Generate campaigns in minutes, not days",
        "Maintain consistent brand voice across all channels",
        "Optimize content for each social platform automatically",
        "A/B test variations instantly"
      ]
    }
  },
  {
    id: "sales-follow-ups",
    department: "Sales AI",
    title: "Organize your workspace",
    description: "Close deals with smart follow-ups",
    icon: DollarSign,
    color: "from-emerald-500/20 to-emerald-600/20",
    hoverColor: "hover:from-emerald-500/30 hover:to-emerald-600/30",
    tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    detailContent: {
      overview: "Never miss a sales opportunity with AI-powered follow-ups that know exactly when and how to engage prospects.",
      challenge: "Sales teams struggle to maintain timely, personalized follow-ups at scale, leading to lost opportunities and revenue.",
      solution: "Our AI analyzes prospect behavior, engagement patterns, and deal stage to automatically craft and send perfectly timed, personalized follow-ups.",
      benefits: [
        "Increase conversion rates by 40%",
        "Automate follow-up scheduling based on prospect signals",
        "Personalize messages at scale",
        "Never let a hot lead go cold"
      ]
    }
  },
  {
    id: "analytics-reports",
    department: "Analytics AI",
    title: "Onboard a new hire",
    description: "Turn raw data into reports",
    icon: BarChart,
    color: "from-blue-500/20 to-blue-600/20",
    hoverColor: "hover:from-blue-500/30 hover:to-blue-600/30",
    tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    detailContent: {
      overview: "Transform complex datasets into actionable insights with AI-powered analytics that everyone can understand.",
      challenge: "Data teams spend too much time creating reports instead of analyzing insights, while stakeholders struggle to understand complex data.",
      solution: "Our AI automatically processes raw data, identifies trends, and generates visual reports with plain-language explanations and recommendations.",
      benefits: [
        "Generate reports in seconds, not hours",
        "Automatically identify key trends and anomalies",
        "Translate data into actionable business insights",
        "Create visualizations that tell the story"
      ]
    }
  },
  {
    id: "software-docs",
    department: "Software AI",
    title: "Revise a landing page",
    description: "Generate docs from code",
    icon: Code,
    color: "from-indigo-500/20 to-indigo-600/20",
    hoverColor: "hover:from-indigo-500/30 hover:to-indigo-600/30",
    tagColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    detailContent: {
      overview: "Keep documentation always up-to-date with AI that automatically generates comprehensive docs from your codebase.",
      challenge: "Developer documentation quickly becomes outdated, incomplete, or inconsistent with actual code implementation.",
      solution: "Our AI analyzes your code, understands its structure and purpose, and automatically generates clear, comprehensive documentation that stays in sync with your codebase.",
      benefits: [
        "Save 80% of documentation time",
        "Ensure docs always match your code",
        "Generate API references automatically",
        "Create examples and tutorials from actual usage"
      ]
    }
  },
  {
    id: "finance-expenses",
    department: "Finance AI",
    title: "Plan an offsite",
    description: "Match expenses in seconds",
    icon: DollarSign,
    color: "from-amber-500/20 to-amber-600/20",
    hoverColor: "hover:from-amber-500/30 hover:to-amber-600/30",
    tagColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    detailContent: {
      overview: "Streamline expense management with AI that instantly matches, categorizes, and reconciles expenses.",
      challenge: "Finance teams waste hours manually matching receipts to transactions, leading to errors and delayed reporting.",
      solution: "Our AI automatically matches expenses with transactions, categorizes them correctly, and flags anomalies for review.",
      benefits: [
        "Process expenses 95% faster",
        "Reduce matching errors to near zero",
        "Automatically detect duplicate or suspicious expenses",
        "Generate real-time spending insights"
      ]
    }
  },
  {
    id: "operations-approvals",
    department: "Operations AI",
    title: "Track favorite restaurants",
    description: "Automate approval flows",
    icon: Settings,
    color: "from-cyan-500/20 to-cyan-600/20",
    hoverColor: "hover:from-cyan-500/30 hover:to-cyan-600/30",
    tagColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    detailContent: {
      overview: "Eliminate bottlenecks with AI-powered approval workflows that know when to route, escalate, or auto-approve.",
      challenge: "Manual approval processes slow down operations, create bottlenecks, and frustrate employees waiting for simple approvals.",
      solution: "Our AI learns your approval patterns, automatically routes requests to the right people, and handles routine approvals instantly.",
      benefits: [
        "Reduce approval time by 70%",
        "Auto-approve low-risk requests instantly",
        "Intelligent routing based on context",
        "Never lose a request in the process"
      ]
    }
  },
  {
    id: "support-tickets",
    department: "Support AI",
    title: "Transform notes into tasks",
    description: "Summarize tickets instantly",
    icon: Headphones,
    color: "from-rose-500/20 to-rose-600/20",
    hoverColor: "hover:from-rose-500/30 hover:to-rose-600/30",
    tagColor: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
    detailContent: {
      overview: "Empower support teams with AI that instantly summarizes tickets, suggests solutions, and tracks resolutions.",
      challenge: "Support agents spend too much time reading lengthy tickets and searching for solutions instead of helping customers.",
      solution: "Our AI instantly reads and summarizes tickets, identifies the core issue, and suggests relevant solutions from your knowledge base.",
      benefits: [
        "Reduce ticket resolution time by 50%",
        "Automatically categorize and prioritize tickets",
        "Suggest solutions from historical data",
        "Track trends and identify recurring issues"
      ]
    }
  }
];
