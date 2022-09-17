import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-6' src="./logo.svg" alt=""></img>
                    <span className="ml-3 text-xl">Gokart</span>
                </a>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/"><a className="m-2 hover:text-gray-900">Home</a></Link>
                <Link href="/products"><a className="m-2 hover:text-gray-900">Products</a></Link>
                <Link href="/about"><a className="m-2 hover:text-gray-900">About us</a></Link>
                <Link href="/contact"><a className="m-2 hover:text-gray-900">Contact us</a></Link>
            </nav>
            <button className="text-white bg-black px-4 py-1 duration-300 focus:outline-none hover:bg-white hover:text-black border-2 border-black rounded text-sm mt-3 sm:mt-0">Login</button>
            </div>
        </header>
  </div>
  )
}

export default NavBar