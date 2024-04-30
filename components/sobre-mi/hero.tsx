import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function HeroSobreMi() {
  return (
    <section style={{backgroundColor: "#F6F9FA"}} className="relative ">
      <img className="absolute lg:top-32 top-[350px]" src="../images/line-4.png" />
      {/* Illustration behind hero content */}
      <div  className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#DCDEFF" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Mi experi<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">encia</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Desarrollador web y móvil con 3 años de experiencia</p>
            </div>
          </div>

          {/* Hero image */}
          {/*<ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
  videoHeight={1080} />*/}

        </div>

      </div>
    </section>
  )
}