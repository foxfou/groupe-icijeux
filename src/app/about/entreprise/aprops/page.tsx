import Link from 'next/link'
import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"

export default function About() {
    return (
        
        <main>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <section className="max-w-screen mx-auto">
                
                <div className='flex justify-between my-10'>
                    <div className="">

                        <h1 className='text-4xl font-medium'>À propos</h1>

                        <h2 className='text-title text-5xl my-8 max-w-[600px] font-bold leading-[60px]'>Notre expertise au service du plaisir.</h2>

                        <p className='max-w-[630px] font-light text-secondaryText leading-7'>Chez Groupe ICI JEUX, notre objectif est de créer des environnements de jeu extérieur sûrs, stimulants et inclusifs pour les enfants. Nous sommes impatients de travailler avec vous pour concevoir le terrain de jeu de vos rêves.</p>

                    </div>

                    <div>
                        <Image src={`${process.env.BASE_URL}/children_radius.jpg`} alt="children" height="350" width="350" className='rounded-full' />
                    </div>

                </div>
            </section>

            <section className="bg-content">
                <div className='flex py-16 justify-between max-w-screen mx-auto'>

                    <div className='flex flex-col items-center'>

                        <Image src={`${process.env.BASE_URL}/paysagiste.jpg`} alt="paysagiste" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Architecte paysagiste</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center'>

                        <Image src={`${process.env.BASE_URL}/concept.jpg`} alt="Concept" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Concept de jeux</p>
                        
                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center'>

                        <Image src={`${process.env.BASE_URL}/fabrication.jpg`} alt="Fabrication" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Fabrication</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center'>

                        <Image src={`${process.env.BASE_URL}/installation.jpg`} alt="Installation" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Installation</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                </div>
            </section>

            <section>
                <div className='flex py-16 justify-between max-w-screen mx-auto font-light'>

                    <div>
                        <p className='max-w-[550px] leading-7'>Chez Groupe ICI JEUX, nous sommes une équipe passionnée et expérimentée dans la conception, la fabrication et l'installation d'équipements de jeux extérieurs. Nous sommes fiers de fournir des produits et des services de qualité supérieure à nos clients dans les secteurs municipaux, scolaires et de la petite enfance.</p>

                        <h1 className='my-6 font-bold text-xl'>Production locale</h1>

                        <p className='max-w-[540px] leading-7'>Nous croyons que le jeu est un élément essentiel dans le développement des enfants, c'est pourquoi nous travaillons sans relâche pour créer des environnements de jeu stimulants, créatifs et inclusifs. Nous concevons des aires de jeu et des modules en bois faits à Montréal, en utilisant des matériaux naturels, durables et écologiques pour offrir aux enfants un lieu sûr et agréable pour jouer.</p>

                    </div>

                    <div>

                        <h1 className='mb-6 font-bold text-xl'>Une équipe d’experts</h1>

                        <p className='max-w-[550px] leading-7'>Notre équipe multidisciplinaire, composée d'architectes paysagistes, de concepteurs, de fabricants et d'installateurs, travaille en étroite collaboration avec nos clients pour concevoir des aires de jeu uniques et adaptées à leurs besoins. Nous offrons également des solutions de plan et devis pour les appels d'offres et la préparation de projets.</p> 

                        <div className="flex justify-start gap-4 mt-[140px]">

                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>

                    </div>
                    
                </div>
            </section>


            
        </main>
    )
}
