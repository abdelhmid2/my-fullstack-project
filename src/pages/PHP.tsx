import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe, Download, ExternalLink, BookOpen, CheckCircle, Star, Terminal } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const PHP: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phpFeatures = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'سهولة التعلم',
      description: 'PHP لغة بسيطة ومناسبة للمبتدئين في البرمجة',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'مجانية ومفتوحة المصدر',
      description: 'لا تحتاج لدفع أي رسوم لاستخدام PHP',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'دعم قواعد البيانات',
      description: 'تتكامل بسهولة مع MySQL وقواعد البيانات الأخرى',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'مجتمع كبير',
      description: 'ملايين المطورين حول العالم يستخدمون PHP',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const installationSteps = [
    {
      step: 1,
      title: 'تحميل XAMPP',
      description: 'XAMPP هو حزمة مجانية تحتوي على Apache وMySQL وPHP',
      details: [
        'اذهب إلى موقع XAMPP الرسمي',
        'اختر نسخة Windows أو Mac أو Linux',
        'حمل الملف (حوالي 150 ميجا)',
        'انتظر انتهاء التحميل'
      ],
      url: 'https://www.apachefriends.org/download.html'
    },
    {
      step: 2,
      title: 'تثبيت XAMPP',
      description: 'تثبيت بسيط بخطوات قليلة',
      details: [
        'شغل ملف التثبيت كمدير (Run as Administrator)',
        'اتبع خطوات التثبيت',
        'اختر مجلد التثبيت (افتراضي: C:\\xampp)',
        'انتظر انتهاء التثبيت'
      ]
    },
    {
      step: 3,
      title: 'تشغيل الخوادم',
      description: 'تشغيل Apache وMySQL من لوحة التحكم',
      details: [
        'افتح XAMPP Control Panel',
        'اضغط Start بجانب Apache',
        'اضغط Start بجانب MySQL',
        'تأكد أن الحالة أصبحت Running'
      ]
    },
    {
      step: 4,
      title: 'اختبار التثبيت',
      description: 'تأكد أن كل شيء يعمل بشكل صحيح',
      details: [
        'افتح المتصفح',
        'اكتب localhost في شريط العنوان',
        'يجب أن تظهر صفحة XAMPP الرئيسية',
        'اضغط على phpMyAdmin للتأكد من قاعدة البيانات'
      ]
    }
  ];

  const firstPHPSteps = [
    {
      title: 'إنشاء مجلد المشروع',
      description: 'أنشئ مجلد جديد في htdocs',
      code: `// اذهب إلى مجلد XAMPP
C:\\xampp\\htdocs\\

// أنشئ مجلد جديد باسم "my-first-php"
my-first-php/`,
      explanation: 'مجلد htdocs هو المكان الذي يجب وضع ملفات PHP فيه'
    },
    {
      title: 'إنشاء أول ملف PHP',
      description: 'أنشئ ملف index.php',
      code: `<?php
// هذا أول ملف PHP لي
echo "مرحباً بالعالم من PHP!";

// متغيرات بسيطة
$name = "أحمد";
$age = 25;

echo "<br>اسمي " . $name;
echo "<br>عمري " . $age . " سنة";

// التاريخ والوقت الحالي
echo "<br>التاريخ اليوم: " . date("Y-m-d");
echo "<br>الوقت الآن: " . date("H:i:s");
?>`,
      explanation: 'كل كود PHP يجب أن يكون بين <?php و ?>'
    },
    {
      title: 'تشغيل الملف',
      description: 'شاهد النتيجة في المتصفح',
      code: `// في المتصفح، اكتب:
http://localhost/my-first-php/

// أو
http://localhost/my-first-php/index.php`,
      explanation: 'يجب أن تشاهد النص الذي كتبته في الكود'
    }
  ];

  const phpBasics = [
    {
      title: 'المتغيرات',
      code: `<?php
// المتغيرات تبدأ بعلامة $
$name = "محمد";
$age = 30;
$price = 99.99;
$isStudent = true;

echo "الاسم: " . $name;
echo "<br>العمر: " . $age;
?>`,
      explanation: 'المتغيرات في PHP تبدأ بعلامة $ ولا تحتاج لتحديد نوع البيانات'
    },
    {
      title: 'المصفوفات',
      code: `<?php
// مصفوفة بسيطة
$fruits = array("تفاح", "موز", "برتقال");

// طباعة عنصر واحد
echo $fruits[0]; // تفاح

// مصفوفة ترابطية
$student = array(
    "name" => "سارة",
    "age" => 22,
    "grade" => "A"
);

echo $student["name"]; // سارة
?>`,
      explanation: 'المصفوفات تحفظ عدة قيم في متغير واحد'
    },
    {
      title: 'الشروط',
      code: `<?php
$score = 85;

if ($score >= 90) {
    echo "ممتاز";
} elseif ($score >= 80) {
    echo "جيد جداً";
} elseif ($score >= 70) {
    echo "جيد";
} else {
    echo "يحتاج تحسين";
}
?>`,
      explanation: 'الشروط تساعد في اتخاذ قرارات في البرنامج'
    },
    {
      title: 'الحلقات',
      code: `<?php
// حلقة for
for ($i = 1; $i <= 5; $i++) {
    echo "الرقم: " . $i . "<br>";
}

// حلقة foreach للمصفوفات
$colors = array("أحمر", "أزرق", "أخضر");

foreach ($colors as $color) {
    echo "اللون: " . $color . "<br>";
}
?>`,
      explanation: 'الحلقات تكرر نفس الكود عدة مرات'
    }
  ];

  const arabicResources = [
    {
      title: 'دورة PHP كاملة - محمد عيسى',
      description: 'تعلم PHP من الصفر حتى الاحتراف مع مشاريع عملية',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'محمد عيسى',
      type: 'قائمة تشغيل',
      duration: '22 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'دورة PHP و MySQL - أكاديمية الزيرو',
      description: 'تعلم PHP مع قواعد البيانات لبناء مواقع ديناميكية',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '18 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة Laravel كاملة - محمد عيسى',
      description: 'تعلم Laravel أقوى إطار عمل PHP لبناء تطبيقات متقدمة',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'محمد عيسى',
      type: 'قائمة تشغيل',
      duration: '35 ساعة',
      level: 'متقدم'
    },
    {
      title: 'أساسيات PHP - حسونة أكاديمي',
      description: 'مقدمة شاملة لتعلم أساسيات PHP للمبتدئين',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY2-O5TMGw1uGBvHDx1cWP3G',
      author: 'حسونة أكاديمي',
      type: 'قائمة تشغيل',
      duration: '12 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'مشاريع PHP عملية - نور حمصي',
      description: 'تطبيق عملي لبناء مشاريع حقيقية بـ PHP',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'نور حمصي',
      type: 'قائمة تشغيل',
      duration: '15 ساعة',
      level: 'متوسط'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              PHP Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              تعلم PHP لبناء مواقع ويب ديناميكية وقوية - اللغة الأكثر استخداماً في الويب
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                PHP هي لغة برمجة مفتوحة المصدر تعمل على الخادم، تستخدم لإنشاء مواقع ويب تفاعلية وديناميكية. 
                تشغل PHP أكثر من 75% من مواقع الإنترنت بما في ذلك Facebook وWordPress وWikipedia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is PHP Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ما هي PHP؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              PHP هي لغة برمجة قوية ومرنة لتطوير مواقع الويب الديناميكية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                لماذا تتعلم PHP؟
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">سهلة التعلم</h4>
                    <p className="text-gray-600 dark:text-gray-400">PHP لغة بسيطة ومناسبة للمبتدئين، يمكن تعلمها بسرعة</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">مجانية تماماً</h4>
                    <p className="text-gray-600 dark:text-gray-400">لا تحتاج لدفع أي رسوم لاستخدام PHP أو أدواتها</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">فرص عمل كثيرة</h4>
                    <p className="text-gray-600 dark:text-gray-400">الطلب على مطوري PHP عالي جداً في السوق</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">مجتمع ضخم</h4>
                    <p className="text-gray-600 dark:text-gray-400">ملايين المطورين والمصادر التعليمية المتاحة</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm mr-4">مثال PHP بسيط</span>
              </div>
              <pre className="text-green-400 text-xs overflow-x-auto">
                <code>{`<?php
// مرحباً بالعالم بـ PHP
echo "مرحباً بالعالم!";

// متغيرات
$name = "أحمد";
$age = 25;

echo "اسمي " . $name;
echo "عمري " . $age . " سنة";

// التاريخ الحالي
echo "اليوم: " . date("Y-m-d");
?>`}</code>
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phpFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Installation Guide */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              كيفية تثبيت خادم محلي (XAMPP)
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اتبع هذه الخطوات لتثبيت بيئة تطوير PHP على جهازك
            </p>
          </div>

          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {step.url && (
                    <motion.a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>تحميل XAMPP</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                  <Terminal className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* First PHP File */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              كيفية كتابة وتشغيل أول ملف PHP
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              خطوات بسيطة لإنشاء أول برنامج PHP وتشغيله
            </p>
          </div>

          <div className="space-y-12">
            {firstPHPSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {step.description}
                </p>
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm mb-4">
                  <pre className="text-green-400 overflow-x-auto">
                    <code>{step.code}</code>
                  </pre>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>ملاحظة:</strong> {step.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* PHP Basics */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أساسيات PHP
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعلم المفاهيم الأساسية في PHP مع أمثلة عملية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phpBasics.map((basic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {basic.title}
                </h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-green-400 overflow-x-auto">
                    <code>{basic.code}</code>
                  </pre>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {basic.explanation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Arabic Learning Resources */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              مصادر تعلم PHP بالعربية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أفضل المصادر العربية المجانية لتعلم PHP من الصفر حتى الاحتراف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arabicResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.level === 'مبتدئ' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    resource.level === 'متوسط' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
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
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
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
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك في PHP Development
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              حمل XAMPP الآن وابدأ في كتابة أول برنامج PHP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.apachefriends.org/download.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Download className="h-5 w-5" />
                <span>تحميل XAMPP</span>
              </motion.a>
              <motion.a
                href="/resources?category=backend"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                استكشف المزيد من المصادر
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PHP;