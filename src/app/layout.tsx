import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
    title: 'Groupe Icijeux',
    description: 'Des aires de jeux conçues pour émerveiller et inspirer.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    )
}
