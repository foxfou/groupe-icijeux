import Image from "next/image"


export default function About() {
    return (
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>
            <section className="max-w-screen mx-auto p-4">
                <div className='lg:flex lg:justify-between my-10'>

                    <div className="">

                        <h1 className='lg:text-4xl text-3xl font-medium text-secondaryText'>Inspection</h1>

                        <h2 className='text-title lg:text-5xl text-3xl my-8 my-4 lg:max-w-[1100px] font-bold lg:leading-[60px] leading-[40px]'>Nous sommes engagés à garantir que toutes les aires de jeux que nous installons.</h2>

                    </div>

                </div>

            </section>

            <section className="">
                <div className="flex items-center justify-center">
                    <img src={`${process.env.BASE_URL}/tablet.jpg`} alt="tablet" className="object-cover object-[0_60%] w-full h-[280px]" />
                </div>
            </section>

            <section className="max-w-screen mx-auto p-4">

                <div className="font-light lg:flex justify-between lg:py-[90px] py-10 text-secondaryText">

                    <div className="">

                        <p className='lg:max-w-[550px] leading-7 pb-4'>La sécurité des enfants lorsqu'ils jouent dans des aires de jeux est une priorité absolue. C'est pourquoi Groupe Ici Jeux est engagé à garantir que toutes les aires de jeux que nous installons sont régulièrement inspectées et certifiées pour s'assurer qu'elles répondent aux normes de sécurité les plus strictes. Pour atteindre cet objectif, nous avons formé une équipe de professionnels hautement qualifiés et expérimentés, composée d'inspecteurs certifiés par l'Association Internationale de Sécurité des Aire de Jeux (IQSAJ).</p>

                        <p className='lg:max-w-[550px] leading-7 pb-4'>Nos inspecteurs sont formés pour effectuer des vérifications minutieuses sur chaque module de jeu afin de détecter tout</p>

                    </div>

                    <div className="">

                        <p className='lg:max-w-[550px] leading-7 pb-4'>problème de sécurité potentiel. Ils examinent attentivement chaque composant des aires de jeux, y compris les fixations, les éléments de jeu, les surfaces amortissantes et tout autre élément de l'aire de jeu, pour s'assurer qu'ils sont tous en bon état et qu'ils sont installés conformément aux normes de sécurité applicables.</p>

                        <p className='lg:max-w-[550px] leading-7'>En procédant régulièrement à l'inspection et à la certification de vos aires de jeux, nous sommes en mesure de détecter rapidement tout problème potentiel avant qu'il ne devienne un danger pour les enfants. Cela vous permet de vous assurer que vos aires de jeux sont sûres, fiables et durables pour que les enfants puissent jouer en toute sécurité.</p>

                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-10 mt-16 lg:mb-0 mb-[50px]">

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
