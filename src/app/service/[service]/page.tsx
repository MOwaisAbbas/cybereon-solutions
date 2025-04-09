import CTA from "@/components/CTA";
import NewsLetter from "@/components/NewsLetter";
import ServiceComponent from "@/components/Service";
import Wrapper from "@/components/Wrapper";
import SERVICES from "@/data/services.json";
import ContactUsForm from "@/views/ContactUs";
import ServiceIntro from "@/views/ServiceIntro";

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

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {

    const { service } = await params

    const filteredService: ServiceData | undefined = SERVICES.find(elem => elem.path === `/service/${service}`);

    return {
        title: `${filteredService?.name} | CyberEon Solutions` || 'Service Not Found',
        description: `${filteredService?.description} | CyberEon Solutions` || 'Requested service does not exist',
        alternates: {
            canonical: `/services/${service}`
        }
    };
}

const Service = async ({ params }: { params: Promise<{ service: string }> }) => {
    const { service } = await params

    const filteredService: ServiceData | undefined = SERVICES.find(elem => elem.path === `/service/${service}`);

    if (!filteredService) {
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
            <ServiceIntro name={filteredService.name} subHeading={filteredService.subHeading} description={filteredService.description} />
            <ServiceComponent service={filteredService} />
            <CTA outcome={filteredService.outcome} cta={filteredService.cta} />
            <ContactUsForm />
            <NewsLetter />
        </Wrapper>
    );
};

export default Service;
