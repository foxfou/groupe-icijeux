import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import { Button } from "../ui/buttons/Button"
import Link from "next/link"
import LogoMain from "../images/LogoMain"

export default function Footer() {
    return (
        <footer className="bg-footer p-4 lg:pt-10">
            <div className="max-w-screen mx-auto">

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-20 pb-10" >

                    <div className="max-w-[200px] flex items-center justify-center">
                        <LogoMain />
                    </div>

                    <h1 className="text-2xl text-white font-bold">Concepteur d’aires de jeux conçues pour émerveiller et inspirer.</h1>

                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="text-white flex-grow" >

                        <p>8225 rue Lafrenaie</p>

                        <p>Montréal  (Québec)  Canada, H1P 2B1</p>

                        <p>514 643-3505</p>

                        <p>info@groupeicijeux.com</p>

                    </div>

                    <div className="flex flex-col text-primary underline underline-offset-2 mt-4 lg:mr-[90px] lg:mt-0">

                        <Link href="" className="font-semibold ">Concepteurs</Link>

                        <Link href="" className="font-semibold ">Installateurs</Link>

                        <Link href="" className="font-semibold ">Architectes</Link>

                        <Link href="" className="font-semibold ">Inspection</Link>

                    </div>

                    <div className="flex flex-col text-primary underline underline-offset-2 mt-4 lg:mr-[90px] lg:mt-0">

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
