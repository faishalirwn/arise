import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="text-white font-sans px-4 sm:px-28 2xl:px-96">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="py-8 flex justify-between">
        <Link href="/">
          <a>
            <img 
              src="/papurika black.svg"
              className="h-14"
              alt="Website Logo" />
          </a>
        </Link>
        <button type="button" className="md:hidden">
          <img src="/nav white.svg" className="w-10" alt="Hamburger Menu Button"/>
        </button>
        <ul className="hidden md:flex">
          <li className="mr-14">
            <Link href="">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Works</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
          { children }
      </main>      
    </div>
  )
}