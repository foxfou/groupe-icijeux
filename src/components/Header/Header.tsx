import Link from "next/link"
import { Button } from "../ui/buttons/Button"
import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"

export default function Header() {
    return (
        <header className="bg-transperents">
            <div className="flex justify-between container mx-auto items-center h-[150px] text-black">

                <div> <img src="/Logo-black.png" alt="logo" className="max-w-xs" /> </div>

                <div className="flex gap-3">

                    <Link href="" className="font-semibold">Entreprise</Link>

                    <Link href="" className="font-semibold">Services</Link>

                    <Link href="" className="font-semibold">Produits</Link>

                    <Link href="" className="font-semibold">Nos Projets</Link>

                    <Link href="" className="font-semibold">Nous Joindre</Link>

                </div>

                <div className="flex gap-3 items-center">

                    <a href="https://www.facebook.com/Gr.ICIJEUX">
                        <FacebookIcon className="w-10 h-10" />
                    </a>

                    <Button variant="outlined" color="black" className="">
                        <span className="leading-1px">Devis</span>
                    </Button>

                </div>

            </div>
        </header>
    )
}