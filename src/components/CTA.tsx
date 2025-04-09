"use client"
import { goToSection } from "@/lib/function";

type CTAProps = {
    cta: string;
    outcome: string;
}

const CTA = ({ cta, outcome }: CTAProps) => {
    return (
        <section className="cta-letter flex flex-col items-center justify-between gap-4">
            <h2>{outcome}</h2>
            <h3>{cta}</h3>
            <button onClick={() => goToSection('contact-us')} className='active'>
                Get In Touch
            </button>
        </section>
    )
}

export default CTA