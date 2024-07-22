import { getLocale, getMessages } from "next-intl/server";
import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { Metadata } from "next";
import NextIntlProvider from "../../../Providers/NextIntlProvider";

export const metadata: Metadata = {
  title: "Berry Trada | Premium Ginger Exporter and Processor",
  description:
    "Berry Trada is a leading exporter and processor of premium ginger, offering top-quality fresh ginger, advanced washing services, and comprehensive support for exporters. Rebuilding global trust in Indonesian ginger.",
  keywords: [
    "Premium ginger export",
    "Ginger processing",
    "Ginger washing service",
    "Fresh ginger supplier",
    "Indonesian ginger",
    "Post-harvest technology",
    "Export quality ginger",
    "Ginger packing services",
    "Ginger importers",
    "High-quality ginger",
    "Jasa cuci Jahe",
    "Jasa pencucian jahe ekspor",
    "jasa packing jahe",
  ],
  authors: {
    name: "PT Berry Trada Multipersada",
    url: "https://berrytrada.com",
  },
  openGraph: {
    title: "Berry Trada | Premium Ginger Exporter and Processor",
    description:
      "Berry Trada is a leading exporter and processor of premium ginger, offering top-quality fresh ginger, advanced washing services, and comprehensive support for exporters. Rebuilding global trust in Indonesian ginger.",
    type: "website",
    url: "https://berrytrada.com",
  },
};

export default async function Home() {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Brands />
      <Testimonials />
      <Pricing />
      {/* <HomeBlogSection /> */}
      <Support />
      <CallToAction />
      <Footer />
    </NextIntlProvider>
  );
}
