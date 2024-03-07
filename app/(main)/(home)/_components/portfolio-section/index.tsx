import { LiaStreamSolid } from 'react-icons/lia'
import Image from 'next/image'

import { SectionWrapper } from '../section-wrapper'
import { ProjectCard } from './project-card'

export const PortfolioSection = () => {
    const projectsData = [
        {
            thumbnailSrc: '/images/project-1.png',
            title: 'Portfolio Website',
            srcCodeUrl: '#',
            livePreviewUrl: '#',
        },
        {
            thumbnailSrc: '/images/project-1.png',
            title: 'Portfolio Website',
            srcCodeUrl: '#',
            livePreviewUrl: '#',
        },
        {
            thumbnailSrc: '/images/project-1.png',
            title: 'Portfolio Website',
            srcCodeUrl: '#',
            livePreviewUrl: '#',
        },
        {
            thumbnailSrc: '/images/project-1.png',
            title: 'Portfolio Website',
            srcCodeUrl: '#',
            livePreviewUrl: '#',
        },
        {
            thumbnailSrc: '/images/project-1.png',
            title: 'Portfolio Website',
            srcCodeUrl: '#',
            livePreviewUrl: '#',
        },
    ]

    return (
        <SectionWrapper section="portfolio" icon={LiaStreamSolid} title="Portfolio">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div>
                    <div className="w-fit">
                        <h1 className="text-3xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Browse My</h1>
                        <h1 className="text-6xl font-gliker leading-none tracking-tight text-green-gradient">Showcase</h1>
                    </div>
                </div>

                {projectsData.map((item, index) => (
                    <ProjectCard key={index} thumbnailSrc={item.thumbnailSrc} title={item.title} srcCodeUrl={item.srcCodeUrl} livePreviewUrl={item.livePreviewUrl} />
                ))}

            </div>
        </SectionWrapper>
    )
}
