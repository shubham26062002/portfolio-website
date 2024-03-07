type Section = 'home' | 'about' | 'skills' | 'services' | 'portfolio' | 'contact'

type BackgroundColor = 'midnight-gray' | 'midnight-black'

type PrimaryColor = 'sea-green' | 'coral-pink'

type ContactFormData = {
    firstName?: string,
    lastName?: string,
    email: string,
    subject: string,
    message: string,
}