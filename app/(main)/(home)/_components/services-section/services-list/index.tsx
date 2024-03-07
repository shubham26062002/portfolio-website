import { BsWindowDesktop } from 'react-icons/bs'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsDatabase } from 'react-icons/bs'

import { ServiceCard } from './service-card'

export const ServicesList = () => {
    const servicesCardsData = [
        {
            icon: BsWindowDesktop,
            title: 'Website Design & Development',
            description: 'Offering services like Frontend Development, Static Site Development, Backend Development, API Development, and more...',
        },
        {
            icon: MdOutlineDesignServices,
            title: 'UI/UX Design',
            description: 'Offering services like Interaction Design, Visual Design, Mobile App Design, Web App Design, CMS Design, and more..',
        },
        {
            icon: BsDatabase,
            title: 'Database Design & Managementt',
            description: 'Offering services like Data Modeling, Database Management, Performance Optimization, Data Integrity and Security, Database Administration, and more...',
        },
    ]

    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {servicesCardsData.map((item, index) => (
                <ServiceCard key={index} icon={item.icon} title={item.title} description={item.description} hoverColor="coral-pink" />
            ))}

        </div>
    )
}
