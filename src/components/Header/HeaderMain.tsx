import Link from "next/link"
import { Button } from "../ui/buttons/Button"

export default function HeaderMain() {
    return (
        <header className="bg-transperent absolute top-0 left-0 w-full">
            <div className="flex gap-[200px] justify-center items-center h-[150px] text-white">

                <div className="">logo</div>

                <div className="flex gap-3">

                    <Link href="">about</Link>

                    <Link href="">contacts</Link>

                    <Link href="">video</Link>

                    <Link href="">people</Link>

                </div>

                <div className="flex gap-3">

                    <Button variant="outlined" color="white">log in</Button>

                    <button>sign up</button>

                </div>

            </div>
        </header>
    )
}