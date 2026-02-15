import { useState } from "react";

export default function Metal() {
  const [metal, setMetal] = useState("gold"); // estado para controlar que mercado muestro

  // URLS de los mercados
  const goldUrl =
    "https://goldbroker.com/widget/live/XAU?currency=USD&height=320";
  const silverUrl =
    "https://goldbroker.com/widget/live/XAG?currency=USD&height=320";

  return (
    <>
      <div className="bg-gradient-to-r from-gray-800 to-neutral-800 py-40 px-40">
        {/* TITULO QUE CAMBIA */}

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
    </>
  );
}
