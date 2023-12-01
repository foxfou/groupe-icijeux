import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import { Button } from "../ui/buttons/Button"
import Link from "next/link"
import Logo from "../images/Logo"

export default function Footer() {
    return (
        <footer className="bg-footer pt-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center gap-20 pb-10" >
                    <div className="">
                        <Logo />
                    </div>
                    <h1 className="text-2xl text-white font-bold">Concepteur d’aires de jeux conçues pour émerveiller et inspirer.</h1>
                </div>

                <div className="flex">
                    <div className="text-white flex-grow" >
                        <p>8225 rue Lafrenaie</p>
                        <p>Montréal  (Québec)  Canada, H1P 2B1</p>
                        <p>514 643-3505</p>
                        <p>info@groupeicijeux.com</p>
                    </div>

                    <div className="flex flex-col text-primary underline underline-offset-2  mr-[90px]">
                        <Link href="" className="font-semibold ">Concepteurs</Link>

                        <Link href="" className="font-semibold ">Installateurs</Link>

                        <Link href="" className="font-semibold ">Architectes</Link>

                        <Link href="" className="font-semibold ">Inspection</Link>
                    </div>

                    <div className="flex flex-col text-primary underline underline-offset-2 mr-[90px] ">
                        <Link href="" className="font-semibold ">Produits</Link>

                        <Link href="" className="font-semibold ">À propos</Link>

                        <Link href="" className="font-semibold ">Nous joindre</Link>

                        <Link href="" className="font-semibold ">Soumission</Link>
                    </div>

                    <a href="https://www.facebook.com/Gr.ICIJEUX">
                        <FacebookIcon className=" text-white w-10 h-10" />
                    </a>
                </div>

                <div className="flex justify-center text-white pt-20 pb-5 font-light">Tous droits réservés © 2023 Groupe Icijeux</div>


            </div>



        </footer>
    )
}