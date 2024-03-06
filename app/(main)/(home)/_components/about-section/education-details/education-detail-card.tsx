import { cn } from '@/lib/utils'

interface EducationDetailCardProps {
    hoverColor?: PrimaryColor,
    title: string,
    location: string,
    year: string,
}

export const EducationDetailCard = ({
    hoverColor = 'sea-green',
    title,
    location,
    year,
}: EducationDetailCardProps) => {
    return (
        <div className="flex gap-2 group hover:translate-x-2 transition-all duration-200 transform-gpu w-fit">
            <span className={cn('text-lg text-neutral-700 group-hover:text-sea-green transition-all duration-200 transform-gpu leading-relaxed', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')}>&#8594;</span>
            <div>
                <h1 className="text-neutral-400 font-medium leading-relaxed">{title}</h1>
                <p className="text-sm font-medium text-neutral-700 leading-relaxed">{location} ({year})</p>
            </div>
        </div>
    )
}
