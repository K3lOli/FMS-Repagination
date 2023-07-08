import { AnyNode, Root } from "postcss";
import "../app/Global.css";
import { ReactNode} from "react";
import React, { ButtonHTMLAttributes } from 'react';
import { TypeParameter } from "typescript";
import { InputHTMLAttributes } from "react";

interface ButtonCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // outras propriedades personalizadas, se houver
  }

export function ButtonCard({children, ...props}:ButtonCardProps){
    return(
        <>
        <button className="rounded focus:outline-none pl-2 text-green-500 mb-3 placeholder:text-sm w-[300px] h-10 bg-white cursor-pointer" {...props}>
            {children}
        </button>
        </>
    )
}