import React from 'react'
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <div className='min-h-screen pb-10 bg-gradient-to-b from-rose-500 to-orange-400'>
                <div className='lg:w-1/2 md:w-3/4 w-11/12 mx-auto pt-32'>
                    <h1 className='text-5xl font-bold text-gray-200 mb-5'>Contact</h1>
                    <p className='text-lg text-gray-100'>Enim dolore incididunt non pariatur. Quis Lorem incididunt excepteur officia laboris enim ex labore quis culpa cupidatat. Magna magna magna amet sit commodo sint reprehenderit laborum dolore sint et mollit deserunt. Amet et eiusmod ipsum quis culpa laborum qui. Sint consequat ipsum dolor est sint tempor id commodo non eiusmod. Anim adipisicing sunt laborum irure elit nulla officia voluptate eiusmod labore. Aute ea laboris eiusmod amet ad proident.</p>
                    <div className='flex justify-between items-center text-lg text-gray-100 mt-14'>
                        <ol>
                            <li>Address:</li>
                            <li>4567 Maple Avenue,</li>
                            <li>Oakwood Heights,</li>
                            <li>Sunset City,</li>
                            <li>Fantasia Country,</li>
                            <li>64356</li>
                        </ol>
                        <ol>
                            <li>Phone Number: +1 555-123-4567</li>
                            <li>Fax Number: +1 555-987-6543</li>
                            <li>Email Address: info@example.com</li>
                        </ol>
                    </div>
                </div>
            </div>
        </Layout>
    )
}