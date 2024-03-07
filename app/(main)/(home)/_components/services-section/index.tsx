import { PiSuitcaseSimpleBold } from 'react-icons/pi'

import { SectionWrapper } from '../section-wrapper'
import { ServicesList } from './services-list'

export const ServicesSection = () => {
    return (
        <SectionWrapper section="services" backgroundColor="midnight-black" icon={PiSuitcaseSimpleBold} title="Services" hoverColor="coral-pink">
            <div>
                <div className="w-fit mx-auto">
                    <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">What I</h1>
                    <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">Offer?</h1>
                </div>
                <ServicesList />
            </div>
        </SectionWrapper>
    )
}
