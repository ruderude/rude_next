import Link from 'next/link'
import Image from 'next/image'

const logo = {
  src: '/img/site/rude_logo_yoko.svg',
  alt: 'カラオケバーるーど'
}

const Header = () => {
  return (
    <header className="border-b z-10 header">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12 mx-auto ">
        <div style={{ position: 'relative', width: '130px', height: '130px' }}>
          <Link href="/" className="ml-3">
            <Image
              src={logo.src}
              layout='fill'
              objectFit='contain'
              alt={logo.alt}
            />
          </Link>
        </div>
        
        <div className='flex space-x-2 mr-3 text-gray-100'>
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header