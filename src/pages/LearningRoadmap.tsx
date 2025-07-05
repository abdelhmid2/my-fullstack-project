import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Clock, Target, Star, ArrowRight, Code, Palette, Zap, Rocket } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const LearningRoadmap: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapSteps = [
    {
      phase: 1,
      title: 'المرحلة الأولى: الأساسيات',
      duration: '4-6 أسابيع',
      level: 'مبتدئ',
      color: 'from-green-500 to-green-600',
      icon: <Code className="h-8 w-8" />,
      technologies: [
        {
          name: 'HTML',
          description: 'هيكل صفحات الويب',
          duration: '2 أسبوع',
          skills: ['العناصر الأساسية', 'النماذج والجداول', 'الروابط والصور', 'البنية الصحيحة'],
          projects: ['صفحة شخصية بسيطة', 'CV بـ HTML'],
          resources: [
            'دورة HTML - أكاديمية الزيرو',
            'كتاب HTML بالعربي'
          ]
        },
        {
          name: 'CSS',
          description: 'تصميم وتنسيق المواقع',
          duration: '2-3 أسابيع',
          skills: ['الألوان والخطوط', 'Flexbox و Grid', 'التصميم المتجاوب', 'الرسوم المتحركة'],
          projects: ['تصميم صفحة شخصية جميلة', 'موقع مطعم بسيط'],
          resources: [
            'دورة CSS - أكاديمية الزيرو',
            'تعلم Flexbox بالعربي'
          ]
        }
      ],
      tips: [
        'ابدأ بـ HTML أولاً ولا تنتقل لـ CSS حتى تفهمه جيداً',
        'اكتب كود يومياً ولو لـ 30 دقيقة',
        'لا تحفظ الكود، افهم المنطق وراءه',
        'استخدم أدوات المطور في المتصفح من البداية'
      ],
      milestone: 'إنشاء موقع شخصي كامل بـ HTML و CSS'
    },
    {
      phase: 2,
      title: 'المرحلة الثانية: التفاعل',
      duration: '6-8 أسابيع',
      level: 'متوسط',
      color: 'from-yellow-500 to-yellow-600',
      icon: <Zap className="h-8 w-8" />,
      technologies: [
        {
          name: 'JavaScript',
          description: 'لغة البرمجة للتفاعل',
          duration: '6-8 أسابيع',
          skills: ['المتغيرات والدوال', 'DOM Manipulation', 'الأحداث والتفاعل', 'Fetch API', 'ES6+ Features'],
          projects: ['حاسبة تفاعلية', 'لعبة تخمين الأرقام', 'قائمة مهام', 'موقع طقس'],
          resources: [
            'دورة JavaScript - أكاديمية الزيرو',
            'JavaScript بالعربي - كودزيلا'
          ]
        }
      ],
      tips: [
        'JavaScript صعبة في البداية، هذا طبيعي',
        'مارس على مشاريع صغيرة كثيرة',
        'تعلم استخدام Console للتصحيح',
        'اقرأ الأخطاء بعناية وابحث عنها في Google'
      ],
      milestone: 'بناء 3 مشاريع تفاعلية بـ JavaScript'
    },
    {
      phase: 3,
      title: 'المرحلة الثالثة: الأدوات المتقدمة',
      duration: '4-6 أسابيع',
      level: 'متوسط متقدم',
      color: 'from-blue-500 to-blue-600',
      icon: <Palette className="h-8 w-8" />,
      technologies: [
        {
          name: 'Git & GitHub',
          description: 'إدارة الكود والمشاريع',
          duration: '1 أسبوع',
          skills: ['أساسيات Git', 'GitHub', 'التعاون في المشاريع', 'Pull Requests'],
          projects: ['رفع مشاريعك على GitHub', 'المساهمة في مشروع مفتوح المصدر'],
          resources: [
            'دورة Git - أكاديمية الزيرو'
          ]
        },
        {
          name: 'CSS Framework',
          description: 'Bootstrap أو Tailwind CSS',
          duration: '2-3 أسابيع',
          skills: ['Bootstrap Components', 'Grid System', 'Responsive Design', 'Utility Classes'],
          projects: ['موقع شركة', 'لوحة تحكم بسيطة'],
          resources: [
            'دورة Bootstrap - أكاديمية الزيرو'
          ]
        },
        {
          name: 'Build Tools',
          description: 'Vite أو Webpack',
          duration: '1-2 أسبوع',
          skills: ['Module Bundling', 'Hot Reload', 'Production Build'],
          projects: ['إعداد مشروع بـ Vite'],
          resources: [
            'تعلم Vite بالعربي'
          ]
        }
      ],
      tips: [
        'Git ضروري لأي مطور محترف',
        'ابدأ برفع مشاريعك على GitHub',
        'تعلم CSS Framework واحد فقط في البداية',
        'لا تتعجل للأدوات المعقدة'
      ],
      milestone: 'إنشاء portfolio احترافي على GitHub'
    },
    {
      phase: 4,
      title: 'المرحلة الرابعة: المكتبات والإطارات',
      duration: '8-12 أسبوع',
      level: 'متقدم',
      color: 'from-purple-500 to-purple-600',
      icon: <Rocket className="h-8 w-8" />,
      technologies: [
        {
          name: 'React.js',
          description: 'مكتبة لبناء واجهات المستخدم',
          duration: '8-10 أسابيع',
          skills: ['Components', 'Props & State', 'Hooks', 'Context API', 'React Router'],
          projects: ['تطبيق إدارة مهام', 'متجر إلكتروني بسيط', 'تطبيق طقس متقدم'],
          resources: [
            'دورة React - كودزيلا',
            'React بالعربي - أكاديمية حسونة'
          ]
        },
        {
          name: 'State Management',
          description: 'Redux أو Zustand',
          duration: '2-3 أسابيع',
          skills: ['Global State', 'Actions & Reducers', 'Middleware'],
          projects: ['تطبيق معقد بـ Redux'],
          resources: [
            'تعلم Redux بالعربي'
          ]
        }
      ],
      tips: [
        'React تحتاج صبر وممارسة كثيرة',
        'ابدأ بمشاريع بسيطة جداً',
        'فهم JavaScript جيداً قبل React',
        'اقرأ الوثائق الرسمية'
      ],
      milestone: 'بناء تطبيق ويب كامل بـ React'
    },
    {
      phase: 5,
      title: 'المرحلة الخامسة: التخصص والاحتراف',
      duration: '12+ أسبوع',
      level: 'محترف',
      color: 'from-red-500 to-red-600',
      icon: <Star className="h-8 w-8" />,
      technologies: [
        {
          name: 'TypeScript',
          description: 'JavaScript مع أنواع البيانات',
          duration: '3-4 أسابيع',
          skills: ['Type Safety', 'Interfaces', 'Generics', 'Advanced Types'],
          projects: ['تحويل مشروع React لـ TypeScript'],
          resources: [
            'TypeScript بالعربي'
          ]
        },
        {
          name: 'Testing',
          description: 'Jest و React Testing Library',
          duration: '2-3 أسابيع',
          skills: ['Unit Testing', 'Integration Testing', 'Test-Driven Development'],
          projects: ['كتابة اختبارات لمشاريعك'],
          resources: [
            'تعلم Testing بالعربي'
          ]
        },
        {
          name: 'Performance',
          description: 'تحسين الأداء والسرعة',
          duration: '2-3 أسابيع',
          skills: ['Code Splitting', 'Lazy Loading', 'Optimization', 'PWA'],
          projects: ['تحسين مشاريعك الموجودة'],
          resources: [
            'تحسين أداء React'
          ]
        },
        {
          name: 'Deployment',
          description: 'نشر المشاريع على الإنترنت',
          duration: '1-2 أسبوع',
          skills: ['Netlify', 'Vercel', 'GitHub Pages', 'CI/CD'],
          projects: ['نشر جميع مشاريعك'],
          resources: [
            'نشر المواقع مجاناً'
          ]
        }
      ],
      tips: [
        'ركز على جودة الكود وليس الكمية',
        'تعلم أفضل الممارسات',
        'ساهم في مشاريع مفتوحة المصدر',
        'ابدأ البحث عن فرص عمل'
      ],
      milestone: 'الحصول على أول وظيفة كمطور Frontend'
    }
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
                <MapPin className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              خارطة طريق تعلم Frontend
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دليل شامل ومنظم لتعلم تطوير الواجهات الأمامية من الصفر حتى الاحتراف
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                هذه خارطة طريق مجربة ومُختبرة من قبل آلاف المطورين الناجحين. 
                اتبعها خطوة بخطوة ولا تتعجل الانتقال للمرحلة التالية قبل إتقان الحالية.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-yellow-500 via-blue-500 via-purple-500 to-red-500 rounded-full"></div>

            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute right-1/2 transform translate-x-1/2 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pl-8' : 'ml-auto pr-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
                  >
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${step.color}`}>
                          المرحلة {step.phase}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{step.level}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Technologies */}
                    <div className="space-y-6 mb-6">
                      {step.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="border-r-4 border-primary-500 pr-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {tech.name}
                            </h4>
                            <span className="text-sm text-blue-600 dark:text-blue-400">
                              {tech.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">
                            {tech.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">المهارات:</h5>
                              <ul className="space-y-1">
                                {tech.skills.map((skill, skillIndex) => (
                                  <li key={skillIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                    {skill}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900 dark:text-white mb-2">المشاريع:</h5>
                              <ul className="space-y-1">
                                {tech.projects.map((project, projectIndex) => (
                                  <li key={projectIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                    <Target className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tips */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">نصائح مهمة:</h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                            <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Milestone */}
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <h4 className="font-semibold text-green-800 dark:text-green-300">الهدف النهائي:</h4>
                      </div>
                      <p className="text-green-700 dark:text-green-400 mt-1">
                        {step.milestone}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Summary Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ملخص الرحلة الكاملة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                المدة الإجمالية
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                8-12 شهر مع الممارسة المنتظمة
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                المشاريع المطلوبة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                15+ مشروع عملي متدرج
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Rocket className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                النتيجة النهائية
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                مطور Frontend محترف
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">نصائح نهائية للنجاح</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
              <div className="space-y-2">
                <p>• لا تتعجل الانتقال للمرحلة التالية</p>
                <p>• اكتب كود يومياً ولو لـ 30 دقيقة</p>
                <p>• ابن مشاريع حقيقية وليس مجرد تمارين</p>
              </div>
              <div className="space-y-2">
                <p>• انضم لمجتمعات المطورين العرب</p>
                <p>• لا تخف من طلب المساعدة</p>
                <p>• احتفل بكل إنجاز مهما كان صغيراً</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك اليوم!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              كل رحلة ألف ميل تبدأ بخطوة واحدة. ابدأ بالمرحلة الأولى الآن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/frontend"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>ابدأ تعلم Frontend</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/resources"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                استكشف المصادر المجانية
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default LearningRoadmap;