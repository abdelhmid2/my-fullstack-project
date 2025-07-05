import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"
              >
                <Code className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">كود بالعربي</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              منصة تعليمية شاملة لتعلم البرمجة من الصفر باللغة العربية. 
              نهدف إلى تبسيط عالم البرمجة وجعله متاحاً لكل العرب.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:abdelhmidibrahim2@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/what-is-programming" className="text-gray-400 hover:text-white transition-colors">
                  ما هي البرمجة؟
                </a>
              </li>
              <li>
                <a href="/how-to-start" className="text-gray-400 hover:text-white transition-colors">
                  كيف تبدأ؟
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  المصادر المجانية
                </a>
              </li>
              <li>
                <a href="/tools" className="text-gray-400 hover:text-white transition-colors">
                  الأدوات
                </a>
              </li>
              <li>
                <a href="/tips" className="text-gray-400 hover:text-white transition-colors">
                  نصائح وحيل
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">التخصصات</h3>
            <ul className="space-y-2">
              <li>
                <a href="/frontend" className="text-gray-400 hover:text-white transition-colors">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="/backend" className="text-gray-400 hover:text-white transition-colors">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="/php" className="text-gray-400 hover:text-white transition-colors">
                  PHP Development
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} كود بالعربي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Developed by:</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 rtl:space-x-reverse"
              >
                <Heart className="h-4 w-4 text-red-500" />
                <span className="text-primary-400 font-medium">Eng. Abdelhamid Ibrahim Abdelhamid</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;