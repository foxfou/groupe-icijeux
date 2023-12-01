import Link from "next/link"
import { Button } from "../ui/buttons/Button"
import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import Logo from "../images/Logo"
export default function HeaderMain() {
    return (
        <header className="bg-transperent absolute top-0 left-0 w-full">
            <div className="flex justify-between container mx-auto items-center h-[150px] text-white">

                <div>
                    <Logo />
                </div>

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

                    <Button variant="outlined" color="white" className="">
                        <span className="leading-1px">Devis</span>
                    </Button>

                </div>

            </div>
        </header>
    )
}