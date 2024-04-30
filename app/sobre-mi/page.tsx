export const metadata = {
  title: 'Creador de páginas web económicas | Diseño web',
  description: 'Como diseñador web, me especializo en crear experiencias digitales cautivadoras y funcionales.',
}

import Newsletter from '@/components/newsletter'
import HeroSobreMi from '@/components/sobre-mi/hero'
import TestimonialsSobreMi from '@/components/sobre-mi/testimonials'
import BlockTow from '@/components/sobre-mi/block-two'

export default function Contacto() {
  return (
    <>
      <HeroSobreMi />
      <BlockTow />
      <TestimonialsSobreMi />
      <Newsletter />
    </>
  )
}
