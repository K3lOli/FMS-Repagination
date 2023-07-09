"use client";
import Link from "next/link";
import { LoginCard } from "../components/loginCard";
import { InputCard } from "@/components/input";
import { ButtonCard } from "@/components/button";
import React, { useState } from "react";
import "../app/Global.css";
import axios from "axios";

export default function Cadastro() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nodedeploy-api-8124.onrender.com/users", {
        name,  
        email,
        password,
      },);

      console.log(response.data); // Exemplo: exibir a resposta do servidor

      // Resto da lógica após o login bem-sucedido
    } catch (error) {
      console.error(error);
      // Lógica para tratar erros de login
    }
  };

  return (
    <>
      {/* <body className="w-screen h-screen flex justify-center items-center bg-slate-600"> */}
        <div className="">
          <LoginCard title="Crie sua conta Aqui.">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <InputCard type="name" id="name" value={name} onChange={handleNameChange} placeholder="Seu nome"></InputCard>
              <InputCard type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Seu e-mail"></InputCard>
              <InputCard type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Sua senha"></InputCard>
              <ButtonCard type="submit">Criar</ButtonCard>
            </form>
            {/* <Link href={"/Login"}>Já possui conta?</Link> */}
          </LoginCard>
        </div>
      {/* </body> */}
    </>
  );
}
