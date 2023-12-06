import Link from 'next/link'
import Image from "next/image"
import { Button } from "@/components/ui/buttons/Button"

export default function About() {
    return (
        
        <main>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <section className="max-w-screen mx-auto p-4">
                
                <div className='lg:flex lg:justify-between my-10'>
                    <div className="">

                        <h1 className='text-4xl font-medium'>À propos</h1>

                        <h2 className='text-title lg:text-5xl text-3xl lg:my-8 my-4 lg:max-w-[600px] max-w-[300px] font-bold lg:leading-[60px]'>Notre expertise au service du plaisir.</h2>

                        <p className='lg:max-w-[630px] max-w-[330px] font-light text-secondaryText leading-7'>Chez Groupe ICI JEUX, notre objectif est de créer des environnements de jeu extérieur sûrs, stimulants et inclusifs pour les enfants. Nous sommes impatients de travailler avec vous pour concevoir le terrain de jeu de vos rêves.</p>

                    </div>

                    <div className='p-10 lg:p-0'>
                        <Image src={`${process.env.BASE_URL}/children_radius.jpg`} alt="children" height="350" width="350" className='rounded-full' />
                    </div>

                </div>
            </section>

            <section className="bg-content p-4">
                <div className='lg:flex py-16 justify-between max-w-screen mx-auto'>

                    <div className='flex flex-col items-center mb-10 lg:mb-0'>

                        <Image src={`${process.env.BASE_URL}/paysagiste.jpg`} alt="paysagiste" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Architecte paysagiste</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center mb-10 lg:mb-0'>

                        <Image src={`${process.env.BASE_URL}/concept.jpg`} alt="concept" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Concept de jeux</p>
                        
                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center mb-10 lg:mb-0'>

                        <Image src={`${process.env.BASE_URL}/fabrication.jpg`} alt="fabrication" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Fabrication</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                    <div className='flex flex-col items-center mb-10 lg:mb-0'>

                        <Image src={`${process.env.BASE_URL}/installation.jpg`} alt="installation" height="350" width="150" className='rounded-full' />

                        <p className='text-white font-medium text-2xl py-6'>Installation</p>

                        <Button variant="contained" color="primary" className="py-6">
                            <span className="leading-1px">En savoir plus</span>
                        </Button>

                    </div>

                </div>
            </section>

            <section className='p-4'>
                <div className='lg:flex py-16 justify-between max-w-screen mx-auto font-light'>

                    <div>
                        <p className='max-w-[550px] leading-7'>Chez Groupe ICI JEUX, nous sommes une équipe passionnée et expérimentée dans la conception, la fabrication et l'installation d'équipements de jeux extérieurs. Nous sommes fiers de fournir des produits et des services de qualité supérieure à nos clients dans les secteurs municipaux, scolaires et de la petite enfance.</p>

                        <h1 className='my-6 font-bold text-xl'>Production locale</h1>

                        <p className='max-w-[540px] leading-7'>Nous croyons que le jeu est un élément essentiel dans le développement des enfants, c'est pourquoi nous travaillons sans relâche pour créer des environnements de jeu stimulants, créatifs et inclusifs. Nous concevons des aires de jeu et des modules en bois faits à Montréal, en utilisant des matériaux naturels, durables et écologiques pour offrir aux enfants un lieu sûr et agréable pour jouer.</p>

                    </div>

                    <div>

                        <h1 className='lg:mb-6 my-6 lg:my-0 font-bold text-xl'>Une équipe d’experts</h1>

                        <p className='max-w-[550px] leading-7'>Notre équipe multidisciplinaire, composée d'architectes paysagistes, de concepteurs, de fabricants et d'installateurs, travaille en étroite collaboration avec nos clients pour concevoir des aires de jeu uniques et adaptées à leurs besoins. Nous offrons également des solutions de plan et devis pour les appels d'offres et la préparation de projets.</p> 

                        <div className="flex lg:justify-start justify-center gap-4 mt-[140px]">

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
