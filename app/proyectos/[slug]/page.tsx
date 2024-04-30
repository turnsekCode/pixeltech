import Link from 'next/link'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('https://662fa5b243b6a7dce3104868.mockapi.io/api/proyects/proyects', { next: { revalidate: 1 } }).then((res) => res.json())
   //console.log(posts)
    return posts?.map((post: any) => ({
      slug: post.slug,
    }))
  }

export default async function Proyect({ params }: { params: { slug: string } }) {
    const { slug } = params
    const posts = await fetch(`https://662fa5b243b6a7dce3104868.mockapi.io/api/proyects/proyects/${slug}`, { next: { revalidate: 1 } }).then((res) => res.json())
  //console.log("apiresult",posts)
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
 

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2">
      </div>
      <img className="absolute top-32 left-[500px]" src="../images/bubble-amarillo.png" />
      <img className="absolute top-44 lg:top-72 lg:left-40" src="../images/bubble-rosado.png" />
      <img className="absolute top-[275px] left-[550px] w-11 h-11" src="../images/bubble-azul.png" />
      <img className="absolute top-20 left-50 lg:left-72 opacity-20" src="../images/circle-home.png" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl  pb-12 md:pb-20">
            <h2 style={{color:"#C75C6F"}} className="mb-4 text-2xl">Mis proyectos</h2>
            <p className="text-gray-900 text-2xl lg:text-4xl font-semibold">Aqui puedes encontrar <br></br>My Post: {params.slug}</p>
          </div>

          {/* Items */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="max-w-5xl mx-auto md:pb-12 lg:pb-4">
            {/* Section content */}
            <div className="md:grid lg:grid-cols-12 md:grid-cols-12 md:gap-12">

              {/* Item 1 */}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
                <div style={{backgroundImage: "url('/images/quickgold1.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos'>Ver detalles</Link></div>
              </div>

              {/* Item 2*/}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
                <div style={{backgroundImage: "url('/images/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/app' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">App movil quickgold</a><p className="text-gray-600 mb-2">Aplicación movil híbrida creada con React native y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos'>Ver detalles</Link></div>
              </div>

              {/* Item 3*/}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-right">
              <div style={{backgroundImage: "url('/images/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos'>Ver detalles</Link></div>
              </div>

              {/* Item 4*/}
              <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
              <div style={{backgroundImage: "url('/images/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos'>Ver detalles</Link></div>
              </div>

               {/* Item 5*/}
               <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
              <div style={{backgroundImage: "url('/images/mockup_app.png')", backgroundPosition: "center", backgroundSize: "cover"}} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                <div className="h-30 p-6 bg-white"><a href='https://quickgold.es/' target='_blank' className="text-xl font-semibold leading-snug tracking-tight mb-1">quickgold.es</a><p className="text-gray-600 mb-2">Aplicación web creada con Nextjs y nodejs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='/proyectos'>Ver detalles</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
  )
}

  