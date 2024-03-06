'use client'

import { motion, useScroll } from 'framer-motion'

export const ScrollProgressbar = () => {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div className="fixed h-2 top-0 left-0 right-0 lg:right-[101.4px] bg-coral-pink origin-left" style={{ scaleX: scrollYProgress }}></motion.div>
    )
}
