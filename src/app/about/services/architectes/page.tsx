export default function FormLink() {
    return (
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>
            <section className="max-w-screen mx-auto p-4">
                <div className='lg:flex lg:justify-between my-10'>

                    <div className="">

                        <h1 className='lg:text-4xl text-3xl font-medium text-secondaryText'>Architecture de paysage</h1>

                        <h2 className='text-title lg:text-5xl text-3xl my-8 my-4 lg:max-w-[750px] font-bold lg:leading-[60px] leading-[40px]'>Notre objectif est de vous offrir une solution sur mesure</h2>

                    </div>

                </div>
            </section>

            <section className="">
                <div className="flex items-center justify-center">
                    <img src={`${process.env.BASE_URL}/paysage.jpg`} alt="paysage" className="object-cover object-[0_50%] w-full h-[280px]" />
                </div>
            </section>

            <section className="max-w-screen mx-auto p-4">
                <div className="font-light lg:flex justify-between lg:py-[50px] py-10 text-secondaryText">
                    
                    <div className="">

                        <p className='lg:max-w-[550px] leading-7'>Chez Groupe Ici Jeux, notre équipe d'architectes paysagistes peut vous offrir un accompagnement personnalisé dans la préparation de vos appels d'offres. Nous proposons un service de planification et de conception de projets clés en main, qui vous permettra de présenter des plans détaillés et des devis précis à votre conseil. </p>

                        <div className="flex items-center justify-center lg:justify-start gap-4 lg:mt-[100px] mt-[80px] lg:mb-0 mb-[80px]">

                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>

                    </div>

                    <div className="">
                        <p className='lg:max-w-[550px] leading-7'>Nous mettons notre expertise à votre disposition pour vous aider à concevoir des aires de jeux attrayantes et sécuritaires, en fonction de vos besoins spécifiques, de l'espace disponible et de votre budget. Notre objectif est de vous offrir une solution sur mesure, qui répondra aux attentes de votre clientèle tout en respectant les normes en vigueur en matière de sécurité et de qualité.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
