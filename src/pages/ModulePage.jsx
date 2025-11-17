import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { modules, getDifficultyColor } from '../data/modulesData';

const ModulePage = () => {
  const { moduleId } = useParams();
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="arabic-text text-3xl font-bold text-gray-900 mb-4">
            المحور غير موجود
          </h1>
          <Link to="/" className="btn-primary">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Module Header */}
      <div className={`bg-gradient-to-br ${module.color} text-white py-16 md:py-24`}>
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors flex-row-reverse"
          >
            <span>العودة للرئيسية</span>
            <ArrowLeftIcon className="h-5 w-5 rotate-180" />
          </Link>

          <div className="max-w-4xl fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">المحور {module.number}</span>
            </div>

            <div className="flex items-start gap-4 mb-6 flex-row-reverse">
              <div className="text-6xl md:text-7xl">{module.icon}</div>
              <div className="flex-1">
                <h1 className="arabic-text text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {module.title}
                </h1>
                <p className="arabic-text text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  {module.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <BookOpenIcon className="h-5 w-5" />
                    <span className="font-semibold">{module.totalFiles} ملفات</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <DocumentTextIcon className="h-5 w-5" />
                    <span className="font-semibold">{module.level}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {module.tags.map((tag, index) => (
                <span
                  key={index}
                  className="arabic-text bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="container-custom py-12">
        <div className="mb-8">
          <h2 className="arabic-text text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            المحتوى التعليمي
          </h2>
          <p className="arabic-text text-gray-600">
            اختر أي ملف للبدء في الدراسة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {module.content.map((item, index) => (
            <Link
              key={item.id}
              to={`/${moduleId}/content/${item.id}`}
              className={`card p-6 hover:scale-105 transition-all duration-300 ${
                item.featured ? 'ring-2 ring-gold-400 relative' : ''
              } fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ مميز
                </div>
              )}

              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="arabic-text text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="arabic-text text-gray-600 mb-4 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between flex-row-reverse">
                <ArrowLeftIcon className="h-5 w-5 text-gold-600 group-hover:-translate-x-1 transition-transform rotate-180" />
                <span className={`arabic-text text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(item.difficulty)}`}>
                  {item.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="container-custom pb-12">
        <div className="card p-8 bg-gradient-to-br from-gold-50 to-gold-100">
          <h3 className="arabic-text text-2xl font-bold text-gray-900 mb-4">
            💡 نصائح للدراسة
          </h3>
          <ul className="arabic-text space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gold-600 font-bold">1.</span>
              <span>ابدأ بالنظرة العامة لفهم الإطار العام للمحور</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 font-bold">2.</span>
              <span>ادرس المنهجية بعناية قبل الانتقال للتطبيقات</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 font-bold">3.</span>
              <span>استخدم الملخص السريع للمراجعة قبل الامتحان</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 font-bold">4.</span>
              <span>تدرب على التطبيقات الكتابية الموجهة (الأهم!)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
