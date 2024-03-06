import { BsDiscord, BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import { IconLinksWrapper } from '../icon-links-wrapper'

export const SocialLinks = () => {
    const socialLinksData = [
        {
            label: 'GitHub',
            icon: BsGithub,
            href: '#',
        }, {
            label: 'Twitter',
            icon: BsTwitter,
            href: '#',
        }, {
            label: 'Facebook',
            icon: BsFacebook,
            href: '#',
        }, {
            label: 'LinkedIn',
            icon: BsLinkedin,
            href: '#',
        }, {
            label: 'Discord',
            icon: BsDiscord,
            href: '#',
        },
    ]

    return (
        <IconLinksWrapper title="Connect With Me" data={socialLinksData} />
    )
}
