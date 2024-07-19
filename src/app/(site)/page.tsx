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

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Next.js Starter for Business Sites | ${siteName}`,
  description:
    "Next.js starter for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design, integrations and everything you need to kickstart your next web project",
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
      <Portfolio />
      <Team />
      <Testimonials />
      <Brands />
      <Pricing />
      {/* <HomeBlogSection /> */}
      <Support />
      <CallToAction />
      <Footer />
    </NextIntlProvider>
  );
}
