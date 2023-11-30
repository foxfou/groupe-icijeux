import HeaderMain from "@/components/Header/HeaderMain"
export default function Home() {
    return (
        <>
            <HeaderMain />
            <main className="h-screen">
                <section className="bg-cover bg-center bg-main-cover">

                    <div className="container mx-auto pt-[400px] pb-20">
                        <h1 className="text-5xl font-bold max-w-[700px] text-white mb-10">Des aires de jeux conçues pour émerveiller et inspirer.</h1>
                        <div className="flex justify-start items-center gap-4">
                            <div className="rounded-full w-12 h-12 bg-yellow-400"></div>
                            <div className="rounded-full w-12 h-12 bg-red-400"></div>
                            <div className="rounded-full w-12 h-12 bg-orange-400"></div>
                            <div className="rounded-full w-12 h-12 bg-blue-400"></div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}
