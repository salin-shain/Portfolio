export default function DotsDesign({ row, col, left, top, right, bottom }) {

    // Create an array of row indices
    const rows = Array.from({ length: row }, (_, index) => index);
    // Create an array of column indices
    const cols = Array.from({ length: col }, (_, index) => index);

    return (
        <div className={`items-center absolute -z-40`} 
            style={{left: `${left}px`, top: `${top}px`, right: `${right}px`, bottom: `${bottom}px`}}
        >
            {rows.map((_, rowIndex) => (
                <div key={rowIndex} className="inline-block">
                    {cols.map((_, colIndex) => (
                        <div 
                            key={colIndex} 
                            className={`w-[4px] h-[4px] bg-dotgrey rounded-full mr-3 mb-3`}
                        ></div>
                    ))}
                    <br/>
                </div>
            ))}
        </div>
    );
}