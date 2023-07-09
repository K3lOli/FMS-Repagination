import { ReactNode } from "react";
import "../app/Global.css";

export function LoginCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h4 className="mb-3 font-bold font-roboto text-[30px] text-white drop-shadow-md shadow-green-900">{title}</h4>
        <div className="flex flex-col items-center w-auto h-auto bg-green-500 bg-opacity-20 backdrop-blur-lg rounded text-white p-6">
          {children}
        </div>
      </div>
    </>
  );
}
