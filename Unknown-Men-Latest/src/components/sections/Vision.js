import Image from "next/image";
import React from "react";
import visionImg from "../../../public/images/old-man-boat.png";
import AnimatedText from "../AnimatedText";
import {motion} from "framer-motion";

const Vision = () => {
  return (
    <section id="vision" className="w-full min-h-screen relative flex items-center justify-between">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen">
        <Image
          src={visionImg}
          fill
          alt="Unknown Man"
          className="w-full h-auto object-cover object-top"
          sizes="100vw"
        />
      </div>

      <motion.div
      initial={{y:100, x:"-50%"}}
      whileInView={{y:"-50%", x:"-50%", transition:{duration:0.3}}}
      viewport={{once: true}}

        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
w-[70%] min-h-[40vh] bg-dark/75 backdrop-blur-sm p-12 px-16 rounded-lg border border-solid border-light/75
 shadow-primary/25 shadow-md md:w-[85%] sm:w-[90%] sm:p-8
"
      >
        {/* <h2 className="text-6xl w-full text-center font-bold uppercase drop-shadow-xl">Vision</h2> */}
        <AnimatedText text="Vision" 
        className='w-full !text-6xl font-bold capitalize drop-shadow-xl 
        md:!text-5xl sm:!text-4xl
        '/>
       
        <p className="text-lg lg:text-base sm:text-sm xs:text-xs font-normal sm:mt-4 mt-8">
        At Unknown, we understand that the path to generational wealth is more than just about
money. It requires a strong moral compass, principles, values, and standards to guide your
actions. But with patience, persistence, and effective systems, the rewards that await you
are beyond imagination.
        </p>
        <p className="text-lg lg:text-base sm:text-sm xs:text-xs font-normal  my-4">
        If you&apos;re ready to commit to the long-term game of generational wealth and believe that you
deserve this kind of reward, then welcome to Unknown. Here, we provide proven methods
and clear tactics that can help you achieve your goals.
        </p>
        {/* <p className="text-lg lg:text-base sm:text-sm xs:text-xs font-normal   ">
          Together, we will transform the entertainment landscape, redefine
          success, and pave the way for a new era of creative exploration and
          achievement. The future is ours to shape, and with the Unknown Men NFT
          community by our side, there&apos;s no limit to what we can accomplish.
        </p> */}
      </motion.div>
    </section>
  );
};

export default Vision;
