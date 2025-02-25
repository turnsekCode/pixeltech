export const metadata = {
  title: 'Contacto - Creador web a medida',
  description: 'Diseñador y creador de páginas webs, creatividad para ofrecerte una web única. y económica. Ten presencia onlina.',
}

import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import HeroContacto from '@/components/contacto/hero'
import FeaturesContacto from '@/components/contacto/features'
import FeaturesBlocksContacto from '@/components/contacto/features-blocks'

export default function Contacto() {
  return (
    <>
      <HeroContacto />
      <FeaturesContacto />
      <FeaturesBlocksContacto />
      <Testimonials />
      <Newsletter />
    </>
  )
}
