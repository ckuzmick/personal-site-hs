import Image from 'next/image'
import HomeBox from '@/components/box'

export default function Home() {
  return (
    <main>
      <section className='grid items-center'>
        <h1 className='home-title'>Conrad Kuzmick</h1>
        <p className='home-desc'>Working on code</p>
        <HomeBox/>
      </section>
    </main>
  )
}
