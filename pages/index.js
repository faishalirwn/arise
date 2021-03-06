import Head from 'next/head'
import Layout from '../components/layout'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Faishal Irawan</title>
      </Head>
      <motion.div className="relative py-28 md:px-20 md:text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="mb-10">
          <h1 className="font-heading text-5xl md:text-7xl md:mr-20">Faishal</h1>
          <h1 className="font-heading text-5xl ml-14 md:text-7xl md:ml-20">Irawan</h1>
        </div>
        <p className="mb-10 text-2xl text-white text-opacity-75 md:text-3xl">
          Hi, I'm a CS Student from Indonesia. I'm not a cat, I'm 100% Human.
        </p>
        <div className="text-xl flex flex-wrap md:justify-center md:text-2xl">
          <a href="https://www.linkedin.com/in/faishalirwn/" className="mr-8 social-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/faishalirwn" className="mr-8 social-link" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="mailto:faishalirwn@pm.me" className="social-link" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
        <div 
          style={{
            backgroundImage: "url('/callum-wale-5s0MuxRGf6M-unsplash.jpg')",
            zIndex: '-1',
          }} 
          className="absolute top-0 right-0 w-200px h-300px bg-no-repeat bg-cover opacity-20 sm:w-500px sm:h-600px md:-right-32">
        </div>
      </motion.div>
    </Layout>
  )
}
