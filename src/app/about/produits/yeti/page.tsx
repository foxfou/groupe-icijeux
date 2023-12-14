import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"



export default function About() {
    return ( 
        <>
        
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <div className="flex items-center justify-center py-6">
                <img src={`${process.env.BASE_URL}/yeti_bg.png`} alt="yeti" className="object-cover lg:object-[50%_50%] w-full h-[250px]" />
            </div>

            <div className="max-w-screen mx-auto p-4 flex text-center flex-col items-center">

                <h1 className="text-secondaryText lg:text-5xl text-3xl py-10 font-medium">Concept 4 saisons / Yéti Cool</h1>

                <h2 className="text-[#2a4971] lg:max-w-[1150px] lg:text-4xl text-3xl lg:font-bold font-semibold pb-10">Notre gamme Yéti Cool met l'accent sur le jeu libre et le plaisir d'être à l'extérieur. </h2>

                <p className="lg:max-w-[1200px] text-secondaryText font-light leading-[30px] pb-4">Découvrez l'environnement Yéti-Cool, une gamme de produits exclusifs du Groupe Ici Jeux. Nous avons réalisé que la plupart des aires de jeux extérieures en Amérique du Nord étaient conçues exclusivement pour la saison estivale, laissant les enfants sans options pour les périodes mortes du printemps, de l'automne et de l'hiver. C'est pourquoi nous avons créé des jeux extérieurs pour les 4 saisons, conformes à la norme canadienne CAN/CSA Z614 pour les aires de jeux destinées aux enfants de 18 mois et plus.</p>

                <p className="lg:max-w-[1200px] text-secondaryText font-light leading-[30px] pb-4">Notre gamme Yéti Cool met l'accent sur le jeu libre et le plaisir d'être à l'extérieur, tout en favorisant le développement des habiletés motrices fines et globales, cognitives, sociales et affectives des enfants. Nous utilisons des matériaux naturels, durables et recyclables ayant une faible empreinte écologique, et concevons nos jeux en utilisant l'espace, la topographie et la morphologie des sites, offrir une expérience stimulante aux enfants.</p>

            </div>

            <div className="max-w-screen mx-auto p-4 lg:flex lg:justify-between items-center items-ceter gap-2">

                <div className="pb-10 flex justify-center grow">
                    <img src={`${process.env.BASE_URL}/yeti_radius.jpg`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/yeti_radius_2.png`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

                <div className="pb-10 flex justify-center">
                    <img src={`${process.env.BASE_URL}/yeti_radius_3.png`} alt="playgr" className="lg:w-[378px] lg:h-[378px] w-[309px] h-[309px] object-cover rounded-full" />
                </div>

            </div>

            <div className="flex items-center justify-center pt-6">
                <img src={`${process.env.BASE_URL}/yeti_bg_2.jpg`} alt="castor" className="object-cover object-[50%_50%] w-full h-[450px]" />
            </div>

            <div className="bg-primary py-14 p-4 ">
                <div className="lg:flex justify-between max-w-screen mx-auto">

                    <div>
                        <h2 className="lg:max-w-[300px] lg:text-5xl text-4xl font-medium">Découvrez le 4 saisons</h2>

                        <p className="font-light leading-[30px] lg:max-w-[550px] py-8">Bienvenue dans l’environnement Yéti-Cool.  Cette gamme de produit exclusive au Groupe ICIJEUX est né d’un constat que l’ensemble des aires de jeux extérieures en Amérique du Nord ont tous été conçu pour la saison de l’été. Donc, des aires de jeu extérieures non fonctionnel et non sécuritaire pour les périodes mortes du printemps, de l’automne et de l’hiver.</p>

                    </div>

                    <div className="flex items-center justify-center">
                            <iframe src="https://www.youtube.com/embed/t2xKkH_SGpY" className="lg:w-[590px] h-[335px] grow "></iframe>
                    </div>
                    
                </div>
            </div>

            <div className="lg:flex justify-between max-w-screen mx-auto p-4 py-10">

                <h1 className="lg:max-w-[600px] lg:text-5xl text-4xl pb-8">Demander un devis</h1>

                <div>

                    <p className="lg:max-w-[600px] font-light leading-[30px] pb-6"> Pour toute demande de devis et d’information concernant vos projets et planifications, merci de bien vouloir remplir le formulaire ci-dessous, notre équipe d’expert vous répondra le plus rapidement possible à votre satisfaction.</p>

                    <Button variant="outlined" color="black" className="lg:block">
                        <span className="leading-1px">Soumission</span>
                    </Button>

                </div>

            </div>
        </>
    )
}
