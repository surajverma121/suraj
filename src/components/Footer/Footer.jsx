import React from 'react'
import { motion } from 'framer-motion';
import { FaInstagram,FaWhatsapp  } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
  <footer className='bg-primary/10 flex  py-12 mt-14'>
    <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1,delay:0.2}}
     className='container  felx items-center items-center
     '
    >
        {/* logo secation  */}

        <div className=' text-2xl flex  uppercase items-center gap-2 font-bold '>
        <p className='text-primary'>Fruit</p>
        <p className='text-secandary' >Store</p>
    </div>
   

    </motion.div>
    <div className='text-3xl flex items-center gap-4 mt-6'>
   <FaInstagram/><FaFacebookSquare/>
   <IoLogoYoutube/>
   <FaWhatsapp/><IoLogoTwitter/>
   

    </div>

  </footer>
  )
}

export default Footer
