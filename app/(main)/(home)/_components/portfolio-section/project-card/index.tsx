import Image from 'next/image'
import { PiCodeBold, PiDesktopBold } from 'react-icons/pi'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import { ProjectCardLink } from './project-card-link'
import { TooltipWrapper } from '@/components/tooltip-wrapper'

interface ProjectCardProps {
    hoverColor?: PrimaryColor,
    thumbnailSrc: string,
    title: string,
    srcCodeUrl: string,
    livePreviewUrl: string,
}

export const ProjectCard = ({
    hoverColor = 'sea-green',
    thumbnailSrc,
    title,
    srcCodeUrl,
    livePreviewUrl,
}: ProjectCardProps) => {
    return (
        <AspectRatio className={cn('bg-sea-green rounded-xl overflow-hidden border border-neutral-700 hover:border-2 hover:border-sea-green transition-all duration-200 transform-gpu group hover:-translate-y-2', hoverColor === 'coral-pink' && 'bg-coral-pink hover:border-coral-pink')} ratio={16 / 9}>
            <div className="w-full bg-midnight-gray/95 h-full group-hover:-translate-y-2 transition-all transform-gpu duration-200 rounded-xl relative overflow-hidden px-12">
                <div className="z-50 absolute inset-0 group-hover:-translate-y-full transition-all duration-500 transform-gpu">
                    <Image src={thumbnailSrc} alt={title} fill />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center gap-y-4">
                    <p className="text-neutral-400 text-center">{title}</p>
                    <div className="flex items-center gap-x-4">
                        <TooltipWrapper label="Source Code">
                            <ProjectCardLink href={srcCodeUrl} icon={PiCodeBold} hoverColor={hoverColor} />
                        </TooltipWrapper>
                        <TooltipWrapper label="Live Preview">
                            <ProjectCardLink href={livePreviewUrl} icon={PiDesktopBold} hoverColor={hoverColor} />
                        </TooltipWrapper>
                    </div>
                </div>
            </div>
        </AspectRatio>
    )
}
