import { PiShapesBold } from 'react-icons/pi'

import { SectionWrapper } from '../section-wrapper'
import { SkillCard } from './skill-card'

export const SkillsSection = () => {
    const skillsData = [
        {
            imageSrc: '/images/nextjs-logo.svg',
            name: 'Next.js',
        }, {
            imageSrc: '/images/react-logo.svg',
            name: 'React',
        }, {
            imageSrc: '/images/typescript-logo.svg',
            name: 'TypeScript',
        }, {
            imageSrc: '/images/tailwindcss-logo.svg',
            name: 'Tailwind CSS',
        }, {
            imageSrc: '/images/postgresql-logo.svg',
            name: 'PostgreSQL',
        }, {
            imageSrc: '/images/graphql-logo.svg',
            name: 'GraphQL',
        },
    ]

    return (
        <SectionWrapper section="skills" icon={PiShapesBold} title="Skills">
            <div className="w-fit mx-auto">
                <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Browse My</h1>
                <h1 className="text-6xl font-gliker leading-none tracking-tight text-green-gradient">Top Skills</h1>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

                {skillsData.map((item, index) => (
                    <SkillCard key={index} imageSrc={item.imageSrc} name={item.name} />
                ))}

            </div>
        </SectionWrapper>
    )
}
