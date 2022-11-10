import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12 mx-auto ">
        <div>
          <Link href="/" className="ml-3">
            LOGO
          </Link>
        </div>
        
        <div className='flex space-x-2 mr-3'>
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