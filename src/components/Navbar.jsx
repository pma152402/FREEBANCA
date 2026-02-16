
import { IconBuildingStore, IconMailOpenedFilled, IconGraph, IconUserFilled } from "@tabler/icons-react";

export default function Navbar() {


    return (
        <>
            <div className="bg-gradient-to-t from-cyan-800 to-cyan-900 fixed top-0 left-0 w-full z-200 text-gray-100 p-5 flex justify-between">

                <div className="flex flex-col items-center">
                    <h5 className="text-7xl font-bold">FB</h5>
                    <h6 className="text-sm font-semibold border-b-2 border-gray-200">
                        FREEBANKA
                    </h6>
                </div>


                <ul className="flex gap-20">
                    <li className="flex flex-col items-center"> <IconGraph size={65}/> Productos</li>
                    <li className="flex flex-col items-center"> <IconBuildingStore size={62}/>Mercado</li>
                    <li className="flex flex-col items-center"> <IconMailOpenedFilled size={60}/>Contacto</li>
                    <li className="flex flex-col items-center"> <div className="border-5 border-gray-100 rounded-full mt-0.5 bg-gray-100/20"><IconUserFilled size={50}/></div>Iniciar sesión</li>
                </ul>

                
            </div>

        </>
    )
}