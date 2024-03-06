import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'
import { SectionTitle } from './section-title'

interface SectionWrapperProps {
    section: Section,
    backgroundColor?: BackgroundColor,
    icon: IconType,
    title: string,
    hoverColor?: PrimaryColor,
    children: React.ReactNode,
}

export const SectionWrapper = ({
    section,
    backgroundColor = 'midnight-gray',
    icon,
    title,
    hoverColor = 'sea-green',
    children,
}: SectionWrapperProps) => {
    return (
        <section className="min-h-screen section" id={section}>
            <div className={cn('min-h-screen h-full py-16 px-6 md:px-24 lg:px-36 bg-midnight-gray', backgroundColor === 'midnight-black' && 'bg-midnight-black bg-opacity-90 border-t-[1px] border-b-[1px] border-neutral-900')}>
                <SectionTitle icon={icon} title={title} hoverColor={hoverColor} />
                <div className="mt-12">{children}</div>
            </div>
        </section>
    )
}
