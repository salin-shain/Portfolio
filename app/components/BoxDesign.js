export default function BoxDesign({ len, bre, right, top, left, bottom, animation, className }) {

    return (
        <div className={`items-center absolute border ${left===0?'border-l-0':'border-r-0'} ${className} border-grey ${animation}`} 
            style={{width: `${len}px`, height: `${bre}px`, right: `${right}px`, top: `${top}px`, left:`${left}px`, bottom: `${bottom}px`}}
        >
        </div>
    );
}