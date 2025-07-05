import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Target, Lightbulb, Book, Code, Users, Zap, AlertTriangle, Star } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const HowToStart: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      step: 1,
      title: 'حدد هدفك',
      description: 'اختر ما تريد تعلمه: مواقع ويب، تطبيقات جوال، أو ألعاب',
      icon: <Target className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      details: [
        'تطوير مواقع الويب (Frontend/Backend)',
        'تطبيقات الهاتف المحمول',
        'ألعاب الكمبيوتر والهاتف',
        'برامج سطح المكتب',
        'الذكاء الاصطناعي وتحليل البيانات'
      ],
      tips: 'ابدأ بهدف واحد واضح. لا تحاول تعلم كل شيء مرة واحدة. معظم المبتدئين ينصح لهم بتطوير المواقع لأنه الأسهل والأكثر طلباً في السوق.'
    },
    {
      step: 2,
      title: 'ابدأ بالأساسيات',
      description: 'تعلم المفاهيم الأساسية للبرمجة قبل الدخول في التفاصيل',
      icon: <Book className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      details: [
        'مفهوم المتغيرات والثوابت',
        'الحلقات والشروط',
        'الدوال والإجراءات',
        'هياكل البيانات الأساسية',
        'أساسيات حل المشاكل'
      ],
      tips: 'لا تستعجل هذه المرحلة. الأساسيات هي الأهم. اقضِ وقتاً كافياً في فهم كل مفهوم قبل الانتقال للتالي.'
    },
    {
      step: 3,
      title: 'اختر لغة البرمجة',
      description: 'ابدأ بلغة واحدة وأتقنها قبل الانتقال لغيرها',
      icon: <Code className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      details: [
        'JavaScript للمبتدئين (سهلة ومرنة)',
        'Python للذكاء الاصطناعي',
        'Java للتطبيقات الكبيرة',
        'Swift لتطبيقات iOS',
        'Kotlin لتطبيقات Android'
      ],
      tips: 'JavaScript هي الأفضل للمبتدئين لأنها تعمل في المتصفح مباشرة ولا تحتاج إعدادات معقدة. يمكنك رؤية النتائج فوراً.'
    },
    {
      step: 4,
      title: 'مارس بانتظام',
      description: 'اكتب كود يومياً ولو لـ 30 دقيقة فقط',
      icon: <Clock className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      details: [
        'حل تمرين واحد يومياً على الأقل',
        'إنشاء مشاريع صغيرة',
        'المشاركة في التحديات البرمجية',
        'مراجعة الكود الذي كتبته',
        'التعلم من أخطائك'
      ],
      tips: 'الثبات أهم من الكمية. 30 دقيقة يومياً أفضل من 5 ساعات مرة واحدة في الأسبوع. اجعل البرمجة عادة يومية.'
    },
    {
      step: 5,
      title: 'ابن مشاريع حقيقية',
      description: 'طبق ما تعلمته في مشاريع عملية لتطوير مهاراتك',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      details: [
        'موقع شخصي بسيط',
        'حاسبة أو لعبة بسيطة',
        'تطبيق قائمة مهام',
        'مدونة شخصية',
        'أي فكرة تخطر ببالك'
      ],
      tips: 'ابدأ بمشاريع بسيطة جداً. حتى لو كانت تبدو سهلة، ستتعلم منها الكثير. كل مشروع يعلمك شيئاً جديداً.'
    },
    {
      step: 6,
      title: 'انضم للمجتمع',
      description: 'شارك مع المطورين الآخرين وتعلم من خبراتهم',
      icon: <Users className="h-8 w-8" />,
      color: 'from-cyan-500 to-cyan-600',
      details: [
        'انضم لمجتمعات البرمجة العربية',
        'شارك في منتديات النقاش',
        'اطلب المساعدة عند الحاجة',
        'ساعد المبتدئين الآخرين',
        'ابحث عن معلم أو مرشد'
      ],
      tips: 'لا تخجل من طلب المساعدة. كل المطورين مروا بنفس التحديات. المجتمع البرمجي مساعد جداً للمبتدئين.'
    }
  ];

  const commonMistakes = [
    {
      mistake: 'محاولة تعلم كل شيء مرة واحدة',
      solution: 'ركز على لغة واحدة وأتقنها أولاً',
      severity: 'high',
      explanation: 'كثير من المبتدئين يحاولون تعلم HTML, CSS, JavaScript, Python, Java كلها في نفس الوقت. هذا يؤدي للتشتت وعدم إتقان أي شيء.'
    },
    {
      mistake: 'عدم الممارسة العملية',
      solution: 'اكتب كود حتى لو كان بسيطاً',
      severity: 'high',
      explanation: 'مشاهدة الفيديوهات وقراءة الكتب لا يكفي. يجب أن تكتب كود بيدك وتجرب وتخطئ وتصحح.'
    },
    {
      mistake: 'تجاهل الأساسيات',
      solution: 'أتقن المفاهيم الأساسية أولاً',
      severity: 'medium',
      explanation: 'البعض يريد الوصول للمشاريع المعقدة بسرعة دون فهم الأساسيات. هذا يخلق فجوات في المعرفة.'
    },
    {
      mistake: 'عدم قراءة الوثائق',
      solution: 'الوثائق الرسمية أفضل مصدر',
      severity: 'medium',
      explanation: 'كثيرون يعتمدون على الفيديوهات فقط ولا يقرأون الوثائق الرسمية للغات والمكتبات.'
    },
    {
      mistake: 'الاستسلام بسرعة',
      solution: 'الصبر والمثابرة مفتاح النجاح',
      severity: 'high',
      explanation: 'البرمجة صعبة في البداية. كثيرون يستسلمون بعد أسابيع قليلة. النجاح يحتاج صبر ومثابرة.'
    },
    {
      mistake: 'عدم طلب المساعدة',
      solution: 'لا تتردد في السؤال',
      severity: 'low',
      explanation: 'البعض يخجل من السؤال أو يظن أن السؤال يدل على ضعف. في الحقيقة، السؤال الذكي يدل على ذكاء.'
    }
  ];

  const motivationalTips = [
    {
      title: 'احتفل بالإنجازات الصغيرة',
      description: 'كل سطر كود تكتبه هو خطوة للأمام',
      icon: '🎉',
      advice: 'حتى لو كتبت برنامج "Hello World" فقط، هذا إنجاز! احتفل بكل تقدم مهما كان صغيراً.'
    },
    {
      title: 'انضم لمجتمع المطورين',
      description: 'التعلم مع الآخرين أكثر متعة وفائدة',
      icon: '👥',
      advice: 'ابحث عن مجموعات تليجرام أو ديسكورد للمطورين العرب. شارك تقدمك واطلب النصائح.'
    },
    {
      title: 'ابن مشاريع تحبها',
      description: 'اختر مشاريع تثير شغفك وتحفزك',
      icon: '❤️',
      advice: 'إذا كنت تحب الألعاب، ابن لعبة بسيطة. إذا كنت تحب الطبخ، ابن موقع وصفات. الشغف يجعل التعلم أسهل.'
    },
    {
      title: 'لا تقارن نفسك بالآخرين',
      description: 'كل شخص له رحلة تعلم مختلفة',
      icon: '🌟',
      advice: 'لا تقارن نفسك بمن تعلم لسنوات. قارن نفسك اليوم بنفسك بالأمس. التقدم هو المهم.'
    }
  ];

  const learningResources = [
    {
      title: 'للمبتدئين تماماً',
      description: 'ابدأ من هنا إذا لم تكتب أي كود من قبل',
      resources: [
        { name: 'دورة HTML - أكاديمية الزيرو', url: '/resources?category=frontend' },
        { name: 'أساسيات البرمجة', url: '/what-is-programming' },
        { name: 'كيف تختار لغة البرمجة', url: '/tips' }
      ]
    },
    {
      title: 'لمن لديه خبرة بسيطة',
      description: 'إذا كنت تعرف الأساسيات وتريد التطوير',
      resources: [
        { name: 'مشاريع JavaScript', url: '/resources?category=frontend' },
        { name: 'تعلم React', url: '/resources?category=frontend' },
        { name: 'أدوات المطور', url: '/tools' }
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              كيف تبدأ رحلة البرمجة؟
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دليل شامل للمبتدئين الذين يريدون دخول عالم البرمجة بالطريقة الصحيحة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                البرمجة رحلة ممتعة ولكنها تحتاج صبر وتخطيط. هذا الدليل سيوضح لك الطريق الصحيح 
                لتتعلم البرمجة بكفاءة وتتجنب الأخطاء الشائعة التي يقع فيها المبتدئون.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              خطوات البداية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اتبع هذه الخطوات بالترتيب لضمان رحلة تعلم ناجحة
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white mr-4`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                        الخطوة {step.step}
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
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">ما يشمله:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <Star className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">نصيحة مهمة:</h4>
                        <p className="text-blue-800 dark:text-blue-200 text-sm">{step.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
                  <div className={`w-64 h-64 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white opacity-10`}>
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

      {/* Learning Resources Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              مصادر التعلم حسب مستواك
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اختر المصادر المناسبة لمستواك الحالي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningResources.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {level.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {level.description}
                </p>
                <div className="space-y-3">
                  {level.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    >
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {resource.name}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Common Mistakes Section */}
      <AnimatedSection className="py-20 bg-red-50 dark:bg-red-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أخطاء شائعة يجب تجنبها
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعلم من أخطاء الآخرين لتوفر على نفسك الوقت والجهد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500"
              >
                <div className="flex items-start mb-3">
                  <AlertTriangle className={`h-5 w-5 mr-2 mt-0.5 ${
                    item.severity === 'high' ? 'text-red-500' : 
                    item.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                  }`} />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                      ❌ {item.mistake}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 text-sm mb-3">
                      ✅ {item.solution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Motivational Tips Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح للحفاظ على الدافعية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              كيف تحافظ على حماسك وتستمر في رحلة التعلم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {motivationalTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {tip.description}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  {tip.advice}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              مستعد لبدء رحلة البرمجة؟
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              لا تنتظر أكثر! ابدأ اليوم واستكشف المصادر المجانية التي ستساعدك على تحقيق حلمك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resources"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>استكشف المصادر المجانية</span>
                <ArrowLeft className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="/what-is-programming"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                تعرف على البرمجة أولاً
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HowToStart;