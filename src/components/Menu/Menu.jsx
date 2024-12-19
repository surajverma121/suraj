import React from 'react'

import f1 from "../../ass/fruits/apple.png";
import f2 from "../../ass/fruits/orange.png";
import f3 from "../../ass/fruits/avocado.png";
import f4 from "../../ass/fruits/cherry.png";
import { delay, motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';


 const MenusData= [
    {
        id :1,
        title :"Fresh Red Apple",
        link :"/",
        price:"$2.00",
        img :f1,
        delay:0.3,
    },
    {
        id :2,
        title :"Fresh Oranges",
        link :"/",
        price:"$3.00",
        img :f2,
        delay:0.6,


    },
    {
        id :3,
        title :"Fresh Avocado",
        link :"/",
        price:"$45.00",
        img :f3,
        delay:0.9,


    },
    {
        id :4,
        title :"Fresh Cherries",
        link :"/",
        price:"$4.00",
        img :f4,
        delay:1.2,


    },
 ]

const Menu = () => {
  return (
   <section>
<div className='container pt-12 pb-20'>
    <motion.h1
     initial={{opacity:0,x:-200}}
     whileInView={{opacity:1,x:0}}
     transition={{duration:1,delay:0.3}}
    className='text-2xl font-bold text-left pb-10 uppercase'>
         our menu     </motion.h1>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
    {
        MenusData.map((menu)=>(
            <motion.div 
             variants={FadeLeft(menu.delay)}
             initial="hidden"
             whileInView={"visible"}
             whileHover={{scale:1.1}}
             className='bg-white rounded-3xl px-4 py-2 shadow-lg flex flex-row justify-around items-center gap-3'
             >
                <img src={menu.img}
                alt=''
                  className='w-[60px] mb-4 scale-110 transform -translate-y-6 '
                />
                <div>
                    <h1 className='text-lg font-semibold '>{menu.title}</h1>
                <p className='text-lg font-semibold text-secandary '>{menu.price}</p>
                   
                </div>
                </motion.div>
        ))
    }
   </div>
</div>

   </section>

  )
}

export default Menu
