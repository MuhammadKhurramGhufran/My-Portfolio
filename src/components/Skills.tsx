import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
            <h2 className ='text-5xl underline underline-offset-1 text-center'> SKILLS </h2>
            <h2 className='text-4xl md:text-5xl'>My Tech</h2>
            <p className='text-gray-500 pt-2'>
            My technical expertise encompasses a robust and versatile suite of technologies. I proficiently utilize Node.js for seamless backend functionality, leveraging its capabilities to create scalable server-side applications. For frontend development, I employ Next.js, capitalizing on its remarkable speed and performance. Additionally, I skillfully apply CSS to craft visually stunning interfaces and HTML to structure innovative web experiences. Furthermore, I utilize Python for data-driven insights and automation, effectively bridging the gap between web development and data analysis.
            </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'> 
                    <div className='space-y-2 '>
                        <h2>TypeScripr</h2>
                        <h2>React.Js</h2>
                        <h2>Next.Js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind Css</h2>
                        <h2>CSS</h2>
                        <h2>Node.js</h2>
                    </div>
                </div>
            </div>
            </div>
      
    </div>
  )
}

export default Skills
