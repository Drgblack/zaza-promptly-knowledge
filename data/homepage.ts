export const HERO = {
  h1: "Helping Professionals Thrive with AI Built for Their World",
  subA: "For teachers: faster lesson planning and stress-free parent communication.",
  subB: "For professionals: accurate inbox replies that close loops faster.",
  helper: "Built by educators for teachers, and crafted for professionals who live in their inbox.",
  ctaTeachers: { label: "Reclaim Your Sunday", href: "/products#teachers" },
  ctaPros:     { label: "Close Loops Faster",  href: "/products#close" }
} as const;

export const TEACHER_INTRO = {
  h2: "AI planning and parent comms for teachers",
  sub: "Spend less time on admin, more time teaching. With Zaza Teacher Suite you can plan aligned lessons in minutes and write parent messages that sound like you.",
  bullets: [
    "Smart lesson plans ready in under 5 minutes",
    "Polished parent messages without the stress",
    "Comment and report writing that saves hours each week"
  ],
  cta: { label: "Explore Teacher Suite", href: "/products#teachers" }
} as const;

export const TEACHER_PAINS = {
  h3: "Sound familiar?",
  bullets: [
    "Sunday evenings vanish into hours of planning.",
    "Parent emails pile up during your only free 20 minutes.",
    "Report writing drains energy and blurs into the same words."
  ]
} as const;

export const CLOSE_INTRO = {
  h2: "Inbox clarity and faster deal flow for professionals",
  sub: "Zaza Close Suite turns endless email loops into accurate, audit-ready replies that move work forward.",
  bullets: [
    "On-voice replies that cut follow-up time",
    "Consistent, compliant drafts across your team",
    "Save 5–10 hours a week closing loops faster"
  ],
  cta: { label: "Explore Close Suite", href: "/products#close" }
} as const;

export const CLOSE_PAINS = {
  h3: "These pain points blocking you?",
  bullets: [
    "Follow-ups sit ignored in the inbox while deals stall.",
    "Teams retype the same replies for hours each week.",
    "Compliance and brand tone slip because the right words are hard to find."
  ]
} as const;

export const PROOF = [
  "10,000+ users worldwide",
  "5–10 hours saved per week", 
  "90% on-voice after edits",
  "<2s to first draft"
] as const;

export const FINAL_CTA = {
  h2: "Ready to work smarter with Zaza?",
  sub: "Whether you are teaching or closing, our assistants give you back time and confidence.",
  left:  { label: "Reclaim Your Sunday", href: "/products#teachers", variant: "primary" },
  right: { label: "Close Loops Faster",  href: "/products#close",    variant: "outline" }
} as const;

export const TESTIMONIALS = [
  {
    name: "Jessica R.",
    role: "Primary Teacher",
    quote: "Sunday planning used to take 3 hours. Now it's done in 30 minutes with better results.",
    image: "/images/testimonials/jessica"
  },
  {
    name: "Marcus D.", 
    role: "Secondary English Teacher",
    quote: "Parent emails that used to stress me out now get written in seconds, and they sound exactly like me.",
    image: "/images/testimonials/marcus"
  },
  {
    name: "Hannah S.",
    role: "Estate Agent",
    quote: "My follow-up emails are finally consistent and professional. Clients respond faster than ever.",
    image: "/images/testimonials/hannah"
  },
  {
    name: "Priya K.",
    role: "Solicitor",
    quote: "Complex client updates that took an hour now take 5 minutes. The accuracy and tone are perfect.",
    image: "/images/testimonials/priya"
  }
] as const;

export const TRUST_PRIVACY = {
  h2: "Trust and privacy",
  bullets: [
    "Minimal OAuth scopes and least privilege by default",
    "No training on private classroom or client data", 
    "Clear export and deletion in Settings",
    "GDPR aligned with SOC 2 readiness underway"
  ],
  policyLink: { label: "Read the full Privacy Policy", href: "/legal/privacy" }
} as const;