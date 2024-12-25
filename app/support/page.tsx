import { SupportHero } from "@/components/sections/support/hero";
import { ContactOptions } from "@/components/sections/support/contact-options";
import { FAQSection } from "@/components/sections/support/faq";
import { ResourceCenter } from "@/components/sections/support/resource-center";
import { SupportCTA } from "@/components/sections/support/cta";
import { Navbar } from "@/components/navbar";

export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <SupportHero />
      <ContactOptions />
      <FAQSection />
      <ResourceCenter />
      <SupportCTA />
    </main>
  );
}