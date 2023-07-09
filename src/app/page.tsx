"use client";

import "../app/Global.css";
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
    <body className="sm:flex sm:flex-row h-screen sm:h-auto sm:w-screen bg-[url('../assets/images/medica-sorridente-na-vista-frontal-da-clinica2.jpg')] bg-cover bg-no-repeat flex flex-col">
      <header className="sm:flex sm:flex-auto sm:w-[34.5%] sm:h-screen h-48  sm:bg-green-500 sm:bg-opacity-20 sm:backdrop-blur-lg sm:rounded sm:drop-shadow-lg  bg-green-500 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
        <div className="sm:flex sm:flex-col sm:ml-10 sm:justify-between sm:pb-10 sm:pt-10 sm:h-full h-full flex-col">
          <div className="sm:flex sm:items-center sm:justify-end justify-center items-center h-full hidden">
            <h1 className="text-base sm:text-6xl lg:text-8xl">
              Seja <br />Bem-Vindo.
            </h1>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end sm:justify-center flex flex-col h-full justify-center items-center">
            <button
              className={`g ${
                buttonSelected1 ? "bg-white" : "text-white"
              } rounded-full shadow-md text-lg mb-4 p-4 pr-8 sm:rounded-r-none w-40`}
              onClick={() => handleButtonClick1("design1")}
            >
              Login
            </button>
            <button
              className={`bg ${
                buttonSelected2 ? "bg-white" : "text-white"
              } rounded-full shadow-lg text-lg p-4 pr-8 sm:rounded-r-none w-40`}
              onClick={() => handleButtonClick2("design2")}
            >
              Sing in
            </button>
          </div>
          <div className="sm:flex sm:items-center sm:justify-end justify-center items-center h-full hidden">
            <h1 className="text-3xl">
              Esse é o novo site da FMS. <br /> Nossa nova forma de fazer saúde.
            </h1>
          </div>
        </div>
      </header>

      <div className="sm:flex sm:flex-col sm:w-screen sm:mx-auto sm:h-auto sm:justify-center sm:items-center sm:bg-opacity-50 justify-center items-center h-screen flex">
        {activeDesign === "design1" && (
          <div className="design">
            <Login />
          </div>
        )}
        {activeDesign === "design2" && (
          <div className="design">
            <Cadastro />
          </div>
        )}
      </div>
    </body>
  );
};

export default App;
