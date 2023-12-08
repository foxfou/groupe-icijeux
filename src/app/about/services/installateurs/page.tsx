import Image from "next/image"


export default function About() {
    return (
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>
            <section className="max-w-screen mx-auto p-4">
                <div className='lg:flex lg:justify-between my-10'>

                    <div className="">

                        <h1 className='lg:text-4xl text-2xl font-medium text-secondaryText'>Installateurs</h1>

                        <h2 className='text-title lg:text-5xl text-3xl my-8 my-4 lg:max-w-[1000px] font-bold lg:leading-[60px] leading-[40px]'>Notre équipe de professionnels peut gérer intégralement le projet pour vous.</h2>

                    </div>

                </div>

            </section>

            <section className="">
                <div className="flex items-center justify-center">
                    <img src={`${process.env.BASE_URL}/playground_2.jpg`} alt="ground" className="object-cover object-[0_50%] w-full h-[280px]" />
                </div>
            </section>

            <section className="max-w-screen mx-auto p-4">
                <div className="font-light lg:flex justify-between lg:py-[90px] py-10 text-secondaryText">
                    <div className="">
                        <p className='lg:max-w-[550px] leading-7 pb-4'>Si vous cherchez à construire une nouvelle aire de jeux, notre équipe de professionnels peut gérer intégralement le projet pour vous. Nous avons l'expérience et les compétences nécessaires pour assurer une installation de qualité, rapide et durable.</p>
                        <p className='lg:max-w-[550px] leading-7 pb-4'>Tous les membres de notre équipe d'installation sont hautement qualifiés et formés selon la norme CAN/CSA Z614 en vigueur par l'Association Internationale de Sécurité des Aire de Jeux (IQSAJ). Ils connaissent les dernières normes de sécurité applicables aux aires de jeux et sont équipés pour installer votre nouvelle aire de jeux avec précision et soin, en respectant les règles de sécurité.</p>
                    </div>

                    <div className="">
                        <p className='lg:max-w-[550px] leading-7 pb-4'>Nous coordonnons également les sous-traitants et les fournisseurs pour que vous n'ayez pas à vous inquiéter de la gestion de projet. Nous veillons à ce que tous les aspects de la construction soient gérés de manière efficace et en temps voulu pour que vous puissiez profiter rapidement de votre nouvelle aire de jeux.</p>
                        <p className='lg:max-w-[550px] leading-7'>Au Québec, nous sommes en mesure d'installer des aires de jeux et des parcs de mai à octobre, en fonction des conditions météorologiques. Nous sommes prêts à travailler avec vous pour réaliser votre projet d'aire de jeux et créer un espace sûr et amusant pour vos enfants.</p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-[100px] mt-[100px] lg:mb-0 mb-[50px]">

                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
