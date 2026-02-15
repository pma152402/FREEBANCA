import { useState } from "react";

import banner from "./assets/banner_1.jpg";
import friends from "./assets/hug_1.webp";

function App() {
  const [metal, setMetal] = useState("gold");

  const goldUrl =
    "https://goldbroker.com/widget/live/XAU?currency=USD&height=320";
  const silverUrl =
    "https://goldbroker.com/widget/live/XAG?currency=USD&height=320";

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      <div className="bg-amber-100 w-full">
        <img
          src={banner}
          alt="BANNER FREEBANCA"
          className="h-160 w-full object-cover object-[50%_15%]"
        />
      </div>

      <div className="bg-cyan-800 w-full grid grid-cols-2">
        <div className="bg-cyan-700 w-full pl-20 ">
          <div className="bg-cyan-600 text-gray-100 p-10">
            <h1 className="text-9xl font-bold">FREEBANCA</h1>
            <h3 className="text-xl font-medium mt-[-15px]">
              TU BANCO ONLINE DE CONFIANZA
            </h3>
          </div>
        </div>

        <div className="text-gray-100 p-10 my-auto mt-10">
          <p className="text-2xl font-extralight italic pl-20 pt-4">
            “El futuro pertenece a quienes creen en la belleza de sus sueños”
          </p>
          <span className="text-sm text-right w-full block">
            Eleanor Roosevelt
          </span>
        </div>
      </div>

      <div className="bg-transparent w-full py-30 grid grid-cols-2 text-gray-100 pl-20">
        <div className="mx-auto bg-sky-200 px-20 pt-20 rounded-full">
          <img src={friends} className="h-145 object-cover object-top" />
        </div>

        <div className="my-auto">
          <div className="text-9xl font-bold">
            <h3 className="text-cyan-600">SIEMPRE</h3>
            <h3 className="text-gray-100">CONTIGO</h3>
          </div>
          <p className="mt-10 text-2xl font-extralight text-neutral-200 max-w-2xl leading-relaxed">
            Cualquier duda es válida cuando hablamos de tu futuro, por eso todos
            nuestros clientes cuentan con soporte personalizado y atención los
            siete días de la semana.
          </p>
        </div>
      </div>

      <div className="bg-cyan-800 w-full grid grid-cols-2 text-gray-50">
        <div className="bg-cyan-700 h-full w-full pl-20">
          <div className="bg-cyan-600 text-gray-100 p-10 h-full pt-12">
            <div className="text-7xl font-bold px-25 py-10">
              <h2>INVIERTE EN TU</h2>
              <h2 className="text-9xl font-extrabold">FUTURO</h2>
            </div>
          </div>
        </div>

        <div className="text-gray-100">
          <h4 className="font-extralight text-xl pl-10 pt-12 pb-5">
            Escoge el plan que más se adapte a ti:
          </h4>

          <div className="m-8 mx-auto flex flex-col items-center bg-cyan-900 w-full h-full gap-5 p-10">
            <h5 className="text-5xl font-extrabold">BASIC</h5>
            <p className="text-2xl font-extralight max-w-170 leading-relaxed">
              Nuestro plan básico incluye un 2% de retorno garantizado, acceso a
              carteras exclusivas y asesoramiento financiero personalizado.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN METAL CORREGIDA */}
      <div className="bg-gradient-to-r from-gray-800 to-neutral-800 py-40 px-40">

        <div className="text-center pb-10 pt-10">
          <span className="block text-7xl text-gray-200 font-bold">
            DESCUBRE EL MERCADO
          </span>

          <span
            className={`text-8xl font-bold ${
              metal === "gold" ? "text-amber-200" : "text-gray-400"
            }`}
          >
            {metal === "gold" ? "DEL ORO" : "DE LA PLATA"}
          </span>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setMetal("gold")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              metal === "gold"
                ? "bg-amber-200 text-black"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            ORO
          </button>

          <button
            onClick={() => setMetal("silver")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              metal === "silver"
                ? "bg-gray-300 text-black"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            PLATA
          </button>
        </div>

        <iframe
          src={metal === "gold" ? goldUrl : silverUrl}
          className="w-full h-100 pt-20"
          title="metal-chart"
        ></iframe>

      </div>
    </div>
  );
}

export default App;
