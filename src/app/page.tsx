'use client'

import Image from 'next/image'
import HomeBox from '@/components/box'
import Skill from '@/components/skill'
import skillCards from '@/../public/skillCards.json'
import { useState } from 'react'

function Home() {
  const [skillDescription, setSkillDescription] = useState({ __html: '<div class="placeholder-text">Click on a skill!<div>' })

  const changeSkill = (index: number) => {
    setSkillDescription({ __html: skillCards[index].block })
  }

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
          <div dangerouslySetInnerHTML={skillDescription} className='skill-tooltip' />
          <div className='skills'>
            {skillCards.map((skill, index) => ( 
              <Skill 
                alt="{skill.name} icon"
                key={index}
                url={skill.icon.image}
                index={index}
                func={changeSkill}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;