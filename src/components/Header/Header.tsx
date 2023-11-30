import Link from "next/link"
import { Button } from "../ui/buttons/Button"

export default function Header() {
    return (
        <header className="bg-transperent w-full bg-slate-300">
            <div className="flex gap-[200px] justify-center items-center h-[150px]">

                <div className="">logo</div>

                <div className="flex gap-3">

                    <Link href="">about</Link>

                    <Link href="">contacts</Link>

                    <Link href="">video</Link>

                    <Link href="">people</Link>

                </div>

                <div className="flex gap-3">

                    <Button variant="outlined" color="black">log in</Button>

                    <button>sign up</button>

                </div>

            </div>
        </header>
    )
}