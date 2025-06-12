
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, MessageSquare, Users, TrendingUp, Search, Share2, 
  BarChart3, Heart, Smartphone, Globe, Camera, Edit3,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/header';
import Footer from '@/components/footer';

const mainServices = [
  {
    title: 'Estrategia Digital Integral',
    description: 'Desarrollo completo de presencia digital con enfoque en conversión y ROI medible.',
    icon: Target,
    image: 'https://www.geckoboard.com/uploads/Social-media-overview-dashboard.png',
    features: [
      'Auditoría digital completa',
      'Estrategia SEO/SEM personalizada',
      'Optimización de conversiones',
      'Analytics y reporting avanzado'
    ],
    benefits: [
      'Aumento del 40% en tráfico web',
      'Mejora del 25% en conversiones',
      'ROI medible y transparente'
    ]
  },
  {
    title: 'Comunicación Corporativa',
    description: 'Fortalecimiento de identidad de marca y comunicación estratégica interna/externa.',
    icon: MessageSquare,
    image: 'https://c8.alamy.com/comp/H8YX5N/business-people-corporate-meeting-presentation-communication-concept-H8YX5N.jpg',
    features: [
      'Desarrollo de identidad corporativa',
      'Estrategia de relaciones públicas',
      'Gestión de crisis comunicacional',
      'Comunicación interna efectiva'
    ],
    benefits: [
      'Mayor reconocimiento de marca',
      'Mejor reputación online',
      'Comunicación unificada'
    ]
  },
  {
    title: 'Experiencia del Huésped',
    description: 'Optimización integral del customer journey desde la primera interacción hasta la fidelización.',
    icon: Users,
    image: 'https://i.pinimg.com/originals/0c/8e/ca/0c8eca2601afff830d0ae8183253f412.png',
    features: [
      'Mapeo del customer journey',
      'Sistemas de feedback integrados',
      'Programas de fidelización',
      'Personalización de experiencias'
    ],
    benefits: [
      'Aumento en satisfacción del huésped',
      'Mayor tasa de repetición',
      'Incremento en recomendaciones'
    ]
  }
];

const digitalServices = [
  {
    title: 'SEO & SEM',
    description: 'Posicionamiento orgánico y campañas pagadas optimizadas',
    icon: Search,
    metrics: '+150% tráfico orgánico'
  },
  {
    title: 'Redes Sociales',
    description: 'Gestión integral de presencia en plataformas sociales',
    icon: Share2,
    metrics: '+200% engagement'
  },
  {
    title: 'Content Marketing',
    description: 'Creación de contenido relevante y de valor',
    icon: Edit3,
    metrics: '+80% tiempo en sitio'
  },
  {
    title: 'Analytics',
    description: 'Medición y optimización basada en datos',
    icon: BarChart3,
    metrics: 'ROI +150%'
  },
  {
    title: 'Email Marketing',
    description: 'Campañas automatizadas de nurturing y conversión',
    icon: Heart,
    metrics: '+45% conversión'
  },
  {
    title: 'Mobile Strategy',
    description: 'Optimización para dispositivos móviles',
    icon: Smartphone,
    metrics: '+60% mobile traffic'
  }
];

const process = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Análisis profundo de la situación actual y identificación de oportunidades'
  },
  {
    step: '02',
    title: 'Estrategia',
    description: 'Desarrollo de plan personalizado con objetivos claros y KPIs medibles'
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Ejecución de la estrategia con metodología ágil y seguimiento continuo'
  },
  {
    step: '04',
    title: 'Optimización',
    description: 'Análisis de resultados y optimización continua para maximizar ROI'
  }
];

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comunicación Estratégica
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Soluciones integrales diseñadas para transformar la comunicación de VLU Tequesquitengo 
              y alcanzar el objetivo del 65% de ocupación
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Características:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-semibold text-gray-900 mb-3">Beneficios:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-gray-600">
                            <TrendingUp className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Solicitar Información
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Services Grid */}
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
              Servicios Digitales Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas y estrategias digitales que impulsan el crecimiento y la visibilidad online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => {
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
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                        <span className="text-sm font-semibold text-blue-600">{service.metrics}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Metodología probada que garantiza resultados medibles y sostenibles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
              ¿Listo para Implementar tu Estrategia?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Comencemos con una consultoría gratuita para evaluar tus necesidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Solicitar Consultoría Gratuita
                </Button>
              </Link>
              <Link href="/campanas">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Ver Casos de Éxito
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
