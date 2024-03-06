'use client'

import { cn } from '@/lib/utils'

interface ButtonProps {
    color?: PrimaryColor,
    type?: 'button' | 'submit',
    disabled?: boolean,
    onClick?: () => void,
    label: string,
}

export const Button = ({
    color = 'sea-green',
    type = 'button',
    disabled = false,
    onClick,
    label,
}: ButtonProps) => {
    return (
        <button className={cn('inline-block py-2.5 px-6 rounded-full border-[1px] border-sea-green text-sea-green hover:text-white transition-all font-semibold duration-200 transform-gpu relative overflow-hidden before:content-[\'\'] before:absolute before:inset-0 before:bg-sea-green before:-translate-x-full hover:before:translate-x-0 before:transition-all before:duration-200 before:transform-gpu before:-z-50', color === 'coral-pink' && 'border-coral-pink text-coral-pink before:bg-coral-pink', disabled && 'opacity-50 cursor-not-allowed')} type={type} disabled={disabled} onClick={onClick}>{label}</button>
    )
}
