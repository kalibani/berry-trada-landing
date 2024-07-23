import { getLocale, getMessages, getTranslations } from "next-intl/server";
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
import NextIntlProvider from "../../../Providers/NextIntlProvider";

export async function generateMetadata() {
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywordsText1"),
      t("keywordsText2"),
      t("keywordsText3"),
      t("keywordsText4"),
      t("keywordsText5"),
      t("keywordsText6"),
      t("keywordsText7"),
      t("keywordsText8"),
      t("keywordsText9"),
    ],
    authors: {
      name: "PT Berry Trada Multipersada",
      url: "https://berrytrada.com",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: "https://berrytrada.com",
    },
    publisher: "https://berrytrada.com",
    alternates: {
      canonical: "/",
    },
  };
}

export default async function Home() {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log("locale", locale);
  return (
    <NextIntlProvider locale={locale} messages={messages}>
      <Navbar />
      <Hero />
      <Features />
      <About />
      {/* <Team /> */}
      <Portfolio />
      {/* <Brands /> */}
      <Testimonials />
      <Pricing />
      {/* <HomeBlogSection /> */}
      <Support />
      <CallToAction />
      <Footer />
    </NextIntlProvider>
  );
}
