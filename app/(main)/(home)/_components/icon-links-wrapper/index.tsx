import { IconType } from 'react-icons'

import { IconLinksTitle } from './icon-links-title'
import { IconLink } from './icon-link'
import { TooltipWrapper } from '@/components/tooltip-wrapper'

interface IconLinksWrapperProps {
    title: string,
    data: {
        label: string,
        icon: IconType,
        href: string,
    }[],
    hoverColor?: PrimaryColor,
}

export const IconLinksWrapper = ({
    title,
    data,
    hoverColor = 'sea-green',
}: IconLinksWrapperProps) => {
    return (
        <div>
            <IconLinksTitle title={title} />
            <div className="mt-3 flex w-fit gap-4">

                {data.map((item, index) => (
                    <TooltipWrapper key={index} label={item.label}>
                        <IconLink href={item.href} icon={item.icon} hoverColor={hoverColor} />
                    </TooltipWrapper>
                ))}

            </div>
        </div >
    )
}
