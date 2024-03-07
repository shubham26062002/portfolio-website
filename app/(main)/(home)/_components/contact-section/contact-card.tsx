import { IconType } from 'react-icons'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface ContactCardProps {
    icon: IconType,
    title: string,
    description?: string,
    hoverColor?: PrimaryColor,
    href: string,
}

export const ContactCard = ({
    icon: Icon,
    title,
    description,
    hoverColor = 'sea-green',
    href,
}: ContactCardProps) => {
    return (
        <Link className="p-7 rounded-2xl bg-midnight-gray bg-opacity-50 border-[1px] border-neutral-900 group flex items-center gap-3" href={href} target="_blank">
            <Icon className={cn('text-neutral-400 group-hover:text-coral-pink transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} size={36} />
            <div className="flex-1">
                <h1 className="text-neutral-400 font-medium">{title}</h1>
                <p className="text-sm font-medium text-neutral-700">{description}</p>
            </div>
        </Link>
    )
}
