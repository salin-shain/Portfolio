import DotsDesign from "./dotsDesign";
import contacts from "@/utils/contactDetails";

export default function ContactMe({ id }) {
    return (
        <div id={id}>
            <div className="w-full py-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:pr-4">
                    <p className="text-sm md:pr-72 mb-6">
                    Feel free to reach out if you have any questions or would like to connect.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="relative">
                        <div className="w-full p-4 border border-purple">
                            <p>Contact Me Here:</p>
                            <ul>
                                {contacts.map((item)=>(
                                    <li className="flex py-2" key={item.text}>
                                        {item.icon}<a className="text-xs px-3" href={item.mail?`mailto:${item.mail}`:item.link}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <DotsDesign row={3} col={3} right={10} bottom={-10} />
                    </div>
                </div>
            </div>
        </div>
    );
}

