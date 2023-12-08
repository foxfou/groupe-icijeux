import Image from "next/image"
import Link from 'next/link'


export default function About() {
    return (
        <main>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <section className="max-w-screen mx-auto p-4">
                <div>

                    <h1 className='lg:text-4xl text-2xl font-medium mt-10'>Notre équipe</h1>

                    <h2 className='text-title lg:text-5xl text-3xl py-10 lg:max-w-[700px] font-bold lg:leading-[50px] leading-[40px]'>Notre créativité au service de votre projet</h2>

                    <p className="font-light leading-7 lg:my-8">Notre équipe multidisciplinaire, passionnée de nature et de jeux, est composée d'experts en conception et aménagement de parcs et aires de jeux. Nous mettons notre savoir-faire et notre créativité au service de votre projet pour créer des espaces extérieurs innovants, inclusifs et sécuritaires, tout en respectant vos besoins et votre budget. Découvrez là !</p>    

                </div>

                <div>

                    <div className="flex lg:justify-end justify-center gap-4 lg:my-6 my-12">

                        <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                        <div className="rounded-full w-12 h-12 bg-red-400"></div>

                        <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                        <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                    </div>

                    <div className=" flex flex-col justify-center items-center lg:py-6 pt-10">

                        <Image src={`${process.env.BASE_URL}/avatar.png`} alt="avatar" height="500" width="1050" className="" />

                        <h2 className='lg:text-xl font-medium px-6 pt-8'>Concepteurs  •  Architectes  •  Vente  •  Chargés de projets  •  Installateurs  •  Dessinateur 3D  •  Et plus…</h2>

                    </div>

                </div>
            </section>

            <section className="bg-content p-4">
                <div className="max-w-screen mx-auto py-12 lg:flex justify-around">

                    <h2 className="font-medium lg:text-5xl text-3xl text-white lg:max-w-[500px] lg:pb-0 pb-10">Faire partie de l’équipe ?</h2>

                    <p className="font-light text-white lg:max-w-[500px]">Groupe ICI JEUX recrute en permanence de nouveaux talents. Envoyez votre CV de manière sponanée à tout moment à <br />
                        <Link rel="" href="" className="underline text-primary font-bold">info@groupeicijeux.com</Link> 
                    </p>

                </div>
            </section>      
            
        </main>
    )
}
