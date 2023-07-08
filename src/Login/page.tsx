"use client";
import Link from "next/link";
import { LoginCard } from "../components/loginCard";
import { InputCard } from "@/components/input";
import { ButtonCard } from "@/components/button";
import "../app/Global.css";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { response } from "express";
import { useDarkMode } from "@/utils/incorrect";

export default function Login() {
  const router = useRouter();
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nodedeploy-api-8124.onrender.com/auth", {
        email,
        password,
      });

      console.log(response.data.value); // Exemplo: exibir a resposta do servidor
      const validationPassword = response.data.value;

      if (validationPassword == "true") {
        router.push("/HomePage");
      }
      if(validationPassword =="false"){
        setPasswordError(true);
        return;
      }

      // Resto da lógica após o login bem-sucedido
    } catch (error) {
      console.error(error);
      // Lógica para tratar erros de login
    }
  };

  return (
    <>
      {/* <body className="w-screen h-screen flex justify-center items-center bg-slate-600"> */}
        <div className="bg-transparent">
          <LoginCard title="Crie sua conta">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <InputCard
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Seu e-mail"
              ></InputCard>
              <InputCard
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Sua senha"
                className={`bg ${passwordError ? 'bg-red-500' : ''} rounded focus:outline-none pl-2 text-black mb-3 placeholder:text-sm w-[300px] h-10`}
              ></InputCard>
              <ButtonCard type="submit">Entrar</ButtonCard>
            </form>
            {/* <Link href={"/Cadastro"}>Ainda não possui conta?</Link> */}
          </LoginCard>
        </div>
      {/* </body> */}
    </>
  );
}
