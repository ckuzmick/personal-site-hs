import Image from 'next/image'
import HomeBox from '@/components/box'
import Skill from '@/components/skill'

export default function Home() {
  return (
    <main>
      <section className='top'>
        <div className='home-text'>
          <div>
            <h1 className='home-title'>Conrad Kuzmick</h1>
            <p>9th Grade Student</p>
          </div>
        </div>
        <div className='top-circle'>
          <HomeBox/>
        </div>
      </section>
      <section className='second'>
        <div className='second-text'>
          <h2 className='header'>Skills:</h2>
          <div className='skills'>

          </div>
        </div>
      </section>
    </main>
  )
}
