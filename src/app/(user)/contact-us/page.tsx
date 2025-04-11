import NewsLetter from "@/components/NewsLetter";
import Wrapper from "@/components/Wrapper";
import ContactIntro from "@/views/ContactIntro";
import ContactUsForm from "@/views/ContactUs";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact CyberEon Solutions | Get in Touch   ',
    description: 'Reach out to CyberEon Solutions for inquiries, support, or consultation on securing your business. Our experts are here to help.',
};

const ContactUs = () => {
    return (
        <Wrapper>
            <ContactIntro />
            <ContactUsForm />
            <NewsLetter />
        </Wrapper>
    )
}

export default ContactUs