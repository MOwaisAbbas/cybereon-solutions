import NewsLetter from "@/components/NewsLetter"
import Wrapper from "@/components/Wrapper"
import AboutUSView from "@/views/AboutUS"
import Approach from "@/views/Approach"
import ContactIntro from "@/views/ContactIntro"
import ContactUsForm from "@/views/ContactUs"
import MissionAndVission from "@/views/MissionAndVission"
import Services from "@/views/Services"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About CyberEon Solutions | Your Trusted Cybersecurity Partner',
    description: 'Learn more about CyberEon Solutions, a leading provider of cybersecurity strategies, advisory services, and solutions to protect your business.',
};


const AboutUS = () => {
    return (
        <Wrapper>
            <AboutUSView />
            <Services />
            <MissionAndVission />
            <Approach />
            <ContactIntro />
            <ContactUsForm />
            <NewsLetter />
        </Wrapper>
    )
}

export default AboutUS