'use client'
import Link from '../../node_modules/next/link'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
  <div className="w-full p-24 flex flex-col items-center justify-center flex-grow m-24 rounded-">
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
    <img src="/assets/images/Profile-min.jpg" alt="profile picture" className='rounded-full w-48'/>
    </motion.div>
    <h1 className='text-4xl md:text-6xl font-black text-center mt-5'>ADITYA JAYARAJAN</h1>
    <h2 className='text-2xl md:text-3xl font-medium text-center'>Application Developer 2</h2>
    <p className='mt-12'>
    I am a result-driven developer with a passion for full-stack web application development and core application maintenance. With a proven track record of streamlining processes, enhancing user experience, and driving efficiency, I thrive on creating solutions that make a real impact.
<br/>
<br/>
My expertise lies in leading code quality enhancements, optimizing workflows, and ensuring the seamless operation of critical tools. Throughout my career, I have consistently delivered impactful solutions, and I am always seeking new challenges to leverage my skills and knowledge.
<br/>
<br/>

I believe in the power of technology to transform lives and businesses, and I am dedicated to crafting elegant and efficient solutions that exceed expectations. Whether it's a complex project or an innovative idea, I am always eager to take on new opportunities and contribute to the ever-evolving world of software development.
<br/>
<br/>

Thank you for visiting my portfolio. Feel free to explore my projects and learn more about my journey in the world of development. If you have any questions or exciting collaboration opportunities, I would love to hear from you. Let's connect and create something exceptional together!
    </p>
  </div>
  <div className=''>
    <Link href="/portfolio">
  <button className="bg-accent-500 animate-bounce bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-4 mb-12 px-4 py-2 border border-gray-400 rounded-full shadow">
    Visit Portfolio
</button>
</Link>
  </div>
</main>

  )
}
