import { IconType } from 'react-icons'

import { cn } from '@/lib/utils'

interface ContainerProps {
    className?: string,
    icon?: IconType,
    title: string,
    children: React.ReactNode,
    hoverColor?: PrimaryColor,
}

export const Container = ({
    className = '',
    icon: Icon,
    title,
    children,
    hoverColor = 'sea-green',
}: ContainerProps) => {
    return (
        <div className={cn('p-7 rounded-2xl bg-midnight-gray bg-opacity-50 border-[1px] border-neutral-900', className)}>

            {Icon && (
                <Icon className={cn('h-9 w-9 text-neutral-400 group-hover:text-sea-green transition-all duration-200 transform-gpu', hoverColor === 'coral-pink' && 'group-hover:text-coral-pink')} />
            )}

            <h1 className={cn('w-fit text-2xl font-bold uppercase text-neutral-400 leading-relaxed tracking-tighter', Icon && 'mt-7')}>{title}</h1>

            {children && (
                <div className="mt-7">{children}</div>)
            }

        </div>
    )
}
