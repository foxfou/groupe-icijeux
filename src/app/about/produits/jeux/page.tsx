import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/water_child.jpg`} alt="water_playgr" className="object-cover object-[50%_30%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Jeux d’eau</h1>

                <h2 className="text-title lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Chez Groupe Ici Jeux, nous proposons une variété de gammes de jeux d'eau pour divertir les enfants de tous âges.</h2>

                <p className="max-w-[1200px] text-secondaryText font-light leading-[30px] pb-10">Nous avons créé notre propre concept de rivière ludique, permettant aux enfants d'être acteurs de leur propre jeu, de manipuler l'eau et de découvrir les lois de la physique. Nous sommes conscients de l'importance de lutter contre les îlots de chaleur pour le bien-être des enfants. C'est pourquoi nous offrons des solutions innovantes et créatives de jeux d'eau pour les espaces publics, tels que les parcs et les aires de jeux. Découvrez nos options pour aider à rafraîchir les enfants en été et à ajouter une touche ludique et interactive à votre aménagement paysager.</p>

            </div>

            <div className="max-w-screen mx-auto p-6 text-secondaryText lg:flex lg:justify-between font-medium text-xl gap-2">

                <div className="flex-col flex align-center">

                    <img src={`${process.env.BASE_URL}/playgr_jeux.jpg`} alt="playgr" className="lg:w-[378px] w-[650px] h-[390px] object-cover " />

                    <p className="py-4">Des artisans internationaux</p>

                </div>

                <div>

                    <img src={`${process.env.BASE_URL}/playgr_jeux_2.jpg`} alt="playgr" className="lg:w-[378px] w-[650px] h-[390px] object-cover" />

                    <p className="py-4">Des matériaux de haute qualité</p>

                </div>

                <div>

                    <img src={`${process.env.BASE_URL}/playgr_jeux_3.jpg`} alt="playgr" className="lg:w-[378px] w-[650px] h-[390px] object-cover" />

                    <p className="py-4">Des pièces uniques</p>

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
