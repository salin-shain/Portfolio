import SectionHeader from "./SectionHeader";

export default function Section({id, header, component}) {
    return (
        <div id={id} className="w-5/6 mx-auto pt-6">
           <SectionHeader header={header}/>
           {component} 
        </div>
    );
}