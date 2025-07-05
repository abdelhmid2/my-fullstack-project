import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.whatIsProgramming': 'ما هي البرمجة؟',
    'nav.frontend': 'Frontend',
    'nav.backend': 'Backend',
    'nav.howToStart': 'كيف تبدأ؟',
    'nav.resources': 'المصادر المجانية',
    'nav.tools': 'الأدوات',
    'nav.tips': 'نصائح وحيل',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'تواصل معنا',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'إنشاء حساب',
    'nav.logout': 'تسجيل الخروج',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'تم بنجاح',
    'common.cancel': 'إلغاء',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.search': 'بحث',
    'common.filter': 'تصفية',
    
    // Home
    'home.title': 'كود بالعربي',
    'home.subtitle': 'تعلم البرمجة من الصفر باللغة العربية مع أفضل المصادر والدروس المجانية',
    'home.startLearning': 'ابدأ رحلة التعلم مجاناً',
    'home.login': 'تسجيل الدخول',
    
    // Auth
    'auth.login': 'تسجيل الدخول',
    'auth.register': 'إنشاء حساب جديد',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.confirmPassword': 'تأكيد كلمة المرور',
    'auth.firstName': 'الاسم الأول',
    'auth.lastName': 'اسم العائلة',
    'auth.username': 'اسم المستخدم',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.dontHaveAccount': 'ليس لديك حساب؟',
    'auth.alreadyHaveAccount': 'لديك حساب بالفعل؟',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.whatIsProgramming': 'What is Programming?',
    'nav.frontend': 'Frontend',
    'nav.backend': 'Backend',
    'nav.howToStart': 'How to Start?',
    'nav.resources': 'Free Resources',
    'nav.tools': 'Tools',
    'nav.tips': 'Tips & Tricks',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact Us',
    'nav.login': 'Login',
    'nav.register': 'Sign Up',
    'nav.logout': 'Logout',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.search': 'Search',
    'common.filter': 'Filter',
    
    // Home
    'home.title': 'Code in Arabic',
    'home.subtitle': 'Learn programming from scratch in Arabic with the best free resources and tutorials',
    'home.startLearning': 'Start Learning for Free',
    'home.login': 'Login',
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Create New Account',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.username': 'Username',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.dontHaveAccount': "Don't have an account?",
    'auth.alreadyHaveAccount': 'Already have an account?',
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'ar' | 'en') || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};