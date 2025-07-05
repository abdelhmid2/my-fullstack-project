import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Clock, Brain, Coffee, BookOpen, Users, Zap, CheckCircle, AlertTriangle, Star, Code, Rocket } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const Tips: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const learningTips = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'حدد هدفك بوضوح',
      description: 'اعرف بالضبط ماذا تريد أن تبني قبل أن تبدأ التعلم',
      color: 'from-blue-500 to-blue-600',
      details: [
        'موقع ويب شخصي',
        'تطبيق جوال',
        'لعبة بسيطة',
        'نظام إدارة'
      ],
      advice: 'الهدف الواضح يساعدك على اختيار التقنيات المناسبة وعدم التشتت بين خيارات كثيرة.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'خصص وقتاً يومياً',
      description: 'الثبات أهم من الكمية - 30 دقيقة يومياً أفضل من 5 ساعات أسبوعياً',
      color: 'from-green-500 to-green-600',
      details: [
        'ابدأ بـ 15-30 دقيقة يومياً',
        'اختر وقتاً ثابتاً',
        'تجنب الانقطاع لفترات طويلة',
        'استخدم تقنية البومودورو'
      ],
      advice: 'العقل يحتاج تكرار يومي لترسيخ المعلومات. ساعة واحدة يومياً لمدة شهر أفضل من 30 ساعة في أسبوع واحد.'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'فكر كمبرمج',
      description: 'تعلم كيف تحلل المشاكل وتقسمها لأجزاء صغيرة',
      color: 'from-purple-500 to-purple-600',
      details: [
        'اقرأ المشكلة بعناية',
        'قسمها لخطوات صغيرة',
        'ابدأ بالحل البسيط',
        'حسن الحل تدريجياً'
      ],
      advice: 'البرمجة 20% كتابة كود و 80% تفكير وحل مشاكل. طور مهارة حل المشاكل قبل تعلم اللغات.'
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'خذ استراحات',
      description: 'عقلك يحتاج وقتاً لمعالجة المعلومات الجديدة',
      color: 'from-orange-500 to-orange-600',
      details: [
        'استراحة كل ساعة',
        'امشي قليلاً',
        'اشرب الماء',
        'ابتعد عن الشاشة'
      ],
      advice: 'الدماغ يحل المشاكل في الخلفية أثناء الراحة. كثير من الحلول تأتي أثناء المشي أو الاستحمام!'
    }
  ];

  const codingTips = [
    {
      title: 'اكتب كود نظيف',
      description: 'كود واضح ومنظم يوفر عليك ساعات من التصحيح',
      icon: '🧹',
      tips: [
        'استخدم أسماء متغيرات واضحة',
        'اكتب تعليقات مفيدة',
        'نظم الكود في دوال صغيرة',
        'احذف الكود غير المستخدم'
      ],
      example: `// سيء
let x = u.n + " " + u.l;

// جيد  
let fullName = user.firstName + " " + user.lastName;`
    },
    {
      title: 'تعلم من الأخطاء',
      description: 'كل خطأ هو فرصة تعلم جديدة',
      icon: '🐛',
      tips: [
        'اقرأ رسائل الأخطاء بعناية',
        'ابحث عن الخطأ في Google',
        'استخدم console.log للتتبع',
        'لا تخف من التجريب'
      ],
      example: `// استخدم console.log لفهم ما يحدث
console.log("قيمة المتغير:", myVariable);
console.log("نوع البيانات:", typeof myVariable);`
    },
    {
      title: 'مارس يومياً',
      description: 'البرمجة مهارة تحتاج ممارسة مستمرة',
      icon: '💪',
      tips: [
        'حل تمرين واحد يومياً',
        'اعمل على مشروع شخصي',
        'شارك في تحديات البرمجة',
        'راجع كودك القديم'
      ],
      example: `// هدف يومي بسيط
// اليوم: كتابة دالة لحساب مجموع الأرقام
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}`
    },
    {
      title: 'استخدم الأدوات المناسبة',
      description: 'الأدوات الجيدة تسرع عملية التطوير',
      icon: '🛠️',
      tips: [
        'تعلم اختصارات المحرر',
        'استخدم Git للتحكم في الإصدارات',
        'جرب إضافات مفيدة',
        'تعلم استخدام المصحح (Debugger)'
      ],
      example: `// اختصارات VS Code مفيدة
// Ctrl+D: تحديد الكلمة التالية المشابهة
// Ctrl+/: تعليق/إلغاء تعليق السطر
// Alt+↑/↓: نقل السطر للأعلى/الأسفل`
    }
  ];

  const commonMistakes = [
    {
      mistake: 'محاولة تعلم كل شيء مرة واحدة',
      solution: 'ركز على لغة واحدة وأتقنها',
      severity: 'high',
      explanation: 'كثيرون يحاولون تعلم HTML, CSS, JavaScript, Python, React كلها معاً. هذا يؤدي للتشتت وعدم إتقان أي شيء.',
      betterApproach: 'ابدأ بـ HTML ثم CSS ثم JavaScript. أتقن كل واحدة قبل الانتقال للتالية.'
    },
    {
      mistake: 'عدم الممارسة العملية',
      solution: 'اكتب كود حتى لو كان بسيطاً',
      severity: 'high',
      explanation: 'مشاهدة الفيديوهات وقراءة الكتب لا يكفي. البرمجة مهارة عملية تحتاج ممارسة.',
      betterApproach: 'بعد كل درس، اكتب كود بنفسك. جرب أمثلة مختلفة وعدل عليها.'
    },
    {
      mistake: 'تجاهل الأساسيات',
      solution: 'أتقن المفاهيم الأساسية أولاً',
      severity: 'medium',
      explanation: 'البعض يريد الوصول للمشاريع المعقدة بسرعة دون فهم المتغيرات والحلقات والدوال.',
      betterApproach: 'اقضِ وقتاً كافياً في فهم الأساسيات. هي الأساس الذي ستبني عليه كل شيء.'
    },
    {
      mistake: 'عدم قراءة الوثائق',
      solution: 'الوثائق الرسمية أفضل مصدر',
      severity: 'medium',
      explanation: 'كثيرون يعتمدون على الفيديوهات فقط ولا يقرأون الوثائق الرسمية للغات والمكتبات.',
      betterApproach: 'تعلم كيف تقرأ الوثائق. هي المصدر الأكثر دقة وتفصيلاً.'
    },
    {
      mistake: 'الاستسلام بسرعة',
      solution: 'الصبر والمثابرة مفتاح النجاح',
      severity: 'high',
      explanation: 'البرمجة صعبة في البداية. كثيرون يستسلمون بعد أسابيع قليلة عندما يواجهون أول تحدي.',
      betterApproach: 'توقع الصعوبة واعتبرها جزء طبيعي من التعلم. كل مطور مر بنفس التحديات.'
    },
    {
      mistake: 'عدم طلب المساعدة',
      solution: 'لا تتردد في السؤال',
      severity: 'low',
      explanation: 'البعض يخجل من السؤال أو يظن أن السؤال يدل على ضعف. في الحقيقة، السؤال الذكي يدل على ذكاء.',
      betterApproach: 'انضم لمجتمعات المطورين واسأل. معظم المطورين مساعدون ويحبون مساعدة المبتدئين.'
    }
  ];

  const motivationalTips = [
    {
      title: 'احتفل بالإنجازات الصغيرة',
      description: 'كل سطر كود تكتبه هو خطوة للأمام',
      icon: '🎉',
      advice: 'حتى لو كتبت "Hello World" فقط، هذا إنجاز! كل مطور عظيم بدأ بنفس هذه الخطوة.'
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
      advice: 'إذا كنت تحب الألعاب، ابن لعبة. إذا كنت تحب الطبخ، ابن موقع وصفات. الشغف يجعل التعلم أسهل.'
    },
    {
      title: 'لا تقارن نفسك بالآخرين',
      description: 'كل شخص له رحلة تعلم مختلفة',
      icon: '🌟',
      advice: 'لا تقارن نفسك بمن تعلم لسنوات. قارن نفسك اليوم بنفسك بالأمس. التقدم هو المهم.'
    }
  ];

  const advancedTips = [
    {
      title: 'تعلم Git من البداية',
      description: 'Git ضروري لأي مطور محترف',
      importance: 'عالية',
      reason: 'يحفظ تاريخ مشاريعك ويسمح بالتعاون مع الآخرين'
    },
    {
      title: 'اقرأ كود الآخرين',
      description: 'تعلم من مشاريع مفتوحة المصدر',
      importance: 'عالية',
      reason: 'ترى طرق مختلفة لحل نفس المشاكل وتتعلم أفضل الممارسات'
    },
    {
      title: 'ابن portfolio قوي',
      description: 'اجمع أفضل مشاريعك في مكان واحد',
      importance: 'متوسطة',
      reason: 'أصحاب العمل يريدون رؤية ما تستطيع فعله، ليس فقط ما تعرفه'
    },
    {
      title: 'تعلم أساسيات التصميم',
      description: 'فهم بسيط للتصميم يحسن مشاريعك كثيراً',
      importance: 'متوسطة',
      reason: 'المشاريع الجميلة تترك انطباعاً أفضل حتى لو كان الكود بسيطاً'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-yellow-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                <Lightbulb className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              نصائح وحيل البرمجة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نصائح عملية ومجربة لتسريع رحلة تعلمك وتجنب الأخطاء الشائعة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                جمعنا لك أفضل النصائح من خبرة مطورين محترفين، بالإضافة إلى الأخطاء الشائعة 
                التي يقع فيها المبتدئون وكيفية تجنبها. هذه النصائح ستوفر عليك شهوراً من التعلم الخاطئ.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح التعلم الفعال
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              استراتيجيات مجربة لتعلم البرمجة بكفاءة أكبر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tip.color} rounded-full flex items-center justify-center text-white mb-4`}>
                  {tip.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tip.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {tip.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    <strong>لماذا مهم:</strong> {tip.advice}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Coding Tips Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح البرمجة العملية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              حيل وتقنيات لكتابة كود أفضل وحل المشاكل بفعالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {codingTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tip.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <Zap className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {tip.example && (
                  <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                    <pre className="text-green-400 overflow-x-auto">
                      <code>{tip.example}</code>
                    </pre>
                  </div>
                )}
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

          <div className="space-y-8">
            {commonMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
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
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">لماذا يحدث هذا؟</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {item.explanation}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-1">الطريقة الأفضل:</h4>
                      <p className="text-green-700 dark:text-green-400 text-sm">
                        {item.betterApproach}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Advanced Tips Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح متقدمة للمطورين
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نصائح للانتقال من مبتدئ إلى مطور محترف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <Rocket className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {tip.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tip.importance === 'عالية' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      أهمية {tip.importance}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {tip.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>لماذا مهم:</strong> {tip.reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Motivational Tips Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
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
                className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
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
      <AnimatedSection className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ تطبيق هذه النصائح اليوم
            </h2>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              النصائح بدون تطبيق مجرد معلومات. ابدأ بتطبيق نصيحة واحدة اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/how-to-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                ابدأ رحلة التعلم
              </motion.a>
              <motion.a
                href="/resources"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors"
              >
                استكشف المصادر
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Tips;