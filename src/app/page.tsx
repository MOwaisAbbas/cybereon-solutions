import NewsLetter from "@/components/NewsLetter";
import Wrapper from "@/components/Wrapper";
import ContactUsForm from "@/views/ContactUs";
import Hero from "@/views/Hero";
import Services from "@/views/Services";
import WhyChoose from "@/views/WhyChoose";

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
