import Image from 'next/image'

import { cn } from '@/lib/utils'

interface SkillCardProps {
    imageSrc: string,
    name: string,
    hoverColor?: PrimaryColor,
}

export const SkillCard = ({
    imageSrc,
    name,
    hoverColor = 'sea-green',
}: SkillCardProps) => {
    return (
        <div className="group">
            <div className={cn('border border-neutral-700 rounded-full  aspect-square flex flex-col justify-center items-center gap-3 group-hover:border-[2px] group-hover:border-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:border-coral-pink')}>
                <Image className="aspect-square object-cover w-14 h-14" src={imageSrc} alt={name} height={56} width={56} />
                <span className="text-neutral-400">{name}</span>
            </div>
        </div>
    )
}
