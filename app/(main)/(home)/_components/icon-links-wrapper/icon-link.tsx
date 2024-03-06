import { IconType } from 'react-icons'
import Link from 'next/link'

import { cn } from '@/lib/utils'

export interface IconLinkProps {
    icon: IconType,
    href: string,
    hoverColor?: PrimaryColor,
}

export const IconLink = ({
    href,
    icon: Icon,
    hoverColor = 'sea-green',
}: IconLinkProps) => {
    return (
        <Link className="group" href={href} target="_blank">
            <Icon className={cn('h-6 w-6 text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} />
        </Link>
    )
}