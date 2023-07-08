"use client";
import React, { useState } from "react";
import Login from "../Login/page";
import Cadastro from "../Cadastro/page";

const App: React.FC = () => {
  const [activeDesign, setActiveDesign] = useState<string>("design1");
  const [buttonSelected1, setButtonSelected1] = useState(true);
  const [buttonSelected2, setButtonSelected2] = useState(false);

  const handleButtonClick1 = (design: string) => {
    setActiveDesign(design);

    setButtonSelected1(true);
    setButtonSelected2(false);

  };
  const handleButtonClick2 = (design: string) => {
    setActiveDesign(design);
    setButtonSelected2(true);
    setButtonSelected1(false);
  };

  return (
    <body className="flex h-screen w-screen">
      <header className="flex sm:w-[34.5%] bg-green-500 justify-end">
        <div className="flex items-center ">
          <div className="flex flex-col items-end">
            <button
              className={`bg ${
                buttonSelected1 ? "bg-white" : "bg-green-500"
              } rounded-full shadow-md text-lg mb-4 p-4 pr-8 rounded-r-none w-40`}
              onClick={() => handleButtonClick1("design1")}
            >
              Sing in
            </button>
            <button
              className={`bg ${
                buttonSelected2 ? "bg-white" : "bg-green-500"
              } rounded-full shadow-md text-lg p-4 pr-8 rounded-r-none w-40`}
              onClick={() => handleButtonClick2("design2")}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col w-7/10 mx-auto justify-center items-center">
        {activeDesign === "design1" && (
          <div className="design w-[23rem] mr-0">
            <Login />
          </div>
        )}
        {activeDesign === "design2" && (
          <div className="design w-[23rem] mr-0">
            <Cadastro />
          </div>
        )}
      </div>
    </body>
  );
};

export default App;
