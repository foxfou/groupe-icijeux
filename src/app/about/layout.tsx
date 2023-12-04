import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import FormLink from '@/components/FormLink/FormLink'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <FormLink />
        </>
    )
}
