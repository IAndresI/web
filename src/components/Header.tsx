import { Button } from "./Button"
import { SvgLogo } from "./svg/SvgLogo"

const links = [
    {
        label: "About us",
        link: "#about-us"
    },{
        label: "Services",
        link: "#serice"
    },{
        label: "Use Cases",
        link: "#use-cases"
    },{
        label: "Pricing",
        link: "#pricing"
    }
]

export const Header = () => {
    return (
        <header className="flex items-center justify-between mt-[60px] mb-[70px]">
            <SvgLogo/>
            <div className="flex items-center gap-10">
            <nav className="flex items-center gap-10">
                {
                    links.map(link => <a className="text-md leading-[28px]" key={link.label} href={link.link}>{link.label}</a>)}
            </nav>
            <Button variant="light">Request a quote</Button>
            </div>
        </header>
    )
}