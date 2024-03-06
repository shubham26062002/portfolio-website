import { SidebarButtonsList } from './sidebar-buttons-list'

export const Sidebar = () => {
    return (
        <aside className="fixed z-50 inset-0 h-fit top-auto lg:w-fit lg:h-full lg:left-auto bg-midnight-black py-6 lg:py-0 lg:px-6 flex justify-center items-center border-l border-neutral-900">
            <div className="flex lg:flex-col gap-3">
                <SidebarButtonsList />
            </div>
        </aside>
    )
}
