"use client";
import Link from "next/link"
import { Button } from "../ui/buttons/Button"
import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import LogoBlack from "../images/LogoBlack"
import { MenuIcon } from "../ui/icons/MenuIcon/MenuIcon"
import HeaderLinks from "./HeaderLinks";

export default function Header() {
    return (
        <header className="bg-transperents">
            <div className="flex justify-between max-w-screen mx-auto items-center h-[150px] text-black p-4">

                <div className="max-w-[200px] lg:max-w-full">
                    <LogoBlack />
                </div>

                <HeaderLinks />

                <div className="flex gap-3 items-center">

                    <a href="https://www.facebook.com/Gr.ICIJEUX">
                        <FacebookIcon className="w-10 h-10 lg:block hidden" />
                    </a>

                    <Button variant="outlined" color="black" className="lg:block hidden">
                        <span className="leading-1px">Devis</span>
                    </Button>

                    <MenuIcon className="w-10 h-10 lg:hidden" />

                </div>

            </div>
        </header>
    )
}
