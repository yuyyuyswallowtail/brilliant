const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Img = { src: string; alt: string; caption: string };

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Who we are", href: "#about" },
  { label: "Contact us", href: "#contact" },
];

export const services = [
  { n: "01", title: "Product Strategy", desc: "Positioning, roadmaps and the few bets worth making.", image: u("photo-1497366216548-37526070297c", 900), alt: "Bright open workspace with long tables", caption: "Strategy session — mapping bets before building." },
  { n: "02", title: "UX / UI Design", desc: "Interfaces grounded in product logic, craft and restraint.", image: u("photo-1531297484001-80022131f5a1", 900), alt: "Laptop on a desk showing an interface in progress", caption: "Interface exploration — product systems study." },
  { n: "03", title: "Digital Product Development", desc: "Web and mobile builds, engineered to ship and to last.", image: u("photo-1518770660439-4636190af475", 900), alt: "Close view of a circuit board", caption: "Under the surface — engineering for the long run." },
  { n: "04", title: "AI & Automation", desc: "Practical machine intelligence woven into real workflows.", image: u("photo-1550745165-9bc0b252726f", 900), alt: "Retro technology objects arranged on a surface", caption: "Old machines, new questions — automation with context." },
  { n: "05", title: "Creative Technology", desc: "Interactive and spatial work that earns attention.", image: u("photo-1486406146926-c627a92ad1ab", 900), alt: "Glass building facade seen from below", caption: "Structure and light — spatial thinking for screens." },
  { n: "06", title: "Product Growth", desc: "Measurement, iteration and the discipline to keep improving.", image: u("photo-1522071820081-009f0129c71c", 900), alt: "Team collaborating around a table", caption: "Teams that learn in public — growth as a habit." },
];

export const processSteps = [
  { n: "01", title: "Discover", text: "We listen first. Goals, constraints and users, understood before anything is drawn." },
  { n: "02", title: "Define", text: "One sharp problem statement, a scoped plan and clear success measures." },
  { n: "03", title: "Design", text: "Systems before screens. Prototypes tested early, refined with intent." },
  { n: "04", title: "Build", text: "Small senior teams shipping in short cycles, with quality built in." },
  { n: "05", title: "Evolve", text: "We stay close after launch: measure, learn and keep the product moving." },
];

export const clients = [
  { label: "Startups", line: "Moving fast without breaking what matters." },
  { label: "Scale-ups", line: "Growing products without losing clarity." },
  { label: "Product teams", line: "Senior capacity, embedded where it counts." },
  { label: "Founders", line: "A sharp partner from first sketch to first thousand users." },
  { label: "Technology companies", line: "Complex systems, made legible." },
  { label: "Creative businesses", line: "Digital craft that matches the ambition of the brand." },
];

export type Project = {
  title: string; category: string; year: string; role: string; description: string;
  span: string; ratio: string; sizes: string; image: Img;
};

export const projects: Project[] = [
  { title: "NOVA HEALTH", category: "Digital healthcare platform", year: "2026", role: "Strategy, Design, Engineering", description: "A calmer care-coordination platform for clinicians and patients.", span: "md:col-span-12", ratio: "aspect-[16/8]", sizes: "100vw",
    image: { src: u("photo-1497215728101-856f4ea42174", 2000), alt: "Minimal, bright clinical-style interior", caption: "Designing calmer digital experiences for complex healthcare workflows." } },
  { title: "ARC / FINANCE", category: "Financial intelligence platform", year: "2025", role: "Product Design, Data Visualisation", description: "Decision systems that make portfolio risk readable at a glance.", span: "md:col-span-7", ratio: "aspect-[4/5]", sizes: "(min-width: 768px) 58vw, 100vw",
    image: { src: u("photo-1486406146926-c627a92ad1ab", 1400), alt: "Geometric glass architecture", caption: "Turning financial complexity into clear decision systems." } },
  { title: "FIELDNOTE", category: "Creative collaboration platform", year: "2025", role: "Design, Frontend", description: "A shared thinking space for distributed creative teams.", span: "md:col-span-5 md:mt-48", ratio: "aspect-[4/5]", sizes: "(min-width: 768px) 41vw, 100vw",
    image: { src: u("photo-1522071820081-009f0129c71c", 1200), alt: "Team working together at a shared table", caption: "Tools for teams that think together." } },
  { title: "ORBIT", category: "AI workflow platform", year: "2026", role: "Strategy, AI Engineering", description: "Automation that adapts to how teams actually work.", span: "md:col-span-8 md:col-start-3", ratio: "aspect-[16/10]", sizes: "(min-width: 768px) 66vw, 100vw",
    image: { src: u("photo-1518770660439-4636190af475", 1600), alt: "Circuit board in close detail", caption: "Intelligence that stays out of the way." } },
  { title: "MOTION LAB", category: "Interactive digital experience", year: "2024", role: "Creative Direction, WebGL", description: "An experimental interactive piece exploring form and movement.", span: "md:col-span-6", ratio: "aspect-square", sizes: "(min-width: 768px) 50vw, 100vw",
    image: { src: u("photo-1550745165-9bc0b252726f", 1200), alt: "Retro technology still life", caption: "Prototyping motion before it becomes product." } },
];

export const about = {
  image: { src: u("photo-1531297484001-80022131f5a1", 1400), alt: "Designer's laptop on a quiet desk", caption: "A small studio, a long list of details." } as Img,
  roles: ["Designers", "Engineers", "Product thinkers", "Creative technologists", "AI specialists"],
};

export const stats = [
  { to: 24, suffix: "+", label: "products launched" },
  { to: 12, suffix: "", label: "countries" },
  { to: 18, suffix: "", label: "long-term partnerships" },
  { to: 7, suffix: "", label: "years building digital products" },
];

export const testimonial = {
  quote: "Working with the team felt less like outsourcing and more like adding a senior product team to our company.",
  name: "Alex Morgan",
  role: "Founder, Northstar",
};
