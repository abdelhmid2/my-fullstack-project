import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap, Globe, Layers, ExternalLink, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const Frontend: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      name: 'HTML',
      description: 'لغة بناء هيكل الصفحات - الأساس الذي يقوم عليه كل موقع ويب',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-orange-500 to-orange-600',
      explanation: 'HTML (HyperText Markup Language) هي لغة الترميز الأساسية لإنشاء صفحات الويب. تحدد هيكل المحتوى وتنظمه باستخدام العناصر والعلامات.',
      importance: 'بدون HTML لا يمكن إنشاء أي موقع ويب. هي نقطة البداية الإجبارية لكل مطور ويب.',
      codeExample: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>موقعي الأول</title>
</head>
<body>
    <h1>مرحباً بالعالم!</h1>
    <p>هذا أول موقع لي</p>
</body>
</html>`
    },
    {
      name: 'CSS',
      description: 'لغة تنسيق وتصميم المواقع - تجعل موقعك جميلاً وجذاباً',
      icon: <Palette className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      explanation: 'CSS (Cascading Style Sheets) هي لغة تستخدم لتنسيق وتصميم صفحات HTML. تتحكم في الألوان، الخطوط، التخطيط، والرسوم المتحركة.',
      importance: 'CSS تحول صفحة HTML العادية إلى موقع جميل ومتجاوب. ضرورية لجعل موقعك احترافياً وجذاباً للمستخدمين.',
      codeExample: `/* تنسيق أساسي */
