"use client";
import HeaderLinks from "./HeaderLinks";
import { Button } from "../ui/buttons/Button"
import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import LogoMain from "../images/LogoMain"
import { MenuIcon } from "../ui/icons/MenuIcon/MenuIcon"
import { Link } from "@nextui-org/react";


export default function HeaderMain() {
    return (
        <header className="bg-transperent absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/50">
            <div className="flex justify-between max-w-screen mx-auto items-center h-[150px] text-white p-4">

                <Link href="/" className="max-w-[200px] lg:max-w-full">
                    <LogoMain />
                </Link>

                <HeaderLinks />



                <div className="flex gap-3 items-center">

                    <a href="https://www.facebook.com/Gr.ICIJEUX">
                        <FacebookIcon className="w-10 h-10 lg:block hidden" />
                    </a>

                    <Button variant="outlined" color="white" className="lg:block hidden">
                        <span className="leading-1px">Devis</span>
                    </Button>

                    <MenuIcon className="w-10 h-10 lg:hidden" />

                </div>
            </div>
        </header >
    )
}
