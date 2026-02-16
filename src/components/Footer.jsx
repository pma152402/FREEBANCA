export default function Footer() {
  return (
    <>
      <div className=" bg-gradient-to-t from-cyan-950 to-cyan-800 pt-15 px-10 pb-4 border-t-4 border-cyan-900">
        <div className="grid grid-cols-4 w-fit mx-auto gap-25 text-lg text-gray-100">
          <div>
            <h5 className="text-5xl font-bold">FREEBANCA</h5>
            <h6 className="text-sm font-extralight">
              El banco de los que sueñan
            </h6>
          </div>
          <div>
            <span className="block text-3xl font-bold mb-3">Navegación</span>
            <ul>
              <li className="enlaces-footer">Inicio</li>
              <li className="enlaces-footer">Productos</li>
              <li className="enlaces-footer">Mercados</li>
              <li className="enlaces-footer">Contacto</li>
            </ul>
          </div>
          <div>
            <span className="block text-3xl font-bold mb-3">Redes Sociales</span>
            <ul>
              <li className="enlaces-footer">Instagram</li>
              <li className="enlaces-footer">Facebook</li>
              <li className="enlaces-footer">Linkedin</li>
              <li className="enlaces-footer">X</li>
            </ul>
          </div>
          <div>
            <span className="block text-3xl font-bold mb-5 text-center">¿Dónde estamos?</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3307.604768768519!2d-4.463891217007185!3d36.71749001764249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1771182003746!5m2!1ses!2ses"
              className="h-80 w-80  border-3 border-cyan-800 rounded-2xl shadow-2xl"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <span className="text-gray-300/30 pt-10 grid grid-cols-1 w-fit mx-auto">FREEBANCA® todos los derechos reservados </span>
      </div>
    </>
  );
}
