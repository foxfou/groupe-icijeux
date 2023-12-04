import Image from "next/image"
import Link from "next/link"



export default function FormLink() {
    return (
        <div>

            <div className="h-screen flex bg-secondary max-h-[210px] items-center mx-auto justify-evenly">

                <Link rel="" href="">
                    <Image src={`${process.env.BASE_URL}/question.png`} alt="question" height="210" width="210"/> 
                </Link>

                <p className="text-4xl max-w-[830px] text-secondaryText font-bold text-center leading-[45px]">Pour toutes questions sur nos produits et services, nos experts vous guideront vers les meilleures solutions.</p>

            </div> 
                <div className=" bg-primary h-16">
            </div>
            
        </div>
    )
}
