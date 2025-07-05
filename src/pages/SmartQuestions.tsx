import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Book, Code, Lightbulb, Target, Clock, Brain } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const SmartQuestions: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questionCategories = [
    {
      category: 'اختيار لغة البرمجة',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      questions: [
        {
          question: 'هل أبدأ بـ HTML أم Python؟',
          answer: `هذا يعتمد على هدفك:

**ابدأ بـ HTML إذا كنت تريد:**
• رؤية النتائج بصرياً وبسرعة
• تطوير مواقع الويب
• دخول سوق العمل بسرعة نسبياً
• التعلم بطريقة سهلة ومرئية

**ابدأ بـ Python إذا كنت تريد:**
• تعلم مفاهيم البرمجة الأساسية
• العمل في الذكاء الاصطناعي لاحقاً
• لغة سهلة ومنطقية للمبتدئين
• مجال أوسع (ويب، ذكاء اصطناعي، تحليل بيانات)

**نصيحتي:** إذا كنت مبتدئ تماماً، ابدأ بـ HTML/CSS لأنها ستعطيك ثقة وحماس للاستمرار.`,
          tags: ['HTML', 'Python', 'مبتدئين', 'اختيار اللغة']
        },
        {
          question: 'هل JavaScript صعبة للمبتدئين؟',
          answer: `JavaScript ليست صعبة، لكنها مختلفة:

**لماذا تبدو صعبة:**
• مفاهيم جديدة مثل الـ DOM
• أخطاء كثيرة في البداية
• طرق متعددة لفعل نفس الشيء
• تطور سريع للغة

**لماذا هي في الواقع سهلة:**
• ترى النتيجة فوراً في المتصفح
• لا تحتاج تثبيت برامج معقدة
• مجتمع ضخم ومساعد
• مصادر تعليمية لا نهائية

**نصائح للتعلم:**
• ابدأ بـ HTML/CSS أولاً
• تعلم أساسيات JavaScript قبل المكتبات
• مارس على مشاريع صغيرة
• لا تستعجل للمكتبات المتقدمة

**الخلاصة:** JavaScript سهلة إذا تعلمتها بالترتيب الصحيح.`,
          tags: ['JavaScript', 'صعوبة', 'مبتدئين', 'تعلم']
        },
        {
          question: 'ما الفرق بين Java و JavaScript؟',
          answer: `هما لغتان مختلفتان تماماً رغم تشابه الاسم:

**JavaScript:**
• تعمل في المتصفح (Frontend)
• سهلة التعلم للمبتدئين
• لا تحتاج تثبيت برامج معقدة
• تستخدم لمواقع الويب والتطبيقات
• مرنة وسريعة التطوير

**Java:**
• تعمل على الخادم (Backend)
• أصعب للمبتدئين
• تحتاج تثبيت JDK
• تستخدم للتطبيقات الكبيرة والمؤسسية
• أكثر تنظيماً وصرامة

**أيهما أختار؟**
• للمبتدئين: JavaScript
• للتطبيقات المؤسسية: Java
• لتطوير الويب: JavaScript
• للأنظمة الكبيرة: Java

**تشبيه:** JavaScript مثل الدراجة (سهلة وسريعة)، Java مثل الشاحنة (قوية لكن معقدة).`,
          tags: ['Java', 'JavaScript', 'فروق', 'مقارنة']
        }
      ]
    },
    {
      category: 'المصادر والتعلم',
      icon: <Book className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      questions: [
        {
          question: 'هل المصادر المجانية كافية أم أحتاج دورات مدفوعة؟',
          answer: `المصادر المجانية أكثر من كافية للوصول لمستوى محترف:

**المصادر المجانية الممتازة:**
• قنوات يوتيوب عربية (الزيرو، كودزيلا، حسونة)
• FreeCodeCamp (أفضل منصة مجانية)
• MDN Web Docs (مرجع شامل)
• W3Schools (دروس بسيطة)

**متى تحتاج دورات مدفوعة:**
• إذا كنت تريد منهج منظم جداً
• إذا كنت تحتاج دعم مباشر من المدرب
• إذا كان لديك ميزانية ووقت محدود
• للحصول على شهادة معترف بها

**الحقيقة المهمة:**
• 90% من المطورين المحترفين تعلموا مجاناً
• الشركات تهتم بمهاراتك وليس بالشهادات
• المصادر المجانية أحياناً أفضل من المدفوعة

**نصيحتي:** ابدأ بالمصادر المجانية، وإذا وجدت نفسك محتاج منهج أكثر تنظيماً، فكر في الدورات المدفوعة.`,
          tags: ['مصادر مجانية', 'دورات مدفوعة', 'تعلم', 'ميزانية']
        },
        {
          question: 'كم ساعة يومياً أحتاج للتعلم؟',
          answer: `الجودة أهم من الكمية، لكن إليك دليل واقعي:

**للمبتدئين (أول 3 أشهر):**
• 30-60 دقيقة يومياً كافية
• الأهم هو الانتظام وليس الكمية
• ركز على الفهم وليس السرعة

**للمستوى المتوسط:**
• 1-2 ساعة يومياً مثالية
• اقسم الوقت: 70% تعلم، 30% ممارسة
• خذ استراحة كل 45 دقيقة

**للمستوى المتقدم:**
• 2-4 ساعات حسب الهدف
• ركز على المشاريع العملية
• تعلم تقنيات جديدة باستمرار

**نصائح مهمة:**
• 30 دقيقة يومياً أفضل من 5 ساعات أسبوعياً
• لا تدرس أكثر من 3 ساعات متواصلة
• اجعل 50% من وقتك للممارسة العملية
• استمع لجسدك وعقلك

**الخلاصة:** ابدأ بـ 30 دقيقة يومياً وزد تدريجياً حسب راحتك.`,
          tags: ['وقت التعلم', 'ساعات يومية', 'انتظام', 'جدولة']
        },
        {
          question: 'هل أحتاج معرفة الإنجليزية لتعلم البرمجة؟',
          answer: `الإنجليزية مفيدة لكنها ليست ضرورية للبداية:

**يمكنك البدء بدون إنجليزية:**
• مصادر عربية ممتازة متوفرة
• أدوات الترجمة تطورت كثيراً
• المفاهيم الأساسية متوفرة بالعربي
• يمكنك تعلم الإنجليزية تدريجياً

**لماذا الإنجليزية مفيدة:**
• الوثائق الرسمية باللغة الإنجليزية
• مجتمع أكبر للمساعدة
• فرص عمل أوسع
• تقنيات جديدة تظهر بالإنجليزية أولاً

**خطة عملية:**
1. ابدأ بالمصادر العربية
2. تعلم المصطلحات التقنية الأساسية
3. استخدم Google Translate للوثائق
4. حسن إنجليزيتك تدريجياً

**مستوى الإنجليزية المطلوب:**
• للبداية: لا شيء
• للمستوى المتوسط: قراءة بسيطة
• للاحتراف: قراءة وكتابة جيدة

**الخلاصة:** ابدأ بالعربي وطور الإنجليزية بالتوازي.`,
          tags: ['إنجليزية', 'لغة', 'مصادر عربية', 'متطلبات']
        }
      ]
    },
    {
      category: 'الأجهزة والأدوات',
      icon: <Target className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      questions: [
        {
          question: 'هل أحتاج لابتوب قوي لتعلم البرمجة؟',
          answer: `لا، يمكنك البدء بأي جهاز تقريباً:

**الحد الأدنى للبداية:**
• معالج: أي معالج حديث (حتى Celeron)
• ذاكرة: 4GB RAM (8GB أفضل)
• تخزين: 128GB (SSD مفضل)
• نظام: Windows 10/11، macOS، أو Linux

**ما لا تحتاجه في البداية:**
• كارت شاشة قوي
• معالج gaming
• 32GB RAM
• شاشات متعددة

**البدائل إذا كان جهازك ضعيف:**
• استخدم محررات أونلاين (CodePen, Replit)
• تعلم على الهاتف (SoloLearn, Grasshopper)
• استخدم مكتبات عامة أو مقاهي إنترنت
• اطلب استعارة جهاز من صديق

**متى تحتاج جهاز أقوى:**
• عند تعلم تطوير الألعاب
• للعمل مع الذكاء الاصطناعي
• لتطوير تطبيقات الهاتف
• عند العمل على مشاريع كبيرة

**نصيحة:** ابدأ بما لديك، وحسن جهازك عندما تصبح مطور فعلاً.`,
          tags: ['لابتوب', 'مواصفات', 'أجهزة', 'متطلبات']
        },
        {
          question: 'أي نظام تشغيل أفضل للبرمجة؟',
          answer: `كل نظام له مميزاته، والاختيار يعتمد على تفضيلك:

**Windows:**
• الأكثر انتشاراً وسهولة
• يدعم جميع الأدوات والبرامج
• مناسب للمبتدئين
• أرخص من Mac
• مشاكل أقل في التوافق

**macOS:**
• مفضل لدى كثير من المطورين
• نظام Unix مدمج
• أدوات تطوير ممتازة
• لكنه مكلف جداً
• مناسب لتطوير iOS

**Linux:**
• مجاني ومفتوح المصدر
• سريع وآمن
• مفضل للخوادم والبرمجة المتقدمة
• لكن صعب للمبتدئين
• يحتاج تعلم إضافي

**نصيحتي للمبتدئين:**
• ابدأ بـ Windows إذا كان لديك
• لا تغير نظامك فقط للبرمجة
• تعلم Linux لاحقاً كمهارة إضافية
• Mac ممتاز لكن ليس ضرورياً

**الخلاصة:** أي نظام تشغيل يمكنك تعلم البرمجة عليه.`,
          tags: ['نظام تشغيل', 'Windows', 'Mac', 'Linux']
        },
        {
          question: 'هل أحتاج إنترنت سريع لتعلم البرمجة؟',
          answer: `الإنترنت مهم لكن السرعة العالية ليست ضرورية:

**ما تحتاجه فعلاً:**
• سرعة 1-2 Mbps كافية للبداية
• اتصال مستقر أهم من السرعة
• إمكانية مشاهدة فيديوهات بجودة 720p
• تحميل الأدوات والبرامج

**استراتيجيات للإنترنت البطيء:**
• حمل الفيديوهات التعليمية مسبقاً
• استخدم محررات أونلاين عند توفر إنترنت سريع
• اقرأ الوثائق بدلاً من الفيديوهات
• استخدم مقاهي الإنترنت للتحميلات الكبيرة

**ما يحتاج إنترنت سريع:**
• البث المباشر للدروس
• تحميل أدوات التطوير الكبيرة
• العمل مع الخوادم السحابية
• مشاهدة فيديوهات بجودة 4K

**بدائل ذكية:**
• استخدم هاتفك كنقطة اتصال
• اذهب لمكتبة عامة أو جامعة
• شارك الإنترنت مع الجيران
• استخدم باقات إنترنت ليلية رخيصة

**الخلاصة:** الإنترنت البطيء يبطئ التعلم لكن لا يمنعه.`,
          tags: ['إنترنت', 'سرعة', 'اتصال', 'بدائل']
        }
      ]
    },
    {
      category: 'الوقت والالتزام',
      icon: <Clock className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600',
      questions: [
        {
          question: 'هل يمكنني تعلم البرمجة وأنا أعمل بدوام كامل؟',
          answer: `نعم، ممكن جداً! كثيرون فعلوا ذلك:

**استراتيجيات للعاملين:**
• استيقظ ساعة أبكر يومياً
• استغل وقت المواصلات (فيديوهات صوتية)
• 30-45 دقيقة بعد العشاء
• عطلة نهاية الأسبوع للمراجعة والمشاريع

**تنظيم الوقت:**
• الاثنين-الخميس: 30 دقيقة تعلم
• الجمعة: راحة
• السبت: 2-3 ساعات مشاريع
• الأحد: مراجعة ومشاهدة فيديوهات

**نصائح للنجاح:**
• ابدأ بـ 15 دقيقة يومياً
• استخدم تقنية Pomodoro
• تعلم في نفس الوقت يومياً
• لا تضغط على نفسك كثيراً

**التحديات المتوقعة:**
• التعب بعد العمل
• ضغط الوقت
• صعوبة التركيز
• الحاجة للراحة

**الحلول:**
• ابدأ بالأساسيات السهلة
• استخدم فترات قصيرة ومكثفة
• اجعل التعلم ممتعاً وليس واجباً
• احتفل بالإنجازات الصغيرة

**الخلاصة:** التعلم مع العمل صعب لكن ممكن مع التنظيم الجيد.`,
          tags: ['عمل بدوام كامل', 'تنظيم وقت', 'التزام', 'توازن']
        },
        {
          question: 'كم من الوقت أحتاج للحصول على أول وظيفة؟',
          answer: `يعتمد على عوامل كثيرة، لكن إليك توقعات واقعية:

**المدة المتوسطة:**
• 6-12 شهر للمبتدئين المتفرغين
• 12-18 شهر للذين يتعلمون بدوام جزئي
• 3-6 أشهر إضافية لبناء portfolio قوي

**العوامل المؤثرة:**
• الوقت المخصص يومياً
• الخلفية التعليمية السابقة
• نوع الوظيفة المطلوبة
• سوق العمل في منطقتك
• جودة portfolio الخاص بك

**خطة زمنية واقعية:**
• الشهر 1-3: تعلم الأساسيات
• الشهر 4-6: بناء مشاريع صغيرة
• الشهر 7-9: مشاريع متقدمة وportfolio
• الشهر 10-12: التقديم للوظائف

**علامات الاستعداد للوظيفة:**
• تستطيع بناء موقع كامل من الصفر
• لديك 3-5 مشاريع في portfolio
• تفهم Git و GitHub
• تستطيع حل مشاكل البرمجة الأساسية

**نصائح لتسريع العملية:**
• ركز على تقنيات مطلوبة في السوق
• ابن مشاريع تحل مشاكل حقيقية
• تواصل مع مطورين في الشركات
• تدرب على مقابلات العمل

**الخلاصة:** توقع 6-18 شهر، لكن ركز على الجودة وليس السرعة.`,
          tags: ['وظيفة', 'مدة زمنية', 'توقعات', 'استعداد']
        }
      ]
    },
    {
      category: 'التحديات والصعوبات',
      icon: <Brain className="h-6 w-6" />,
      color: 'from-red-500 to-red-600',
      questions: [
        {
          question: 'أشعر أنني غبي ولا أفهم البرمجة، هل هذا طبيعي؟',
          answer: `هذا شعور طبيعي 100% ويمر به كل مطور!

**لماذا تشعر بهذا:**
• البرمجة طريقة تفكير جديدة تماماً
• عقلك يحتاج وقت للتكيف
• المقارنة مع آخرين متقدمين
• توقعات غير واقعية عن سرعة التعلم

**الحقائق المطمئنة:**
• كل مطور محترف مر بنفس الشعور
• الذكاء ليس العامل الوحيد للنجاح
• الصبر والممارسة أهم من الذكاء
• البرمجة مهارة وليست موهبة فطرية

**علامات التقدم (حتى لو لم تشعر بها):**
• تفهم الأخطاء أفضل من قبل
• تكتب كود أسرع
• تحل مشاكل كانت صعبة سابقاً
• تطرح أسئلة أكثر ذكاءً

**استراتيجيات للتغلب على الشعور:**
• قارن نفسك بنفسك الأمس وليس بالآخرين
• احتفل بالإنجازات الصغيرة
• خذ استراحات عندما تشعر بالإحباط
• تذكر أن الخطأ جزء من التعلم

**متى تطلب المساعدة:**
• عندما تقضي أكثر من ساعة في مشكلة واحدة
• عندما تشعر بالإحباط الشديد
• عندما تفكر في الاستسلام

**الخلاصة:** هذا الشعور مؤقت وسيختفي مع الممارسة والوقت.`,
          tags: ['إحباط', 'صعوبة', 'ثقة بالنفس', 'تحفيز']
        },
        {
          question: 'أنسى ما تعلمته بسرعة، كيف أحتفظ بالمعلومات؟',
          answer: `النسيان طبيعي، لكن هناك طرق لتحسين الذاكرة:

**لماذا ننسى:**
• عدم الممارسة المنتظمة
• تعلم معلومات كثيرة بسرعة
• عدم ربط المعلومات الجديدة بالقديمة
• التعلم السطحي بدون فهم عميق

**تقنيات تحسين الذاكرة:**
• **التكرار المتباعد:** راجع المعلومات بعد يوم، أسبوع، شهر
• **التطبيق العملي:** استخدم ما تعلمته في مشاريع
• **التعليم للآخرين:** اشرح المفاهيم لصديق
• **الكتابة اليدوية:** اكتب الملاحظات بيدك

**استراتيجيات عملية:**
• اكتب ملاحظات بكلماتك الخاصة
• ارسم مخططات ورسوم بيانية
• اربط المفاهيم الجديدة بأشياء تعرفها
• مارس الكود يومياً ولو لـ 15 دقيقة

**أدوات مساعدة:**
• Anki للبطاقات التعليمية
• Notion لتنظيم الملاحظات
• GitHub لحفظ أمثلة الكود
• مدونة شخصية لتوثيق التعلم

**نصائح للمراجعة:**
• راجع الأساسيات كل أسبوع
• اعد كتابة الكود من الذاكرة
• حل نفس المشاكل بطرق مختلفة
• اقرأ كودك القديم وحسنه

**الخلاصة:** النسيان طبيعي، لكن الممارسة المنتظمة تحل المشكلة.`,
          tags: ['نسيان', 'ذاكرة', 'مراجعة', 'تذكر']
        },
        {
          question: 'أقضي ساعات في حل مشكلة واحدة، هل هذا طبيعي؟',
          answer: `نعم، هذا طبيعي جداً وجزء من عملية التعلم:

**لماذا يحدث هذا:**
• البرمجة تحتاج تفكير منطقي دقيق
• خطأ صغير يمكن أن يعطل كل شيء
• تعلم طريقة تصحيح الأخطاء يحتاج وقت
• كل مشكلة تعلمك شيئاً جديداً

**متى تطلب المساعدة:**
• بعد ساعة من المحاولة للمبتدئين
• بعد 2-3 ساعات للمتوسطين
• عندما تشعر بالإحباط الشديد
• عندما تدور في نفس الدائرة

**استراتيجيات حل المشاكل:**
1. **اقرأ رسالة الخطأ بعناية**
2. **استخدم console.log لتتبع المشكلة**
3. **قسم المشكلة لأجزاء صغيرة**
4. **ابحث في Google عن رسالة الخطأ**
5. **خذ استراحة وارجع بعقل صافي**

**مصادر المساعدة:**
• Stack Overflow (أفضل موقع للمشاكل)
• مجتمعات تليجرام العربية
• Discord servers للمطورين
• أصدقاء مطورين

**فوائد قضاء وقت في المشاكل:**
• تطوير مهارة حل المشاكل
• فهم أعمق للكود
• ثقة أكبر عند حل مشاكل مشابهة
• تعلم طرق تصحيح الأخطاء

**نصائح لتوفير الوقت:**
• تعلم استخدام debugger
• اكتب كود نظيف ومنظم
• اختبر الكود خطوة بخطوة
• احتفظ بقائمة أخطاء شائعة وحلولها

**الخلاصة:** قضاء وقت في المشاكل استثمار في مهاراتك المستقبلية.`,
          tags: ['مشاكل', 'تصحيح أخطاء', 'وقت', 'حلول']
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const questionId = categoryIndex * 100 + questionIndex;
    setOpenQuestion(openQuestion === questionId ? null : questionId);
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
                <HelpCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              أسئلة ذكية للمبتدئين
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              إجابات شاملة ومفصلة على الأسئلة العميقة التي يطرحها كل مبتدئ في البرمجة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                هذه ليست أسئلة تقنية عادية، بل أسئلة حقيقية تدور في ذهن كل من يريد تعلم البرمجة. 
                إجابات صادقة وعملية من خبرة مطورين حقيقيين.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Questions Section */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {questionCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-full mr-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const questionId = categoryIndex * 100 + questionIndex;
                  const isOpen = openQuestion === questionId;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: questionIndex * 0.1 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                                <div className="whitespace-pre-line leading-relaxed">
                                  {faq.answer}
                                </div>
                              </div>
                              
                              {/* Tags */}
                              <div className="mt-4 flex flex-wrap gap-2">
                                {faq.tags.map((tag, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Tips Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              نصائح عامة للمبتدئين
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              خلاصة أهم النصائح من جميع الأسئلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    ابدأ بالأساسيات
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    لا تتعجل للتقنيات المتقدمة. أتقن HTML/CSS/JavaScript أولاً.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    مارس يومياً
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    30 دقيقة يومياً أفضل من 5 ساعات مرة واحدة في الأسبوع.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    ابن مشاريع
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    التطبيق العملي أهم من مشاهدة مئات الفيديوهات.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <MessageCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    اطلب المساعدة
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    لا تخجل من السؤال. كل مطور محترف كان مبتدئاً يوماً ما.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
                  <Brain className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    لا تقارن نفسك
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    قارن نفسك اليوم بنفسك بالأمس، وليس بالآخرين.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-2 bg-teal-100 dark:bg-teal-900 rounded-full">
                  <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    اصبر على النتائج
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    التعلم يحتاج وقت. توقع 6-12 شهر للوصول لمستوى جيد.
                  </p>
                </div>
              </div>
            </div>
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
              لديك سؤال آخر؟
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              لا تتردد في التواصل معنا أو الانضمام لمجتمع المطورين العرب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                اسأل سؤالك
              </motion.a>
              <motion.a
                href="/how-to-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                ابدأ رحلة التعلم
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SmartQuestions;