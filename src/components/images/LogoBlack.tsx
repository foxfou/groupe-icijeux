import Image from 'next/image'

export default function LogoBlack() {
    return (
        <Image src={`${process.env.BASE_URL}/logo-black.png`} alt="Black logo" height="86" width="298" />
    )
}
