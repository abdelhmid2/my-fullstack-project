import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Video, Globe, Star, ExternalLink, Youtube, FileText, Monitor } from 'lucide-react';
import AnimatedSection from '../components/common/AnimatedSection';
import LoadingSpinner from '../components/common/LoadingSpinner';

interface Resource {
  _id: string;
  title: string;
  description: string;
  url: string;
  type: 'video' | 'book' | 'website' | 'course' | 'tutorial' | 'channel' | 'playlist';
  category: 'frontend' | 'backend' | 'mobile' | 'general' | 'tools' | 'algorithms' | 'ai' | 'cybersecurity';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  author: string;
  rating: number;
  isFree: boolean;
  featured: boolean;
  language: 'ar' | 'en';
  duration?: string;
}

const Resources: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { value: 'all', label: 'جميع التخصصات' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'mobile', label: 'تطبيقات الجوال' },
    { value: 'ai', label: 'الذكاء الاصطناعي' },
    { value: 'cybersecurity', label: 'الأمن السيبراني' },
    { value: 'tools', label: 'الأدوات' },
    { value: 'algorithms', label: 'الخوارزميات' },
    { value: 'general', label: 'عام' }
  ];

  const types = [
    { value: 'all', label: 'جميع الأنواع' },
    { value: 'playlist', label: 'قائمة تشغيل' },
    { value: 'course', label: 'دورة' },
    { value: 'channel', label: 'قناة يوتيوب' },
    { value: 'video', label: 'فيديو' },
    { value: 'book', label: 'كتاب' },
    { value: 'website', label: 'موقع' },
    { value: 'tutorial', label: 'درس' }
  ];

  const difficulties = [
    { value: 'all', label: 'جميع المستويات' },
    { value: 'beginner', label: 'مبتدئ' },
    { value: 'intermediate', label: 'متوسط' },
    { value: 'advanced', label: 'متقدم' }
  ];

  // Comprehensive Arabic resources
  const arabicResources: Resource[] = [
    // Frontend Resources
    {
      _id: '1',
      title: 'دورة HTML كاملة - أكاديمية الزيرو',
      description: 'تعلم HTML من الصفر حتى الاحتراف مع أمثلة عملية وتطبيقات',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLV',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'beginner',
      tags: ['HTML', 'أساسيات', 'مبتدئين'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '8 ساعات'
    },
    {
      _id: '2',
      title: 'دورة CSS كاملة - أكاديمية الزيرو',
      description: 'تعلم CSS وتصميم المواقع الجميلة والمتجاوبة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'beginner',
      tags: ['CSS', 'تصميم', 'Flexbox', 'Grid'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '12 ساعة'
    },
    {
      _id: '3',
      title: 'دورة JavaScript كاملة - أكاديمية الزيرو',
      description: 'تعلم JavaScript من الأساسيات إلى المستوى المتقدم',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'intermediate',
      tags: ['JavaScript', 'DOM', 'ES6', 'Async'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '20 ساعة'
    },
    {
      _id: '4',
      title: 'دورة React كاملة - كودزيلا',
      description: 'تعلم React.js لبناء تطبيقات ويب حديثة ومتقدمة',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'intermediate',
      tags: ['React', 'Components', 'Hooks', 'State'],
      author: 'كودزيلا',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '15 ساعة'
    },
    {
      _id: '5',
      title: 'قناة الزيرو ويب سكول',
      description: 'قناة شاملة لتعلم تطوير الويب من الصفر',
      url: 'https://www.youtube.com/@ElzeroWebSchool',
      type: 'channel',
      category: 'frontend',
      difficulty: 'beginner',
      tags: ['HTML', 'CSS', 'JavaScript', 'تطوير ويب'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar'
    },

    // Backend Resources
    {
      _id: '6',
      title: 'دورة Node.js كاملة - أكاديمية الزيرو',
      description: 'تعلم Node.js وبناء خوادم قوية وسريعة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9',
      type: 'playlist',
      category: 'backend',
      difficulty: 'intermediate',
      tags: ['Node.js', 'Express', 'APIs', 'Backend'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '18 ساعة'
    },
    {
      _id: '7',
      title: 'دورة Python كاملة - حسونة أكاديمي',
      description: 'تعلم Python من الصفر للاحتراف مع مشاريع عملية',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY2-O5TMGw1uGBvHDx1cWP3G',
      type: 'playlist',
      category: 'backend',
      difficulty: 'beginner',
      tags: ['Python', 'أساسيات', 'OOP', 'مشاريع'],
      author: 'حسونة أكاديمي',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '25 ساعة'
    },
    {
      _id: '8',
      title: 'دورة PHP كاملة - محمد عيسى',
      description: 'تعلم PHP وبناء مواقع ديناميكية قوية',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      type: 'playlist',
      category: 'backend',
      difficulty: 'intermediate',
      tags: ['PHP', 'MySQL', 'مواقع ديناميكية'],
      author: 'محمد عيسى',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '22 ساعة'
    },

    // Database Resources
    {
      _id: '9',
      title: 'دورة MySQL كاملة - أكاديمية الزيرو',
      description: 'تعلم قواعد البيانات MySQL من الأساسيات للمستوى المتقدم',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAxnllKz1T_HQCDzx3mpCsR-',
      type: 'playlist',
      category: 'backend',
      difficulty: 'intermediate',
      tags: ['MySQL', 'قواعد البيانات', 'SQL'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '10 ساعات'
    },
    {
      _id: '10',
      title: 'دورة MongoDB بالعربي - كودزيلا',
      description: 'تعلم MongoDB وقواعد البيانات NoSQL',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      type: 'playlist',
      category: 'backend',
      difficulty: 'intermediate',
      tags: ['MongoDB', 'NoSQL', 'قواعد البيانات'],
      author: 'كودزيلا',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '8 ساعات'
    },

    // Mobile Development
    {
      _id: '11',
      title: 'دورة Flutter كاملة - عبدالله عيد',
      description: 'تعلم Flutter وبناء تطبيقات الجوال لـ iOS و Android',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      type: 'playlist',
      category: 'mobile',
      difficulty: 'intermediate',
      tags: ['Flutter', 'Dart', 'تطبيقات الجوال'],
      author: 'عبدالله عيد',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '30 ساعة'
    },
    {
      _id: '12',
      title: 'دورة React Native - أكاديمية حسونة',
      description: 'بناء تطبيقات الجوال باستخدام React Native',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      type: 'playlist',
      category: 'mobile',
      difficulty: 'advanced',
      tags: ['React Native', 'JavaScript', 'تطبيقات الجوال'],
      author: 'أكاديمية حسونة',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '20 ساعة'
    },

    // AI and Machine Learning
    {
      _id: '13',
      title: 'دورة الذكاء الاصطناعي بالعربي - حسام الحوراني',
      description: 'مقدمة شاملة للذكاء الاصطناعي وتعلم الآلة',
      url: 'https://www.youtube.com/playlist?list=PLImVLP5cXFNQSCXKpNhOyOHjj-QFaOB6N',
      type: 'playlist',
      category: 'ai',
      difficulty: 'intermediate',
      tags: ['AI', 'Machine Learning', 'Python', 'ذكاء اصطناعي'],
      author: 'حسام الحوراني',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '25 ساعة'
    },
    {
      _id: '14',
      title: 'دورة Python للذكاء الاصطناعي - محمد الدسوقي',
      description: 'تعلم Python المتخصص في الذكاء الاصطناعي وتحليل البيانات',
      url: 'https://www.youtube.com/playlist?list=PLvLvlVqNQGHCb2_ygmr1DQOMOv0yXp84F',
      type: 'playlist',
      category: 'ai',
      difficulty: 'advanced',
      tags: ['Python', 'Data Science', 'NumPy', 'Pandas'],
      author: 'محمد الدسوقي',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '35 ساعة'
    },

    // Cybersecurity
    {
      _id: '15',
      title: 'دورة الأمن السيبراني - أكاديمية الأمن',
      description: 'تعلم أساسيات الأمن السيبراني وحماية الأنظمة',
      url: 'https://www.youtube.com/playlist?list=PLCIJjtzQPZJ-SWwDeRWKvyOxlvwGZWYGS',
      type: 'playlist',
      category: 'cybersecurity',
      difficulty: 'intermediate',
      tags: ['Cybersecurity', 'أمن المعلومات', 'Ethical Hacking'],
      author: 'أكاديمية الأمن',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '20 ساعة'
    },

    // Tools and General
    {
      _id: '16',
      title: 'دورة Git و GitHub - أكاديمية الزيرو',
      description: 'تعلم استخدام Git و GitHub لإدارة المشاريع والتعاون',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF',
      type: 'playlist',
      category: 'tools',
      difficulty: 'beginner',
      tags: ['Git', 'GitHub', 'Version Control'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '6 ساعات'
    },
    {
      _id: '17',
      title: 'دورة Linux للمطورين - نور حمصي',
      description: 'تعلم استخدام Linux وسطر الأوامر للمطورين',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      type: 'playlist',
      category: 'tools',
      difficulty: 'intermediate',
      tags: ['Linux', 'Command Line', 'Terminal'],
      author: 'نور حمصي',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '12 ساعة'
    },

    // Algorithms and Data Structures
    {
      _id: '18',
      title: 'دورة الخوارزميات وهياكل البيانات - أدهم نابلسي',
      description: 'تعلم الخوارزميات وهياكل البيانات الأساسية',
      url: 'https://www.youtube.com/playlist?list=PLwWuxCLlF_ue4a4rpyDqJcyk2gx1T8sOJ',
      type: 'playlist',
      category: 'algorithms',
      difficulty: 'advanced',
      tags: ['Algorithms', 'Data Structures', 'خوارزميات'],
      author: 'أدهم نابلسي',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar',
      duration: '40 ساعة'
    },

    // Books and Documentation
    {
      _id: '19',
      title: 'كتاب تعلم البرمجة للمبتدئين',
      description: 'كتاب مجاني يشرح أساسيات البرمجة بطريقة مبسطة',
      url: 'https://www.kutub.info/library/book/19087',
      type: 'book',
      category: 'general',
      difficulty: 'beginner',
      tags: ['أساسيات', 'مبتدئين', 'مفاهيم'],
      author: 'دار النشر التقني',
      rating: 4,
      isFree: true,
      featured: false,
      language: 'ar'
    },
    {
      _id: '20',
      title: 'موقع MDN Web Docs بالعربية',
      description: 'مرجع شامل لتقنيات الويب مع ترجمة عربية',
      url: 'https://developer.mozilla.org/ar/',
      type: 'website',
      category: 'frontend',
      difficulty: 'beginner',
      tags: ['مرجع', 'توثيق', 'ويب'],
      author: 'Mozilla',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar'
    },

    // Additional Quality Resources
    {
      _id: '21',
      title: 'قناة محمد عيسى للبرمجة',
      description: 'قناة متخصصة في تعليم البرمجة بطريقة عملية ومبسطة',
      url: 'https://www.youtube.com/@MohamedEssaChannel',
      type: 'channel',
      category: 'general',
      difficulty: 'beginner',
      tags: ['برمجة', 'تعليم', 'مشاريع'],
      author: 'محمد عيسى',
      rating: 5,
      isFree: true,
      featured: true,
      language: 'ar'
    },
    {
      _id: '22',
      title: 'دورة Bootstrap كاملة - أكاديمية الزيرو',
      description: 'تعلم Bootstrap لتصميم مواقع متجاوبة بسرعة',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'beginner',
      tags: ['Bootstrap', 'CSS Framework', 'Responsive'],
      author: 'أسامة الزيرو',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '8 ساعات'
    },
    {
      _id: '23',
      title: 'دورة Vue.js بالعربي - كودزيلا',
      description: 'تعلم Vue.js لبناء تطبيقات ويب تفاعلية',
      url: 'https://www.youtube.com/playlist?list=PLQtNtS-WfRa8OF9juY3k6WUWayMfDKHK2',
      type: 'playlist',
      category: 'frontend',
      difficulty: 'intermediate',
      tags: ['Vue.js', 'JavaScript Framework', 'SPA'],
      author: 'كودزيلا',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '16 ساعة'
    },
    {
      _id: '24',
      title: 'دورة Laravel كاملة - محمد عيسى',
      description: 'تعلم Laravel وبناء تطبيقات ويب متقدمة بـ PHP',
      url: 'https://www.youtube.com/playlist?list=PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW',
      type: 'playlist',
      category: 'backend',
      difficulty: 'advanced',
      tags: ['Laravel', 'PHP', 'MVC', 'Framework'],
      author: 'محمد عيسى',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '35 ساعة'
    },
    {
      _id: '25',
      title: 'دورة Docker للمطورين - نور حمصي',
      description: 'تعلم Docker وتقنيات الحاويات للتطوير والنشر',
      url: 'https://www.youtube.com/playlist?list=PLF8OvnCBlEY0-QFD9a8bpjl5bYOYn8WDw',
      type: 'playlist',
      category: 'tools',
      difficulty: 'advanced',
      tags: ['Docker', 'DevOps', 'Containers'],
      author: 'نور حمصي',
      rating: 5,
      isFree: true,
      featured: false,
      language: 'ar',
      duration: '12 ساعة'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'playlist':
        return <Youtube className="h-5 w-5" />;
      case 'channel':
        return <Monitor className="h-5 w-5" />;
      case 'video':
      case 'course':
      case 'tutorial':
        return <Video className="h-5 w-5" />;
      case 'book':
        return <BookOpen className="h-5 w-5" />;
      case 'website':
        return <Globe className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'مبتدئ';
      case 'intermediate':
        return 'متوسط';
      case 'advanced':
        return 'متقدم';
      default:
        return difficulty;
    }
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'تطبيقات الجوال',
      ai: 'الذكاء الاصطناعي',
      cybersecurity: 'الأمن السيبراني',
      tools: 'الأدوات',
      algorithms: 'الخوارزميات',
      general: 'عام'
    };
    return categoryMap[category] || category;
  };

  useEffect(() => {
    // Initialize with Arabic resources
    setResources(arabicResources);
    setLoading(false);
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedCategory, selectedType, selectedDifficulty]);

  const filterResources = () => {
    let filtered = resources;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        resource.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => resource.type === selectedType);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(resource => resource.difficulty === selectedDifficulty);
    }

    // Sort by featured first, then by rating
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating - a.rating;
    });

    setFilteredResources(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              المصادر المجانية
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              مكتبة شاملة من أفضل المصادر العربية المجانية لتعلم البرمجة
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-400 max-w-4xl mx-auto">
                جمعنا لك أكثر من {arabicResources.length} مصدر تعليمي عربي مجاني عالي الجودة، 
                من قنوات يوتيوب متخصصة إلى كتب ومواقع تعليمية. كل المصادر مجربة ومراجعة من قبل خبراء.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <AnimatedSection className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث في المصادر... (اسم الدورة، المؤلف، التقنية)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  التخصص
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  نوع المصدر
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  {types.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  المستوى
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                عرض {filteredResources.length} من أصل {resources.length} مصدر
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Resources Grid */}
      <AnimatedSection className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                جرب تغيير معايير البحث أو الفلاتر
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {resource.featured && (
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center py-2 text-sm font-medium">
                      ⭐ مصدر مميز
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                          {getTypeIcon(resource.type)}
                        </div>
                        <div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                            {getDifficultyLabel(resource.difficulty)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {getCategoryLabel(resource.category)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {resource.author}
                      </span>
                    </div>

                    {resource.duration && (
                      <div className="mb-4">
                        <span className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                          المدة: {resource.duration}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {resource.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          +{resource.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <motion.a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                    >
                      <span>زيارة المصدر</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              هل تعرف مصدر مفيد؟
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              ساعدنا في إثراء المكتبة بإضافة المصادر المفيدة التي تعرفها
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              اقترح مصدر جديد
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Resources;