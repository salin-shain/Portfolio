import Image from "next/image";
import Button from "./Button";
import { VscArrowBoth, VscGithub } from "react-icons/vsc";

export default function ProjectBox({ name, technologies, image, git, live, description }) {
    return (
        <div className="w-full h-full border border-grey flex flex-col">
            <div className="relative w-full h-48 p-[1px]">
                <Image src={image} alt='Project Image' layout="fill" style={{ objectFit: 'cover' }} />
            </div>
            <div className="w-full p-2 text-xs border-b border-grey">
                <p className="flex flex-wrap text-justify">{technologies.map((item, index) => (<span key={index}>{item}&nbsp;</span>))}</p>
            </div>
            <div className="p-2 flex flex-col flex-grow">
                <p className="text-lg pb-1 font-semibold">{name}</p>
                <p className="text-xs flex-grow">
                    {description}
                </p>
                <div className="flex gap-x-4 pt-2 mt-auto">
                    <Button name='Live' icon={<VscArrowBoth />} external={true} link={live}/>
                    <Button name='Github' icon={<VscGithub />} external={true} link={git}/>
                </div>
            </div>
        </div>
    );
}
