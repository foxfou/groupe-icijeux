import React from 'react'

export type IconProps = {
    className?: string;
    children: React.ReactNode
}

export const Icon: React.FC<IconProps> = ({ className = "w-6 h-6", children }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
            {children}
        </svg>
    )
}
