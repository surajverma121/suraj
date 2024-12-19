import React, { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';

 const NavbarMenu = [
    {
        id:1,
        title:"Home",
        link:"/"
    },
    {
        id:1,
        title:"Home",
        link:"/"
    }, {
        id:2,
        title:"Product",
        link:"/"
    }, {
        id:3,
        title:"About",
        link:"/"
    }, {
        id:4,
        title:"Shop",
        link:"/"
    },
    {
        id:5,
        title:"Contact",
        link:"/"
    },
 ]

const Navbar = () => {
   const [open ,setOpen] = useState(false);
 
  return (
    <>
<nav>
  <motion.div

  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5,delay:0.5}}
  className="cantainer flex justify-between items-center py-4 md:pt-4">
    {/* logo section  */}
    <div className=' text-2xl flex  uppercase items-center gap-2 font-bold '>
        <p className='text-primary'>Fruit</p>
        <p className='text-secandary' >Store</p>
        <FaLeaf className=' text-green-500'/>
    </div>

    {/* Menu section  */}

    <div className='hidden md:block' >
        <ul  className='flex items-center gap-6 text-gray-600'>
            {NavbarMenu.map((menu)=>(
                <li key={menu.id}  >
                  <a href={menu.link}
                   className=" inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3xl_0_-1px_#ef4444] font-semibold "
                   >{menu.title}</a>
                </li>
            ))}
            <button className=' text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300'>
         <MdOutlineShoppingCart/>
            </button>
        </ul>

    </div>

      {/* mobile menu section  */}
         <div className="md:hidden cursor-pointer " onClick={()=>
            setOpen(!open)
        }>
            <MdMenu className='text-4xl'/>
            
         </div>
        

  </motion.div>

</nav>
  <ResponsiveMenu open={open}/>

             </>
)
}

export default Navbar
