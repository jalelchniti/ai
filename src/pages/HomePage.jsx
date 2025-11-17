import { Link } from 'react-router-dom';
import { ArrowRightIcon, BookOpenIcon, AcademicCapIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import NewsletterCTA from '../components/common/NewsletterCTA';
import SocialCTAs from '../components/common/SocialCTAs';
import { modules } from '../data/modulesData';

const HomePage = () => {
  const features = [
    {
      icon: <BookOpenIcon className="h-8 w-8" />,
      title: 'محتوى شامل ومنظم',
      description: 'جميع المحاور الأدبية مُنظمة ومُفصلة بشكل احترافي',
    },
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: 'منهجية علمية',
      description: 'خطوات واضحة لتحليل النصوص الشعرية والحجاجية',
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: 'تطبيقات موجهة',
      description: 'تمارين عملية مع دليل خطوة بخطوة ونماذج محلولة',
    },
    {
      icon: <CheckCircleIcon className="h-8 w-8" />,
      title: 'ميزة TTS للاستماع',
      description: 'استمع للنصوص العربية بصوت أدبي واضح',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-white py-20 md:py-32" dir="rtl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <AcademicCapIcon className="h-5 w-5" />
              <span className="text-sm font-semibold">السنة الرابعة آداب - بكالوريا تونس</span>
            </div>

            <h1 className="arabic-text text-4xl md:text-6xl font-bold mb-6 leading-tight">
              منصتك الشاملة للتفوق في
              <br />
              <span className="text-white/90">الأدب العربي</span>
            </h1>

            <p className="arabic-text text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
              موارد تعليمية كاملة للمحورين الأدبيين مع تطبيقات موجهة ومنهجية علمية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#modules" className="btn-secondary">
                <ArrowRightIcon className="h-5 w-5 inline ml-2" />
                استكشف المحاور
              </a>
              <a href="#newsletter" className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                اشترك في النشرة
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="arabic-text text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار منصتنا؟
            </h2>
            <p className="arabic-text text-lg text-gray-600 max-w-2xl mx-auto">
              نوفر لك أفضل الأدوات والموارد للتفوق في امتحان البكالوريا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="arabic-text text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="arabic-text text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 bg-gray-50" dir="rtl">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="arabic-text text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              المحاور الأدبية
            </h2>
            <p className="arabic-text text-lg text-gray-600 max-w-2xl mx-auto">
              محوران شاملان مع موارد تعليمية متكاملة وتطبيقات عملية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="card overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${module.color} p-8 text-white`}>
                  <div className="flex items-start gap-4 flex-row-reverse">
                    <div className="text-6xl">{module.icon}</div>
                    <div className="flex-1">
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        المحور {module.number}
                      </div>
                      <h3 className="arabic-text text-2xl md:text-3xl font-bold mb-2 leading-tight">
                        {module.title}
                      </h3>
                      <p className="arabic-text text-white/90 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpenIcon className="h-5 w-5" />
                      <span className="text-sm font-semibold">{module.totalFiles} ملفات</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <AcademicCapIcon className="h-5 w-5" />
                      <span className="text-sm font-semibold">{module.level}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="arabic-text bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={module.path}
                    className="btn-primary w-full flex items-center justify-center gap-2 flex-row-reverse"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <span>ادخل إلى المحور</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" dir="rtl">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2', label: 'محاور أدبية' },
              { number: '12', label: 'ملف تعليمي' },
              { number: '10', label: 'تطبيقات موجهة' },
              { number: '100%', label: 'مجاناً' },
            ].map((stat, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                  {stat.number}
                </div>
                <div className="arabic-text text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTAs */}
      <SocialCTAs />

      {/* Newsletter */}
      <NewsletterCTA />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" dir="rtl">
        <div className="container-custom text-center">
          <h2 className="arabic-text text-3xl md:text-4xl font-bold mb-4">
            جاهز للبدء؟
          </h2>
          <p className="arabic-text text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            استكشف المحاور الأدبية وابدأ رحلتك نحو التفوق في امتحان البكالوريا
          </p>
          <a href="#modules" className="btn-primary">
            <ArrowRightIcon className="h-5 w-5 inline ml-2" />
            ابدأ الآن
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
