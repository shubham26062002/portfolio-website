import { ScrollProgressbar } from './_components/scroll-progressbar'
import { Sidebar } from './_components/sidebar'

interface MainLayoutProps {
    children: React.ReactNode,
}

const MainLayout = ({
    children,
}: MainLayoutProps) => {
    return (
        <div className="h-full relative">
            <Sidebar />
            <ScrollProgressbar />
            <main className="pb-[78.6px] md:pb-[89.6px] lg:pb-0 lg:pr-[101.4px]">{children}</main>
        </div>
    )
}

export default MainLayout