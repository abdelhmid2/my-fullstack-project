import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Users, Award, ArrowLeft, Play, Star, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from '../components/common/AnimatedSection';

const Home: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'دروس شاملة',
      description: 'دروس مفصلة تغطي جميع جوانب البرمجة من الأساسيات إلى المستوى المتقدم',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'أمثلة عملية',
      description: 'مشاريع حقيقية وأمثلة تطبيقية لفهم المفاهيم بشكل أفضل',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'مجتمع داعم',
      description: 'انضم لمجتمع المطورين العرب وتعلم مع الآخرين',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'مسار منظم',
      description: 'خطة تعليمية محكمة تأخذك من المبتدئ إلى المحترف',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '10000+', label: 'طالب', icon: <Users className="h-6 w-6" /> },
    { number: '500+', label: 'درس', icon: <BookOpen className="h-6 w-6" /> },
    { number: '50+', label: 'مشروع', icon: <Code className="h-6 w-6" /> },
    { number: '99%', label: 'رضا المتعلمين', icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 particles-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                مرحباً {user?.firstName}! 👋
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  كود بالعربي
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                تعلم البرمجة من الصفر باللغة العربية مع أفضل المصادر والدروس المجانية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/how-to-start"
                className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>ابدأ رحلة التعلم</span>
                <ArrowLeft className="h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/resources"
                className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Play className="h-5 w-5" />
                <span>المصادر المجانية</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-40 right-20 w-12 h-12 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-8 h-8 bg-accent-200 dark:bg-accent-800 rounded-full opacity-60"
        />
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا كود بالعربي؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نقدم لك كل ما تحتاجه لتصبح مطور محترف من خلال منهجية واضحة ومصادر عالية الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك في عالم البرمجة اليوم
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              انضم إلى آلاف الطلاب العرب الذين بدأوا رحلتهم معنا وحققوا أحلامهم في عالم التكنولوجيا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/what-is-programming"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                تعرف على البرمجة
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;