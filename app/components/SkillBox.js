import Image from 'next/image';

export default function SkillBox({name, icon}) {
    return (
        <div className='w-full'>
            <div className='md:w-1/2 p-1 border border-grey flex flex-col items-center'>
                <div className='w-12 h-12 relative'>
                    <Image 
                        src={icon} 
                        alt={`${name} icon`}
                        fill
                        style={{objectFit: 'contain'}}
                    />
                </div>
                <p className='text-center text-[10px] md:text-xs py-1'>{name}</p>
            </div>
        </div>
    );
}