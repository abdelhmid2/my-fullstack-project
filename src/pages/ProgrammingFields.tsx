import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe, Database, Shield, Brain, Gamepad2, CheckCircle, X, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const ProgrammingFields: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const frontendVsBackend = {
    frontend: {
      title: 'Frontend Development',
      subtitle: 'تطوير الواجهات الأمامية',
      description: 'كل ما يراه ويتفاعل معه المستخدم',
      icon: <Globe className="h-12 w-12" />,
      color: 'from-blue-500 to-purple-500',
      responsibilities: [
        'تصميم واجهة المستخدم',
        'برمجة التفاعلات والحركات',
        'ضمان التوافق مع جميع المتصفحات',
        'تحسين تجربة المستخدم (UX)',
        'جعل الموقع متجاوب على جميع الأجهزة'
      ],
      technologies: [
        { name: 'HTML', description: 'هيكل الصفحة' },
        { name: 'CSS', description: 'التصميم والتنسيق' },
        { name: 'JavaScript', description: 'التفاعل والحركة' },
        { name: 'React/Vue', description: 'مكتبات متقدمة' },
        { name: 'Bootstrap/Tailwind', description: 'أطر عمل CSS' }
      ],
      pros: [
        'ترى نتيجة عملك فوراً',
        'مجال إبداعي وبصري',
        'سهل البداية للمبتدئين',
        'فرص عمل كثيرة',
        'يمكن العمل كفريلانسر'
      ],
      cons: [
        'تحديات التوافق بين المتصفحات',
        'تطور سريع للتقنيات',
        'يحتاج حس فني وتصميمي',
        'اختبار على أجهزة مختلفة'
      ],
      salary: '2000-8000$ شهرياً',
      difficulty: 'سهل للمبتدئين',
      examples: [
        'واجهة فيسبوك',
        'تصميم أمازون',
        'تطبيق تويتر',
        'موقع يوتيوب'
      ]
    },
    backend: {
      title: 'Backend Development',
      subtitle: 'تطوير الأنظمة الخلفية',
      description: 'المنطق والخوادم التي تشغل التطبيق',
      icon: <Server className="h-12 w-12" />,
      color: 'from-green-500 to-teal-500',
      responsibilities: [
        'بناء وإدارة قواعد البيانات',
        'إنشاء APIs للتواصل مع Frontend',
        'ضمان أمان التطبيق',
        'إدارة الخوادم والاستضافة',
        'تحسين أداء وسرعة التطبيق'
      ],
      technologies: [
        { name: 'Node.js', description: 'JavaScript للخوادم' },
        { name: 'Python', description: 'لغة قوية ومرنة' },
        { name: 'PHP', description: 'الأكثر انتشاراً' },
        { name: 'MySQL/MongoDB', description: 'قواعد البيانات' },
        { name: 'AWS/Docker', description: 'الاستضافة والنشر' }
      ],
      pros: [
        'رواتب عالية جداً',
        'مجال مستقر وآمن',
        'تحديات تقنية ممتعة',
        'أساس كل التطبيقات',
        'فرص تطوير مهني ممتازة'
      ],
      cons: [
        'صعب للمبتدئين',
        'لا ترى النتيجة بصرياً',
        'يحتاج فهم عميق للأنظمة',
        'مسؤولية كبيرة (الأمان والبيانات)'
      ],
      salary: '3000-12000$ شهرياً',
      difficulty: 'متوسط إلى صعب',
      examples: [
        'خوادم واتساب',
        'نظام أوبر',
        'قاعدة بيانات نتفليكس',
        'API جوجل'
      ]
    }
  };

  const webVsMobile = {
    web: {
      title: 'تطوير المواقع',
      subtitle: 'Web Development',
      description: 'مواقع تعمل في المتصفح على أي جهاز',
      icon: <Globe className="h-10 w-10" />,
      color: 'from-blue-500 to-cyan-500',
      advantages: [
        'يعمل على جميع الأجهزة',
        'لا يحتاج تحميل من متجر التطبيقات',
        'سهل التحديث والصيانة',
        'تكلفة تطوير أقل',
        'وصول أوسع للمستخدمين'
      ],
      disadvantages: [
        'يحتاج اتصال إنترنت',
        'أداء أبطأ من التطبيقات',
        'وصول محدود لمميزات الجهاز',
        'تجربة مستخدم أقل سلاسة'
      ],
      technologies: ['HTML/CSS/JS', 'React/Vue/Angular', 'Node.js/PHP/Python'],
      examples: ['فيسبوك', 'جوجل', 'يوتيوب', 'أمازون'],
      bestFor: [
        'المواقع الإعلامية',
        'المتاجر الإلكترونية',
        'المدونات والمحتوى',
        'الخدمات المصرفية'
      ]
    },
    mobile: {
      title: 'تطوير التطبيقات',
      subtitle: 'Mobile App Development',
      description: 'تطبيقات تعمل على الهواتف الذكية',
      icon: <Smartphone className="h-10 w-10" />,
      color: 'from-purple-500 to-pink-500',
      advantages: [
        'أداء سريع وسلس',
        'وصول كامل لمميزات الجهاز',
        'تجربة مستخدم ممتازة',
        'يعمل بدون إنترنت',
        'إشعارات فورية'
      ],
      disadvantages: [
        'تطوير منفصل لكل نظام',
        'تكلفة تطوير أعلى',
        'يحتاج موافقة متجر التطبيقات',
        'صيانة وتحديث معقد'
      ],
      technologies: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
      examples: ['واتساب', 'إنستغرام', 'أوبر', 'تيك توك'],
      bestFor: [
        'الألعاب',
        'التطبيقات الاجتماعية',
        'تطبيقات التوصيل',
        'التطبيقات المصرفية'
      ]
    }
  };

  const specializedFields = [
    {
      title: 'الذكاء الاصطناعي',
      subtitle: 'Artificial Intelligence',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-500',
      description: 'تطوير أنظمة ذكية تتعلم وتحل المشاكل',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
      applications: ['ChatGPT', 'التعرف على الصور', 'السيارات الذاتية', 'الترجمة الآلية'],
      requirements: ['رياضيات قوية', 'إحصاء وتحليل بيانات', 'صبر وتجريب', 'تفكير منطقي'],
      salary: '4000-15000$ شهرياً',
      difficulty: 'صعب جداً',
      future: 'مستقبل واعد جداً'
    },
    {
      title: 'الأمن السيبراني',
      subtitle: 'Cybersecurity',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-red-500 to-orange-500',
      description: 'حماية الأنظمة والبيانات من التهديدات',
      technologies: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Penetration Testing'],
      applications: ['حماية البنوك', 'أمن الشركات', 'حماية البيانات', 'مكافحة الهجمات'],
      requirements: ['فهم الشبكات', 'معرفة أنظمة التشغيل', 'تفكير كالمهاجمين', 'تحديث مستمر'],
      salary: '3500-12000$ شهرياً',
      difficulty: 'صعب',
      future: 'طلب متزايد باستمرار'
    },
    {
      title: 'تطوير الألعاب',
      subtitle: 'Game Development',
      icon: <Gamepad2 className="h-8 w-8" />,
      color: 'from-green-500 to-blue-500',
      description: 'إنشاء ألعاب تفاعلية وممتعة',
      technologies: ['Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript'],
      applications: ['ألعاب الهاتف', 'ألعاب الكمبيوتر', 'ألعاب الواقع الافتراضي', 'ألعاب الويب'],
      requirements: ['إبداع وخيال', 'رياضيات وفيزياء', 'صبر وتجريب', 'حس فني'],
      salary: '2500-10000$ شهرياً',
      difficulty: 'متوسط إلى صعب',
      future: 'صناعة ضخمة ومتنامية'
    },
    {
      title: 'علوم البيانات',
      subtitle: 'Data Science',
      icon: <Database className="h-8 w-8" />,
      color: 'from-teal-500 to-cyan-500',
      description: 'تحليل البيانات الضخمة واستخراج المعلومات',
      technologies: ['Python', 'R', 'SQL', 'Pandas', 'Matplotlib', 'Tableau'],
      applications: ['تحليل السوق', 'التنبؤ بالمبيعات', 'تحليل سلوك المستخدمين', 'البحث العلمي'],
      requirements: ['رياضيات وإحصاء', 'تفكير تحليلي', 'فضول علمي', 'صبر في التحليل'],
      salary: '3000-11000$ شهرياً',
      difficulty: 'متوسط إلى صعب',
      future: 'مطلوب في كل الصناعات'
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
              فهم مجالات البرمجة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              دليل شامل لفهم الفروق بين مجالات البرمجة المختلفة واختيار المسار المناسب لك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frontend vs Backend */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend vs Backend
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              الفرق الأساسي بين تطوير الواجهات الأمامية والأنظمة الخلفية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(frontendVsBackend).map(([key, field], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${field.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {field.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {field.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {field.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {field.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">المسؤوليات:</h4>
                  <ul className="space-y-2">
                    {field.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">التقنيات الأساسية:</h4>
                  <div className="space-y-2">
                    {field.technologies.map((tech, i) => (
                      <div key={i} className="flex items-center justify-between bg-white dark:bg-gray-600 p-2 rounded">
                        <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">المميزات:</h4>
                    <ul className="space-y-1">
                      {field.pros.map((pro, i) => (
                        <li key={i} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">التحديات:</h4>
                    <ul className="space-y-1">
                      {field.cons.map((con, i) => (
                        <li key={i} className="flex items-start text-xs text-gray-700 dark:text-gray-300">
                          <X className="h-3 w-3 text-red-500 mr-1 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{field.salary}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">الراتب المتوقع</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{field.difficulty}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">مستوى الصعوبة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{field.examples.length}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">أمثلة مشهورة</div>
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">أمثلة مشهورة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {field.examples.map((example, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
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

      {/* Web vs Mobile */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              تطوير المواقع vs تطبيقات الهاتف
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              مقارنة شاملة بين تطوير المواقع وتطبيقات الهاتف المحمول
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(webVsMobile).map(([key, platform], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {platform.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {platform.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {platform.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Advantages */}
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">المميزات:</h4>
                    <ul className="space-y-2">
                      {platform.advantages.map((advantage, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disadvantages */}
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-3">العيوب:</h4>
                    <ul className="space-y-2">
                      {platform.disadvantages.map((disadvantage, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {disadvantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">التقنيات المستخدمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">الأنسب لـ:</h4>
                    <ul className="space-y-1">
                      {platform.bestFor.map((use, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <ArrowRight className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">أمثلة مشهورة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.examples.map((example, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Specialized Fields */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              المجالات المتخصصة
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              مجالات برمجة متقدمة ومتخصصة للمطورين الطموحين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedFields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${field.color} rounded-full flex items-center justify-center text-white mr-4`}>
                    {field.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {field.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {field.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {field.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">التقنيات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {field.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">التطبيقات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {field.applications.map((app, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">المتطلبات:</h4>
                    <ul className="space-y-1">
                      {field.requirements.map((req, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{field.salary}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">الراتب</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{field.difficulty}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">الصعوبة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{field.future}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">المستقبل</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Decision Helper */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              كيف تختار المجال المناسب؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">إذا كنت تحب:</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>• رؤية النتائج فوراً → Frontend</li>
                  <li>• حل المشاكل المعقدة → Backend</li>
                  <li>• التصميم والإبداع → Frontend/UI</li>
                  <li>• الأمان والحماية → Cybersecurity</li>
                  <li>• الألعاب والترفيه → Game Dev</li>
                  <li>• الذكاء والتعلم → AI/ML</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">نصائح الاختيار:</h3>
                <ul className="space-y-2 text-primary-100">
                  <li>• ابدأ بـ Frontend إذا كنت مبتدئ تماماً</li>
                  <li>• جرب مشاريع صغيرة في كل مجال</li>
                  <li>• لا تتعجل القرار</li>
                  <li>• يمكنك تغيير المجال لاحقاً</li>
                  <li>• اختر ما يثير شغفك</li>
                  <li>• فكر في سوق العمل في بلدك</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <motion.a
                href="/how-to-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                ابدأ رحلة التعلم الآن
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProgrammingFields;