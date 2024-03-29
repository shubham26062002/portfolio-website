import { cn } from '@/lib/utils'

interface ExperienceDetailCardProps {
    hoverColor?: PrimaryColor,
    year: string,
    title: string,
    location: string,
}

export const ExperienceDetailCard = ({
    hoverColor = 'sea-green',
    year,
    title,
    location,
}: ExperienceDetailCardProps) => {
    return (
        <div className="flex gap-6 group">
            <div className={cn('w-[1px] bg-neutral-700 group-hover:bg-sea-green transition-all duration-200 transform-gpu relative', hoverColor === 'coral-pink' && 'group-hover:bg-coral-pink')}>
                <div className={cn('w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-sea-green transition-all duration-200 transform-gpu absolute left-[50%] -translate-x-[50%] -translate-y-[50%]', hoverColor === 'coral-pink' && 'group-hover:bg-coral-pink')}></div>
            </div>
            <div className="flex-1 py-6 relative">
                <div className={cn('absolute truncate -translate-y-[50%] top-0 text-sm text-neutral-700 font-medium group-hover:text-sea-green transition', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')}>{year}</div>
                <h1 className="text-neutral-400 font-medium">{title}</h1>
                <p className="text-sm font-medium text-neutral-700">{location}</p>
            </div>
        </div>
    )
}
