export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">


          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-gray-900 text-2xl lg:text-4xl font-semibold">¿Por qué elegirme?</h2>
            <p className="text-xl text-gray-600">CADA SITIO WEB CUENTA</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none pb-20">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#0070F4" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Experiencia<br/>
                probada
              </h4>
              <p className="text-gray-600 text-center">Con años de experiencia en diseño web, garantizo resultados sólidos.

                .</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070F4" className="icon" viewBox="0 0 1024 1024">
                <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Diseño web<br/>
                responsive​</h4>
              <p className="text-gray-600 text-center">Diseños adaptados a
                distintos dispositivos.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070F4" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Enfoque centrado<br/> en el cliente</h4>
              <p className="text-gray-600 text-center">Tu visión es mi prioridad, trabajando juntos para alcanzar tus objetivos.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070F4" viewBox="0 0 640 512"><path d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Calidad<br/> técnica superior</h4>
              <p className="text-gray-600 text-center">Utilizo las últimas herramientas y tecnologías para garantizar un rendimiento óptimo.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070F4" viewBox="0 0 640 512"><path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Cumplimiento<br/> de plazos
              </h4>
              <p className="text-gray-600 text-center">Cumplimiento de plazos
                Entrego proyectos a tiempo, sin comprometer la calidad.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#0070F4" viewBox="0 0 576 512"><path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM128 416H64V352c35.3 0 64 28.7 64 64zM64 224V160h64c0 35.3-28.7 64-64 64zM448 352c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM384 256c0 61.9-43 112-96 112s-96-50.1-96-112s43-112 96-112s96 50.1 96 112zM252 208c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z" /></svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Precios<br/> competitivos
              </h4>
              <p className="text-gray-600 text-center">Ofrezco servicios de alta calidad a tarifas asequibles para adaptarme a tu presupuesto.</p>
            </div>

          </div>

  
      </div>
    </section>
  )
}