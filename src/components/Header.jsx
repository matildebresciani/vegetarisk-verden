import Link from "next/link";

const Header = () => {
    return ( <header className="flex justify-between items-center">
        <div className="flex flex-col">
            <span className="italic">SMAGEN AF EN</span>
            <span className="font-just-another-hand text-4xl">VEGETARISK VERDEN</span>
        </div>
        <div>
            <Link href="/opskrifter">OPSKRIFTER</Link>
        </div>
    </header> );
}
 
export default Header;