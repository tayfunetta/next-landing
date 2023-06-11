import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Index.module.css'
import photo1 from '../public/photo1.jpg'
import photo2 from '../public/photo2.jpg'
import photo3 from '../public/photo3.jpg'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(800)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })

    window.addEventListener('scroll', () => {
      const title = document.getElementById('title')
      if (title) {
        if (window.scrollY >= 75) {
          title.classList.add('title-smaller')
          title.classList.remove('title-bigger')
        } else {
          title.classList.add('title-bigger')
          title.classList.remove('title-smaller')
        }
      }

      const pair1 = document.querySelectorAll('.pair1')
      if (windowWidth >= 768) {
        if (window.scrollY >= 1100) {
          pair1[0].classList.remove('right-[200%]')
          pair1[0].classList.add('right-0')
          pair1[1].classList.remove('left-[200%]')
          pair1[1].classList.add('left-0')
        }
      } else {
        if (window.scrollY >= 1500) {
          pair1[0].classList.remove('right-[200%]')
          pair1[0].classList.add('right-0')
          pair1[1].classList.remove('left-[200%]')
          pair1[1].classList.add('left-0')
        }
      }


      const pair2 = document.querySelectorAll('.pair2')
      if (windowWidth >= 768) {
        if (window.scrollY >= 2000) {
          pair2[0].classList.remove('right-[200%]')
          pair2[0].classList.add('right-0')
          pair2[1].classList.remove('left-[200%]')
          pair2[1].classList.add('left-0')
        }
      } else {
        if (window.scrollY >= 2600) {
          pair2[0].classList.remove('right-[200%]')
          pair2[0].classList.add('right-0')
          pair2[1].classList.remove('left-[200%]')
          pair2[1].classList.add('left-0')
        }
      }


    }
    )
  }, [])

  return (
    <Layout>
      <div className='fixed w-full h-5/6 bg-rose-500 flex justify-center items-center'>
        <h1 id='title' className='title-bigger text-center text-gray-200'>Your Company</h1>
      </div>

      <div className={`${styles.shadow} absolute top-[80%] w-full bg-orange-300 py-32 rounded-3xl overflow-hidden z-10`}>
        <section>
          <h2 className='text-6xl text-center mb-10 underline decoration-sky-700 decoration-4 underline-offset-4'>Who are we?</h2>
          <div className='grid md:grid-cols-2 max-w-[50rem] mx-auto'>
            <p className='text-end text-2xl text-gray-800 leading-relaxed px-5'>Nostrud sint eiusmod anim pariatur incididunt cillum ullamco qui mollit.Fugiat deserunt reprehenderit ex consectetur consequat cillum qui Lorem aliquip aliquip amet tempor mollit dolor.Labore laborum proident do in in culpa sit. Velit commodo sit magna ut ullamco id magna tempor elit. Esse officia culpa consequat sunt eiusmod sit commodo minim minim non nulla proident excepteur. Officia sit aliquip proident consectetur nostrud eu laboris tempor.</p>
            <Image src={photo1} className='md:w-full w-2/3 mx-auto' alt='employers working on a table' />
          </div>
        </section>

        <section className='mt-32'>
          <h2 className='text-6xl text-center mb-10 underline decoration-sky-700 decoration-4 underline-offset-4'>What do we do?</h2>
          <div className='grid md:grid-cols-2 max-w-[50rem] mx-auto'>
            <Image src={photo2} className='pair1 relative right-[200%] md:w-full w-2/3 mx-auto' alt='two employers looking at a notebook' />
            <p className='pair1 relative left-[200%] text-start text-2xl text-gray-800 leading-relaxed px-5'>Nostrud sint eiusmod anim pariatur incididunt cillum ullamco qui mollit.Fugiat deserunt reprehenderit ex consectetur consequat cillum qui Lorem aliquip aliquip amet tempor mollit dolor.Labore laborum proident do in in culpa sit. Velit commodo sit magna ut ullamco id magna tempor elit. Esse officia culpa consequat sunt eiusmod sit commodo minim minim non nulla proident excepteur. Officia sit aliquip proident consectetur nostrud eu laboris tempor.</p>
          </div>
        </section>

        <section className='mt-32'>
          <h2 className='text-6xl text-center mb-10 underline decoration-sky-700 decoration-4 underline-offset-4'>Why choose us?</h2>
          <div className='grid md:grid-cols-2 max-w-[50rem] mx-auto'>
            <p className='pair2 relative right-[200%] text-end text-2xl text-gray-800 leading-relaxed px-5'>Nostrud sint eiusmod anim pariatur incididunt cillum ullamco qui mollit.Fugiat deserunt reprehenderit ex consectetur consequat cillum qui Lorem aliquip aliquip amet tempor mollit dolor.Labore laborum proident do in in culpa sit. Velit commodo sit magna ut ullamco id magna tempor elit. Esse officia culpa consequat sunt eiusmod sit commodo minim minim non nulla proident excepteur. Officia sit aliquip proident consectetur nostrud eu laboris tempor.</p>
            <Image src={photo3} className='pair2 relative left-[200%] md:w-full w-2/3 mx-auto h-full object-cover' alt='two hands shaking' />
          </div>
        </section>
      </div>
    </Layout>
  )
}