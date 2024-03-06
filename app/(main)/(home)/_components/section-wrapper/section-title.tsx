import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

interface SectionTitleProps {
    icon: IconType,
    title: string,
    hoverColor?: PrimaryColor,
}

export const SectionTitle = ({
    icon: Icon,
    title,
    hoverColor = 'sea-green',
}: SectionTitleProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex-1 h-[1px] bg-neutral-700"></div>
            <div className="flex items-center gap-2 bg-transparent cursor-default group">
                <Icon className={cn('h-6 w-6 text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} />
                <p className="text-neutral-400 leading-none uppercase">{title}</p>
            </div>
            <div className="flex-1 h-[1px] bg-neutral-700"></div>
        </div>
    )
}
