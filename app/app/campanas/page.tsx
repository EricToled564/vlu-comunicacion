
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, Users, Star, Calendar, Target, MessageSquare,
  ArrowRight, CheckCircle, BarChart3, Heart, Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AnimatedCounter from '@/components/animated-counter';

const campaigns = [
  {
    title: 'Campaña de Reposicionamiento Digital',
    description: 'Estrategia integral para mejorar la presencia online y aumentar las reservas directas.',
    image: 'https://lh4.googleusercontent.com/0TFqxJyMYqB_vzfc2a3628ok-QVdEjJhOcPZTGd7LSuaXD6l_tX2exd0KwZLc9ZGpj3SxLzf4DuwGqkbR20he06ZwYuYPo5gFYwjAX2HOfhCwSzy4b2GYo3G_E-Rop6OFdaP_CXN',
    status: 'En Progreso',
    duration: '6 meses',
    category: 'Digital Marketing',
    results: [
      { metric: 'Aumento en reservas directas', value: 35, suffix: '%' },
      { metric: 'Mejora en engagement', value: 180, suffix: '%' },
      { metric: 'Reducción en costo por adquisición', value: 25, suffix: '%' }
    ],
    objectives: [
      'Incrementar visibilidad online',
      'Mejorar tasa de conversión web',
      'Fortalecer presencia en redes sociales',
      'Optimizar experiencia de reserva'
    ],
    channels: ['Google Ads', 'Facebook/Instagram', 'Email Marketing', 'SEO']
  },
  {
    title: 'Programa de Fidelización "VLU Experience"',
    description: 'Sistema integral de lealtad para mejorar la retención y aumentar el valor de vida del cliente.',
    image: 'https://i.pinimg.com/originals/32/0b/9e/320b9e7d476e65c52c86c2a4953fe203.png',
    status: 'Planificado',
    duration: '12 meses',
    category: 'Customer Experience',
    results: [
      { metric: 'Tasa de repetición proyectada', value: 45, suffix: '%' },
      { metric: 'Incremento en gasto promedio', value: 30, suffix: '%' },
      { metric: 'NPS objetivo', value: 8.5, suffix: '/10' }
    ],
    objectives: [
      'Aumentar retención de huéspedes',
      'Incrementar valor promedio por estadía',
      'Mejorar satisfacción del cliente',
      'Generar recomendaciones orgánicas'
    ],
    channels: ['App Móvil', 'Email', 'SMS', 'In-Hotel Experience']
  },
  {
    title: 'Campaña de Comunicación de Crisis',
    description: 'Estrategia proactiva de comunicación para mantener la confianza durante situaciones adversas.',
    image: 'https://i.pinimg.com/originals/5e/51/68/5e5168b42924ba7290bb9973185a4c12.jpg',
    status: 'Completado',
    duration: '3 meses',
    category: 'Public Relations',
    results: [
      { metric: 'Mantenimiento de ocupación', value: 85, suffix: '%' },
      { metric: 'Sentimiento positivo en redes', value: 78, suffix: '%' },
      { metric: 'Tiempo de respuesta promedio', value: 2, suffix: 'h' }
    ],
    objectives: [
      'Mantener confianza del público',
      'Gestionar comunicación transparente',
      'Minimizar impacto en reservas',
      'Fortalecer reputación de marca'
    ],
    channels: ['Redes Sociales', 'Comunicados de Prensa', 'Email Directo', 'Website']
  }
];

const metrics = [
  {
    label: 'Ocupación Actual',
    current: 45,
    target: 65,
    suffix: '%',
    icon: TrendingUp,
    trend: '+8% vs mes anterior'
  },
  {
    label: 'Calificación Promedio',
    current: 7.9,
    target: 8.5,
    suffix: '/10',
    icon: Star,
    trend: '+0.3 vs trimestre anterior'
  },
  {
    label: 'Engagement Rate',
    current: 4.2,
    target: 6.0,
    suffix: '%',
    icon: Heart,
    trend: '+180% vs año anterior'
  },
  {
    label: 'Conversión Web',
    current: 2.8,
    target: 4.5,
    suffix: '%',
    icon: Target,
    trend: '+35% vs mes anterior'
  }
];

