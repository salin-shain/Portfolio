import Image from "next/image";
import heroImage from '@/public/Hero_Image.png'
import Button from "./Button";
import { VscArrowDown } from "react-icons/vsc";
import DotsDesign from "./dotsDesign";
import BoxDesign from "./BoxDesign";
import QuoteBox from "./quoteBox";

export default function Hero({id}) {
    return (
        <div id={id} className="w-full relative top-14">
            <div className="hidden md:block">
                <DotsDesign row={4} col={8} left={0} top={400}/>
            </div>
            <div className="w-5/6 pt-24 mx-auto flex flex-wrap md:flex-nowrap">
                {/*Text Section*/}
                <div className="w-full md:w-2/3 md:pt-10 md:flex-shrink">
                    <p className="text-5xl font-semibold">
                        Hi, there<br/>
                        <span className="text-purple">Salin Shain</span> here!
                    </p>
                    <p className="text-grey my-12">
                        I’m currently into frontend-dev, designing,<br className="hidden md:block"/> transformers
                    </p>
                    <Button name="Scroll Down" icon={<VscArrowDown />} link='quote' external={false}/>
                </div>
                {/*Image Section*/}
                <div className="pt-5 md:w-1/3 md:pt-0 scale-image">
                    <Image src={heroImage} alt='heroine image' loading="lazy"/>
                    <div className="border border-grey px-2 py-0.5 relative text-center">
                        <div className="inline-block w-3 h-3 absolute left-2 top-2 bg-purple"></div>
                        <span className="px-2 text-grey">Hey!!! That&apos;s Me👆</span>
                    </div>
                </div>
            </div>
            <QuoteBox /> 
            <BoxDesign len={30} bre={60} right={0} top={200} animation='box-left-entry'/>
        </div>
    );
}