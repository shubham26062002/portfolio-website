'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { toast } from 'react-hot-toast'

import { contactFormSchema } from '@/lib/form-schemas'
import { Input } from '../input'
import { Button } from '../button'
import { addContactFormEntry, sendNotificationEmail, sendResponseEmail } from '@/actions/contact-form-actions'
import CustomToast from '@/components/custom-toast'

export const ContactForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        },
    })

    const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
        startTransition(() => {
            addContactFormEntry(values)
                .then((data) => {
                    sendResponseEmail(data)
                        .then(() => {
                            sendNotificationEmail(data)
                                .then(() => {
                                    form.reset()

                                    toast.custom((toast) => (
                                        <CustomToast variant="success" toastId={toast.id} message="Your entry has been submitted successfully." />
                                    ))
                                })
                                .catch(() => {
                                    toast.custom((toast) => (
                                        <CustomToast variant="error" toastId={toast.id} message="Failed to send notification email." />
                                    ))
                                })
                        })
                        .catch(() => {
                            toast.custom((toast) => (
                                <CustomToast variant="error" toastId={toast.id} message="Failed to send response email." />
                            ))
                        })
                })
                .catch(() => {
                    toast.custom((toast) => (
                        <CustomToast variant="error" toastId={toast.id} message="Failed to add contact form entry." />
                    ))
                })
        })
    }

    return (
        <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Input label="First Name" id="firstName" focusColor="coral-pink" register={form.register} errors={form.formState.errors} />
                <Input label="Last Name" id="lastName" focusColor="coral-pink" register={form.register} errors={form.formState.errors} />
            </div>
            <Input label="Email" id="email" focusColor="coral-pink" register={form.register} errors={form.formState.errors} isRequired={true} />
            <Input label="Subject" id="subject" focusColor="coral-pink" register={form.register} errors={form.formState.errors} isRequired={true} />
            <Input label="Message" id="message" focusColor="coral-pink" register={form.register} errors={form.formState.errors} isRequired={true} />
            <div>
                <Button label="Send Message" type="submit" color="coral-pink" disabled={isPending} />
            </div>
        </form>
    )
}
