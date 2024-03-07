import { PiEnvelopeSimpleBold } from 'react-icons/pi'
import { FiSmartphone } from 'react-icons/fi'

import { SectionWrapper } from '../section-wrapper'
import { ContactCard } from './contact-card'
import { SocialLinks } from './social-links'
import { ContactForm } from './contact-form'
import { Container } from '../container'

export const ContactSection = () => {
    const contactCardsData = [
        {
            icon: PiEnvelopeSimpleBold,
            title: 'Mail To',
            description: 'shubham26062002@gmail.com',
            href: 'mailto:shubham26062002@gmail.com'
        }, {
            icon: FiSmartphone,
            title: 'Call At',
            description: '+91 (951) 023-6413',
            href: 'tel:+919510236413'
        },
    ]

    return (
        <SectionWrapper section="contact" backgroundColor="midnight-black" icon={PiEnvelopeSimpleBold} title="Contact" hoverColor="coral-pink">
            <div className="flex flex-col lg:flex-row justify-between gap-16">
                <div className="w-fit">
                    <div className="w-fit">
                        <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">How To</h1>
                        <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">Contact?</h1>
                    </div>
                    <div className="mt-8 space-y-7">

                        {contactCardsData.map((item, index) => (
                            <ContactCard key={index} {...item} hoverColor="coral-pink" />
                        ))}

                    </div>
                    <div className="mt-12">
                        <SocialLinks />
                    </div>
                </div>
                <Container className="flex-1" title="Let's reach out!" hoverColor="coral-pink">
                    <ContactForm />
                </Container>
            </div>
        </SectionWrapper>
    )
}
