import HeaderMain from "@/components/Header/HeaderMain"
import { MainCover } from "@/components/images/MainCover"
import { Button } from "@/components/ui/buttons/Button"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <HeaderMain />
            <main className="">
                <video src={`${process.env.BASE_URL}/main_video1.mp4`} autoPlay muted loop className="w-full lg:block relative hidden"></video>
                <section className="min-h-[90vh] lg:absolute top-0 left-0 flex flex-col w-full bg-cover bg-center bg-main-cover lg:bg-none">

                    <div className="max-w-screen grow flex flex-col justify-center mx-auto w-full p-4">

                        <h1 className="lg:text-5xl text-3xl font-bold max-w-[350px] lg:max-w-[700px] text-white mb-10 leading-snug mt-40 lg:mt-96">Des aires de jeux conçues pour émerveiller et inspirer.</h1>

                        <div className="flex justify-start items-center gap-4">

                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>

                            <div className="rounded-full w-12 h-12 bg-red-400"></div>

                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>

                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>

                        </div>

                    </div>

                </section>

                <section className="p-4">
                    <div className="lg:max-w-screen flex flex-col lg:flex-row gap-4 lg:py-10 lg:justify-between items-center lg:mx-auto">

                        <Image src={`${process.env.BASE_URL}/main1.jpg`} alt="main1" height="500" width="390" className="object-contained" />

                        <Image src={`${process.env.BASE_URL}/main2.jpg`} alt="main2" height="500" width="390" />

                        <Image src={`${process.env.BASE_URL}/main3.jpg`} alt="main3" height="500" width="390" />

                    </div>
                </section>

                <section className="bg-primary">

                    <div className="flex items-center justify-center">
                        <img src={`${process.env.BASE_URL}/main-full.jpg`} alt="" className="object-cover object-center w-full h-[450px]" />
                    </div>

                    <div className="lg:max-w-screen lg:mx-auto p-4">
                        <div className="flex flex-col lg:items-start lg:flex-row justify-between py-12 items-center flex-wrap">

                            <p className="lg:w-[600px]  font-bold text-4xl leading-10">Osez l'aventure en plein air avec nos jeux créatifs et innovants</p>

                            <p className="lg:max-w-[500px] text-2xl tracking-wide font-light mt-3 lg:m-0">
                                Chez Groupe ICI JEUX, nous sommes passionnés par la création de jeux en plein air qui stimulent l'imagination et la créativité des enfants. Nous sommes fiers d'offrir des solutions innovantes et durables pour les aires de jeux, invitant les enfants à explorer, apprendre et s'amuser en toute sécurité.
                            </p>

                            <div className="lg:self-center">

                                <Button variant="contained" color="black" className="py-6 mt-8 lg:mt-[-100px]">
                                    <span className="leading-1px">Notre savoir faire</span>
                                </Button>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="text-secondaryText p-4">
                    <div className="max-w-screen mx-auto lg:my-20">

                        <div className="flex justify-between py-10 flex-wrap-reverse">

                            <div className="flex flex-col justify-center lg:max-w-[580px]">

                                <h1 className="lg:text-4xl text-2xl lg:leading-[50px] mt-4">Bienvenue dans l’environnement
                                    <strong> Yéti-Cool.</strong> Cette gamme de produit exclusive au Groupe ICI JEUX.
                                </h1>

                                <p className="lg:mt-6 mt-2 tracking-wide leading-7 font-light">
                                    Relevez le défi de gravir la plus haute montagne d'Amérique du Nord dans un parcours naturel ludique et testez vos habiletés motrices en toute sécurité. Soyez prêts pour l'aventure Yeti ! Découvrez une nouvelle expérience de jeu extérieur pour les
                                    <strong className="font-bold"> 4 saisons </strong>
                                    avec notre gamme exclusive Yéti Cool. Conçue pour favoriser le développement des enfants tout en offrant des défis créatifs et sécuritaires dans un environnement naturel.
                                </p>

                                <Button variant="contained" color="black" className="py-6 justify-self-end self-start mt-8">
                                    <span className="leading-1px">En savoir plus</span>
                                </Button>
                            </div>

                            <Image src={`${process.env.BASE_URL}/yeti.jpg`} alt="yeti" height="500" width="550" className="" />

                        </div>

                        <div className="flex justify-between py-10 flex-wrap">

                            <Image src={`${process.env.BASE_URL}/ludiques.jpg`} alt="ludiques" height="500" width="550" />

                            <div className="flex flex-col justify-center lg:max-w-[580px]">

                                <h1 className="lg:text-4xl text-2xl mt-4 lg:leading-[50px]">Des
                                    <strong> Ruisseaux ludiques.</strong> qui s’adaptent à tous les terrains.
                                </h1>

                                <p className="lg:mt-6 mt-2 tracking-wide leading-7 font-light">
                                    Explorer, naviguer, et jouer dans cette expérience de jeu libre explorant la
                                    <strong className="font-bold"> manipulation de l’eau </strong> dans des circuits sinueux intégrés à votre environnement. Allez moussaillon, pompez et découvrez le plaisir d’apprendre les deux pieds dans l’eau !
                                </p>

                                <Button variant="contained" color="black" className="py-6 justify-self-end self-start mt-8">
                                    <span className="leading-1px">En savoir plus</span>
                                </Button>

                            </div>

                        </div>

                    </div>
                </section>

                <section className="bg-primary p-4">

                    <div className="max-w-screen mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center py-8 lg:py-12 text-secondaryText">

                            <div className="lg:mr-10">
                                <h2 className="font-bold text-2xl lg:text-4xl lg:leading-10 leading-1px">Demande de devis</h2>

                                <p className="mt-4 tracking-wide leading-7">Pour toute demande de devis et d’information concernant vos projets, merci de bien vouloir remplir le formulaire ci-dessous, notre équipe d’expert vous répondra le plus rapidement possible.</p>

                                <Button variant="contained" color="black" className="py-6 my-6 lg:mt-8">
                                    <span className="leading-1px">Demande de devis</span>
                                </Button>

                            </div>

                            <Image src={`${process.env.BASE_URL}/children.jpg`} alt="children" height="370" width="540" />

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}
