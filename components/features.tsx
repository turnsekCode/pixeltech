'use client'

import Link from 'next/link'

export default function Features() {

  return (
    <section className="relative pb-28">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-5xl mx-auto md:pb-12 lg:pb-4">
            <h1 className="text-gray-900 text-2xl lg:text-4xl font-semibold">Algunos de los últimos proyectos</h1>
            {/* Section content */}
            <div className="md:grid lg:grid-cols-12 md:grid-cols-12 md:gap-12">

              {/* Item 1 */}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                <div style={{backgroundImage: "url('/jayil1.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6"><a href='https://www.jayil.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">jayil.es</a><p className="text-gray-600 mb-2">Ecommerce creada con Reactjs, nodejs y Mongodb</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-tienda-online-jayil'>Ver detalles</Link></div>
              </div>

               {/* Item 2 */}
               <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                <div style={{backgroundImage: "url('/quickgold1.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-quickgold'>Ver detalles</Link></div>
              </div>

              {/* Item 3*/}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
                <div style={{backgroundImage: "url('/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6"><a href='https://quickgold.es/app' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">App móvil quickgold</a><p className="text-gray-600 mb-2">Aplicación móvil híbrida creada con React native y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/app-movil-quickgold'>Ver detalles</Link></div>
              </div>

              {/* Item 4*/}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                <div style={{backgroundImage: "url('/dashboard1.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6"><a href='https://admin.isolution.site/login' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">Panel administrativo pixeltech</a><p className="text-gray-600 mb-2">Aplicación web creada con Reactjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos/desarrollo-web-dashboard-pixeltech'>Ver detalles</Link></div>
              </div>

            </div>
            <div className="lg:w-full flex justify-center items-center mt-16"><Link className="btn w-36 text-white bg-blue-600 hover:bg-blue-700 sm:w-auto sm:mb-0" href='/proyectos'>Ver todos</Link></div>
          </div>
        </div>
      </div>
    </section>
  )
}