const upcomingCampaigns = [
  {
    title: 'Campaña de Temporada Alta 2025',
    launch: 'Marzo 2025',
    focus: 'Maximizar ocupación en temporada pico',
    budget: 'Alto',
    channels: ['Digital', 'Traditional', 'Partnerships']
  },
  {
    title: 'Programa de Sostenibilidad',
    launch: 'Abril 2025',
    focus: 'Comunicar iniciativas eco-friendly',
    budget: 'Medio',
    channels: ['Content Marketing', 'PR', 'Social Media']
  },
  {
    title: 'Expansión de Mercado Corporativo',
    launch: 'Mayo 2025',
    focus: 'Atraer eventos empresariales',
    budget: 'Alto',
    channels: ['B2B Marketing', 'Events', 'Direct Sales']
  }
];

export default function CampanasPage() {
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
              Campañas{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Estratégicas
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Iniciativas de comunicación diseñadas para transformar VLU Tequesquitengo 
              y alcanzar el objetivo del 65% de ocupación
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Progreso Hacia Nuestros Objetivos
            </h2>
            <p className="text-lg text-gray-600">
              Métricas clave que demuestran el impacto de nuestras campañas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const progress = (metric.current / metric.target) * 100;
              
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                        <Badge variant="secondary" className="text-xs">
                          {Math.round(progress)}%
                        </Badge>
                      </div>
                      <div className="mb-2">
                        <div className="text-2xl font-bold text-gray-900">
                          <AnimatedCounter 
                            end={metric.current} 
                            suffix={metric.suffix}
                            decimals={metric.suffix === '/10' ? 1 : 0}
                          />
                          <span className="text-sm text-gray-500 ml-2">
                            / {metric.target}{metric.suffix}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{metric.label}</h3>
                      <p className="text-xs text-green-600">{metric.trend}</p>
                      <div className="mt-3 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Campaigns */}
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
              Campañas Activas y Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Iniciativas estratégicas que están transformando la comunicación de VLU Tequesquitengo
            </p>
          </motion.div>

          <div className="space-y-16">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <Badge 
                        variant={campaign.status === 'En Progreso' ? 'default' : 
                                campaign.status === 'Completado' ? 'secondary' : 'outline'}
                        className="px-3 py-1"
                      >
                        {campaign.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{campaign.duration}</span>
                      <Badge variant="outline">{campaign.category}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{campaign.title}</h3>
                    <p className="text-gray-600 mb-6">{campaign.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {campaign.results.map((result) => (
                        <div key={result.metric} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            <AnimatedCounter 
                              end={result.value} 
                              suffix={result.suffix}
                              decimals={result.suffix === '/10' ? 1 : 0}
                            />
                          </div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Objetivos:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {campaign.objectives.map((objective) => (
                          <li key={objective} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Canales:</h4>
                      <div className="flex flex-wrap gap-2">
                        {campaign.channels.map((channel) => (
                          <Badge key={channel} variant="outline" className="text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Ver Detalles Completos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Campaigns */}
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
              Próximas Campañas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Iniciativas planificadas para continuar el crecimiento y alcanzar nuestros objetivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover bg-white border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{campaign.launch}</Badge>
                      <Badge variant={campaign.budget === 'Alto' ? 'default' : 'secondary'}>
                        {campaign.budget}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{campaign.focus}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Canales:</h4>
                      <div className="flex flex-wrap gap-1">
                        {campaign.channels.map((channel) => (
                          <Badge key={channel} variant="outline" className="text-xs">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              ¿Quieres Formar Parte del Éxito?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Únete a nuestras campañas estratégicas y ayúdanos a alcanzar el 65% de ocupación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Participar en Campañas
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Conocer Más Servicios
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
