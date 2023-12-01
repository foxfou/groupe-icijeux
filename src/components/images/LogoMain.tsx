import Image from 'next/image'

export default function LogoMain() {
    return (
        <Image src={`${process.env.BASE_URL}/logo-main.png`} alt="Black logo" height="86" width="298" />
    )
}
