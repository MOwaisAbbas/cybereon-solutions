import NewsLetter from "@/components/NewsLetter";
import Wrapper from "@/components/Wrapper";
import ContactUsForm from "@/views/ContactUs";
import Hero from "@/views/Hero";
import Services from "@/views/Services";
import WhyChoose from "@/views/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CyberEon Solutions | Leading Cybersecurity Experts',
  description: 'Explore CyberEon Solutions for top-tier cybersecurity services. We provide strategies, testing, and business continuity plans to safeguard your digital assets.',
};

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Services />
      <WhyChoose />
      <ContactUsForm />
      <NewsLetter />
    </Wrapper>
  );
}
