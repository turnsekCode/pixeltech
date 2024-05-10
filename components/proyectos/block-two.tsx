import Link from 'next/link'

export default async function BlockTow() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}


      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2">
      </div>
      <img className="absolute top-32 left-[500px]" src="../bubble-amarillo.png" />
      <img className="absolute top-44 lg:top-72 lg:left-40" src="../bubble-rosado.png" />
      <img className="absolute top-[275px] left-[550px] w-11 h-11" src="../bubble-azul.png" />
      <img className="absolute top-20 left-50 lg:left-72 opacity-20" src="../circle-home.png" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl  pb-12 md:pb-20">
            <h2 style={{ color: "#C75C6F" }} className="mb-4 text-2xl">Mis proyectos</h2>
            <p className="text-gray-900 text-2xl lg:text-4xl font-semibold">Aqui puedes encontrar <br></br>Todos los proyectos realizados</p>
          </div>

          {/* Items */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

            {/* Section header */}
            <div className="max-w-5xl mx-auto md:pb-12 lg:pb-4">
              {/* Section content */}
              <div className="md:grid lg:grid-cols-12 md:grid-cols-12 md:gap-12">

                {/* Item 1 */}
                <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                  <div style={{ backgroundImage: "url('/quickgold1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-quickgold'>Ver detalles</Link></div>
                </div>

                {/* Item 2*/}
                <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
                  <div style={{ backgroundImage: "url('/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/app' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">App movil quickgold</a><p className="text-gray-600 mb-2">Aplicación móvil híbrida creada con React native y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/app-movil-quickgold'>Ver detalles</Link></div>
                </div>

                 {/* Item 3*/}
                 <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                  <div style={{ backgroundImage: "url('/sorteo.quickgol1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://sorteo.pixeltech.es' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">sorteo.pixeltech.es</a><p className="text-gray-600 mb-2">Página web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-sorteo-quickgold'>Ver detalles</Link></div>
                </div>

                {/* Item 4*/}
                <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                  <div style={{ backgroundImage: "url('/currency1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://currency.pixeltech.es' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">currency.pixeltech.es</a><p className="text-gray-600 mb-2">Página web creada con Nextjs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-currency'>Ver detalles</Link></div>
                </div>

                 {/* Item 5*/}
                 <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
                  <div style={{ backgroundImage: "url('/isolution1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://isolution.site/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">isolution.site</a><p className="text-gray-600 mb-2">Página web creada con wordpress</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-isolution'>Ver detalles</Link></div>
                </div>

                {/* Item 6*/}
                <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                  <div style={{ backgroundImage: "url('/apec1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                  <div className="h-30 p-6 bg-white"><a href='https://apecconsultoriaglobal.com/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">apecconsultoriaglobal.com</a><p className="text-gray-600 mb-2">Página web creada con wordpress</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-apec'>Ver detalles</Link></div>
                </div>

               

              </div>
            </div>

            {/* <ul>
      {data?.map((post: any) => (
        <li key={post.id}>
          <Link href={`/proyectos/${post.slug}`}>{post.nombre}</Link>
        </li>
      ))}
    </ul> */}

          </div>
        </div>

      </div>
    </section>
  )
}
