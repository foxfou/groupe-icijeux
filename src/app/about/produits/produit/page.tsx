import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"
import Link from "next/link"



export default function About() {
    return (

        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex-col max-w-screen mx-auto p-4 text-title lg:text-4xl text-2xl font-bold pb-4 ">

                <div className="lg:flex justify-around py-4">

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/modules">
                            <img src={`${process.env.BASE_URL}/modules.jpg`} alt="modules" className="rounded-full h-[350px] w-[350px] object-cover"  /> 
                        </Link>

                        <h1 className="py-6">MODULES DE JEUX</h1>

                    </div>

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/jeux">
                            <img src={`${process.env.BASE_URL}/water_child.jpg`} alt="water" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">JEUX D’EAU</h1>

                    </div>

                </div>

                <div className="lg:flex justify-around py-4">

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/castor">
                            <img src={`${process.env.BASE_URL}/ladder.jpg`} alt="castor" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">CASTOR B</h1>

                    </div>

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/ruisseau">
                            <img src={`${process.env.BASE_URL}/ludiques.jpg`} alt="ruisseau" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">RUISSEAU LUDIQUE</h1>

                    </div>

                </div>

                <div className="lg:flex justify-around py-4">

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/yeti">
                            <img src={`${process.env.BASE_URL}/yeti.jpg`} alt="yeti" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">YÉTI COOL (4 saisons)</h1>

                    </div>

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/parcour">
                            <img src={`${process.env.BASE_URL}/playgr.jpg`} alt="modules" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">PARCOURS HÉBERTISME</h1>

                    </div>

                </div>

                <div className="lg:flex justify-around py-4">
                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/terrain">
                            <img src={`${process.env.BASE_URL}/tennis.jpg`} alt="modules" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">SPORTS & RÉCRÉATIF</h1>

                    </div>

                    <div className="flex flex-col items-center">

                        <Link href="/about/produits/pump">
                            <img src={`${process.env.BASE_URL}/pumptrack.jpg`} alt="modules" className="rounded-full h-[350px] w-[350px] object-cover"  />
                        </Link>

                        <h1 className="py-6">PUMPTRACK</h1>

                    </div>

                </div>
                
            </div>

            <div className="bg-primary">
                <div className="lg:flex justify-between max-w-screen mx-auto p-4 py-10">

                    <h1 className="lg:max-w-[600px] lg:text-5xl text-4xl pb-8">Demander un devis</h1>

                    <div>

                        <p className="lg:max-w-[600px] font-light leading-[30px] pb-6"> Pour toute demande de devis et d’information concernant vos projets et planifications, merci de bien vouloir remplir le formulaire ci-dessous, notre équipe d’expert vous répondra le plus rapidement possible à votre satisfaction.</p>

                        <Button variant="outlined" color="black" className="lg:block">
                            <span className="leading-1px">Soumission</span>
                        </Button>

                    </div>

                </div>
            </div>

        </>
    )
}
