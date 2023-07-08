import { AnyNode, Root } from "postcss";
import "../app/Global.css";
import { TypeParameter } from "typescript";
import { InputHTMLAttributes } from "react";

interface InputCardProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // outras propriedades personalizadas, se houver
  }

export function InputCard(props: InputCardProps){
    return(
        <>
        <input className="rounded focus:outline-none pl-2 text-black mb-3 placeholder:text-sm w-[300px] h-10" {...props}/>
        </>
    )
}