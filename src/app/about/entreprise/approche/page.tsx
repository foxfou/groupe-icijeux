import Image from "next/image"

export default function About() {
    return (
        <main>

            <div className='h-[1px] bg-black my-2 opacity-50'></div>

            <section className="max-w-screen mx-auto">

                <h1 className='text-4xl font-medium mt-10'>Notre approche</h1>

                <h2 className='text-title text-4xl my-8 max-w-[950px] font-bold leading-[50px]'>Chez Groupe ICIJEUX, nos valeurs fondamentales sont la créativité, l'innovation, la nature et le jeu.</h2>

            </section>

            <section>
                    <div className="flex items-center justify-center py-8">
                        <img src={`${process.env.BASE_URL}/childrenswing.jpg`} alt="" className="object-cover object-center w-full h-[200px]" />
                    </div>
            </section>

            <section className="max-w-screen mx-auto">
                <div className="flex py-8 font-light justify-between">

                    <div className="flex-col leading-7">

                        <p className="max-w-[540px]">Nous sommes passionnés par la création de jeux et 

                            <strong className="font-bold"> équipements de qualité</strong> pour les enfants, en utilisant des matériaux naturels durables qui ont une empreinte écologique faible. Nous sommes convaincus que les aires de jeux extérieures sont un lieu de 

                            <strong className="font-bold"> jeu libre</strong>, de 

                            <strong className="font-bold"> développement</strong>, de 

                            <strong className="font-bold"> bien-être</strong> et de 

                            <strong className="font-bold"> socialisation</strong> pour les enfants de tous âges et de tous horizons.
                            
                        </p>

                        <p className="max-w-[530px] my-6">La 

                            <strong className="font-bold"> créativité</strong> est au coeur de notre approche, nous encourageons nos designers et nos concepteurs à repousser les limites de <br />  l'

                            <strong className="font-bold"> imaginaire</strong> pour créer des espaces de 

                            <strong className="font-bold"> jeux innovants</strong> et 

                            <strong className="font-bold"> originaux</strong> qui stimulent l'imagination et la curiosité des enfants.

                        </p>

                        <p className="max-w-[540px]">L'

                            <strong className="font-bold"> innovation</strong> est également essentielle pour nous. Nous sommes en constante recherche de nouvelles 

                            <strong className="font-bold"> technologies</strong>, de nouveaux matériaux, de nouvelles 

                            <strong className="font-bold"> tendances</strong> et de nouvelles pratiques pour améliorer continuellement nos produits et offrir à nos clients les

                        </p>

                    </div>

                    <div>

                        <p>solutions les plus avancées et les plus performantes.</p>

                        <p className="max-w-[550px] my-4">Nous croyons également que la 

                            <strong className="font-bold"> nature</strong> a un rôle important dans la vie des enfants. En utilisant des matériaux naturels tels que le 

                            <strong className="font-bold"> bois</strong>, nous offrons aux enfants la possibilité de se connecter avec la nature, de 

                            <strong className="font-bold"> découvrir</strong> et de 

                            <strong className="font-bold"> ressentir ses textures</strong>, ses 

                            <strong className="font-bold"> formes</strong> et ses 

                            <strong className="font-bold"> couleurs</strong>.

                        </p>

                        <h1 className="my-8 text-xl font-medium">Le jeu est notre raison d'être. </h1>

                        <p className="max-w-[550px] mt-4">Nous voulons offrir des équipements de qualité qui favorisent le jeu libre, le développement des habiletés, la socialisation et le plaisir de passer du temps à l'extérieur. Nous sommes fiers de contribuer au bien-être des enfants et de leur offrir des souvenirs mémorables.</p>

                    </div>

                </div>

            </section>

            <section className="max-w-screen mx-auto">
                <div className="flex justify-center py-6">
                    <Image src={`${process.env.BASE_URL}/innovants.png`} alt="innovants-sum" height="500" width="1200" className="" />
                </div>
            </section>
            
        </main>
    )
}
