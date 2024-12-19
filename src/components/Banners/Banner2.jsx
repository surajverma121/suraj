import React from 'react';
import bp from "../../ass/fruit-plate2.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const Banner2 = () => {
  return (
    <section className="py-14 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Brand Info */}
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase"
          >
            Brand Info
          </motion.h1>
          <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur perspiciatis odit at sequi tempora excepturi dolor eaque, soluta iure aperiam voluptatibus!
          </motion.p>
          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            viewport={{ once: true }}
            animate="visible"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora excepturi dolor eaque, soluta iure adipisci.
          </motion.p>
          {/* Button Section */}
          <motion.div
            variants={FadeUp(1.5)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">Learn More</button>
          </motion.div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x:200, rotate:75 }}
            whileInView={{ opacity:1,x:0,  rotate: 0 }}
            transition={{duration:1,delay:0.2}}
            viewport={{ once: true }}
            src={bp} 
            alt="Fruit Plate"
            className="w-[300px] md:w-[400px] drop-shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>  
  );
};

export default Banner2;
