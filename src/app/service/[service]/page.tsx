import CTA from "@/components/CTA";
import NewsLetter from "@/components/NewsLetter";
import ServiceComponent from "@/components/Service";
import Wrapper from "@/components/Wrapper";
import SERVICES from "@/data/services.json";
import ContactUsForm from "@/views/ContactUs";
import ServiceIntro from "@/views/ServiceIntro";
import { Metadata } from "next";

// Service data type
export interface ServiceData {
    name: string;
    path: string;
    subHeading: string;
    description: string;
    features: {
        title: string;
        detail: string;
    }[];
    outcome: string;
    cta: string;
}


type ServiceProps = {
    params: { [key: string]: string }
}

// Generate dynamic metadata
export async function generateMetadata({ params }: ServiceProps): Promise<Metadata> {
    const service: ServiceData | undefined = SERVICES.find(elem => elem.path === `/service/${params.service}`);

    return {
        title: `${service?.name} | CyberEon Solutions` || 'Service Not Found',
        description: `${service?.description} | CyberEon Solutions` || 'Requested service does not exist',
        alternates: {
            canonical: `/services/${params.service}`
        }
    };
}

const Service = ({ params }: ServiceProps) => {
    const service: ServiceData | undefined = SERVICES.find(elem => elem.path === `/service/${params.service}`);

    if (!service) {
        return (
            <Wrapper>
                <section className="min-h-[50vh] grid place-items-center">
                    <p className="text-4xl text-center font-bold">Service not found!</p>
                </section>
            </Wrapper>
        )
    }

    return (
        <Wrapper>

            <ServiceIntro name={service?.name} subHeading={service?.subHeading} description={service?.description} />
            <ServiceComponent service={service} />
            <CTA outcome={service?.outcome} cta={service?.cta} />
            <ContactUsForm />
            <NewsLetter />
        </Wrapper>
    );
};

export default Service;