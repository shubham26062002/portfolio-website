'use client'

import { Button } from '../button'

export const LetsTalkButton = () => {
    return (
        <Button label="Let's Talk" onClick={() => { document.getElementById('contact' as Section)?.scrollIntoView({ behavior: 'smooth' }) }} />
    )
}
