import Image from "next/image"
import Link from "next/link"



export default function FormLink() {
    return (
        <>
            <section className="bg-secondary">
                <div className="lg:p-0 p-4">
                    <div className="lg:h-screen lg:flex lg:max-h-[210px] lg:items-center mx-auto lg:justify-evenly">
                        
                        <div className="flex justify-center">
                            <Link rel="" href="">
                                <Image src={`${process.env.BASE_URL}/question.png`} alt="question" height="210" width="210"/> 
                            </Link>
                        </div>

                        <p className="lg:text-4xl text-2xl lg:max-w-[830px] max-w[310px] text-secondaryText font-bold text-center lg:leading-[45px]">Pour toutes questions sur nos produits et services, nos experts vous guideront vers les meilleures solutions.</p>  
                    
                    </div>
                </div>
            </section>

            <section className="bg-primary">
                <div className="h-16"></div>
            </section>
        </>
    )
}
