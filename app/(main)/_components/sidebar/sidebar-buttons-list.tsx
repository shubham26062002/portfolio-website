'use client'

import { useMemo } from 'react'
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi'
import { PiShapesBold, PiSuitcaseSimpleBold, PiEnvelopeSimpleBold } from 'react-icons/pi'
import { LiaStreamSolid } from 'react-icons/lia'
import { useMediaQuery } from 'react-responsive'
import { IconType } from 'react-icons'

import { TooltipWrapper } from '@/components/tooltip-wrapper'
import { SidebarButton } from './sidebar-button'

export const SidebarButtonsList = () => {
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })

    const buttonsData = useMemo<{
        label: string,
        section: Section,
        icon: IconType,
    }[]>(() => [
        {
            label: 'Home',
            section: 'home',
            icon: HiOutlineHome,
        },
        {
            label: 'About',
            section: 'about',
            icon: HiOutlineUser,
        },
        {
            label: 'Skills',
            section: 'skills',
            icon: PiShapesBold,
        },
        {
            label: 'Services',
            section: 'services',
            icon: PiSuitcaseSimpleBold,
        },
        {
            label: 'Portfolio',
            section: 'portfolio',
            icon: LiaStreamSolid,
        },
        {
            label: 'Contact',
            section: 'contact',
            icon: PiEnvelopeSimpleBold,
        },
    ], [])

    return (
        <>

            {buttonsData.map((item, index) => (
                <TooltipWrapper key={index} side={isMobileOrTablet ? 'top' : 'left'} align="center" label={item.label}>
                    <SidebarButton section={item.section} icon={item.icon} />
                </TooltipWrapper>
            ))}

        </>
    )
}
