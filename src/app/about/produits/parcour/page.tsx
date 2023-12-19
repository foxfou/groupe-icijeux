import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Parcours hébertisme</h1>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-10">Nous avons une variété de modules de jeu en bois, tels que des parcours d’agilité, des traverses d'équilibre, des défis d'escalade, des zones de jeu libre, qui répondront à tous les besoins psychomoteurs des enfants. Vous pouvez facilement créer un parcours d'hébertisme pour les tout-petits en séparant votre cour avec différents types d'aires de jeu tels que le jeu sportif, le jeu créatif, le jeu calme et la zone de socialisation. Contactez-nous, et nous pourrons construire ensemble votre futur parcours d'hébertisme stimulant et s'intégrant dans un univers naturel.</p>

            </div>

            <div className="max-w-screen mx-auto p-6 lg:flex lg:justify-between items-center gap-2">

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/playgr.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/parcour1.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/parcour2.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                </div>

            </div>

            <div className="">
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
