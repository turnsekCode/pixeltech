import Image from "next/image";

export default function BlockTow() {
  return (
    <section style={{backgroundColor: "#ECF2F6"}} className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2">
      </div>
      <img className="absolute top-32 left-[500px]" src="/bubble-amarillo.png" />
      <img className="absolute top-44 lg:top-72 lg:left-40" src="/bubble-rosado.png" />
      <img className="absolute top-[275px] left-[550px] w-11 h-11" src="/bubble-azul.png" />
      <img className="absolute top-20 left-50 lg:left-72 opacity-20" src="/circle-home.png" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl  pb-12 md:pb-20">
            <h2 style={{color:"#C75C6F"}} className="mb-4 text-2xl">Qué puedo hacer por ti</h2>
            <p className="text-gray-900 text-2xl lg:text-4xl font-semibold">Servicios con los que <br></br>podemos ayudarte</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl h-auto lg:mt-40" data-aos="fade-left">
              <Image width={60} height={56} alt="Desarrollo web" src="/campana.png" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Diseño web
              </h4>
              <p className="text-gray-600 text-center">cautivadores con un diseño a medida que refleja la identidad única de tu marca.</p>
            </div>

            {/* 2nd item */}
            <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl h-auto lg:mt-24" data-aos="fade-center">
            <Image width={60} height={56} alt="Desarrollo web" src="/developer.png" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aplicaciones web</h4>
              <p className="text-gray-600 text-center">personalizadas que potencian la interactividad y la usabilidad de tu página.</p>
            </div>

            {/* 3rd item */}
            <div style={{background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)"}} className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl h-auto" data-aos="fade-right">
            <Image width={60} height={56} alt="Desarrollo web" src="/seo.png" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aplicaciones móviles</h4>
              <p className="text-gray-600 text-center">En el desarrollo de aplicaciones móviles, puedo convertir tus ideas en realidades digitales cautivadoras.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}