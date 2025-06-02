import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Decode | Agentes de IA a tu Medida</title>
        <meta name="description" content="Venta de agentes de IA especializados" />
      </Head>

      {/* Hero Section con video de fondo (como BLAC) */}
      <section className="relative h-screen overflow-hidden">
        <video 
          autoPlay loop muted 
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">DECODE</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Agentes de IA diseñados para revolucionar tu negocio.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-all">
            Ver Agentes
          </button>
        </motion.div>
      </section>

      {/* Sección de Módulos (similar a BLAC) */}
      <section className="py-20 px-4 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-16">Nuestros Agentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="bg-gray-900 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Agente {item}</h3>
              <p className="text-gray-300">
                Descripción del agente de IA con capacidades personalizadas.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}