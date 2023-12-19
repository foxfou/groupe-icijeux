import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/tennis_bg.jpg`} alt="tennis_court" className="object-cover object-[50%_50%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Terrains sports et récréatifs</h1>

                <h2 className="text-title lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Nous offrons des solutions clé en main pour la construction de terrains sportifs et récréatifs sur mesure.</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-10">Grâce à notre collaboration avec des fournisseurs fiables, nous sommes en mesure de vous proposer une surface en gazon synthétique ultra-résistante ainsi que des panneaux en polyéthylène HDPE traité contre les rayons UV (3/4’’ d’épaisseur). La structure des panneaux est en aluminium, ce qui permet de minimiser les coûts d'entretien. Nous offrons également la possibilité d'adapter la dimension du terrain à vos besoins. Si vous disposez déjà d'une surface asphaltée, nous pouvons installer notre terrain sportif directement sur celle-ci, ce qui réduit les coûts et la durée des travaux sur place. Découvrez nos réalisations pour les terrains de soccer, basketball, de tennis et multisports. Nous sommes là pour vous accompagner à chaque étape de votre projet, de la conception à l'installation.</p>

            </div>

            <div className="max-w-screen mx-auto p-6 text-secondaryText lg:flex lg:justify-between font-medium items-center text-xl gap-2">

                <div className="flex justify-center align-center flex-col">

                    <img src={`${process.env.BASE_URL}/tennis1.jpg`} alt="tennis" className="lg:w-[378px] lg:h-[378px] h-[379px] object-cover grow" />

                    <p className="py-6 flex justify-center"> Plateforme Multisport</p>

                </div>

                <div className="flex justify-center align-center flex-col">

                    <img src={`${process.env.BASE_URL}/tennis2.jpg`} alt="tennis" className="lg:w-[378px] lg:h-[378px] h-[379px] object-cover grow" />

                    <p className="py-6 flex justify-center">Surface Récréative</p>

                </div>

                <div className="flex justify-center align-center flex-col">

                    <img src={`${process.env.BASE_URL}/tennis3.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] h-[379px] object-cover grow" />

                    <p className="py-6 flex justify-center">Surface - Éclairage - Sport</p>

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
