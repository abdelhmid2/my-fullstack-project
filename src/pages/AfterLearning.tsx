import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Users, Star, ExternalLink, CheckCircle, Target, Trophy, Code, Globe } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const AfterLearning: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      step: 1,
      title: 'بناء Portfolio احترافي',
      description: 'اجمع أفضل مشاريعك في موقع يعرض مهاراتك',
      icon: <Star className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      importance: 'عالية جداً',
      timeNeeded: '1-2 أسبوع',
      details: [
        'اختر 3-5 مشاريع متنوعة تظهر مهاراتك',
        'اكتب وصف واضح لكل مشروع',
        'أضف روابط للكود المصدري والموقع المباشر',
        'استخدم تصميم نظيف ومهني',
        'أضف معلومات التواصل وسيرتك الذاتية'
      ],
      tips: [
        'الجودة أهم من الكمية',
        'اختر مشاريع تحل مشاكل حقيقية',
        'تأكد أن جميع الروابط تعمل',
        'اطلب رأي مطورين آخرين'
      ],
      examples: [
        'موقع شخصي مع معرض أعمال',
        'تطبيق إدارة مهام متقدم',
        'موقع تجاري كامل',
        'تطبيق طقس تفاعلي'
      ]
    },
    {
      step: 2,
      title: 'العمل على مشاريع حقيقية',
      description: 'ابحث عن مشاريع تطوعية أو مدفوعة لتطبيق مهاراتك',
      icon: <Code className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      importance: 'عالية',
      timeNeeded: 'مستمر',
      details: [
        'تطوع لبناء مواقع للجمعيات الخيرية',
        'ساعد أصدقاء في مشاريعهم الصغيرة',
        'انضم لمشاريع مفتوحة المصدر',
        'ابدأ العمل الحر بمشاريع صغيرة',
        'ابن مشاريع شخصية تحل مشاكلك'
      ],
      tips: [
        'ابدأ بمشاريع صغيرة ومجانية',
        'ركز على التعلم وليس المال في البداية',
        'وثق كل مشروع تعمل عليه',
        'اطلب تقييمات من العملاء'
      ],
      examples: [
        'موقع لمطعم محلي',
        'نظام إدارة لصالون تجميل',
        'تطبيق لمتابعة اللياقة البدنية',
        'موقع لعرض أعمال فنان'
      ]
    },
    {
      step: 3,
      title: 'التواصل والشبكات المهنية',
      description: 'ابن علاقات مع مطورين ومسؤولي توظيف',
      icon: <Users className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      importance: 'متوسطة',
      timeNeeded: 'مستمر',
      details: [
        'أنشئ حساب LinkedIn احترافي',
        'انضم لمجتمعات المطورين المحلية',
        'احضر فعاليات التكنولوجيا والبرمجة',
        'شارك في المؤتمرات والورش',
        'تواصل مع مطورين في الشركات المستهدفة'
      ],
      tips: [
        'كن مفيداً قبل أن تطلب المساعدة',
        'شارك معرفتك مع الآخرين',
        'كن نشطاً في المجتمعات الأونلاين',
        'اطلب نصائح من مطورين متقدمين'
      ],
      examples: [
        'مجموعات تليجرام للمطورين',
        'فعاليات Google Developer Groups',
        'مؤتمرات التكنولوجيا المحلية',
        'ورش العمل في الجامعات'
      ]
    },
    {
      step: 4,
      title: 'التقديم للوظائف والتدريب',
      description: 'ابدأ البحث عن فرص عمل مناسبة لمستواك',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      importance: 'عالية جداً',
      timeNeeded: '2-6 أشهر',
      details: [
        'حضر سيرة ذاتية تقنية قوية',
        'تدرب على المقابلات التقنية',
        'ابحث عن وظائف Junior Developer',
        'فكر في التدريب أو الوظائف الجزئية',
        'لا تخف من التقديم حتى لو لم تستوف كل المتطلبات'
      ],
      tips: [
        'اقرأ متطلبات الوظيفة بعناية',
        'خصص سيرتك الذاتية لكل وظيفة',
        'تدرب على حل مشاكل البرمجة',
        'كن صادقاً حول مستوى خبرتك'
      ],
      examples: [
        'مواقع التوظيف المحلية',
        'LinkedIn Jobs',
        'مواقع الشركات مباشرة',
        'برامج التدريب في الشركات'
      ]
    }
  ];

  const portfolioTips = [
    {
      title: 'اختيار المشاريع',
      icon: <Target className="h-6 w-6" />,
      tips: [
        'اختر مشاريع متنوعة تظهر مهارات مختلفة',
        'تأكد أن كل مشروع يعمل بدون أخطاء',
        'أضف مشروع واحد على الأقل يستخدم API',
        'اجعل أحد المشاريع responsive بالكامل'
      ]
    },
    {
      title: 'كتابة الوصف',
      icon: <CheckCircle className="h-6 w-6" />,
      tips: [
        'اشرح المشكلة التي يحلها المشروع',
        'اذكر التقنيات المستخدمة',
        'وضح التحديات التي واجهتها وكيف حلتها',
        'أضف screenshots أو فيديو قصير'
      ]
    },
    {
      title: 'التصميم والعرض',
      icon: <Star className="h-6 w-6" />,
      tips: [
        'استخدم تصميم نظيف وبسيط',
        'تأكد أن الموقع سريع التحميل',
        'اجعل التنقل سهل وواضح',
        'أضف معلومات التواصل بوضوح'
      ]
    }
  ];

  const freelancingPlatforms = [
    {
      name: 'مستقل',
      description: 'أكبر منصة عربية للعمل الحر',
      url: 'https://mostaql.com',
      pros: ['باللغة العربية', 'عملاء عرب', 'دعم محلي'],
      cons: ['منافسة عالية', 'أسعار منخفضة أحياناً'],
      bestFor: 'المبتدئين العرب',
      tips: 'ابدأ بمشاريع صغيرة لبناء تقييمات'
    },
    {
      name: 'خمسات',
      description: 'منصة الخدمات المصغرة العربية',
      url: 'https://khamsat.com',
      pros: ['خدمات محددة', 'أسعار ثابتة', 'سهولة البداية'],
      cons: ['خدمات محدودة', 'أرباح أقل'],
      bestFor: 'الخدمات السريعة والبسيطة',
      tips: 'قدم خدمات متخصصة وعالية الجودة'
    },
    {
      name: 'Upwork',
      description: 'أكبر منصة عالمية للعمل الحر',
      url: 'https://upwork.com',
      pros: ['عملاء عالميين', 'مشاريع كبيرة', 'أسعار أفضل'],
      cons: ['يحتاج إنجليزية جيدة', 'منافسة شديدة'],
      bestFor: 'المطورين المتقدمين',
      tips: 'اكتب proposal مخصص لكل مشروع'
    },
    {
      name: 'Freelancer',
      description: 'منصة عالمية للمشاريع المتنوعة',
      url: 'https://freelancer.com',
      pros: ['مشاريع متنوعة', 'نظام مسابقات', 'عملاء كثيرون'],
      cons: ['رسوم عالية', 'جودة متغيرة للمشاريع'],
      bestFor: 'المطورين الذين يحبون التحدي',
      tips: 'شارك في المسابقات لبناء portfolio'
    }
  ];

  const jobSearchTips = [
    {
      category: 'إعداد السيرة الذاتية',
      tips: [
        'ركز على المهارات التقنية والمشاريع',
        'استخدم كلمات مفتاحية من إعلان الوظيفة',
        'أضف روابط GitHub و Portfolio',
        'اجعلها صفحة واحدة للمبتدئين',
        'استخدم تصميم نظيف ومقروء'
      ]
    },
    {
      category: 'البحث عن الوظائف',
      tips: [
        'ابحث عن وظائف Junior أو Entry Level',
        'لا تخف من التقديم حتى لو لم تستوف كل المتطلبات',
        'تواصل مع موظفين في الشركة عبر LinkedIn',
        'ابحث في مواقع الشركات مباشرة',
        'فكر في الشركات الناشئة والصغيرة'
      ]
    },
    {
      category: 'التحضير للمقابلات',
      tips: [
        'تدرب على حل مشاكل البرمجة الأساسية',
        'راجع مشاريعك وكن مستعداً لشرحها',
        'تعلم أساسيات هياكل البيانات والخوارزميات',
        'تدرب على أسئلة المقابلات الشائعة',
        'حضر أسئلة ذكية عن الشركة والفريق'
      ]
    }
  ];

  const openSourceTips = [
    {
      title: 'كيف تبدأ في Open Source',
      steps: [
        'ابحث عن مشاريع مناسبة للمبتدئين',
        'اقرأ ملف README و CONTRIBUTING',
        'ابدأ بإصلاح أخطاء بسيطة أو تحسين التوثيق',
        'اتبع إرشادات المشروع في كتابة الكود',
        'كن صبوراً ومتفهماً لعملية المراجعة'
      ]
    },
    {
      title: 'فوائد المساهمة في Open Source',
      benefits: [
        'تعلم من كود مطورين محترفين',
        'بناء سمعة في مجتمع المطورين',
        'تطوير مهارات العمل الجماعي',
        'إضافة قوية للسيرة الذاتية',
        'فرصة للتعلم من feedback المطورين'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              ماذا بعد التعلم؟
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دليل شامل للخطوات التالية بعد تعلم البرمجة - من بناء Portfolio إلى الحصول على أول وظيفة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                تعلمت الأساسيات وبنيت بعض المشاريع؟ ممتاز! الآن حان الوقت للخطوة التالية. 
                هذا الدليل سيوضح لك بالضبط ما تحتاج فعله للانتقال من متعلم إلى مطور محترف.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Roadmap */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              خارطة طريق ما بعد التعلم
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              خطوات منظمة ومجربة للانتقال من متعلم إلى مطور محترف
            </p>
          </div>

          <div className="space-y-16">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white mr-4`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          الخطوة {step.step}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          step.importance === 'عالية جداً' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                          step.importance === 'عالية' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          أهمية {step.importance}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {step.timeNeeded}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">التفاصيل:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">نصائح مهمة:</h4>
                    <ul className="space-y-2">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                          <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">أمثلة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white opacity-20`}>
                    <div className="text-8xl font-bold">
                      {step.step}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Building Guide */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              دليل بناء Portfolio احترافي
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نصائح مفصلة لإنشاء معرض أعمال يجذب أصحاب العمل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioTips.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Freelancing Platforms */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              منصات العمل الحر
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أفضل المنصات لبدء العمل الحر وكسب الخبرة العملية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelancingPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  <motion.a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </motion.a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {platform.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">المميزات:</h4>
                    <ul className="space-y-1">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-gray-700 dark:text-gray-300">
                          • {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">العيوب:</h4>
                    <ul className="space-y-1">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="text-xs text-gray-700 dark:text-gray-300">
                          • {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">الأنسب لـ: </span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{platform.bestFor}</span>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-sm mb-1">نصيحة:</h4>
                  <p className="text-blue-700 dark:text-blue-400 text-xs">{platform.tips}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Job Search Tips */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح البحث عن وظيفة
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              استراتيجيات مجربة للحصول على أول وظيفة في البرمجة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobSearchTips.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                      <Trophy className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Open Source Contribution */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              المساهمة في المشاريع مفتوحة المصدر
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              طريقة ممتازة لتطوير مهاراتك وبناء سمعة في مجتمع المطورين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSourceTips.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {(section.steps || section.benefits).map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                      <Globe className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              ابدأ رحلتك المهنية الآن!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              لديك المهارات، والآن لديك الخطة. حان الوقت للعمل وتحقيق حلمك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resources"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                راجع المصادر مرة أخرى
              </motion.a>
              <motion.a
                href="/success-stories"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                اقرأ قصص النجاح
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AfterLearning;