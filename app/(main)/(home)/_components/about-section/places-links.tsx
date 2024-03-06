import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineLocationCity } from 'react-icons/md'
import { FaSchool, FaUniversity } from 'react-icons/fa'

import { IconLinksWrapper } from '../icon-links-wrapper'

export const PlacesLinks = () => {
    const placesLinksData = [
        {
            label: 'Current Location',
            icon: IoLocationSharp,
            href: '#',
        }, {
            label: 'Hometown',
            icon: MdOutlineLocationCity,
            href: '#',
        }, {
            label: 'School',
            icon: FaSchool,
            href: '#',
        }, {
            label: 'University',
            icon: FaUniversity,
            href: '#',
        },
    ]

    return (
        <IconLinksWrapper title="My Places" data={placesLinksData} hoverColor="coral-pink" />
    )
}