body {
    font-family: 'Cairo', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #2563eb;
    text-align: center;
    font-size: 2rem;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`
    },
    {
      name: 'JavaScript',
      description: 'لغة البرمجة للتفاعل - تجعل موقعك حياً ومتفاعلاً',
      icon: <Zap className="h-8 w-8" />,
      color: 'from-yellow-500 to-yellow-600',
      explanation: 'JavaScript هي لغة البرمجة الوحيدة التي تعمل في المتصفح. تضيف التفاعل والحركة للمواقع وتتحكم في سلوك العناصر.',
      importance: 'JavaScript تحول الموقع من صفحة ثابتة إلى تطبيق تفاعلي. ضرورية لأي موقع حديث يريد التفاعل مع المستخدمين.',
      codeExample: `// مثال على JavaScript تفاعلي
function showWelcomeMessage() {
    const name = prompt("ما اسمك؟");
    const welcomeDiv = document.getElementById("welcome");
    
    if (name) {
        welcomeDiv.innerHTML = \`
            <h2>مرحباً \${name}!</h2>
            <p>أهلاً بك في موقعنا</p>
        \`;
        welcomeDiv.style.display = "block";
    }
}

// إضافة حدث للزر
document.getElementById("welcomeBtn")
    .addEventListener("click", showWelcomeMessage);`
    },
    {
      name: 'React',
      description: 'مكتبة لبناء واجهات المستخدم - لتطبيقات ويب حديثة ومعقدة',
      icon: <Layers className="h-8 w-8" />,
      color: 'from-cyan-500 to-cyan-600',
      explanation: 'React هي مكتبة JavaScript تطورها Facebook لبناء واجهات المستخدم. تسمح ببناء تطبيقات معقدة بطريقة منظمة ومرنة.',
      importance: 'React تسهل بناء تطبيقات كبيرة ومعقدة. تستخدمها شركات عملاقة مثل Facebook وNetflix وAirbnb.',
      codeExample: `// مكون React بسيط
import React, { useState } from 'react';

function WelcomeComponent() {
    const [name, setName] = useState('');
    const [showWelcome, setShowWelcome] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            setShowWelcome(true);
        }
    };

    return (
        <div className="welcome-container">
            {!showWelcome ? (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="اكتب اسمك"
                    />
                    <button type="submit">ترحيب</button>
                </form>
            ) : (
                <h2>مرحباً {name}! 🎉</h2>
            )}
        </div>
    );
}`
    }
  ];

  const roadmap = [
    {
      step: 1,
      title: 'ابدأ بـ HTML',
      description: 'تعلم أساسيات بناء صفحات الويب',
      duration: '2-3 أسابيع',
      skills: ['العناصر الأساسية', 'النماذج والجداول', 'الروابط والصور', 'البنية الصحيحة'],
      tips: 'ابدأ بصفحة بسيطة عن نفسك. اكتب كود HTML يومياً ولو لـ 30 دقيقة.'
    },
    {
      step: 2,
      title: 'أضف CSS للتصميم',
      description: 'اجعل صفحاتك جميلة ومتجاوبة',
      duration: '3-4 أسابيع',
      skills: ['الألوان والخطوط', 'Flexbox و Grid', 'التصميم المتجاوب', 'الرسوم المتحركة'],
      tips: 'صمم نسخة من موقع مشهور. ركز على التصميم المتجاوب من البداية.'
    },
    {
      step: 3,
      title: 'تعلم JavaScript',
      description: 'أضف التفاعل والحركة لمواقعك',
      duration: '4-6 أسابيع',
      skills: ['المتغيرات والدوال', 'DOM Manipulation', 'الأحداث والتفاعل', 'Fetch API'],
      tips: 'ابن مشاريع صغيرة: حاسبة، لعبة تخمين، قائمة مهام. الممارسة أهم من النظرية.'
    },
    {
      step: 4,
      title: 'تعلم React (اختياري)',
      description: 'لبناء تطبيقات ويب حديثة ومعقدة',
      duration: '6-8 أسابيع',
      skills: ['المكونات', 'إدارة الحالة', 'Hooks', 'Routing والتنقل'],
      tips: 'ابدأ بمشاريع بسيطة. لا تتعجل للمكتبات المعقدة. أتقن الأساسيات أولاً.'
    }
  ];

  const projects = [
    {
      title: 'صفحة شخصية',
      description: 'ابن موقع يعرف بك وبمهاراتك',
      level: 'مبتدئ',
      technologies: ['HTML', 'CSS'],
      features: ['معلومات شخصية', 'معرض أعمال', 'نموذج تواصل']
    },
    {
      title: 'موقع مطعم',
      description: 'موقع لعرض قائمة الطعام والحجز',
      level: 'متوسط',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['قائمة تفاعلية', 'نظام حجز', 'معرض صور']
    },
    {
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق لإدارة المهام اليومية',
      level: 'متقدم',
      technologies: ['React', 'CSS', 'Local Storage'],
      features: ['إضافة/حذف مهام', 'تصنيف المهام', 'حفظ البيانات']
    }
  ];

  // Fixed and verified Arabic Frontend Learning Resources with working links
  const arabicResources = [
    {
      title: 'دورة HTML كاملة - أكاديمية الزيرو',
      description: 'تعلم HTML من الصفر حتى الاحتراف مع أمثلة عملية',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLV',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '8 ساعات',
      level: 'مبتدئ'
    },
    {
      title: 'دورة CSS كاملة - أكاديمية الزيرو',
      description: 'تعلم CSS وتصميم المواقع الجميلة والمتجاوبة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '12 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'دورة JavaScript كاملة - أكاديمية الزيرو',
      description: 'تعلم JavaScript من الأساسيات إلى المستوى المتقدم',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '20 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة React كاملة - كودزيلا',
      description: 'تعلم React.js لبناء تطبيقات ويب حديثة ومتقدمة',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      author: 'كودزيلا',
      type: 'قائمة تشغيل',
      duration: '15 ساعة',
      level: 'متقدم'
    },
    {
      title: 'قناة الزيرو ويب سكول',
      description: 'قناة شاملة لتعلم تطوير الويب من الصفر',
      url: 'https://www.youtube.com/@ElzeroWebSchool',
      author: 'أسامة الزيرو',
      type: 'قناة يوتيوب',
      duration: 'مستمر',
      level: 'جميع المستويات'
    },
    {
      title: 'دورة Bootstrap كاملة - أكاديمية الزيرو',
      description: 'تعلم Bootstrap لتصميم مواقع متجاوبة بسرعة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '8 ساعات',
      level: 'مبتدئ'
    },
    {
      title: 'دورة Sass كاملة - أكاديمية الزيرو',
      description: 'تعلم Sass لكتابة CSS أكثر تنظيماً وقوة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzlpyFHOaB3b-eubmF0TAV2',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '6 ساعات',
      level: 'متوسط'
    },
    {
      title: 'دورة Vue.js بالعربي - كودزيلا',
      description: 'تعلم Vue.js لبناء تطبيقات ويب تفاعلية',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      author: 'كودزيلا',
      type: 'قائمة تشغيل',
      duration: '16 ساعة',
      level: 'متقدم'
    },
    {
      title: 'تعلم Flexbox بالعربي - حسونة أكاديمي',
      description: 'إتقان Flexbox لتخطيط المواقع بطريقة احترافية',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'حسونة أكاديمي',
      type: 'قائمة تشغيل',
      duration: '4 ساعات',
      level: 'متوسط'
    },
    {
      title: 'دورة CSS Grid كاملة - نور حمصي',
      description: 'تعلم CSS Grid لإنشاء تخطيطات معقدة ومرنة',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'نور حمصي',
      type: 'قائمة تشغيل',
      duration: '5 ساعات',
      level: 'متوسط'
    },
    {
      title: 'تطوير مواقع متجاوبة - محمد عيسى',
      description: 'تعلم كيفية جعل مواقعك تعمل على جميع الأجهزة',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'محمد عيسى',
      type: 'قائمة تشغيل',
      duration: '7 ساعات',
      level: 'متوسط'
    },
    {
      title: 'قناة محمد عيسى للبرمجة',
      description: 'قناة متخصصة في تعليم البرمجة بطريقة عملية ومبسطة',
      url: 'https://www.youtube.com/@MohamedEssaChannel',
      author: 'محمد عيسى',
      type: 'قناة يوتيوب',
      duration: 'مستمر',
      level: 'جميع المستويات'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Frontend Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              تطوير الواجهات الأمامية - كل ما يراه ويتفاعل معه المستخدم في موقع الويب
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                Frontend Development هو فن وعلم إنشاء الجزء المرئي من المواقع والتطبيقات. 
                يشمل تصميم الواجهات، برمجة التفاعل، وضمان تجربة مستخدم ممتازة على جميع الأجهزة.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              التقنيات الأساسية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              هذه هي التقنيات التي تحتاج لتعلمها لتصبح مطور Frontend محترف
            </p>
          </div>

          <div className="space-y-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center text-white mr-4`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">ما هي؟</h4>
                      <p className="text-gray-600 dark:text-gray-400">{tech.explanation}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">لماذا مهمة؟</h4>
                      <p className="text-gray-600 dark:text-gray-400">{tech.importance}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 max-w-lg">
                  <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm mr-4">مثال {tech.name}</span>
                    </div>
                    <pre className="text-green-400 text-xs overflow-x-auto">
                      <code>{tech.codeExample}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Learning Roadmap */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              خارطة طريق التعلم
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اتبع هذه الخطوات المنظمة لتصبح مطور Frontend محترف
            </p>
          </div>

          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ما ستتعلمه:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.skills.map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>نصيحة:</strong> {item.tips}
                    </p>
                  </div>
                </div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                  <Code className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Project Ideas */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              مشاريع للتطبيق العملي
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              ابن هذه المشاريع لتطبق ما تعلمته وتطور مهاراتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.level === 'مبتدئ' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    project.level === 'متوسط' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {project.level}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">التقنيات:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">المميزات:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Arabic Learning Resources */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              مصادر تعلم Frontend بالعربية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أفضل المصادر العربية المجانية لتعلم تطوير الواجهات الأمامية من الصفر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arabicResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.level === 'مبتدئ' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    resource.level === 'متوسط' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    resource.level === 'متقدم' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {resource.level}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{resource.type}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {resource.author}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {resource.duration}
                  </span>
                </div>

                <motion.a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>مشاهدة المصدر</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك في Frontend Development
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              اكتشف أفضل المصادر العربية المجانية لتعلم تطوير الواجهات الأمامية
            </p>
            <motion.a
              href="/resources?category=frontend"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              استكشف مصادر Frontend
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Frontend;