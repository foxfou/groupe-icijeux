import HeaderForm from "@/components/Header/HeaderForm"
import { Button } from "@/components/ui/buttons/Button"


export default function Form() {
    return (
        <>
            <HeaderForm />
                <main className="bg-primary">
                    <div className=" max-w-screen mx-auto py-[100px] flex">

                        <div className="w-[500px]">

                            <h1 className="text-5xl mb-8 font-semibold">Demande de devis</h1>

                            <div className="my-4 font-light">

                                <p>info@groupeicijeux.com</p>

                                <p>(514) 643-3505</p>

                            </div>
                            
                            <div className="font-light">

                                <p>8071 boul. Henri-Bourassa est, </p>

                                <p>Montréal (Québec) Canada, H1E 2Z3</p>

                            </div>

                        </div>

                        <form className="flex-col font-light grow">
                            <div className="">

                                <label>Organisation</label>

                                <input type="text" id="organisation" placeholder="" className="w-full p-2.5 border border-[#A9A9A8] mt-2 hover:bg-secondary transition duration-200 ease-in-out" />

                            </div>


                            <p className="py-2">Nom</p>

                            <div className="flex flex-col flex-grow font-light">

                                <label>Pays</label>

                                <select id="countries" name="countries" className="w-full p-2.5 border border-[#A9A9A8] mt-3 hover:bg-secondary transition duration-200 ease-in-out">

                                <option value="usa" id="" placeholder="" className="">USA</option>

                                </select>

                            </div>

                            <div>

                                <p className="py-2">Message</p>

                                <textarea name="" id="" className="w-full p-2.5 border border-[#A9A9A8] mt-3 hover:bg-secondary transition duration-200 ease-in-out "></textarea>

                            </div>

                            <p className="py-2">Quels services et produits vous intéressent :</p>

                            <div className="flex items-center">     

                                <input type="radio" id="choice1" name="choice" className="form-radio h-4 w-4 text-black" />

                                <label className="ml-2">Inspection / plan / estimation</label>

                            </div>

                            <Button variant="contained" color="black" className="py-6 mt-8">
                                <span className="leading-1px">Envoyer</span>
                            </Button>

                        </form>

                    </div>
                </main>
        </>
    )
}
