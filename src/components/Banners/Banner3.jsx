import React from 'react'
import bp from "../../ass/banner-bg.jpg"
import { delay, motion } from 'framer-motion';
import { FadeLeft, FadeUp } from '../../utility/animation';

 const bgStyle = {
    backgroundImage:`url(${bp})`,
    backgroundPostion:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
 };

const Banner3 = () => { 
  return (
    <section className='pb-24'>
    <div 
    style={bgStyle}
    className='container grid grid-cols-2 p-2 rounded-3xl md:grid-cols-2 space-y-6 md:space-y-0 py-14  '>
    {/* Banner image  */}
       <div></div>
                  {/* brand info  */}
                  <div className='flex flex-col justify-center '>
                    <div className='text-center md:text-left space-y-4 lg:max-w[400px] '>
                    <motion.h1
                      variants={FadeLeft(0.3)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once:true}}
                      
                      className='text-3xl lg:text-6xl font-bold uppercase  '>Brand Info</motion.h1>
                      <motion.p
                      variants={FadeLeft(0.7)}
                      initial="hidden"
                          animate="visible"
                          viewport={{once:true}}
                      >Lorem ipsum dolor, sit amet consectetur 
      
                        ore perspiciatis odit at sequi tempora excepturi dolor eaque, soluta iure aperia
                        m voluptatibus!</motion.p>
                        <motion.p
                      variants={FadeLeft(0.9)}
                      initial="hidden"
                          viewport={{once:true}}
    
                          animate="visible">
                          Lorem ipsum dolor sit amet consectetur a  sequi tempora excepturi dolor eaque, soluta iure a dipisi
                      </motion.p>
                      {/* button section  */}
    
                      <motion.div
                       variants={FadeLeft(0.9)}
                       initial="hidden"
                       animate="visible"
                     className=' flex  justify-center  md:justify-start '>
                        <button className='primary-btn '>
                          
                            Learn More </button>
                     </motion.div>
    
                    </div>
                  </div>
    </div>
    
    
     </section>
    
  )
}

export default Banner3
