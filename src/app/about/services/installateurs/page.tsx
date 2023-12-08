import Image from "next/image"


export default function About() {
    return (
        <>
            <div className='h-[1px] bg-black my-2 opacity-50'></div>
            <section className="max-w-screen mx-auto p-4">
                <div className='lg:flex lg:justify-between my-10'>

                    <div className="">

                        <h1 className='lg:text-4xl text-3xl font-medium text-secondaryText'>Installateurs</h1>

                        <h2 className='text-title lg:text-5xl text-3xl my-8 my-4 lg:max-w-[850px] font-bold lg:leading-[60px] leading-[50px]'>Notre équipe de professionnels peut gérer intégralement le projet pour vous.</h2>

                    </div>

                </div>

            </section>

            <section className="">
                <div className="flex items-center justify-center">
                    <img src={`${process.env.BASE_URL}/playground.jpg`} alt="ground" className="object-cover object-center w-full h-[280px]" />
                </div>
            </section>

        </>
    )
}
