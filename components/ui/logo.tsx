import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image  width={170}
      height={100} src="/Logo-Pixeltech_logo-negro-color.png" alt='Logo Pixeltech' priority className="w-auto h-auto"/>
    </Link>
  )
}
