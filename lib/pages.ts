import { projects, type Img } from "./content";

const img = (t: string): Img => projects.find((p) => p.title === t)!.image;

export type Case = {
  title: string;
  category: string;
  summary: string;
  did: string;
  impact: string;
  results?: { value: string; label: string }[];
  image?: Img;
};

export const workCases: Case[] = [
  {
    title: "NOVA HEALTH",
    category: "Digital healthcare platform",
    summary: "A calmer care-coordination platform for clinicians and patients.",
    did: "Redesigned scheduling, records and messaging into one quiet workflow, then built it as a web app with role-based access and an audit trail.",
    impact: "Staff spend less time switching tools, and patients get clearer next steps after every visit.",
    results: [
      { value: "120+", label: "clinics onboarded" },
      { value: "35%", label: "fewer admin hours" },
      { value: "99.9%", label: "availability" },
    ],
    image: img("NOVA HEALTH"),
  },
  {
    title: "ARC / FINANCE",
    category: "Financial intelligence platform",
    summary: "Decision systems that make portfolio risk readable at a glance.",
    did: "Defined a data-visualisation language, built the design system, and engineered a real-time dashboard on top of the client’s data warehouse.",
    impact: "Analysts reach decisions faster and the whole team reads risk the same way.",
    results: [
      { value: "4x", label: "faster reporting" },
      { value: "2,800", label: "active analysts" },
      { value: "6 mo", label: "from brief to launch" },
    ],
    image: img("ARC / FINANCE"),
  },
  {
    title: "FIELDNOTE",
    category: "Creative collaboration platform",
    summary: "A shared thinking space for distributed creative teams.",
    did: "Prototyped the core canvas with real teams, then built the collaborative editor, comments and sharing from scratch.",
    impact: "Teams move from scattered docs to one shared place, and adoption spread by word of mouth.",
    results: [
      { value: "18k", label: "monthly users" },
      { value: "62%", label: "weekly retention" },
      { value: "9 wk", label: "to first release" },
    ],
    image: img("FIELDNOTE"),
  },
  {
    title: "MOTION LAB",
    category: "Interactive digital experience",
    summary: "An experimental interactive piece exploring form and movement.",
    did: "Creative direction, WebGL prototyping and a performance budget that keeps the piece smooth on ordinary laptops.",
    impact: "A launch piece that earned press attention and became the studio’s most-shared work.",
    image: img("MOTION LAB"),
  },
];

export const automationCases: Case[] = [
  {
    title: "ORBIT",
    category: "AI workflow platform",
    summary: "Automation that adapts to how teams actually work.",
    did: "Mapped the client’s manual workflows, then built an orchestration layer with human approval steps and clear failure alerts.",
    impact: "Repetitive work moved off people’s desks while every automated decision stayed reviewable.",
    image: img("ORBIT"),
  },
  {
    title: "LEDGERLINE",
    category: "Invoice and payment automation",
    summary: "Payments reconciled without spreadsheets.",
    did: "Built a pipeline that reads, validates and matches invoices, logs every step and alerts finance when something looks wrong.",
    impact: "Fewer manual checks, fewer errors and a much shorter month-end close.",
  },
  {
    title: "HARBOR OPS",
    category: "Logistics data integration",
    summary: "One live view across scattered operational systems.",
    did: "Connected scheduling, tracking and reporting systems through a documented API layer with real-time synchronisation.",
    impact: "Operations teams coordinate from one source of truth instead of five.",
  },
];

export const testimonials = [
  { quote: "They were available, careful with every detail, and kept finding simpler answers than the ones we asked for.", name: "Mira Santos", role: "CEO, Halden" },
  { quote: "Less like hiring a vendor, more like our strengths finally working together.", name: "Jonas Weber", role: "Co-founder, Tidewell" },
  { quote: "A reactive, skilled team that tackled real complexity and handed it back to us simple.", name: "Priya Nair", role: "Head of Product, Meridian" },
];

export const clientNames = [
  "Northstar", "Halden", "Meridian", "Tidewell", "Oakline", "Vantage", "Lumen", "Cobalt", "Ferrous", "Pulsar", "Marlow", "Kestrel",
];

export const automationServices = [
  "Workflow design and orchestration",
  "AI assistants and agents with human review",
  "Legacy system integration",
  "API design and implementation",
  "Data pipelines and live reporting",
  "Testing, monitoring and performance tuning",
];

