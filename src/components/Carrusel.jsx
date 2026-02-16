import { useState } from "react";

export default function Carrusel() {
  const [oTitle, setOTitle] = useState("BASIC");
  const [oText, setOText] = useState("La opción más básica");

  const [option, setOption] = useState(1);

  function calcOption(num) {
    let nuevo = option + num;

    console.log(nuevo);
    if (nuevo >= 0 && nuevo <= 3) {
      // si esta entre 0 y 2
      switch (nuevo) {
        case 1:
          setOTitle("BASIC");
          setOText("La opción más básica");
          break;
        case 2:
          setOTitle("MEDIUM");
          setOText("La segunda más básica");
          break;
        case 3:
          setOTitle("PRO");
          setOText("La tercera más básica");
          break;
      }

      setOption(nuevo); // le aplicamos la opcion
    }
  }
  return (
    <>
      <div className="text-gray-100">
        <h4 className="font-extralight text-xl pl-10 pt-12 pb-5">
          Escoge el plan que más se adapte a ti:
        </h4>

        <div className="m-8 mx-auto flex flex-col items-center bg-cyan-900 w-full h-full gap-5 p-10">
          <h5 className="text-5xl font-extrabold">{oTitle}</h5>

          <p className="text-2xl font-extralight max-w-170 leading-relaxed">
            {oText}
          </p>

          <div className="flex flex-nowrap">
            <button onClick={() => calcOption(-1)} className="bg-red-500 w-5">
              -
            </button>
            <button onClick={() => calcOption(1)} className="bg-green-500 w-5">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
