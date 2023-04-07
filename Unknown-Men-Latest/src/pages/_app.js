import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat, Raleway } from 'next/font/google'
import { useRouter } from "next/router";


const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['400','500'],
})

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <main className={`${raleway.variable} ${mont.variable} font-mont relative 
       bg-dark text-light`}>
      <NavBar />
      <AnimatePresence  mode="wait">
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      </main>
    </>
  );
}
