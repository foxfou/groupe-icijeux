import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/bg_modules.jpg`} alt="playgr" className="object-cover object-[50%_50%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Modules de jeux</h1>

                <h2 className="text-title lg:max-w-[915px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">À la recherche d'équipements d'aires de jeux extérieures inclusifs, stimulants et ludiques ?</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-10">Chez Groupe Ici Jeux, nous concevons des modules de jeux en bois de cèdre rouge ou pin jaune à Montréal, en nous concentrant sur le développement moteur et cognitif des enfants âgés de 18 mois à 12 ans. Nous respectons les cadres et les normes éducatives du gouvernement pour fournir un environnement durable, sécuritaire et stimulant. Notre équipe multidisciplinaire peut vous offrir des solutions créatives, innovantes et ludiques tout en respectant la norme CAN/CSAZ614. De plus, nous avons accès aux plus grands fabricants et fournisseurs américains et européens pour tous les types d'équipements destinés aux milieux de garde, scolaires et municipaux.</p>

            </div>

                <div className="max-w-screen mx-auto p-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">

                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>

                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_2.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_3.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_4.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_5.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_6.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_7.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_8.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>
                        
                        <div className="pb-10 flex justify-center">
                            <img src={`${process.env.BASE_URL}/modules_9.jpg`} alt="playgr" className="w-[379px] h-[379px] object-cover grow" />
                        </div>

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
