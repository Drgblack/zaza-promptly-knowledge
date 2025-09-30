// testimonials.ts
export const TESTIMONIALS = [
  {
    quote:
      "Promptly turned the Sunday dread into a 10-minute task. The tone is spot on and I stay in control.",
    name: "Jessica R.",
    role: "Primary Teacher",
    // TODO: Replace with actual WebP stock photos - see /public/images/testimonials/README.md
    photo1x: "/images/testimonials/jessica.svg", // Will be: "/images/testimonials/jessica-240.webp"
    photo2x: "/images/testimonials/jessica.svg", // Will be: "/images/testimonials/jessica-480.webp"
    alt: "Portrait of Jessica R., Primary Teacher"
  },
  {
    quote:
      "AutoPlanner gave me a differentiated outline in minutes and explained the pedagogy behind it.",
    name: "Marcus D.",
    role: "Secondary English",
    // TODO: Replace with actual WebP stock photos - see /public/images/testimonials/README.md
    photo1x: "/images/testimonials/marcus.svg", // Will be: "/images/testimonials/marcus-240.webp"
    photo2x: "/images/testimonials/marcus.svg", // Will be: "/images/testimonials/marcus-480.webp"
    alt: "Portrait of Marcus D., Secondary English teacher"
  },
  {
    quote:
      "RealtyClose sits in Gmail and just works. I am sending polished, accurate replies in seconds.",
    name: "Hannah S.",
    role: "Estate Agent",
    // TODO: Replace with actual WebP stock photos - see /public/images/testimonials/README.md
    photo1x: "/images/testimonials/hannah.svg", // Will be: "/images/testimonials/hannah-240.webp"
    photo2x: "/images/testimonials/hannah.svg", // Will be: "/images/testimonials/hannah-480.webp"
    alt: "Portrait of Hannah S., Estate Agent"
  },
  {
    quote:
      "LawClose keeps language precise and consistent across the team. Fewer rewrites, faster updates.",
    name: "Priya K.",
    role: "Solicitor",
    // TODO: Replace with actual WebP stock photos - see /public/images/testimonials/README.md
    photo1x: "/images/testimonials/priya.svg", // Will be: "/images/testimonials/priya-240.webp"
    photo2x: "/images/testimonials/priya.svg", // Will be: "/images/testimonials/priya-480.webp"
    alt: "Portrait of Priya K., Solicitor"
  }
] as const;

export const TESTIMONIAL_CREDITS: Array<{
  name: string;
  provider: string;
  author: string;
  url?: string;
}> = [
  // To be filled with stock photo source information once images are sourced
  // Example structure:
  // { name: "Jessica R.", provider: "Pexels", author: "Photographer Name", url: "https://www.pexels.com/..." }
];