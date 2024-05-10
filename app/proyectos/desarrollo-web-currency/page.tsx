import Newsletter from "@/components/newsletter";
import Image from "next/image";
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
    //console.log("apiresult", posts)
    return (
        <section className="relative pt-12">

            {/* Section background (needs .relative class on parent and next sibling elements) */}


            <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2">
            </div>
            <Image width={145} height={100} alt="desarrollo web" className="h-auto absolute top-32 left-[500px]" src="/bubble-amarillo.png" />
            <Image width={70} height={100} alt="desarrollo web" className="h-auto absolute top-44 lg:top-72 lg:left-40" src="/bubble-rosado.png" />
            <Image width={100} height={100} alt="desarrollo web" className="absolute top-[275px] left-[550px] w-11 h-11" src="/bubble-azul.png" />
            <Image width={600} height={70} alt="desarrollo web" className="h-auto absolute top-20 left-50 lg:left-72 opacity-20" src="/circle-home.png" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl pb-8">
                        <h2 style={{ color: "#C75C6F" }} className="mb-4 text-2xl">Página web</h2>
                        <p className="text-gray-900 text-2xl lg:text-4xl font-semibold">Aquí puedes encontrar más detalles del proyecto</p>
                    </div>

                    {/* Items */}
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

                        {/* Section header */}
                        <div className="max-w-5xl mx-auto md:pb-12 lg:pb-4">
                            {/* Section content */}
                            <div className="md:grid lg:grid-cols-12 md:grid-cols-12 md:gap-12">

                                {/* Item 1 */}
                                <div className="flex items-center justify-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-7 md:mt-6 bg-white rounded-2xl shadow-xl p-5" data-aos="fade-right">
                                    <p className="text-gray-600 mb-2">He creado una landing page innovadora utilizando Next.js, que ofrece a los usuarios una experiencia interactiva y funcional. La página cuenta con una calculadora integrada que permite a los usuarios obtener el precio de cotización del dólar de manera rápida y precisa, proporcionando una herramienta útil para aquellos interesados en realizar transacciones financieras. <br/><br/>Además, he incorporado un mapa interactivo que muestra las ubicaciones de las tiendas de casa de cambio. Al hacer clic en los marcadores del mapa, los usuarios pueden acceder a un popup con información detallada sobre cada tienda, incluyendo datos como dirección, horario de atención. Esta información se obtiene dinámicamente a través de la API de Google, lo que garantiza la precisión y la actualización en tiempo real de los datos.<br/><br/> El diseño de la landing page se basa en proporcionar una experiencia intuitiva y atractiva para los usuarios, con un enfoque en la usabilidad y la accesibilidad. </p>
                                </div>

                                {/* Item 2*/}
                                <div style={{ background: "linear-gradient(180deg,#f8f8f8,hsla(0,0%,100%,0)" }} className="mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5 md:mt-6 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left">
                                    <div style={{ backgroundImage: "url('/currency1.png')", backgroundPosition: "center", backgroundSize: "cover" }} className="h-60 rounded-t-2xl transition-transform duration-700 hover:scale-110"></div>
                                    <div className="h-30 p-6 bg-white"><p className="text-gray-600 mb-2">Página web creada con nextjs</p><Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href='https://currency.pixeltech.es' target="_blank">Ir a la web</Link></div>
                                </div>

                                {/* Item 3*/}
                                <div style={{ backgroundImage: "url('/currency2.png')", backgroundPosition: "center", backgroundSize: "cover" }}  className="h-60 mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl" data-aos="fade-left">
                                </div>


                                {/* Item 4*/}
                                <div style={{ backgroundImage: "url('/currency3.png')", backgroundPosition: "center", backgroundSize: "cover" }}  className="h-60 mt-4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 bg-white rounded-2xl shadow-xl" data-aos="fade-left">
                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
        </section>
    )
}

