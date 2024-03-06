import { HiOutlineUser } from 'react-icons/hi'

import { SectionWrapper } from '../section-wrapper'
import { PlacesLinks } from './places-links'
import { EducationDetails } from './education-details'
import { ExperienceDetails } from './experience-details'

export const AboutSection = () => {
    return (
        <SectionWrapper section="about" backgroundColor="midnight-black" icon={HiOutlineUser} title="About" hoverColor="coral-pink">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div className="w-fit">
                        <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Let's Talk</h1>
                        <h1 className="text-6xl font-gliker leading-none tracking-tight text-pink-gradient">About Me</h1>
                    </div>
                    <div className="mt-8">
                        <p className="leading-relaxed text-neutral-400">Hello! I'm Shubham Patel, a full-stack developer specializing in React, Next.js, Supabase, and PostgreSQL, specializing in creating immersive user experiences and scalable web applications. Excels in front-end development using React and Next.js while leveraging Supabase and PostgreSQL for efficient web solutions.</p>
                    </div>
                    <div className="mt-8">
                        <PlacesLinks />
                    </div>
                </div>
                <div className="space-y-8">
                    <EducationDetails />
                    <ExperienceDetails />
                </div>
            </div>
        </SectionWrapper>
    )
}
