import Image from "next/image"


export default function About() {
    return (
        <>  
            <div className='h-[1px] bg-black my-2 opacity-50'></div>
            <section className="max-w-screen mx-auto p-4">
                <div className='lg:flex lg:justify-between my-10'>

                    <div className="">

                        <h1 className='lg:text-4xl text-3xl font-medium text-secondaryText'>Concepteurs</h1>

                        <h2 className='text-title lg:text-5xl text-3xl my-8 my-4 lg:max-w-[850px] font-bold lg:leading-[60px] leading-[40px]'>Concevoir et fabriquer une grande variété de modules de jeux</h2>

                    </div>

                </div>
            </section>

            <section className="">
                <div className="flex items-center justify-center">
                    <img src={`${process.env.BASE_URL}/dreamstime.jpg`} alt="dreams" className="object-cover object-[0_37%] w-full lg:h-[280px] h-[250px]" />
                </div>
            </section>

            <section className="bg-primary py-8">
                <div className="lg:flex max-w-screen mx-auto font-light justify-between leading-[30px] p-4">

                    <div className="flex-col">

                        <p className="lg:max-w-[550px] ">Chez Groupe Ici Jeux, nous sommes fiers de concevoir et de fabriquer une grande variété de modules de jeux en bois de qualité supérieure dans notre usine à Montréal. Nous croyons que le bois est un matériau de choix pour la fabrication d'équipements de jeu pour enfants, car il est durable, résistant et écologique.</p>

                        <p className="lg:max-w-[550px] my-4">Notre équipe de conception travaille en étroite collaboration avec nos clients pour créer des modules de jeux personnalisés qui répondent à leurs besoins spécifiques. Nous offrons une grande variété de modules de jeux en bois, des plus classiques aux plus modernes, et nous sommes en mesure de créer des designs originaux pour des projets sur mesure.</p>

                        <p className="lg:max-w-[550px] ">Nos modules de jeux en bois sont fabriqués dans notre usine à Montréal, où nous avons mis en place des méthodes de production efficaces et respectueuses de l'environnement. Nous sommes fiers de notre engagement en faveur de la durabilité et de l'utilisation de matériaux recyclables dans la fabrication de nos modules de jeux.</p>

                    </div>

                    <div className="flex-col">

                        <p className="lg:max-w-[550px] lg:mt-0 mt-4">Nous croyons que la qualité de nos modules de jeux en bois est essentielle pour garantir la sécurité et la satisfaction de nos clients. C'est pourquoi nous effectuons des tests rigoureux sur tous nos produits pour nous assurer qu'ils répondent aux normes de sécurité les plus élevées.</p>

                        <p className="lg:max-w-[550px] mt-4">En somme, notre usine à Montréal nous permet de concevoir et de fabriquer des modules de jeux en bois sur mesure pour nos clients tout en garantissant la qualité, la sécurité et la durabilité de nos produits.</p>

                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-[170px] mt-[100px] lg:mb-0 mb-[50px]">

                            <div className="rounded-full w-12 h-12 bg-white"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="max-w-screen mx-auto p-4">

                <h1 className="lg:text-4xl text-2xl text-secondaryText font-semibold">Concepteurs : aménagement</h1>

                <div className="lg:flex justify-between lg:my-10 my-2 leading-[30px]">

                    <div className="flex-col font-light text-secondaryText">

                        <p className="lg:max-w-[600px] mb-4">Chez Groupe Ici Jeux (GIJ), nous croyons que les parcs publics devraient être des espaces verts accueillants pour les communautés locales. C'est pourquoi notre équipe d'architectes paysagistes expérimentés travaille avec vous pour concevoir des parcs qui conviennent à votre environnement local.</p>

                        <p className="lg:max-w-[600px] mb-4">Nous considérons l'aménagement paysager comme une partie importante de l'aménagement des parcs publics. Nous veillons à ce que les aires de jeux soient intégrées harmonieusement dans l'environnement et que les aménagements paysagers soient conçus de manière à améliorer l'expérience de la nature des utilisateurs du parc.</p>

                        <p className="lg:max-w-[600px] mb-4">Nos architectes paysagistes prennent en compte les éléments naturels tels que les arbres, l'eau et la topographie pour créer un environnement de jeu naturel et attrayant. Nous prenons également en compte les espaces publics tels que les sentiers, les aires de repos et les espaces de pique-nique pour que les parcs.</p>

                        <p className="lg:max-w-[600px] ">Notre objectif est de concevoir des parcs qui offrent une expérience de jeu et de détente agréable tout en respectant l'environnement local. Nous sommes engagés à travailler avec vous pour créer un parc public qui convient parfaitement à votre communauté et qui améliore la qualité de vie pour les enfants et les adultes.</p>

                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-[110px] mt-[70px] lg:mb-0 mb-[70px]">

                            <div className="rounded-full w-12 h-12 bg-yellow-200"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>

                    </div>

                    <div className="flex items-center flex-col">

                        <Image src={`${process.env.BASE_URL}/main-full.jpg`} alt="main" height="280" width="540" className="lg:max-h-[290px] lg:mb-12 mb-4"  />

                        <Image src={`${process.env.BASE_URL}/playground.jpg`} alt="playgr" height="280" width="540" className="lg:max-h-[290px]" />

                    </div>
                        
                </div>

            </section>
        </>
    )
}
