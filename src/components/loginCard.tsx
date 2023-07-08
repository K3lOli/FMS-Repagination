import { ReactNode } from "react";
import "../app/Global.css";

export function LoginCard({title, children}:{title:string; children:ReactNode}){
    return(
        <>
        <div className="flex flex-col items-center w-auto h-auto bg-green-500 rounded text-white p-6">
            <h4 className="mb-3 font-bold">{title}</h4>
            {children}
        </div>
        </>
    )
}