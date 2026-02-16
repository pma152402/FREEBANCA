import { useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export default function Carrusel() {
    const [oTitle, setOTitle] = useState("BASIC");
    const [oText, setOText] = useState(
        "Cuenta sin comisiones, tarjeta virtual gratuita y un 1% de rentabilidad anual en tu cuenta de ahorro. Ideal para empezar a gestionar tu dinero sin complicaciones.",
    );

    const [option, setOption] = useState(1);

    const [visible, setVisible] = useState(true);

    function calcOption(num) {
        let nuevo = option + num;

        console.log(nuevo);
        if (nuevo >= 0 && nuevo <= 3) {
            // si esta entre 0 y 2

            setVisible(false);

            setTimeout(() => {
                switch (nuevo) {
                    case 1:
                        setOTitle("BASIC");
                        setOText(
                            "Cuenta sin comisiones, tarjeta virtual gratuita y un 1% de rentabilidad anual en tu cuenta de ahorro. Ideal para empezar a gestionar tu dinero sin complicaciones.",
                        );
                        break;
                    case 2:
                        setOTitle("MEDIUM");
                        setOText(
                            "Incluye todo lo del plan Basic más un 2.5% de rentabilidad anual, retiradas gratuitas en cualquier cajero de la UE y asesoramiento financiero personalizado.",
                        );
                        break;
                    case 3:
                        setOTitle("PRO");
                        setOText(
                            "Máxima rentabilidad con un 4% anual, tarjetas físicas premium sin coste, inversiones automatizadas y gestor financiero dedicado 24/7 para optimizar tu patrimonio.",
                        );
                        break;
                }

                setVisible(true);

            }, 300); // que encaje con duration-300

            setOption(nuevo); // le aplicamos la opcion
        }
    }

    //
    return (
        <>
            <div className="text-gray-100">
                <h4 className="font-extralight text-xl pl-10 pt-12 pb-5 ">
                    Escoge entre nuestros planes de inversión:
                </h4>

                <div
                    className="m-8 mx-auto flex flex-col items-center bg-gradient-to-r from-cyan-800 to-cyan-900 w-full h-full gap-5 px-10  pt-16 relative"
                >
                    <h5 className={`text-5xl font-extrabold transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>{oTitle}</h5>

                    <p className={`text-2xl font-extralight max-w-170 leading-relaxed transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
                        {oText}
                    </p>

                    <div className="flex flex-nowrap absolute">
                        <button
                            onClick={() => calcOption(-1)}
                            className="absolute top-0 right-40 bg-cyan-700 rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out active:bg-cyan-600"
                        >
                            <IconArrowNarrowLeft size={50} />
                        </button>
                        <button
                            onClick={() => calcOption(1)}
                            className="absolute top-0 left-40 bg-cyan-700 rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out active:bg-cyan-600"
                        >
                            <IconArrowNarrowRight size={50} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
