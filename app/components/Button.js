'use client'

import { handleScroll } from "@/utils/handleScroll";
import Link from "next/link";

const Button = ({name, icon, link, external}) => {
  if(external){
    return (
      <Link href={link || '#'} onClick={(e) => link === '' && e.preventDefault() } target={name=='Resume'?'_blank':'_self'}>
        <RawButton name={name} icon={icon} link={link} external={external}/>
      </Link>
    );
  }
  return <RawButton name={name} icon={icon} link={link} external={external}/>;
};

const RawButton = ({name, icon, link, external}) => {
  const buttonClassActive = "border border-purple p-2 flex items-center space-x-2 text-sm button"
  return(
    <button
      onClick={!external ? (e) => handleScroll(e, link) : null} 
      className= {`border p-2 flex items-center space-x-2 text-sm ${link!==''?'button border-purple':'bg-dotgrey cursor-not-allowed text-slate-600 border-slate-800'}`}
      disabled={link === ''}
    >
      <span>{name}</span>
      <span>{icon}</span>
    </button>
  )
}

export default Button;