export const automationFacts = [
  "Senior engineers and designers on every project",
  "Standalone delivery or embedded in your team",
  "Clear documentation and clean handover",
];

export const values = [
  { title: "A commitment to craft", text: "We love building and are slightly obsessed with making things better. Every client, large or small, gets the same standard." },
  { title: "Balance as a practice", text: "We are transparent and human-centred, in our work and in how we run our days. The team stays small on purpose, and every person matters." },
  { title: "Always improving", text: "We value integrity and compromise. We compare ourselves with who we were last quarter, and we usually like what we see." },
];

export const life = [
  { title: "Reflection is part of the process", text: "The most useful line of code often arrives after a walk, not a meeting. We give people room to step away and come back sharper." },
  { title: "Internships without the coffee runs", text: "Interns work in the same repositories we do, write production code and ship in the same sprint." },
  { title: "A shared library", text: "A physical shelf of books recommended by the team. It belongs to everyone." },
  { title: "We celebrate", text: "An annual studio birthday, a proper year-end dinner, and regular meals that don’t need an occasion." },
  { title: "Giving back", text: "Charity and local community work are part of the calendar, not an afterthought." },
  { title: "We stay active", text: "Running, football, hiking and the occasional questionable challenge." },
];

export const team = [
  { name: "Ayla Moreno", role: "Founder & Creative Director", bio: "Leads the studio with a belief that complexity can always be made clear. Hands-on in strategy, design and the details that make products feel right." },
  { name: "Daniel Okafor", role: "CTO", bio: "Owns architecture and engineering quality. Turns ambitious concepts into systems that are fast, resilient and ready to grow." },
  { name: "Leila Haddad", role: "Head of Product", bio: "Joined as a designer and now guides product-facing work, from first workshop to launch and beyond." },
];

export const roles = [
  {
    title: "Full-stack engineer (TypeScript)",
    mode: "Hybrid, two days in the studio",
    intro: "Work end to end on products for ambitious teams, across a modern TypeScript stack.",
    points: ["Design and build performant interfaces and well-structured APIs", "Use AI-assisted tools as a normal part of your workflow", "Write tests, review code and improve how we ship", "Around two years of professional experience"],
  },
  {
    title: "Product designer",
    mode: "Hybrid, two days in the studio",
    intro: "Shape interfaces and systems with engineers sitting next to you.",
    points: ["Own flows from research through to polished, shipped UI", "Build and maintain design systems", "Prototype motion and interaction", "Around three years of professional experience"],
  },
];

export const growth = [
  "Certifications and learning budget",
  "Regular hack sessions and Friday talks",
  "Paths toward team leadership and client-facing roles",
];

export const teamQuotes = [
  { quote: "A team that is not afraid to innovate, and gives you real projects to grow on.", name: "Rafi Pratama", role: "Software engineer" },
  { quote: "Collaborative, energising and supportive. People genuinely care here.", name: "Nadia Khoury", role: "Software engineer" },
  { quote: "I have learned more here than anywhere else, and I am still challenged every day.", name: "Tomas Lindqvist", role: "Tech lead" },
];

export const thrive = [
  "A culture that values balance as much as execution",
  "International, high-impact projects",
  "A lean, senior team where your voice matters",
  "Values that show up in how we work",
];

export const stages = [
  { n: "01", title: "We talk", text: "Reach out however feels natural: the form, email or social media. Nothing about this needs to be formal." },
  { n: "02", title: "We sketch", text: "We put thoughts on paper, draw, argue a little and make sure everyone is facing the same direction." },
  { n: "03", title: "We build", text: "We adapt to your team, not the other way around, and cover every base the product needs." },
  { n: "04", title: "We ship", text: "We support as long as you need, or hand over cleanly. Our products ship, always." },
];

export const faqs = [
  { q: "What if I am not sure what I need?", a: "That is completely fine. Whether you are defining a product, tackling a complex feature or planning an MVP, we ask the right questions and help you find the best way forward." },
  { q: "What happens after I get in touch?", a: "We schedule a short call to understand your goals, then propose a next step: a discovery session, a technical review or a proposal." },
  { q: "How do you price projects?", a: "Time-and-materials for agile development, fixed price for well-defined deliverables. You always get a clear estimate upfront." },
  { q: "What happens after I accept a proposal?", a: "We run an onboarding session to align on priorities, timelines and communication, then keep you updated through regular check-ins." },
];
