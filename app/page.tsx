import { Hero } from "@/components/hero";
import { VisualBreak } from "@/components/visual-break";
import { Manifesto } from "@/components/manifesto";
import { Services } from "@/components/services";
import { ServicesCloser } from "@/components/services-closer";
import { Process } from "@/components/process";
import { Clients } from "@/components/clients";
import { SelectedWork } from "@/components/selected-work";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Testimonial } from "@/components/testimonial";
import { Cta } from "@/components/cta";
import { SectionLinks } from "@/components/section-links";

export default function Page() {
  return (
    <>
      <Hero />
      <VisualBreak />
      <Manifesto />
      <Services />
      <ServicesCloser />
      <Process />
      <Clients />
      <SectionLinks links={[{ href: "/work", label: "Digital Products" }]} />
      <SelectedWork />
      <SectionLinks
        links={[
          { href: "/work", label: "Product work" },
          { href: "/automation", label: "Automation work" },
        ]}
      />
      <About />
      <SectionLinks links={[{ href: "/about", label: "More about us" }]} />
      <Stats />
      <Testimonial />
      <Cta />
    </>
  );
}
