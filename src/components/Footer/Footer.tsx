import { FacebookIcon } from "../ui/icons/FacebookIcon/FacebookIcon"
import { Button } from "../ui/buttons/Button"

export default function Footer() {
    return (
        <footer className="bg-footer py-40 flex justify-center items-center gap-20">
            <FacebookIcon className=" text-purple-700 w-10 h-10" />
            <Button variant="outlined" color="primary" className="">
                <span className=" leading-1px">Devis</span>
                <FacebookIcon className="w-4 h-4" />
            </Button>
        </footer>
    )
}