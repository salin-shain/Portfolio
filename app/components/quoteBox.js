import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function QuoteBox() {
    return (
        <div id="quote" className="w-5/6 mx-auto flex py-16 justify-center">
            <div className="w-full md:w-2/3 flex content-center flex-col relative">
                <div className="absolute -top-2 left-5"><ImQuotesLeft/></div>
                <p className="p-4 border border-grey">Dream, Dream, Dream. Dream transform into thoughts and thoughts result in action.</p>
                <div className="self-end relative">
                    <div className="absolute -top-2 left-[45%]"><ImQuotesRight/></div>
                    <p className="px-4 py-2 border border-t-0 border-grey">- APJ Abdul Kalam</p>
                </div>
            </div>
        </div>
    );
}