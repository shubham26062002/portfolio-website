import { IconType } from 'react-icons'

import { Container } from '../../container'

interface ServiceCardProps {
    icon: IconType,
    title: string,
    hoverColor?: PrimaryColor,
    description: string,
}

export const ServiceCard = ({
    icon,
    title,
    hoverColor = 'sea-green',
    description,
}: ServiceCardProps) => {
    return (
        <Container className="group" icon={icon} title={title} hoverColor={hoverColor}>
            <p className="text-neutral-700 leading-relaxed">{description}</p>
        </Container>
    )
}
