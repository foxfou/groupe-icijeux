import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'h-[36px] px-4 py-2 font-bold uppercase tracking-widest whitespace-nowrap text-sm rounded disabled:opacity-60 flex items-center gap-1',
    variants: {
        variant: {
            contained: 'hover:opacity-80',
            outlined: 'bg-transparent border-2',
        },
        color: {
            primary: '',
            black: '',
            white: '',
        }
    },
    compoundVariants: [
        {
            variant: 'contained',
            color: 'primary',
            class: 'text-black bg-primary',
        },
        {
            variant: 'outlined',
            color: 'primary',
            class: 'text-primary border-primary hover:bg-primary hover:text-black',
        },
        {
            variant: 'contained',
            color: 'black',
            class: 'text-white bg-attention-high bg-black',
        },
        {
            variant: 'outlined',
            color: 'black',
            class: 'text-black border-black hover:bg-black hover:text-white',
        },

        {
            variant: 'contained',
            color: 'white',
            class: 'text-black bg-attention-high bg-white',
        },
        {
            variant: 'outlined',
            color: 'white',
            class: 'text-white border-white hover:bg-white hover:text-black',
        },
    ],
    defaultVariants: {
        variant: 'contained',
        color: 'primary',
    },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>

export function Button(props: ButtonProps) {
    const { className, variant, color, children, ...otherProps } = props

    return (
        <button
            className={button({ className, variant, color })}
            {...otherProps}
        >
            {children}
        </button>
    )
}