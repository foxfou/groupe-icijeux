import HeaderMain from "@/components/Header/HeaderMain"
import { MainCover } from "@/components/images/MainCover"

export default function Home() {
    return (
        <>
            <HeaderMain />
            <main className="">
                <section className="bg-cover bg-center min-h-[90vh] flex flex-col bg-main-cover">
                    {/* <MainCover className="absolute top-0 left-0 -z-10 w-full" /> */}
                    <div className="container flex-grow flex flex-col justify-center mx-auto">
                        <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                        <div className="flex justify-start items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>
                            <div className="rounded-full w-12 h-12 bg-red-400"></div>
                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>
                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>
                        </div>
                    </div>

                </section>

                <section className="h-[2000px] bg-black">
                    <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                    <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                    <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                    <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                </section>
            </main>
        </>
    )
}
