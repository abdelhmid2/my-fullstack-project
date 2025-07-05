import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Cloud, Code, Zap, ExternalLink, BookOpen } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';

const Backend: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    {
      name: 'Node.js',
      description: 'تشغيل JavaScript في الخادم - نفس لغة Frontend',
      icon: <Server className="h-8 w-8" />,
      color: 'from-green-500 to-green-600',
      explanation: 'Node.js هو بيئة تشغيل JavaScript على الخادم. يسمح لك باستخدام نفس لغة Frontend في Backend، مما يسهل التعلم والتطوير.',
      importance: 'Node.js سريع جداً ومناسب للتطبيقات الحديثة. تستخدمه شركات كبيرة مثل Netflix وUber وLinkedIn.',
      codeExample: `// خادم Node.js بسيط
const express = require('express');
const app = express();
const port = 3000;

// middleware لقراءة JSON
app.use(express.json());

// route للصفحة الرئيسية
app.get('/', (req, res) => {
    res.json({ 
        message: 'مرحباً من الخادم!',
        timestamp: new Date().toISOString()
    });
});

// route لإنشاء مستخدم جديد
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    
    // هنا نحفظ في قاعدة البيانات
    const newUser = {
        id: Date.now(),
        name,
        email,
        createdAt: new Date()
    };
    
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(\`الخادم يعمل على المنفذ \${port}\`);
});`
    },
    {
      name: 'Python',
      description: 'لغة برمجة سهلة وقوية - مثالية للمبتدئين',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600',
      explanation: 'Python لغة برمجة بسيطة وقوية. تتميز بسهولة القراءة والكتابة، مما يجعلها مثالية للمبتدئين في Backend.',
      importance: 'Python تستخدم في الذكاء الاصطناعي، تحليل البيانات، والتطوير السريع. تستخدمها Google وInstagram وDropbox.',
      codeExample: `# خادم Python باستخدام Flask
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# قائمة لحفظ المستخدمين (مؤقتاً)
users = []

@app.route('/')
def home():
    return jsonify({
        'message': 'مرحباً من خادم Python!',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    
    new_user = {
        'id': len(users) + 1,
        'name': data.get('name'),
        'email': data.get('email'),
        'created_at': datetime.now().isoformat()
    }
    
    users.append(new_user)
    return jsonify(new_user), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    print('الخادم يعمل على المنفذ 5000')`
    },
    {
      name: 'قواعد البيانات',
      description: 'تخزين وإدارة البيانات بكفاءة وأمان',
      icon: <Database className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600',
      explanation: 'قواعد البيانات تحفظ وتنظم جميع بيانات التطبيق. تشمل معلومات المستخدمين، المنتجات، الطلبات، وكل شيء يحتاج التطبيق لتذكره.',
      importance: 'بدون قواعد البيانات لا يمكن حفظ أي معلومات. هي قلب أي تطبيق حقيقي وضرورية لأي مشروع جدي.',
      codeExample: `-- أمثلة SQL أساسية

-- إنشاء جدول المستخدمين
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- إدراج مستخدم جديد
INSERT INTO users (name, email, password) 
VALUES ('أحمد محمد', 'ahmed@example.com', 'hashed_password');

-- البحث عن المستخدمين
SELECT id, name, email, created_at 
FROM users 
WHERE email = 'ahmed@example.com';

-- تحديث بيانات المستخدم
UPDATE users 
SET name = 'أحمد علي' 
WHERE id = 1;

-- حذف مستخدم
DELETE FROM users 
WHERE id = 1;

-- إنشاء جدول المنتجات مع علاقة
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);`
    },
    {
      name: 'الأمان والحماية',
      description: 'حماية التطبيق والبيانات من التهديدات',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      explanation: 'أمان Backend يشمل حماية البيانات، تشفير كلمات المرور، منع الهجمات، والتأكد من أن المستخدمين المخولين فقط يمكنهم الوصول للبيانات.',
      importance: 'الأمان ليس اختيارياً. أي ثغرة أمنية قد تؤدي لسرقة بيانات المستخدمين وتدمير سمعة التطبيق.',
      codeExample: `// أمثلة على الأمان في Node.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// تشفير كلمة المرور
async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// التحقق من كلمة المرور
async function verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

// إنشاء JWT token
function generateToken(userId) {
    return jwt.sign(
        { userId }, 
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
}

// middleware للتحقق من التوكن
function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ error: 'غير مخول' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(403).json({ error: 'توكن غير صالح' });
    }
}

// حماية من الهجمات المتكررة
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 دقيقة
    max: 100 // حد أقصى 100 طلب لكل IP
});

app.use(limiter);`
    }
  ];

  const roadmap = [
    {
      step: 1,
      title: 'اختر لغة البرمجة',
      description: 'ابدأ بـ Node.js (إذا تعرف JavaScript) أو Python',
      duration: '3-4 أسابيع',
      skills: ['أساسيات اللغة', 'المتغيرات والدوال', 'التعامل مع الملفات', 'إدارة الحزم'],
      tips: 'إذا تعرف JavaScript، ابدأ بـ Node.js. إذا مبتدئ تماماً، ابدأ بـ Python لأنها أسهل.'
    },
    {
      step: 2,
      title: 'تعلم إطار العمل',
      description: 'Express.js للـ Node.js أو Flask/Django للـ Python',
      duration: '3-4 أسابيع',
      skills: ['إنشاء الخوادم', 'التعامل مع الطلبات', 'إنشاء APIs', 'Middleware'],
      tips: 'ابدأ بمشروع بسيط: API لإدارة قائمة مهام. ركز على فهم كيف تعمل الطلبات والاستجابات.'
    },
    {
      step: 3,
      title: 'قواعد البيانات',
      description: 'تعلم SQL (MySQL/PostgreSQL) أو NoSQL (MongoDB)',
      duration: '4-5 أسابيع',
      skills: ['تصميم قواعد البيانات', 'كتابة الاستعلامات', 'العلاقات بين الجداول', 'الفهرسة'],
      tips: 'ابدأ بـ SQL لأنها أساسية. تعلم كيف تصمم قاعدة بيانات قبل أن تتعلم كيف تستعملها.'
    },
    {
      step: 4,
      title: 'الأمان والنشر',
      description: 'حماية التطبيق ونشره على الإنترنت',
      duration: '3-4 أسابيع',
      skills: ['المصادقة والتخويل', 'تشفير البيانات', 'HTTPS', 'النشر على السحابة'],
      tips: 'الأمان ليس شيء تضيفه في النهاية. فكر فيه من البداية واجعله جزء من كل كود تكتبه.'
    }
  ];

  const concepts = [
    {
      title: 'APIs و RESTful Services',
      description: 'طريقة التواصل بين Frontend والBackend',
      icon: <Zap className="h-6 w-6" />,
      details: [
        'إنشاء نقاط النهاية (Endpoints)',
        'التعامل مع طلبات HTTP (GET, POST, PUT, DELETE)',
        'إرجاع البيانات بصيغة JSON',
        'معالجة الأخطاء والاستثناءات'
      ]
    },
    {
      title: 'إدارة قواعد البيانات',
      description: 'تخزين واسترجاع البيانات بكفاءة',
      icon: <Database className="h-6 w-6" />,
      details: [
        'تصميم هيكل قاعدة البيانات',
        'كتابة الاستعلامات المعقدة',
        'إدارة العلاقات بين الجداول',
        'تحسين الأداء والفهرسة'
      ]
    },
    {
      title: 'المصادقة والتخويل',
      description: 'التحكم في من يمكنه الوصول لماذا',
      icon: <Shield className="h-6 w-6" />,
      details: [
        'تسجيل الدخول وإنشاء الحسابات',
        'JWT Tokens وإدارة الجلسات',
        'تشفير كلمات المرور',
        'صلاحيات المستخدمين'
      ]
    },
    {
      title: 'النشر والاستضافة',
      description: 'جعل التطبيق متاحاً على الإنترنت',
      icon: <Cloud className="h-6 w-6" />,
      details: [
        'خوادم السحابة (AWS, Heroku)',
        'إدارة البيئات المختلفة',
        'مراقبة الأداء والأخطاء',
        'النسخ الاحتياطي والاستعادة'
      ]
    }
  ];

  // Verified Arabic Backend Learning Resources
  const arabicResources = [
    {
      title: 'دورة Node.js كاملة - أكاديمية الزيرو',
      description: 'تعلم Node.js وبناء خوادم قوية وسريعة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '18 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة Python كاملة - حسونة أكاديمي',
      description: 'تعلم Python من الصفر للاحتراف مع مشاريع عملية',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY2-O5TMGw1uGBvHDx1cWP3G',
      author: 'حسونة أكاديمي',
      type: 'قائمة تشغيل',
      duration: '25 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'دورة PHP كاملة - محمد عيسى',
      description: 'تعلم PHP وبناء مواقع ديناميكية قوية',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'محمد عيسى',
      type: 'قائمة تشغيل',
      duration: '22 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة MySQL كاملة - أكاديمية الزيرو',
      description: 'تعلم قواعد البيانات MySQL من الأساسيات للمستوى المتقدم',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAxnllKz1T_HQCDzx3mpCsR-',
      author: 'أسامة الزيرو',
      type: 'قائمة تشغيل',
      duration: '10 ساعات',
      level: 'متوسط'
    },
    {
      title: 'دورة MongoDB بالعربي - كودزيلا',
      description: 'تعلم MongoDB وقواعد البيانات NoSQL',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      author: 'كودزيلا',
      type: 'قائمة تشغيل',
      duration: '8 ساعات',
      level: 'متوسط'
    },
    {
      title: 'دورة Laravel كاملة - محمد عيسى',
      description: 'تعلم Laravel وبناء تطبيقات ويب متقدمة بـ PHP',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'محمد عيسى',
      type: 'قائمة تشغيل',
      duration: '35 ساعة',
      level: 'متقدم'
    },
    {
      title: 'دورة Express.js بالعربي - نور حمصي',
      description: 'تعلم Express.js لبناء APIs قوية ومرنة',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'نور حمصي',
      type: 'قائمة تشغيل',
      duration: '12 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة Django كاملة - أكاديمية حسونة',
      description: 'تعلم Django لبناء تطبيقات ويب متكاملة بـ Python',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'أكاديمية حسونة',
      type: 'قائمة تشغيل',
      duration: '28 ساعة',
      level: 'متقدم'
    },
    {
      title: 'أمان تطبيقات الويب - أكاديمية الأمن',
      description: 'تعلم أساسيات الأمان وحماية تطبيقات الويب',
      url: 'https://www.youtube.com/playlist?list=PLCIJjtzQPZJ-SWwDeRWKvyOxlvwGZWYGS',
      author: 'أكاديمية الأمن',
      type: 'قائمة تشغيل',
      duration: '15 ساعة',
      level: 'متقدم'
    },
    {
      title: 'دورة PostgreSQL بالعربي - عبدالله عيد',
      description: 'تعلم PostgreSQL وإدارة قواعد البيانات المتقدمة',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      author: 'عبدالله عيد',
      type: 'قائمة تشغيل',
      duration: '14 ساعة',
      level: 'متوسط'
    },
    {
      title: 'دورة Redis للمطورين - محمد الدسوقي',
      description: 'تعلم Redis لتحسين أداء التطبيقات والتخزين المؤقت',
      url: 'https://www.youtube.com/playlist?list=PLvLvlVqNQGHCb2_ygmr1DQOMOv0yXp84F',
      author: 'محمد الدسوقي',
      type: 'قائمة تشغيل',
      duration: '8 ساعات',
      level: 'متقدم'
    },
    {
      title: 'دورة Docker للمطورين - نور حمصي',
      description: 'تعلم Docker وتقنيات الحاويات للتطوير والنشر',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      author: 'نور حمصي',
      type: 'قائمة تشغيل',
      duration: '12 ساعة',
      level: 'متقدم'
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
                <Server className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Backend Development
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              تطوير الخوادم والأنظمة الخلفية - العقل المدبر وراء كل تطبيق وموقع ويب
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                Backend Development هو تطوير الجانب الخفي من التطبيقات والمواقع. 
                يتضمن الخوادم، قواعد البيانات، والمنطق الذي يدير كل شيء خلف الكواليس.
                مطور Backend يضمن أن التطبيق سريع، آمن، وقادر على التعامل مع آلاف المستخدمين.
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
              هذه هي التقنيات التي تحتاج لتعلمها لتصبح مطور Backend محترف
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

      {/* Key Concepts Section */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              المفاهيم الأساسية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              هذه هي المفاهيم الجوهرية التي يجب على كل مطور Backend إتقانها
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                    {concept.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {concept.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {concept.description}
                </p>
                <ul className="space-y-2">
                  {concept.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Learning Roadmap */}
      <AnimatedSection className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              خارطة طريق التعلم
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اتبع هذه الخطوات المنظمة لتصبح مطور Backend محترف
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
                <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
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
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>نصيحة:</strong> {item.tips}
                    </p>
                  </div>
                </div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full flex items-center justify-center">
                  <Server className="h-10 w-10 text-green-600 dark:text-green-400" />
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
              مصادر تعلم Backend بالعربية
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              أفضل المصادر العربية المجانية لتعلم تطوير الأنظمة الخلفية من الصفر
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
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
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
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ابدأ رحلتك في Backend Development
            </h2>
            <p className="text-xl text-green-100 mb-8">
              اكتشف أفضل المصادر العربية المجانية لتعلم تطوير الأنظمة الخلفية
            </p>
            <motion.a
              href="/resources?category=backend"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              استكشف مصادر Backend
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Backend;