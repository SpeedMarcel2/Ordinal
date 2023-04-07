import Image from "next/image";
import React from "react";
import aboutImg from "../../../public/images/peoples.png";
import Link from "next/link";
import AnimatedText from "../AnimatedText";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen relative flex items-center justify-between
    lg:flex-col
    ">
      <div className="w-1/2 h-screen relative xl:w-3/5 lg:w-full">
        <Image
          src={aboutImg}
          fill
          alt="Unknown Man"
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </div>
      <div
        className="w-1/2 xl:w-2/5 h-auto px-16
      bg-dark/25 backdrop-blur-sm flex flex-col lg:absolute
      lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
      lg:border lg:border-solid lg:border-primary/75 lg:p-12
      lg:shadow-primary/25 lg:shadow-md lg:w-[75%] lg:rounded-lg
      lg:bg-dark/75 md:w-[85%]  sm:w-[90%] sm:p-8
      "

//       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
// w-[70%] min-h-[60vh] bg-dark/75 backdrop-blur-sm p-12 px-16 rounded-lg border border-solid border-light/75
//  shadow-primary/25 shadow-md
// "
      >
        {/* <h2 className="text-4xl font-bold capitalize">Welcome to Unknown Men NFT! 🎉</h2> */}
        <AnimatedText text="Welcome to Unknown Men" 
        className='w-full !text-5xl font-bold capitalize !text-left xl:!text-4xl lg:!text-center
        md:!text-3xl xs:!text-2xl
        '/>

        <p className="mt-8 mb-2 text-base md:text-base xs:text-sm">
        Are you dreaming of creating a legacy of Generational Wealth? You&apos;re not alone! Many
people desire it, but only a few can truly achieve it. These individuals are the true elite, and
we believe that you can learn a lot from them.
        </p>
        <p className="my-2 text-base md:text-base xs:text-sm">
        With the wealth of resources available to us today, it&apos;s possible to learn from those who have
created their own dynasties and replicate their success while avoiding their mistakes.
        </p>
        <p className="my-2 text-base md:text-base xs:text-sm">
        Regardless of your background, you have access to the knowledge and tools needed to
establish your own legacy.
        </p>
        <p className="mt-2 text-base md:text-base xs:text-sm">
        You might not have been born into a rich family, but you have everything you need for a rich
family to be born from you.
        </p>
        <Link href="https://gamma.io/ordinals/collections/the-odessey-of-the-unknownmen?tab=market" 
        target="_blank"  className="lg:w-full lg:text-center mt-4 underline underline-offset-4 text-lg font-medium
        text-primary
        ">
            Mint Now &#8594;
        </Link>
      </div>
    </section>
  );
};

export default About;
