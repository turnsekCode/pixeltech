import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-12xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            {/* <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div> */}
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Links rápidos</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="proyectos" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Proyectos</a>
              </li>
              <li className="mb-2">
                <a href="sobre-mi" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Sobre mi</a>
              </li>
              <li className="mb-2">
                <a href="contacto" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contacto</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Redes</h6>
            <ul className="text-sm">
              <li className="mb-2 flex items-center md:order-1">
                <a href="https://www.linkedin.com/in/abraham-turnsek/" target='_blank' className="text-gray-600 hover:text-gray-900  transition duration-150 ease-in-out">Linkedin</a><a href="https://www.linkedin.com/in/abraham-turnsek/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow ml-4 p-1 transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </a>
              </li>
              <li className="mb-2 flex items-center md:order-1 ">
                <a href="https://www.facebook.com/abraham.turnsek/" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Facebook</a><a href="https://www.facebook.com/abraham.turnsek/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow ml-2 transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
              <li className="mb-2 flex items-center md:order-1 md:mb-0">
                <a href="https://www.instagram.com/turnsek/" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Instagram</a><a href="https://www.instagram.com/turnsek/" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow ml-2 p-1 transition duration-150 ease-in-out" aria-label="Instagram"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M16.5 7.5l0 .01" />
                </svg></a>
              </li>
              <li className="mb-2 flex items-center md:order-1 md:mb-0">
                <a href="https://github.com/turnsekCode" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</a><a href="https://github.com/turnsekCode" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow ml-2 p-1 transition duration-150 ease-in-out" aria-label="Instagram"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                  <path fill="#444444" d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path>
                </svg></a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Información de contacto</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Valencia - España</p>
              </li>
              <li className="mb-2">
                <a href="https://wa.me/+34651148387" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Whatsapp</a>
              </li>
              <li className="mb-2">
                <a href="mailto:pixel.tech.t@gmail.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Correo: pixel.tech.t@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; pixeltech.es Todos los derechos reservados.</div>
          <div className="text-sm text-gray-600 mr-4">Web creada con nextjs, nodejs, tailwind y typescript.</div>

        </div>

      </div>
    </footer>
  )
}
