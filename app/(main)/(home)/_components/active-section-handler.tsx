'use client'

import { useEffect } from 'react'

import { useActiveSection } from '@/hooks/use-active-section'

interface ActiveSectionHandlerProps {
    children: React.ReactNode,
}

export const ActiveSectionHandler = ({
    children,
}: ActiveSectionHandlerProps) => {
    const { setActiveSection } = useActiveSection()

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section')

            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as Section)
                    }
                })
            }, options)

            sections.forEach((section) => {
                observer.observe(section)
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>{children}</>
    )
}
