
import { IconBuildingStore, IconMailOpenedFilled, IconGraph, IconUserFilled } from "@tabler/icons-react";

import { useRef, useEffect, useState } from "react";

export default function Navbar() {

    

    const [visibleNav, setVisibleNav] = useState(false);

    const navRef= useRef(null);




    // A partir de cuando se muestra el NavBar
    useEffect(() => {
        function webScroll() {
            const minScroll = 120;

            let currentScroll = window.scrollY;

            if (currentScroll >= 700) {
                setVisibleNav(true);
            }
            else {
                setVisibleNav(false);
            }
        }

        // Controlar evento (capturamos la ventana)
        window.addEventListener("scroll", webScroll);

        return () => {
            window.removeEventListener("scroll", webScroll);
        }
    }, []);



    return (
        <>
            <div ref={navRef} className={`bg-gradient-to-t from-cyan-700 to-cyan-900 fixed top-0 left-0 w-full z-200 text-gray-100 p-3 flex justify-between items-center transition-transform duration-500 border-b-2 border-cyan-200/40 shadow-lg shadow-cyan-500/60
                ${visibleNav ? "translate-y-0" : "-translate-y-full"}`}>

                <div className="flex flex-col items-center pl-5">
                    <h5 className="text-7xl font-bold">FB</h5>
                    <h6 className="text-sm font-semibold border-b-2 border-gray-200">
                        FREEBANCA
                    </h6>
                </div>


                <ul className="flex gap-20 items-center">
                    <li className="enlaces-navbar"> <IconGraph size={61}/> Productos</li>
                    <li className="enlaces-navbar"> <IconBuildingStore size={61}/>Mercado</li>
                    <li className="enlaces-navbar"> <IconMailOpenedFilled size={61}/>Contacto</li>
                    <li className="enlaces-navbar"> <div className="border-5 border-gray-100 rounded-full mt-0.5 bg-gray-100/20"><IconUserFilled size={50}/></div>Iniciar sesión</li>
                </ul>

                
            </div>

        </>
    )
}