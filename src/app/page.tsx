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
          <h2 className='header'>Skills</h2>
          <div className='skill-tooltip'>Click on a skill!</div>
          <div className='skills'>
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
            />
            <Skill
              url='https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg'
            />
            <Skill 
              url='https://raw.githubusercontent.com/d3/d3-logo/master/d3.svg'
            />
            <Skill 
              url='https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
            />
            <Skill
              url='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/archive/c/cb/20210519030119%21Adobe_After_Effects_CC_icon.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
            />
            <Skill 
              url='https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
