import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Book, Code } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      category: 'البداية',
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          question: 'ما هي أفضل لغة برمجة للمبتدئين؟',
          answer: 'JavaScript هي أفضل لغة للمبتدئين لأنها سهلة التعلم ومتعددة الاستخدامات. يمكنك استخدامها لتطوير المواقع والتطبيقات. Python أيضاً خيار ممتاز للمبتدئين بسبب بساطة قواعدها.'
        },
        {
          question: 'كم من الوقت أحتاج لتعلم البرمجة؟',
          answer: 'يعتمد على مستوى التفاني والوقت المخصص يومياً. مع ساعة واحدة يومياً، يمكنك تعلم الأساسيات في 3-6 أشهر. للوصول لمستوى متوسط قد تحتاج 6-12 شهر. المهم هو الثبات والممارسة المستمرة.'
        },
        {
          question: 'هل أحتاج شهادة جامعية في علوم الحاسوب؟',
          answer: 'لا، الشهادة الجامعية ليست ضرورية. كثير من المطورين المحترفين تعلموا بأنفسهم. المهم هو المهارات العملية والمشاريع التي تبنيها. أصحاب العمل يهتمون أكثر بما تستطيع فعله.'
        }
      ]
    },
    {
      category: 'التعلم',
      icon: <Book className="h-6 w-6" />,
      questions: [
        {
          question: 'ما هي أفضل طريقة لتعلم البرمجة؟',
          answer: 'أفضل طريقة هي الجمع بين النظرية والممارسة. ابدأ بدورة منظمة، ثم طبق ما تتعلمه في مشاريع صغيرة. اكتب كود يومياً ولو لـ 30 دقيقة. انضم لمجتمعات المطورين واطلب المساعدة عند الحاجة.'
        },
        {
          question: 'كيف أتعامل مع الأخطاء في الكود؟',
          answer: 'الأخطاء جزء طبيعي من البرمجة. اقرأ رسالة الخطأ بعناية، ابحث عنها في Google، استخدم console.log لتتبع المشكلة. لا تخف من التجريب والتعديل. كل خطأ تحله يجعلك مطور أفضل.'
        },
        {
          question: 'متى أبدأ في بناء مشاريع حقيقية؟',
          answer: 'ابدأ في بناء مشاريع صغيرة من اليوم الأول. حتى لو كان مجرد صفحة HTML بسيطة. كلما تعلمت مفهوم جديد، طبقه في مشروع. ابدأ بحاسبة، ثم قائمة مهام، ثم موقع شخصي.'
        }
      ]
    },
    {
      category: 'المسار المهني',
      icon: <Code className="h-6 w-6" />,
      questions: [
        {
          question: 'ما الفرق بين Frontend و Backend؟',
          answer: 'Frontend هو كل ما يراه المستخدم (الواجهة، الألوان، الأزرار). Backend هو المنطق الخفي (قواعد البيانات، الخوادم، المعالجة). Frontend يستخدم HTML, CSS, JavaScript. Backend يستخدم Node.js, Python, Java وغيرها.'
        },
        {
          question: 'كيف أحصل على أول وظيفة في البرمجة؟',
          answer: 'ابن portfolio قوي بمشاريع متنوعة، تعلم Git و GitHub، اكتب CV تقني جيد، تدرب على المقابلات التقنية، تواصل مع المطورين في LinkedIn، ابدأ بوظائف junior أو تدريب، لا تستسلم بسرعة.'
        },
        {
          question: 'ما هي الرواتب المتوقعة للمطورين؟',
          answer: 'تختلف حسب البلد والخبرة والتخصص. في الدول العربية، المطور المبتدئ قد يحصل على 500-1500$ شهرياً. مع الخبرة يمكن الوصول لـ 3000-8000$. العمل الحر والشركات الأجنبية قد توفر رواتب أعلى.'
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
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              إجابات شاملة على أكثر الأسئلة شيوعاً حول تعلم البرمجة والمسار المهني
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full mr-4">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
              </div>

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
                      className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden"
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
                            <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                              {faq.answer}
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

      {/* Contact CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              لا تتردد في التواصل معنا، سنكون سعداء لمساعدتك
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              تواصل معنا
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FAQ;