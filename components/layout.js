import React from 'react'
import logo from '../public/logo.png'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Layout({ children }) {
    return (
        <div className='w-full min-h-screen'>
            <header>
                <div className='fixed top-6 w-full z-20' role='navigation'>
                    <nav className='flex justify-between items-center lg:w-3/5 sm:w-4/5 w-full h-12 mx-auto md:px-10 px-5 bg-gray-600 opacity-80 rounded-3xl'>
                        <div className='flex justify-between space-x-3'>
                            <Image src={logo} width={25} height={25} alt='logo' />
                            <Link href='/'><span className={`text-xl ${styles.text}`}>Company Name</span></Link>
                        </div>
                        <div className='flex justify-between items-center space-x-10'>
                            <Link href='/' className={styles.text}>Home</Link>
                            <Link href='/about' className={styles.text}>About</Link>
                            <Link href='/contact' className={styles.text}>Contact</Link>
                        </div>
                    </nav>
                </div>
            </header>
            {children}
        </div>
    )
}

export default Layout