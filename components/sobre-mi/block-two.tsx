import Image from "next/image";
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://662fa5b243b6a7dce3104868.mockapi.io/api/proyects/proyects', { next: { revalidate: 1 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function BlockTow() {
  const data = await getData()
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}


      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2">
      </div>

      <div className="max-w-sm md:max-w-6xl grid gap-2 grid-cols-1 lg:grid-cols-2 mt-14 mx-auto  px-6">

        {/* Section texto */}
        <div className="max-w-4xl">
          <h2 style={{ color: "#C75C6F" }} className="mb-4 text-2xl">Abraham Turnšek</h2>
          <p className="text-gray-900 text-2xl lg:text-3xl font-semibold">Programador fullstack</p>
          <p className="text-gray-600 text-1xl  font-semibold">Soy un apasionado desarrollador y programador web con 3 años de experiencia, especializado en el desarrollo de aplicaciones y sitios web utilizando tecnologías de vanguardia. Mi enfoque principal está en el stack MERN (MongoDB, Express.js, ReactJS, Node.js), con experiencia adicional en NextJS para aplicaciones web más dinámicas.<br /><br />Tengo habilidades sólidas en la creación de interfaces de usuario atractivas y funcionales utilizando HTML y CSS, así como experiencia profunda en la creación de aplicaciones web interactivas con ReactJS. Mi conocimiento abarca desde el diseño y la implementación de la interfaz de usuario hasta el desarrollo del backend utilizando NodeJS.<br /><br />Además, poseo habilidades en la gestión de sistemas operativos Linux y en el uso de la terminal de comandos para facilitar procesos y tareas. Mi experiencia también incluye el trabajo con arquitecturas DevOps, lo que me permite implementar y mantener eficientemente sistemas complejos.<br /><br />Trabajo con PHP y WordPress, lo que me ha permitido ampliar mi enfoque de desarrollo y ofrecer soluciones integrales para diversos proyectos web.<br /><br />Soy un profesional comprometido con la mejora continua, siempre buscando aprender y adoptar nuevas tecnologías para mantenerme actualizado en el siempre cambiante mundo del desarrollo web. Mi objetivo es contribuir al éxito de los proyectos mediante la aplicación de mis habilidades técnicas y mi pasión por la creación de soluciones web innovadoras.</p>
        </div>

        {/* foto */}
        <div className="relative max-w-6xl mx-auto sm:px-6">

          <Image className="w-auto h-auto" width={600} height={300} alt="Abraham Turnsek" src="/../../perfil.png" />

        </div>

      </div>

    </section>
  )
}
