import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151539]">
      <div className="flex w-[700px] rounded-lg overflow-hidden">
        <div className="bg-[#00c9cc] w-1/2 p-6 text-white flex flex-col justify-center items-center">
          <div className="border-l-2 border-white h-10 mb-4"></div>
          <h2 className="text-lg font-semibold">Seja bem vindo!</h2>
          <p className="text-sm mb-6">Acesse sua conta agora mesmo.</p>
          <button className="bg-white text-[#00c9cc] font-semibold px-6 py-2 rounded-full mb-2 hover:bg-gray-100 transition">
            ENTRAR
          </button>
          <a href="#" className="text-sm underline">
            Esqueci minha senha
          </a>
        </div>
        <div className="bg-[#dbe5f0] w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-center mb-6">Login</h2>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-[#ff6e6e] placeholder-white text-white" />
            <input type="password" placeholder="Senha" className="px-4 py-2 rounded bg-[#ff6e6e] placeholder-white text-white" />
            <button type="submit" className="bg-[#00c9cc] text-white font-semibold px-6 py-2 rounded-full mt-2 hover:bg-[#00b1b3] transition">
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
