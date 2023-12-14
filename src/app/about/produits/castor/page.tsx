import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/castor.jpg`} alt="castor" className="object-cover object-[50%_60%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Collection / Castor B</h1>

                <h2 className="text-title lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Favorise le développement des capacités motrices, sensorielles, et l'autonomie</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-10">Chez Groupe Ici Jeux, nous concevons des modules de jeux en bois de cèdre rouge ou pin jaune, en nous concentrant sur le développement moteur et cognitif des enfants âgés de 18 mois à 12 ans. / Matériaux: Bois (cèdre rouge), quincaillerie en acier inoxydable, groupe d’âge destiné : 18 mois-12 ans,  s'adaptent à tous les types de configuration et Conforme à la norme CAN/CSAZ614.</p>

            </div>

            <div className="max-w-screen mx-auto p-6 lg:flex lg:justify-between items-center gap-2">

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/castor_radius.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/castor_radius_2.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/castor_radius_3.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

            </div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/castor_2.jpg`} alt="castor" className="object-cover object-[50%_50%] w-full h-[250px]" />
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
