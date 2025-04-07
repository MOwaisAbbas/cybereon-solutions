import NewsLetter from "@/components/NewsLetter"
import Wrapper from "@/components/Wrapper"
import AboutUSView from "@/views/AboutUS"
import Approach from "@/views/Approach"
import MissionAndVission from "@/views/MissionAndVission"
import Services from "@/views/Services"

const AboutUS = () => {
    return (
        <Wrapper>
            <AboutUSView />
            <Services />
            <MissionAndVission />
            <Approach />
            <NewsLetter />
        </Wrapper>
    )
}

export default AboutUS