import Image from "next/image"
import Link from 'next/link'


export default function About() {
    return (
        <main>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <section className="max-w-screen mx-auto">
                <div>

                    <h1 className='text-4xl font-medium mt-10'>Notre équipe</h1>

                    <h2 className='text-title text-5xl py-10 max-w-[700px] font-bold leading-[50px]'>Notre créativité au service de votre projet</h2>

                    <p className="font-light leading-7 my-8">Notre équipe multidisciplinaire, passionnée de nature et de jeux, est composée d'experts en conception et aménagement de parcs et aires de jeux. 

                        <br /> Nous mettons notre savoir-faire et notre créativité au service de votre projet pour créer des espaces extérieurs innovants, inclusifs et sécuritaires, tout 

                        <br /> en respectant vos besoins et votre budget. Découvrez là !

                    </p>    

                </div>

                <div>

                    <div className="flex justify-end gap-4 my-6">

                        <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                        <div className="rounded-full w-12 h-12 bg-red-400"></div>

                        <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                        <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                    </div>

                    <div className=" flex flex-col justify-center items-center py-6">

                        <Image src={`${process.env.BASE_URL}/avatar.png`} alt="avatar" height="500" width="1050" className="" />

                        <h2 className='text-xl font-medium px-6'>Concepteurs  •  Architectes  •  Vente  •  Chargés de projets  •  Installateurs  •  Dessinateur 3D  •  Et plus…</h2>

                    </div>

                </div>
            </section>

            <section className="bg-content">
                <div className="max-w-screen mx-auto py-12 flex justify-around">

                    <h2 className="font-medium text-5xl text-white max-w-[500px]">Faire partie de l’équipe ?</h2>

                    <p className="font-light text-white max-w-[500px]">Groupe ICI JEUX recrute en permanence de nouveaux talents. Envoyez votre CV de manière sponanée à tout moment à <br />
                        <Link rel="" href="" className="underline text-primary font-bold">info@groupeicijeux.com</Link> 
                    </p>

                </div>
            </section>      
            
        </main>
    )
}
