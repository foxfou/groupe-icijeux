import './globals.css'
import type { Metadata } from 'next'
import HeaderMain from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'


export const metadata: Metadata = {
    title: 'À propos — Groupe Icijeux',
    description: 'Chez Groupe ICI JEUX, notre objectif est de créer des environnements de jeu extérieur sûrs, stimulants et inclusifs pour les enfants. Nous sommes impatients de travailler avec vous pour concevoir le terrain de jeu de vos rêves.',
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
