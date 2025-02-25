export const metadata = {
  title: 'Desarrollador de páginas web, Diseño web a medida a bajo precio',
  description: 'Diseñador y creador de sitios webs, creatividad para ofrecerte una web única. Llevar tu presencia en línea a otro nivel.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import BlockTow from '@/components/block-two'

export default function Home() {
  return (
    <>
      <Hero />
      <BlockTow />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
