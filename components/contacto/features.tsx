'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/features-bg.png'
import FeaturesElement from '@/public/features-element.png'
import ContactForm from './formulario'

export default function FeaturesContacto() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20" id="formulario">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Formulario de contacto</h1>
            <p className="text-xl text-gray-600">¡Contáctanos hoy mismo para una consulta inicial gratuita y descubre cómo podemos hacer realidad tus ideas en la web!</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-7 md:mt-6" data-aos="fade-right">
              <ContactForm />
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right w-90" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                    <div className="max-w-md mx-auto bg-white shadow-md p-8 rounded-[20px]">
                      <div className="text-left mb-6">
                        <p className="text-3xl font-semibold mb-2">Hablemos de tu proyecto!</p>
                        <p className="mb-2 font-light">Juntos podemos sacar tu proyecto adelante, escríbeme y solicita tu cotización.</p>
                        <p className="font-light">Explica brevemente cuál es tu necesidad y pronto me pondré en contacto.</p>
                      </div>
                      <ul className="pl-4 mt-4 text-left">
                        <li className="font-bold text-gray-700 flex items-center gap-1"><span className="text-blue-500 text-3xl">&#8226;</span> Consulta gratuitamente</li>
                        <li className="font-bold text-gray-700 flex items-center gap-1"><span className="text-blue-500 text-3xl">&#8226;</span> Pide tu cotización</li>
                        <li className="font-bold text-gray-700 flex items-center gap-1"><span className="text-blue-500 text-3xl">&#8226;</span> Últimas tecnologías</li>
                        <li className="font-bold text-gray-700 flex items-center gap-1"><span className="text-blue-500 text-3xl">&#8226;</span> Construcción ECO amigable</li>
                      </ul>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}