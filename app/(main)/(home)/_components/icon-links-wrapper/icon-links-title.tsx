interface IconLinksTitleProps {
    title: string,
}

export const IconLinksTitle = ({
    title,
}: IconLinksTitleProps) => {
    return (
        <div className="flex gap-2 items-center">
            <p className="leading-relaxed text-neutral-400">{title}</p>
            <div className="flex-1 h-[1px] bg-neutral-700"></div>
        </div>
    )
}
