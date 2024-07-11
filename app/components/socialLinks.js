import Link from "next/link";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";


export default function SocialLinks() {
    return (
        <div className="fixed top-0 w-8 flex flex-col items-center gap-3 pull-down">
            <div className="w-[1px] h-24 border border-dotgrey"></div>
            <Link href="https://github.com/salin-shain" target="_blank"><AiFillGithub /></Link>
            <Link href="https://www.linkedin.com/in/salin-shain-0153a1255/" target="_blank"><AiFillLinkedin /></Link>
            <Link href="https://x.com/salin_shain" target="_blank"><AiFillTwitterCircle/></Link>
        </div>
    );
}


