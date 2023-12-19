import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
        
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/pump_bg.jpg`} alt="pump" className="object-cover object-[50%_10%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Pumptracks</h1>

                <h2 className="text-title lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Le tout nouveau PUMPTRACK amovible. Facile à installer, sécuritaire et facile d’entretien.</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-4">Le Pumptrack composite est un terrain de jeu cyclable pour tout le monde. Les pistes garantissent le plaisir pour les utilisateurs tout en maintenant un facteur de sécurité élevé. Les Pumptracks sont fournis dans des modules, qui rapidement et facilement peuvent être montés sur presque toute surface plane. Le système modulaire des pumptracks composites permet également l'extension d'autres éléments, de sorte que la piste devient plus longue et plus agréable à utiliser. Le Pumptrack modulaire, ou piste à rouleaux, c'est un entraînement, un défi et un amusement pour tous, quelque soit son âge.</p>
                    <p className="text-secondaryText font-bold leading-[40px]">• Choix de couleurs standards <br />
                       • Résistant aux U.V., anti-dérapant <br />
                       • Entretien minimal <br />
                       • Possibilité de créer votre parcours personnalisés  <br />
                    </p>

            </div>

            <div className="max-w-screen mx-auto p-4 items-center gap-2 grid lg:grid-cols-3 grid-cols-1">

                <div className="pb-10 flex justify-center ">
                    <img src={`${process.env.BASE_URL}/pump1.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow " />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump2.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump3.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump4.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump5.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump6.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump7.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump8.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/pump9.jpg`} alt="pump" className="w-[379px] h-[379px] object-cover grow" />
                </div>

            </div>

            <div className="flex items-center justify-end py-6 max-w-screen mx-auto p-4">
                <Image src={`${process.env.BASE_URL}/pump_fqsc.jpg`} width={300} height={100} alt="castor" className="" />
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
