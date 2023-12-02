import type { Metadata } from 'next'
import Header from '@/components/Header/Header'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
