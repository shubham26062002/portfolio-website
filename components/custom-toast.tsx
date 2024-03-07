import { toast } from 'react-hot-toast'
import { MdOutlineDone, MdOutlineErrorOutline } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

interface CustomToastProps {
    variant: 'success' | 'error'
    toastId: string,
    message: string,
}

const CustomToast = ({
    variant,
    toastId,
    message,
}: CustomToastProps) => {
    return (
        <div className="min-w-full md:min-w-[428px] p-7 rounded-2xl max-w-md bg-midnight-gray border-[1px] border-neutral-900 flex items-center gap-3 relative" >

            {variant === 'success' ? (
                <MdOutlineDone className="h-9 w-9 text-coral-pink" />
            ) : (
                <MdOutlineErrorOutline className="h-9 w-9 text-coral-pink" />
            )}

            <div className="flex-1">
                <p className="text-neutral-400 font-medium">{message}</p>
            </div>
            <button className="absolute top-3 right-3 group" onClick={() => toast.dismiss(toastId)}>
                <IoClose className="h-5 w-5 text-neutral-400 group-hover:text-coral-pink transition-all duration-200 transform-gpu" />
            </button>
        </div >
    )
}

export default CustomToast