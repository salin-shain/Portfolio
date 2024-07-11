import SkillBox from "./SkillBox";
import skillList from "@/utils/skillList";

export default function Skills() {
    return (
        <div className='items-center py-3 md:py-4'>
            <div className="pb-7">
                <p className="text-xl font-bold">Skills<span className="text-purple">:</span></p>
            </div>
            <div className="px-4 grid grid-cols-3 md:grid-cols-4 gap-9">
                {skillList.map((item, index)=>(
                    <SkillBox key={index} icon={item.icon} name={item.name}/>
                ))}
            </div>
        </div>
    );
}