import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="px-8 md:px-16 pb-1 border-t ">
            <div className="flex justify-between items-center py-6">
                <div>
                    <p className="font-bold">Roshith Krishna</p>
                </div>
                <div>
                    <div className="grid grid-cols-4 gap-2">
                        <a href="https://github.com/salin-shain" target="_blank"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/salin-shain-0153a1255/" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://x.com/salin_shain" target="_blank"><AiFillTwitterCircle/></a>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[9px] md:text-[12px] text-center text-grey">&copy;Copyright 2024. Made by Salin Shain</p>
            </div>
        </div>
    );
}