
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Star, Target, MessageSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AnimatedCounter from '@/components/animated-counter';

const stats = [
  {
    label: 'Ocupación Actual',
    value: 45,
    target: 65,
    suffix: '%',
    icon: TrendingUp,
    description: 'Objetivo: incremento del 20%'
  },
  {
    label: 'Calificación Promedio',
    value: 7.9,
    suffix: '/10',
    icon: Star,
    description: 'Experiencia del huésped'
  },
  {
    label: 'Canales Digitales',
    value: 8,
    suffix: '+',
    icon: MessageSquare,
    description: 'Plataformas integradas'
  },
  {
    label: 'ROI Proyectado',
    value: 150,
    suffix: '%',
    icon: BarChart3,
    description: 'Retorno de inversión'
  }
];

const services = [
  {
    title: 'Estrategia Digital',
    description: 'Desarrollo de presencia digital integral con enfoque en conversión y engagement.',
    icon: Target,
    features: ['SEO/SEM', 'Redes Sociales', 'Content Marketing', 'Analytics']
  },
  {
    title: 'Comunicación Corporativa',
    description: 'Fortalecimiento de la identidad de marca y comunicación interna/externa.',
    icon: MessageSquare,
    features: ['Branding', 'PR', 'Crisis Management', 'Internal Comms']
  },
  {
    title: 'Experiencia del Huésped',
    description: 'Optimización del journey del huésped desde la reserva hasta el check-out.',
    icon: Users,
    features: ['CX Design', 'Feedback Systems', 'Loyalty Programs', 'Personalization']
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/originals/2b/b1/7d/2bb17d8ff5289f03cf79c97d6269257a.jpg"
            alt="VLU Tequesquitengo Resort"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos la{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comunicación Hotelera
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Estrategias innovadoras que aumentan la ocupación del 45% al 65% 
              y mejoran la experiencia del huésped en VLU Tequesquitengo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/servicios">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                  Conocer Servicios
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                  Solicitar Consultoría
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados que Transforman
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Datos clave de nuestra estrategia de comunicación para VLU Tequesquitengo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 card-hover bg-white border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        <AnimatedCounter 
                          end={stat.value} 
                          suffix={stat.suffix}
                          decimals={stat.suffix === '/10' ? 1 : 0}
                        />
                        {stat.target && (
                          <span className="text-sm text-gray-500 ml-2">
                            → {stat.target}{stat.suffix}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales de comunicación diseñadas específicamente para la industria hotelera
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full card-hover bg-white border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/servicios">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Transformar tu Comunicación?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Comencemos a trabajar juntos para alcanzar el 65% de ocupación y mejorar la experiencia de tus huéspedes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Solicitar Consultoría Gratuita
                </Button>
              </Link>
              <Link href="/campanas">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Ver Campañas Exitosas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
