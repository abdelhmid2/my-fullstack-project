import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, Code, Rocket, Heart, Trophy, Users, Target } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const SuccessStories: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const successStories = [
    {
      name: 'أحمد محمد',
      title: 'مطور Frontend في شركة عالمية',
      image: '👨‍💻',
      story: 'بدأت من الصفر بدون أي خلفية تقنية. كنت أعمل في مجال مختلف تماماً وقررت تغيير مساري المهني في سن الـ 28.',
      journey: [
        'بدأت بتعلم HTML و CSS من يوتيوب',
        'قضيت 6 أشهر في تعلم JavaScript',
        'بنيت 10 مشاريع صغيرة لتطبيق ما تعلمته',
        'تعلمت React وبنيت مشروع كبير',
        'حصلت على أول وظيفة بعد سنة من التعلم'
      ],
      tools: ['HTML/CSS', 'JavaScript', 'React', 'Git', 'VS Code'],
      timeline: '12 شهر',
      currentSalary: '4500$ شهرياً',
      advice: 'الثبات هو المفتاح. لا تستسلم حتى لو بدا الأمر صعباً في البداية. كل مطور مر بنفس التحديات.',
      resources: [
        {
          title: 'دورة HTML/CSS - أكاديمية الزيرو',
          url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLV'
        },
        {
          title: 'تعلم JavaScript - كودزيلا',
          url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2'
        }
      ],
      inspiration: 'من موظف في مكتب إلى مطور في شركة تقنية عالمية'
    },
    {
      name: 'فاطمة علي',
      title: 'مطورة تطبيقات جوال مستقلة',
      image: '👩‍💻',
      story: 'أم لطفلين، قررت تعلم البرمجة لأعمل من المنزل وأحقق استقلالي المالي. بدأت والأطفال نائمون.',
      journey: [
        'تعلمت أساسيات البرمجة في ساعات متأخرة',
        'ركزت على تطوير تطبيقات الهاتف',
        'بنيت أول تطبيق لإدارة المهام المنزلية',
        'بدأت العمل الحر على منصات مختلفة',
        'أصبحت تكسب أكثر من وظيفتها السابقة'
      ],
      tools: ['React Native', 'JavaScript', 'Firebase', 'Figma'],
      timeline: '18 شهر',
      currentSalary: '3800$ شهرياً (عمل حر)',
      advice: 'لا تدعي الظروف تمنعك. إذا كان لديك ساعة واحدة يومياً، فهي كافية للبداية. الأمهات يمكنهن أن يكن مطورات ممتازات.',
      resources: [
        {
          title: 'تعلم React Native بالعربي',
          url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw'
        }
      ],
      inspiration: 'من ربة منزل إلى مطورة تطبيقات ناجحة'
    },
    {
      name: 'محمد حسن',
      title: 'مطور Backend في ستارت أب ناشئة',
      image: '🧑‍💻',
      story: 'خريج هندسة مدنية لم أجد عمل في تخصصي. قررت تعلم البرمجة كحل بديل، لكنها أصبحت شغفي الحقيقي.',
      journey: [
        'بدأت بـ Python لأنها سهلة للمبتدئين',
        'تعلمت قواعد البيانات وSQL',
        'بنيت APIs بسيطة للتدريب',
        'ساهمت في مشاريع مفتوحة المصدر',
        'انضممت لستارت أب كمطور Backend'
      ],
      tools: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
      timeline: '15 شهر',
      currentSalary: '5200$ شهرياً',
      advice: 'Backend يحتاج صبر أكثر لأنك لا ترى النتيجة بصرياً، لكن الرواتب ممتازة والمجال مستقر جداً.',
      resources: [
        {
          title: 'دورة Python كاملة - حسونة أكاديمي',
          url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY2-O5TMGw1uGBvHDx1cWP3G'
        }
      ],
      inspiration: 'من مهندس مدني عاطل إلى مطور Backend في ستارت أب'
    },
    {
      name: 'سارة أحمد',
      title: 'مطورة Full Stack في شركة محلية',
      image: '👩‍🔬',
      story: 'طالبة جامعية في كلية التجارة، اكتشفت حبي للبرمجة من خلال مادة اختيارية في الحاسوب.',
      journey: [
        'بدأت بـ HTML/CSS في الجامعة',
        'تعلمت JavaScript في الإجازة الصيفية',
        'أضفت Node.js لأصبح Full Stack',
        'بنيت موقع للجامعة كمشروع تخرج',
        'حصلت على وظيفة قبل التخرج'
      ],
      tools: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB', 'React'],
      timeline: '10 أشهر',
      currentSalary: '3200$ شهرياً',
      advice: 'لا تحتاج تخصص حاسوب لتصبح مطور. الشغف والممارسة أهم من الشهادة الجامعية.',
      resources: [
        {
          title: 'مسار Full Stack بالعربي',
          url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9'
        }
      ],
      inspiration: 'من طالبة تجارة إلى مطورة Full Stack'
    },
    {
      name: 'عمر خالد',
      title: 'مطور ألعاب مستقل',
      image: '🎮',
      story: 'عاشق للألعاب منذ الصغر، قررت أن أصنع ألعابي الخاصة بدلاً من مجرد لعبها.',
      journey: [
        'بدأت بتعلم C# و Unity',
        'صنعت ألعاب بسيطة للتدريب',
        'نشرت أول لعبة على Google Play',
        'تعلمت التسويق والترويج للألعاب',
        'أصبحت أكسب من الألعاب والإعلانات'
      ],
      tools: ['Unity', 'C#', 'Blender', 'Photoshop', 'Android Studio'],
      timeline: '24 شهر',
      currentSalary: '2800$ شهرياً (متغير)',
      advice: 'تطوير الألعاب يحتاج صبر كبير ومهارات متنوعة، لكن الشعور بأن الناس تلعب لعبتك لا يُقدر بثمن.',
      resources: [
        {
          title: 'تعلم Unity بالعربي',
          url: 'https://www.youtube.com/playlist?list=PLwWuxCLlF_ue4a4rpyDqJcyk2gx1T8sOJ'
        }
      ],
      inspiration: 'من لاعب ألعاب إلى صانع ألعاب'
    },
    {
      name: 'ليلى محمود',
      title: 'متخصصة في الأمن السيبراني',
      image: '🛡️',
      story: 'خريجة حقوق، لكن اهتمامي بالتكنولوجيا والأمان قادني لمجال الأمن السيبراني.',
      journey: [
        'تعلمت أساسيات الشبكات والأنظمة',
        'حصلت على شهادات في الأمن السيبراني',
        'تدربت على Ethical Hacking',
        'عملت في شركة أمن معلومات',
        'أصبحت خبيرة في حماية الأنظمة'
      ],
      tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Python', 'Nmap'],
      timeline: '20 شهر',
      currentSalary: '6500$ شهرياً',
      advice: 'الأمن السيبراني مجال المستقبل. كل شركة تحتاج خبراء أمن، والرواتب ممتازة جداً.',
      resources: [
        {
          title: 'دورة الأمن السيبراني بالعربي',
          url: 'https://www.youtube.com/playlist?list=PLCIJjtzQPZJ-SWwDeRWKvyOxlvwGZWYGS'
        }
      ],
      inspiration: 'من خريجة حقوق إلى خبيرة أمن سيبراني'
    }
  ];

  const motivationalStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: '73%',
      label: 'من المطورين تعلموا بأنفسهم',
      description: 'لا تحتاج شهادة جامعية في الحاسوب'
    },
    {
      icon: <Target className="h-8 w-8" />,
      number: '6-12',
      label: 'شهر للحصول على أول وظيفة',
      description: 'مع التعلم المنتظم والممارسة'
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      number: '300%',
      label: 'زيادة متوسط في الراتب',
      description: 'مقارنة بالوظائف السابقة'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: '89%',
      label: 'راضون عن تغيير مسارهم',
      description: 'يشعرون بالسعادة في عملهم'
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
                <Star className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              قصص نجاح مبرمجين عرب
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              قصص حقيقية ومُلهمة لأشخاص عاديين غيروا حياتهم من خلال تعلم البرمجة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                هؤلاء الأشخاص بدأوا من الصفر تماماً مثلك، ولكن بالإصرار والمثابرة حققوا أحلامهم. 
                قصصهم ستلهمك وتوضح لك أن النجاح ممكن لأي شخص مستعد للتعلم والعمل الجاد.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motivational Stats */}
      <AnimatedSection className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {motivationalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Success Stories */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              قصص النجاح
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              تعرف على رحلات حقيقية لأشخاص غيروا حياتهم من خلال البرمجة
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Story Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">
                      {story.image}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {story.name}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                        {story.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {story.inspiration}
                      </p>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">القصة:</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {story.story}
                    </p>
                  </div>

                  {/* Journey */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">رحلة التعلم:</h4>
                    <ul className="space-y-2">
                      {story.journey.map((step, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">الأدوات المستخدمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{story.timeline}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">مدة التعلم</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{story.currentSalary}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">الراتب الحالي</div>
                    </div>
                  </div>

                  {/* Advice */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">نصيحة للمبتدئين:</h4>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-r-4 border-green-500">
                      <p className="text-green-800 dark:text-green-300 italic">
                        "{story.advice}"
                      </p>
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">المصادر التي استخدمها:</h4>
                    <div className="space-y-2">
                      {story.resources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{resource.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                  <div className="text-8xl">
                    {story.image}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Key Lessons */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              الدروس المستفادة من قصص النجاح
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              النقاط المشتركة بين جميع القصص الناجحة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <Rocket className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    البداية من الصفر ممكنة
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    كل هؤلاء الأشخاص بدأوا بدون أي خلفية تقنية. الخلفية الجامعية ليست ضرورية.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    الثبات أهم من السرعة
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    جميعهم تعلموا بانتظام لفترة طويلة، لم يحاولوا التعلم بسرعة خارقة.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    المشاريع العملية ضرورية
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    كلهم بنوا مشاريع حقيقية، لم يكتفوا بمشاهدة الفيديوهات فقط.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    المجتمع والدعم مهم
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    معظمهم انضم لمجتمعات المطورين وطلب المساعدة عند الحاجة.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
                  <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    الشغف يتطور مع الوقت
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    لم يكونوا شغوفين من البداية، الشغف نما مع التعلم والممارسة.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-full">
                  <Trophy className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    النتائج تحتاج وقت
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    معظمهم احتاج 6-18 شهر للحصول على أول وظيفة، لكن النتيجة تستحق الانتظار.
                  </p>
                </div>
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
              قصتك التالية قد تكون هنا!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              كل هؤلاء الأشخاص بدأوا مثلك تماماً. الفرق الوحيد أنهم بدأوا. متى ستبدأ أنت؟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/how-to-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                ابدأ رحلتك الآن
              </motion.a>
              <motion.a
                href="/learning-roadmap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                شاهد خارطة الطريق
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SuccessStories;