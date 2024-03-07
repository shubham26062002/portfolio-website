'use client'

import { FieldErrors, UseFormRegister } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'

interface InputProps {
    id: string,
    register: UseFormRegister<z.infer<any>>,
    type?: 'text' | 'email' | 'password',
    isRequired?: boolean,
    focusColor?: 'sea-green' | 'coral-pink',
    label: string,
    errors: FieldErrors,
}

export const Input = ({
    id,
    register,
    type = 'text',
    isRequired = false,
    focusColor = 'sea-green',
    label,
    errors,
}: InputProps) => {
    return (
        <div>
            <div className="relative">
                <input className="peer w-full border-b-[1px] border-neutral-700 bg-transparent py-[5px] text-neutral-700 focus:outline-none" id={id} type={type} {...register(id)} required />
                <label className={cn('absolute block w-fit inset-0 text-neutral-400 transition-all duration-200 transform-gpu peer-valid:top-[-50%] peer-valid:text-sm peer-focus:top-[-50%] peer-focus:text-sm  after:text-sea-green after:absolute after:-right-2', isRequired && 'after:content-["*"]', focusColor === 'coral-pink' && 'after:text-coral-pink')} htmlFor={id}>{label}</label>
                <div className={cn('h-[2px] origin-left scale-0 bg-sea-green transition-all duration-200 transform-gpu peer-valid:scale-100 peer-focus:scale-100', focusColor === 'coral-pink' && 'bg-coral-pink')}></div>
            </div>

            {errors[id] ? (
                <span className={cn('text-xs text-sea-green', focusColor === 'coral-pink' && 'text-coral-pink')}>{errors[id]?.message as React.ReactNode}</span>
            ) : (
                <span className={cn('text-xs text-sea-green', focusColor === 'coral-pink' && 'text-coral-pink')}>&nbsp;</span>
            )}

        </div>
    )
}
