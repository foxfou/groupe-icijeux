
interface MainCoverProps {
    className?: string;
}

export const MainCover: React.FC<MainCoverProps> = (props) => {
    return (
        <img src="/groupe-icijeux/main-cover.jpg" alt="main-cover" className={props.className} />
    )
}