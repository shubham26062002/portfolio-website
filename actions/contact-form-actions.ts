'use server'

// import { ContactFormEntry } from '@prisma/client'
import { Resend } from 'resend'

import { prisma } from '@/lib/prisma'

const resend = new Resend(process.env.RESEND_API_KEY)

export const addContactFormEntry = async (data: ContactFormData) => {
    const contactFormEntry = await prisma.contactFormEntry.create({
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            subject: data.subject,
            message: data.message,
        },
    })

    return contactFormEntry
}

export const sendResponseEmail = async (data: ContactFormData) => {
    const subject = 'Thank you for reaching out!'

    const htmlContent = `<h1>Hello ${data.firstName} ${data.lastName},</h1>
    <p>Thank you for reaching out! I'll get back to you as soon as possible.</p>
    <p>Meanwhile, here's a summary of your message:</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong> ${data.message}</p>
    <p>Best,</p>
    <p>Shubham Patel</p>`

    await resend.emails.send({
        from: process.env.RESEND_SENDER_EMAIL!,
        to: data.email,
        subject: subject,
        html: htmlContent,
    })

    return
}

export const sendNotificationEmail = async (data: ContactFormData) => {
    const subject = 'New contact form entry received.'

    const htmlContent = `<h1>New contact form entry received.</h1>
    <p><strong>First Name:</strong> ${data.firstName}</p>
    <p><strong>Last Name:</strong> ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong> ${data.message}</p>`

    await resend.emails.send({
        from: process.env.RESEND_SENDER_EMAIL!,
        to: process.env.OWNER_EMAIL!,
        subject: subject,
        html: htmlContent,
    })

    return
}