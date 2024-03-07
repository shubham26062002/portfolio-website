import Link from 'next/link'
import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

interface ProjectCardLinkProps {
    hoverColor?: PrimaryColor,
    href: string,
    icon: IconType,
}

export const ProjectCardLink = ({
    hoverColor = 'sea-green',
    href,
    icon: Icon,
}: ProjectCardLinkProps) => {
    return (
        <Link className={cn('inline-block w-full h-full p-2.5 border bg-sea-green/80 hover:bg-sea-green/100 transition-all transform-gpu duration-200 rounded-full', hoverColor === 'coral-pink' && 'bg-coral-pink/80 hover:bg-coral-pink/100')} href={href}>
            <Icon className="h-5 w-5 text-midnight-gray" />
        </Link >
    )
}
