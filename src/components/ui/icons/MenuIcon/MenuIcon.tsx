import { Icon } from "../Icon";

export type MenuIconProps = {
    className?: string;
    fill?: string;
}


export const MenuIcon: React.FC<MenuIconProps> = ({ className = "w-6 h-6", fill = "currentColor" }) => {
    return (
        <Icon className={className}>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" fill={fill} />
        </Icon>
    )
}
