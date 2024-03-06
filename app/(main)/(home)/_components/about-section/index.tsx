import { HiOutlineUser } from 'react-icons/hi'

import { SectionWrapper } from '../section-wrapper'

export const AboutSection = () => {
    return (
        <SectionWrapper section="about" backgroundColor="midnight-black" icon={HiOutlineUser} title="About" hoverColor="coral-pink">About</SectionWrapper>
    )
}
