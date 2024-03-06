'use client'

import { useState, useEffect } from 'react'
import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'
import { SidebarButtonSkeleton } from './sidebar-button-skeleton'
import { useActiveSection } from '@/hooks/use-active-section'

interface SidebarButtonProps {
    section: Section,
    icon: IconType,
}

export const SidebarButton = ({
    section,
    icon: Icon,
}: SidebarButtonProps) => {
    const [isMounted, setIsMounted] = useState(false)

    const { activeSection } = useActiveSection()

    const onClick = () => {
        document.getElementById(section)?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <SidebarButtonSkeleton />
        )
    }

    return (
        <div className={cn('p-2.5 border border-coral-pink hover:bg-coral-pink hover:scale-110 transition-all duration-200 transform-gpu rounded-full group', section === activeSection && 'bg-coral-pink')} onClick={onClick}>
            <Icon className={cn('h-5 w-5 text-coral-pink group-hover:text-midnight-black transition-all duration-200 transform-gpu', section === activeSection && 'text-midnight-black')} />
        </div>
    )
}
