export default function SectionHeader({header}) {
    return (
        <div className="flex items-center">
            <p className="text-3xl pr-2 font-bold"><span className="font-normal text-purple text-3xl">#</span>{header}</p>
            <div className="w-2/5 h-[1px] bg-purple"></div>
        </div>
    );
}