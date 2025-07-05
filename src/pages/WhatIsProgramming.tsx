import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Cpu, Globe, Smartphone, Gamepad2, Brain, Zap, Target, BookOpen, CheckCircle, Star } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const WhatIsProgramming: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const applications = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'مواقع الويب',
      description: 'إنشاء مواقع تفاعلية مثل فيسبوك وجوجل ومتاجر إلكترونية',
      color: 'from-blue-500 to-blue-600',
      examples: ['فيسبوك', 'أمازون', 'يوتيوب', 'تويتر']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'تطبيقات الهاتف',
      description: 'تطوير تطبيقات iOS و Android للملايين من المستخدمين',
      color: 'from-green-500 to-green-600',
      examples: ['واتساب', 'إنستغرام', 'أوبر', 'كريم']
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: 'الألعاب',
      description: 'صنع ألعاب ممتعة ومثيرة للكمبيوتر والهاتف والكونسول',
      color: 'from-purple-500 to-purple-600',
      examples: ['فورتنايت', 'ماين كرافت', 'كاندي كراش', 'PUBG']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'الذكاء الاصطناعي',
      description: 'برامج ذكية تتعلم وتحل المشاكل وتساعد البشر',
      color: 'from-red-500 to-red-600',
      examples: ['ChatGPT', 'سيري', 'أليكسا', 'جوجل ترجمة']
    }
  ];

  const programmingConcepts = [
    {
      title: 'المتغيرات (Variables)',
      description: 'أماكن لحفظ المعلومات في البرنامج - مثل صناديق تحفظ فيها البيانات',
      example: 'let name = "أحمد";\nlet age = 25;',
      realWorld: 'مثل كتابة اسمك على ورقة وحفظها في درج'
    },
    {
      title: 'الدوال (Functions)',
      description: 'مجموعة من الأوامر التي تؤدي مهمة معينة - مثل وصفة طبخ',
      example: 'function sayHello(name) {\n  return "مرحباً " + name;\n}',
      realWorld: 'مثل وصفة لعمل الشاي: اغلي الماء، أضف الشاي، انتظر دقيقتين'
    },
    {
      title: 'الشروط (Conditions)',
      description: 'اتخاذ قرارات في البرنامج بناءً على ظروف معينة',
      example: 'if (age >= 18) {\n  console.log("بالغ");\n} else {\n  console.log("قاصر");\n}',
      realWorld: 'مثل: إذا كان الجو ممطراً، خذ مظلة، وإلا لا تأخذها'
    },
    {
      title: 'التكرار (Loops)',
      description: 'تكرار مجموعة من الأوامر عدة مرات',
      example: 'for (let i = 1; i <= 10; i++) {\n  console.log("العدد: " + i);\n}',
      realWorld: 'مثل عد الأرقام من 1 إلى 10، أو غسل الأطباق واحداً تلو الآخر'
    }
  ];

  const whyImportant = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'حل المشاكل',
      description: 'البرمجة تعلمك كيف تحلل المشاكل المعقدة وتقسمها لخطوات بسيطة'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'تطوير التفكير المنطقي',
      description: 'تحسن قدرتك على التفكير المنطقي والتسلسلي في جميع جوانب الحياة'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'الإبداع والابتكار',
      description: 'تتيح لك إنشاء أشياء جديدة ومفيدة تساعد الناس وتحل مشاكلهم'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'فرص عمل ممتازة',
      description: 'مجال البرمجة يوفر وظائف عالية الأجر ومرونة في العمل'
    }
  ];

  const frontendTips = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'ابدأ بـ HTML أولاً',
      description: 'تعلم HTML قبل أي شيء آخر - هو أساس كل موقع ويب',
      color: 'from-orange-500 to-orange-600',
      details: [
        'اقضِ أسبوعين في تعلم HTML فقط',
        'اكتب صفحات بسيطة بيدك',
        'لا تنتقل لـ CSS حتى تفهم HTML جيداً',
        'تدرب على العناصر الأساسية يومياً'
      ],
      advice: 'HTML هو الأساس. إذا لم تفهمه جيداً، ستواجه صعوبات لاحقاً. خذ وقتك في تعلمه.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'مارس يومياً ولو 30 دقيقة',
      description: 'الثبات أهم من الكمية - نصف ساعة يومياً أفضل من 5 ساعات أسبوعياً',
      color: 'from-green-500 to-green-600',
      details: [
        'حدد وقتاً ثابتاً كل يوم',
        'ابدأ بـ 15-30 دقيقة فقط',
        'زد الوقت تدريجياً',
        'لا تنقطع أكثر من يومين'
      ],
      advice: 'العقل يحتاج تكرار يومي لترسيخ المعلومات. المواظبة أهم من الكمية.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'ابن مشاريع صغيرة',
      description: 'طبق ما تتعلمه في مشاريع حقيقية حتى لو كانت بسيطة',
      color: 'from-blue-500 to-blue-600',
      details: [
        'ابدأ بصفحة شخصية بسيطة',
        'اصنع موقع لمطعم وهمي',
        'اعمل صفحة لعرض هواياتك',
        'كل مشروع يعلمك شيئاً جديداً'
      ],
      advice: 'المشاريع تعلمك أكثر من مئات الفيديوهات. ابدأ بسيط واتطور تدريجياً.'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'لا تحفظ الكود، افهمه',
      description: 'ركز على فهم المنطق وراء الكود بدلاً من حفظه',
      color: 'from-purple-500 to-purple-600',
      details: [
        'اسأل نفسك "لماذا" قبل "كيف"',
        'جرب تغيير الكود وشاهد النتيجة',
        'اكتب الكود بطريقتك الخاصة',
        'اشرح الكود لشخص آخر'
      ],
      advice: 'الفهم يبقى، الحفظ ينسى. ركز على المنطق وراء كل سطر كود.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'استخدم أدوات المطور',
      description: 'تعلم استخدام أدوات المطور في المتصفح من البداية',
      color: 'from-red-500 to-red-600',
      details: [
        'اضغط F12 في أي موقع',
        'تعلم فحص العناصر',
        'جرب تعديل CSS مباشرة',
        'استخدم Console لتجربة JavaScript'
      ],
      advice: 'أدوات المطور ستوفر عليك ساعات من التصحيح. تعلمها من اليوم الأول.'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'انضم لمجتمع المطورين',
      description: 'التعلم مع الآخرين أسرع وأكثر متعة',
      color: 'from-cyan-500 to-cyan-600',
      details: [
        'انضم لمجموعات تليجرام العربية',
        'شارك مشاريعك واطلب التقييم',
        'ساعد المبتدئين الآخرين',
        'لا تخجل من طرح الأسئلة'
      ],
      advice: 'المجتمع البرمجي مساعد جداً. كل مطور مر بنفس التحديات التي تمر بها.'
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
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              ما هي البرمجة؟
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              البرمجة هي فن إنشاء برامج الكمبيوتر باستخدام لغات خاصة يفهمها الحاسوب
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                البرمجة ليست مجرد كتابة أكواد، بل هي طريقة تفكير وحل مشاكل. 
                إنها اللغة التي نتواصل بها مع الحاسوب لنخبره بما نريد منه أن يفعل.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Definition Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                البرمجة بكلمات بسيطة
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      مثل الطبخ
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      تماماً مثل وصفة الطبخ، البرمجة هي مجموعة من التعليمات المرتبة التي نعطيها للكمبيوتر.
                      كل خطوة يجب أن تكون واضحة ومحددة.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-secondary-100 dark:bg-secondary-900 rounded-full">
                    <Code className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      لغة التواصل
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      نستخدم لغات برمجة خاصة للتواصل مع الكمبيوتر وإخباره بما نريد منه فعله.
                      كل لغة لها قواعدها الخاصة مثل اللغات البشرية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="p-2 bg-accent-100 dark:bg-accent-900 rounded-full">
                    <Cpu className="h-6 w-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      حل المشاكل
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      البرمجة هي طريقة لحل المشاكل وتسهيل الحياة من خلال التكنولوجيا.
                      كل تطبيق أو موقع يحل مشكلة معينة للناس.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-green-400">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm mr-4">مثال بسيط</span>
                </div>
                <div className="space-y-2">
                  <div><span className="text-blue-400">console</span>.log(<span className="text-yellow-300">"مرحباً بالعالم!"</span>);</div>
                  <div><span className="text-purple-400">let</span> name = <span className="text-yellow-300">"أحمد"</span>;</div>
                  <div><span className="text-blue-400">console</span>.log(<span className="text-yellow-300">"مرحباً "</span> + name);</div>
                  <div><span className="text-gray-500">// النتيجة: مرحباً أحمد</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Important Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              لماذا البرمجة مهمة؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              البرمجة ليست مجرد مهارة تقنية، بل طريقة تفكير تفيدك في جميع جوانب الحياة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyImportant.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Applications Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ماذا يمكنك صنع بالبرمجة؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              البرمجة تفتح لك عالماً من الإمكانيات اللامحدودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {app.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                  {app.description}
                </p>
                <div className="text-center">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">أمثلة مشهورة:</h4>
                  <div className="flex flex-wrap justify-center gap-1">
                    {app.examples.map((example, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Basic Concepts Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              المفاهيم الأساسية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              هذه هي الأركان الأساسية التي تقوم عليها كل البرامج
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmingConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {concept.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {concept.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">مثال من الحياة:</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{concept.realWorld}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg font-mono text-green-400 text-sm">
                  <pre>{concept.example}</pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Frontend Learning Tips Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح تعلم Frontend للمبتدئين
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نصائح عملية ومجربة لبدء رحلة تعلم تطوير الواجهات الأمامية بالطريقة الصحيحة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">كيف تطبقها:</h4>
                  <ul className="space-y-2">
                    {tip.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <Star className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">لماذا مهم:</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-xs">{tip.advice}</p>
                    </div>
                  </div>
                </div>
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
            <p className="text-xl text-primary-100 mb-8">
              الآن بعد أن تعرفت على البرمجة، حان الوقت لتتعلم كيف تبدأ
            </p>
            <motion.a
              href="/how-to-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              تعلم كيف تبدأ
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default WhatIsProgramming;