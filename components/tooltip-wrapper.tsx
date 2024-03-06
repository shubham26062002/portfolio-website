import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface TooltipWrapperProps {
    children: React.ReactNode,
    side?: 'top' | 'right' | 'bottom' | 'left',
    align?: 'start' | 'center' | 'end',
    label: string,
}

export const TooltipWrapper = ({
    children,
    side = 'bottom',
    align = 'center',
    label,
}: TooltipWrapperProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent className="bg-black border-neutral-900" side={side} align={align}>{label}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
