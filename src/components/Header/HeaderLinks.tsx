"use client";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import Link from "next/link"
export default function HeaderLinks() {
    return (
        <div className="lg:flex hidden gap-3">
            <Dropdown>

                <DropdownTrigger className="font-semibold outline-none">
                    <button>
                        Entreprise
                    </button>
                </DropdownTrigger>

                <DropdownMenu className=" bg-orange-600 py-3 px-4 flex flex-col rounded-md bg-opacity-70 shadow-lg text-white outline-none">

                    <DropdownItem>
                        <Link href="/about/entreprise/apropos">À propos</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/entreprise/approche">Approche</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/entreprise/equipe">Équipe</Link>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            <Dropdown>

                <DropdownTrigger className="font-semibold">
                    <button>
                        Services
                    </button>
                </DropdownTrigger>

                <DropdownMenu className="bg-orange-600 outline-none py-3 px-4 flex flex-col rounded-md bg-opacity-70 shadow-lg text-white">

                    <DropdownItem>
                        <Link href="/about/services/concepteurs">Concepteurs</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/services/installateurs">Installateurs</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/services/architectes">Architectes</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/services/inspection">Inspection</Link>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            {/* <Dropdown>

                <DropdownTrigger className="font-semibold">
                    <button>
                        Services
                    </button>
                </DropdownTrigger>

                <DropdownMenu className="bg-orange-600 outline-none py-3 px-4 flex flex-col rounded-md bg-opacity-70 shadow-lg text-white">

                    <DropdownItem>
                        <Link href="/about/entreprise/concepteurs">Concepteurs</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/entreprise/installateurs">Installateurs</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/entreprise/architectes">Architectes</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/entreprise/inspection">Inspection</Link>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown> */}

            <Dropdown>

                <DropdownTrigger className="font-semibold">
                    <button>
                        Produits
                    </button>
                </DropdownTrigger>

                <DropdownMenu className="bg-orange-600 outline-none py-3 px-4 flex flex-col rounded-md bg-opacity-70 shadow-lg text-white">

                    <DropdownItem>
                        <Link href="/about/produits/produit">&gt;Produits</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/modules">Modules de jeux</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/jeux">Jeux d'eau</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/castor">Castor B</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/ruisseau">Ruisseau ludique</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/yeti">4 saisons&nbsp;/&nbsp;Yéti Cool</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/parcour">Parcours hébertisme</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/terrain">Terrain sportif et récréatif</Link>
                    </DropdownItem>

                    <DropdownItem>
                        <Link href="/about/produits/pump">Pumptracks</Link>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            <Dropdown>

                <DropdownTrigger className="font-semibold">
                    <button>
                        Nos Projets
                    </button>
                </DropdownTrigger>

                <DropdownMenu className="bg-orange-600 outline-none py-3 px-4 flex flex-col rounded-md bg-opacity-70 shadow-lg text-white">

                    <DropdownItem>
                        <Link href="/about/entreprise/concepteurs">
                            Projets réalisés
                        </Link>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

            <Link href="" className="font-semibold">Nous Joindre</Link>
        </div>
    )
}