import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
        
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/ruisseau1.jpg`} alt="ruisseau" className="object-cover object-[50%_50%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Ruisseau ludique</h1>

                <h2 className="text-title lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Allez moussaillon, pompez et découvrez le plaisir d’apprendre les deux pieds dans l’eau !</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-4">Explorer, naviguer, et jouer dans cette expérience de jeu libre explorant la manipulation de l’eau dans des circuits sinueux intégrés à votre environnement. Allez moussaillon, pompez et découvrez le plaisir d’apprendre les deux pieds dans l’eau !</p>
                    <p className="text-secondaryText font-light leading-[30px]">• Couloirs en béton armé avec finition antidérapante <br />
                       • Bassins d'exploration pour le jeu libre, bassin final de captation <br />
                       • Plate-forme de départ en bois de type cèdre rouge <br />
                       • Pompe manuelle anticoincement sur robinetterie existante  <br />
                       • Ponts ludique nature Groupe Ici Jeux  <br />
                       • S'adaptent à tous les types de buttes  <br />
                       • Conforme à la norme CAN/CSAZ614
                    </p>

            </div>

            <div className="max-w-screen mx-auto p-4 lg:flex lg:justify-between items-center gap-2 ">

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/ruisseau_radius.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/ruisseau_radius_2.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/ruisseau_radius_3.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

            </div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/ruisseau_2.jpg`} alt="castor" className="object-cover object-[50%_50%] w-full h-[450px]" />
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
