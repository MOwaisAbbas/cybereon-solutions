import NewsLetter from "@/components/NewsLetter"
import Wrapper from "@/components/Wrapper"
import ContactUsForm from "@/views/ContactUs"

const ContactUs = () => {
    return (
        <Wrapper>
            <ContactUsForm />
            <NewsLetter />
        </Wrapper>
    )
}

export default ContactUs