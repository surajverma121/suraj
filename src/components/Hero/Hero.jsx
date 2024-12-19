import React from 'react'
import { FaShopify } from "react-icons/fa";
import pg from "../../ass/fruit-plate.png";
import pg1 from "../../ass/leaf.png";
 import { motion } from 'framer-motion';
import { FadeRight } from '../../utility/animation';
 

 
const Hero = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative '>
            {/* barnd info  */}
 
                 <div className=' flex  flex-col justify-center py-14  md:py-0 relative z-10'>
                <div className='text-center md:text-left  space-x-6 lg:max-w-[400px]'>


                 <motion.h1
                  variants={FadeRight(0.6)}
                  initial="hidden"
                  animate="visible"
                 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia ' >Healthy

                <br />
                       Fresh <span className='text-secandary' >Fruits!</span>
                 </motion.h1>
                 <motion.p 
                   variants={FadeRight(0.9)}
                   initial="hidden"
                   animate="visible"
                 
                 className='text-2xl tracking-wide '> Order Now Fresh healthy Life </motion.p>
                 <motion.p
                   variants={FadeRight(1.2)}
                   initial="hidden"
                   animate="visible"
                 className='text-gray-500 '> dolorum saepe obcaecati molestias assumenda molestiae ut doloribus ullam sed voluptates illum culpa, placeat, suscipit obcaecati, recusandae eum inventore a! Repudiandae, animi corrupti!</motion.p>
                </div>
                 {/* button section  */}
                
                 <motion.div
                   variants={FadeRight(1.5)}
                   initial="hidden"
                   animate="visible"
                 className=' flex  justify-center  md:justify-start '>
                    <button className='primary-btn flex items-center gap-2'>
                         <span>
                            <FaShopify/>
                         </span>
                        Order Now</button>
                 </motion.div>

               </div> 
               {/* hero images  */}
 <div className='flex  justify-center items-center'>
    <motion.img  
     initial={{opacity:0,x:200,rotate:75}}
     animate={{opacity:1,x:0,rotate:0}}
     transition={{duration:1,delay:0.2}}

    src={pg} alt='' className='w-[350px] md:w-[550px] drop-shadow ' />
 </div>

         {/* leaf section  */}
         
          <div className='absolute  top-14 md:top-0   right-1/2 blur-sm  opacity-80  rotate-[40deg]'>
              <motion.img 
                   initial={{opacity:0,y:-200,rotate:75}}
                   animate={{opacity:1,x:0,rotate:0}}
                   transition={{duration:1,delay:1.5}}
              src= {pg1} alt='' className='w-full md:max-w[300px]'/>  
             
            </div> 
        </div>
    </section>
  )
}

export default Hero
