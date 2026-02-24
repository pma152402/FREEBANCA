import banner from "../assets/banner_1.jpg";
import friends from "../assets/hug_1.webp";
import Carrusel from "./Carrusel";
import Navbar from "./Navbar";

export default function Landing() {
  

  return (
    <>

      <Navbar/>
      <div className="bg-amber-100 w-full">
        <img
          src={banner}
          alt="BANNER FREEBANCA"
          className="h-160 w-full object-cover object-[50%_15%]"
        />
      </div>

      <div className="bg-cyan-800 w-full grid grid-cols-2">
        <div className="bg-cyan-700 w-full pl-20 ">
          <div className="bg-gradient-to-t from-cyan-500 to-cyan-600 text-gray-100 p-10">
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
          <div className="bg-gradient-to-t from-cyan-500 to-cyan-600 text-gray-100 p-10 h-full pt-12 ">
            <div className="text-7xl font-bold px-25 py-10">
              <h2>INVIERTE EN TU</h2>
              <h2 className="text-9xl font-extrabold">FUTURO</h2>
            </div>
          </div>
        </div>


          <div className="bg-gradient-to-t from-cyan-500 to-cyan-600 text-gray-100 p-10 h-full pt-12 ">
            <div className="text-7xl font-bold px-25 py-10">
              <h2>ESTO ES UNA PRUEBA</h2>
              <h2 className="text-9xl font-extrabold">FUTURO</h2>
            </div>
          </div>
        


        <Carrusel/>

      </div>
    </>
  );
}
