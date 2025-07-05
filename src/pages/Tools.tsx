import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, Globe, Terminal, Palette, Zap, ExternalLink, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const Tools: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const codeEditors = [
    {
      name: 'Visual Studio Code',
      description: 'محرر الكود الأكثر شعبية في العالم - مجاني وقوي',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      explanation: 'VS Code هو محرر كود مجاني من Microsoft. يدعم جميع لغات البرمجة ويحتوي على آلاف الإضافات المفيدة.',
      importance: 'يستخدمه ملايين المطورين حول العالم. سهل الاستخدام للمبتدئين وقوي بما يكفي للمحترفين.',
      features: ['مجاني تماماً', 'إضافات كثيرة', 'دعم جميع اللغات', 'Git مدمج', 'تصحيح أخطاء متقدم'],
      url: 'https://code.visualstudio.com/',
      category: 'editor',
      tutorials: [
        {
          title: 'شرح VS Code بالعربي - أكاديمية الزيرو',
          url: 'https://www.youtube.com/watch?v=3owknsJy-tE'
        }
      ]
    },
    {
      name: 'Replit',
      description: 'محرر كود أونلاين - لا يحتاج تحميل أو تثبيت',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      explanation: 'Replit منصة برمجة أونلاين تعمل في المتصفح. تدعم أكثر من 50 لغة برمجة ولا تحتاج تثبيت أي شيء.',
      importance: 'مثالي للمبتدئين الذين يريدون البدء فوراً بدون تعقيدات التثبيت والإعداد.',
      features: ['يعمل في المتصفح', 'مشاركة سهلة', 'تشغيل فوري', 'تعاون مباشر', 'استضافة مجانية'],
      url: 'https://replit.com/',
      category: 'online',
      tutorials: [
        {
          title: 'كيفية استخدام Replit للمبتدئين',
          url: 'https://www.youtube.com/watch?v=oBdZhvJnzAE'
        }
      ]
    },
    {
      name: 'CodePen',
      description: 'أفضل أداة لتجربة HTML, CSS, JavaScript',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      explanation: 'CodePen منصة لكتابة وتجربة كود Frontend. تعرض النتيجة مباشرة وتسمح بمشاركة الأكواد بسهولة.',
      importance: 'ممتاز لتعلم Frontend وتجربة أفكار جديدة. يحتوي على آلاف الأمثلة من مطورين آخرين.',
      features: ['للواجهات الأمامية', 'مشاركة المشاريع', 'أمثلة كثيرة', 'معاينة مباشرة', 'مجتمع نشط'],
      url: 'https://codepen.io/',
      category: 'online',
      tutorials: [
        {
          title: 'شرح CodePen للمبتدئين - أكاديمية الزيرو',
          url: 'https://www.youtube.com/watch?v=vb9uYBtqmeM'
        }
      ]
    },
    {
      name: 'GitHub',
      description: 'منصة لحفظ ومشاركة الكود - ضرورية لكل مطور',
      icon: <Terminal className="h-8 w-8" />,
      color: 'from-gray-500 to-gray-600',
      explanation: 'GitHub أكبر منصة لاستضافة الكود في العالم. تستخدم Git لتتبع التغييرات وتسمح بالعمل الجماعي.',
      importance: 'ضرورية لأي مطور محترف. تحفظ تاريخ مشاريعك وتسمح للآخرين برؤية أعمالك.',
      features: ['حفظ المشاريع', 'العمل الجماعي', 'تتبع التغييرات', 'استضافة مجانية', 'سيرة ذاتية للمطور'],
      url: 'https://github.com/',
      category: 'platform',
      tutorials: [
        {
          title: 'تعلم Git و GitHub - أكاديمية الزيرو',
          url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF'
        }
      ]
    }
  ];

  const browserTools = [
    {
      name: 'Chrome DevTools',
      description: 'أدوات المطور المدمجة في متصفح Chrome',
      explanation: 'أدوات قوية مدمجة في Chrome لفحص وتصحيح مواقع الويب. تسمح برؤية كود HTML/CSS وتصحيح JavaScript.',
      features: ['فحص العناصر', 'تصحيح JavaScript', 'قياس الأداء', 'محاكي الأجهزة', 'مراقبة الشبكة'],
      shortcut: 'F12 أو Ctrl+Shift+I',
      tutorials: [
        {
          title: 'شرح أدوات المطور في Chrome - أكاديمية الزيرو',
          url: 'https://www.youtube.com/watch?v=wcFnnxfA70g'
        }
      ]
    },
    {
      name: 'Firefox Developer Tools',
      description: 'أدوات تطوير قوية من Mozilla',
      explanation: 'أدوات مطور متقدمة في Firefox. تتميز بمحرر CSS مباشر وأدوات تصحيح ممتازة.',
      features: ['محرر CSS مباشر', 'تصحيح الأخطاء', 'محاكي الأجهزة', 'مراقب الذاكرة', 'محلل الأداء'],
      shortcut: 'F12 أو Ctrl+Shift+I',
      tutorials: [
        {
          title: 'استخدام أدوات Firefox للمطورين',
          url: 'https://www.youtube.com/watch?v=Sp9ZfSvpf7A'
        }
      ]
    }
  ];

  const learningTools = [
    {
      name: 'FreeCodeCamp',
      description: 'منصة تعليمية مجانية بالكامل - أفضل مكان لتعلم البرمجة',
      explanation: 'منصة تعليمية شاملة تقدم دورات مجانية في تطوير الويب، علوم البيانات، والذكاء الاصطناعي.',
      url: 'https://www.freecodecamp.org/',
      features: ['دروس تفاعلية', 'مشاريع عملية', 'شهادات مجانية', 'مجتمع داعم', 'منهج منظم'],
      arabicSupport: 'يوجد ترجمة عربية جزئية'
    },
    {
      name: 'MDN Web Docs',
      description: 'أفضل مرجع لتقنيات الويب - من Mozilla',
      explanation: 'الوثائق الرسمية لتقنيات الويب. تحتوي على شرح مفصل لكل عنصر HTML وخاصية CSS ودالة JavaScript.',
      url: 'https://developer.mozilla.org/',
      features: ['توثيق شامل', 'أمثلة عملية', 'دعم عربي جزئي', 'محدث باستمرار', 'مرجع موثوق'],
      arabicSupport: 'يوجد أقسام مترجمة للعربية'
    },
    {
      name: 'Stack Overflow',
      description: 'أكبر مجتمع للمطورين في العالم - حل لكل مشكلة',
      explanation: 'موقع أسئلة وأجوبة للمطورين. أي مشكلة تواجهها في البرمجة، ستجد حلها هنا.',
      url: 'https://stackoverflow.com/',
      features: ['أسئلة وأجوبة', 'حلول للمشاكل', 'مجتمع نشط', 'تقييم الإجابات', 'بحث متقدم'],
      arabicSupport: 'يمكن السؤال بالعربية'
    },
    {
      name: 'W3Schools',
      description: 'دروس بسيطة ومباشرة لتقنيات الويب',
      explanation: 'موقع تعليمي يقدم دروس مبسطة في HTML, CSS, JavaScript وتقنيات أخرى مع أمثلة تفاعلية.',
      url: 'https://www.w3schools.com/',
      features: ['دروس مبسطة', 'أمثلة تفاعلية', 'مرجع سريع', 'اختبارات', 'شهادات'],
      arabicSupport: 'لا يوجد دعم عربي'
    }
  ];

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'editor', name: 'محررات الكود' },
    { id: 'online', name: 'أدوات أونلاين' },
    { id: 'platform', name: 'منصات' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredTools = selectedCategory === 'all' 
    ? codeEditors 
    : codeEditors.filter(tool => tool.category === selectedCategory);

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
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              الأدوات والبرامج
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              اكتشف أفضل الأدوات المجانية التي يحتاجها كل مطور لبدء رحلة البرمجة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                الأدوات المناسبة تجعل البرمجة أسهل وأكثر متعة. هنا ستجد كل ما تحتاجه من محررات الكود 
                إلى منصات التعلم، كلها مجانية ومناسبة للمبتدئين والمحترفين.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Code Editors Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              محررات الكود والأدوات الأساسية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              هذه هي الأدوات التي ستحتاجها لكتابة وتطوير البرامج
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 rtl:space-x-reverse bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center text-white mr-4`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ما هو؟</h4>
                      <p className="text-gray-600 dark:text-gray-400">{tool.explanation}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">لماذا مهم؟</h4>
                      <p className="text-gray-600 dark:text-gray-400">{tool.importance}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">المميزات:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {tool.tutorials && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">دروس عربية:</h4>
                      <div className="space-y-2">
                        {tool.tutorials.map((tutorial, i) => (
                          <a
                            key={i}
                            href={tutorial.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          >
                            <BookOpen className="h-4 w-4" />
                            <span>{tutorial.title}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Download className="h-5 w-5" />
                    <span>زيارة الموقع</span>
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
                
                <div className="flex-1 max-w-lg">
                  <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl">
                    <div className={`w-32 h-32 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                      {tool.icon}
                    </div>
                    <h4 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
                      {tool.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Browser Tools Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أدوات المتصفح للمطورين
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أدوات مدمجة في المتصفحات لتصحيح الأخطاء وتطوير المواقع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browserTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tool.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ما هي؟</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{tool.explanation}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">المميزات:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">دروس عربية:</h4>
                  <div className="space-y-2">
                    {tool.tutorials.map((tutorial, i) => (
                      <a
                        key={i}
                        href={tutorial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>{tutorial.title}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    اختصار لوحة المفاتيح: {tool.shortcut}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Learning Tools Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              منصات التعلم والمراجع
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أفضل المواقع للتعلم والحصول على المساعدة في البرمجة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {tool.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tool.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ما هو؟</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{tool.explanation}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">المميزات:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    الدعم العربي: {tool.arabicSupport}
                  </span>
                </div>
                <motion.a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  <Globe className="h-4 w-4" />
                  <span>زيارة الموقع</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Tips Section */}
      <AnimatedSection className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              نصائح مهمة للمبتدئين
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">ابدأ بـ VS Code</h3>
                <p className="text-primary-100">
                  هو الأكثر شعبية ويحتوي على كل ما تحتاجه كمبتدئ. سهل التعلم وقوي في نفس الوقت.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">جرب الأدوات الأونلاين</h3>
                <p className="text-primary-100">
                  مثل CodePen و Replit لتجربة سريعة بدون تحميل. مثالية للتعلم والتجريب.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">تعلم اختصارات لوحة المفاتيح</h3>
                <p className="text-primary-100">
                  ستوفر عليك وقتاً كثيراً في المستقبل. ابدأ بالاختصارات الأساسية.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">استخدم GitHub</h3>
                <p className="text-primary-100">
                  لحفظ مشاريعك ومشاركتها مع الآخرين. ضروري لبناء سيرة ذاتية قوية كمطور.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Tools;