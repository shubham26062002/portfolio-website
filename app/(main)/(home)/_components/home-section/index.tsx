import { HiOutlineHome } from 'react-icons/hi'
import Image from 'next/image'

import { SectionWrapper } from '../section-wrapper'
import { LetsTalkButton } from './lets-talk-button'
import { SocialLinks } from './social-links'

export const HomeSection = () => {
    return (
        <SectionWrapper section="home" icon={HiOutlineHome} title="Home">
            <div className="flex flex-col lg:flex-row justify-between gap-16">
                <div>
                    <div className="max-w-sm">
                        <h1 className="text-4xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter">Hello, I'm</h1>
                        <h1 className="text-7xl font-gliker leading-none tracking-tight text-green-gradient">Shubham, A Web Developer</h1>
                    </div>
                    <div className="mt-8 max-w-sm">
                        <p className="leading-relaxed text-neutral-400">Experienced full-stack developer with expertise in diverse technologies.</p>
                    </div>
                    <div className="mt-8 w-fit">
                        <LetsTalkButton />
                    </div>
                    <div className="mt-8">
                        <SocialLinks />
                    </div>
                </div>
                <Image className="self-center object-cover max-w-md w-full aspect-square rounded-full bg-midnight-black" src="/images/hero-image.png" alt="Shubham Patel" width={480} height={480} />
            </div>
        </SectionWrapper>
    )
}
