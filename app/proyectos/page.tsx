export const metadata = {
  title: 'Desarrollador de páginas web, programador web a medida',
  description: 'Programador y desarrollador de sitios webs, creatividad para ofrecerte una web única.',
}

import Newsletter from '@/components/newsletter'
import HeroProyectos from '@/components/proyectos/hero'
import BlockTow from '@/components/proyectos/block-two'

export default function Proyectos() {
  return (
    <>
      <HeroProyectos />
      <BlockTow />
      <Newsletter />
    </>
  )
}


