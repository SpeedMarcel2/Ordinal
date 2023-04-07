import { motion } from "framer-motion";
import React from "react";
import AnimatedText from "../AnimatedText";
import Link from "next/link";

const Roadmap = () => {


  return (
    <section
      id="roadmap"
      className="w-full relative flex flex-col items-center justify-between py-16"
    >
      {/* <h2 className="w-full text-center self-start mt-16 text-6xl uppercase">
        Roadmap
      </h2> */}

      <AnimatedText
        text="Roadmap"
        className="w-full mt-16 !text-6xl py-2 drop-shadow-3xl !text-light/90 md:!text-5xl sm:!text-4xl"
      />

<span className="mt-8 text-lg md:text-base xs:text-sm text-light/75 capitalize">Our roadmap has three phases.</span>
      <ul
        className="flex flex-col w-[75%] min-h-[60vh] mt-8 text-lg font-light relative
        md:w-[85%] sm:w-[90%] md:text-base sm:text-sm
        "
      >
        {/* <motion.div
            className="absolute -left-4 top-0   w-[2px]   
            h-full bg-light 
            origin-top"
            style={{ scaleY: scrollYProgress }}
          /> */}
        {/* <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="w-full h-full p-8 xs:p-6 bg-light/5 rounded-lg backdrop-blur-lg 
        border border-solid border-primary/50 shadow-primary/25 shadow-md mb-12 md:mb-6"
        >
          <p className="mb-4">
            What&apos;s our secret sauce? A blend of unstoppable ambition,
            ironclad values, and an unyielding drive for success. Join us on
            this thrilling adventure, and together we&apos;ll transform the
            Unknown into the Unforgettable!
          </p>

          <p>
            🛣 <span className="font-bold">MovieMak3rs Roadmap:</span> Embark on
            the Journey to Unravel the Mystery of MovieMak3rs 🛣
          </p>
        </motion.li> */}

        <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="my-12 md:my-8 w-full h-full p-8 xs:p-6 bg-light/5 rounded-lg backdrop-blur-lg 
        border border-solid border-primary/50 shadow-primary/25 shadow-md"
        >
          <h3 className="font-semibold mb-4 text-2xl md:text-xl sm:text-lg capitalize">
          Phase One - Genesis
          </h3>
          <ul className="list-disc px-4">
            <li>
            Launch of our collection
            </li>
            <li>
            Providing practical value
            </li>
            <li>
            Building a strong community culture.
            </li>
          </ul>
        </motion.li>

        <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="my-12 md:my-8 w-full h-full p-8 xs:p-6 bg-light/5 rounded-lg backdrop-blur-lg 
        border border-solid border-primary/50 shadow-primary/25 shadow-md"
        >
          <h3 className="font-semibold mb-4 text-2xl md:text-xl sm:text-lg capitalize">
          Phase two - Growth
          </h3>
          <ul className="list-disc px-4">
            <li>
            We&apos;ll enlarge our community
            </li>
            <li>
            Develop our own System with new features for our members.
            </li>
            <li>
            Doing Collabs with other people in the Sapce
            </li>
          </ul>
        </motion.li>

       

        <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="my-12 md:my-8 w-full h-full p-8 xs:p-6 bg-light/5 rounded-lg backdrop-blur-lg 
        border border-solid border-primary/50 shadow-primary/25 shadow-md"
        >
          <h3 className="font-semibold mb-4 text-2xl md:text-xl sm:text-lg capitalize">
            Phase three - Expansion
          </h3>
          <ul className="list-disc px-4">
            <li>
            Will be released at the start of Phase 2
            </li>
          </ul>
        </motion.li>
        <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="w-full flex items-center justify-center my-8"
          >
        <Link href="https://gamma.io/ordinals/collections/the-odessey-of-the-unknownmen?tab=market"
        target="_blank"
         className="  text-primary px-12 py-4 rounded-md font-bold
         transition-all ease duration-200
         border border-solid border-primary
         hover:bg-primary hover:text-dark

         text-2xl
         ">
          Mint Now
        </Link>
        </motion.li>
        <motion.li
          initial={{ y: 100 }}
          whileInView={{ y: 0, transition: { duration: 0.3 } }}
          className="w-full h-full p-8 xs:p-6 bg-light/5 rounded-lg backdrop-blur-lg 
        border border-solid border-primary/50 shadow-primary/25 shadow-md my-12 md:my-8"
        >
          <p >
          But hold on - we&apos;re not opening our doors just yet. You&apos;ll need to follow us on Twitter to gain
access. On our Twitter page, you&apos;ll get a sneak peek at the knowledge and resources we
provide.
          </p>

          <p className="my-4">
          To gain access to our exclusive club, you&apos;ll need one of the 333 keys available at a cost of
35€ each, purchasable through bitcoin Ordinals.
          </p>
          <p>
          We&apos;re excited to see you on the inside, where you can begin your journey towards creating a
legacy of Generational Wealth.
          </p>
        </motion.li>
      </ul>
    </section>
  );
};

export default Roadmap;
