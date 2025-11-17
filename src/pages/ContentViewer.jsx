import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { modules } from '../data/modulesData';

const ContentViewer = () => {
  const { moduleId, contentId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const module = modules.find(m => m.id === moduleId);
  const contentItem = module?.content.find(c => c.id === contentId);

  useEffect(() => {
    const loadContent = async () => {
      if (!module || !contentItem) {
        setError('المحتوى غير موجود');
        setLoading(false);
        return;
      }

      try {
        // Construct the path to the markdown file
        const modulePath = moduleId === 'module-1' ? 'module 1' : 'module 2';
        // Use import.meta.env.BASE_URL to handle both dev and production paths
        const basePath = import.meta.env.BASE_URL;
        const filePath = `${basePath}resources/bac/lettres/${modulePath}/${contentItem.fileName}`;

        // Fetch the markdown file
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error('فشل في تحميل المحتوى');
        }

        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('حدث خطأ في تحميل المحتوى. الرجاء المحاولة مرة أخرى.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [moduleId, contentId, module, contentItem]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="arabic-text text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (error || !module || !contentItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="arabic-text text-2xl font-bold text-gray-900 mb-4">
            {error || 'المحتوى غير موجود'}
          </h1>
          <Link to={`/${moduleId}`} className="btn-primary">
            العودة للمحور
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className={`bg-gradient-to-br ${module.color} text-white py-8 sticky top-0 z-40 shadow-lg`}>
        <div className="container-custom">
          <div>
            <Link
              to={`/${moduleId}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition-colors flex-row-reverse"
            >
              <span className="text-sm">العودة للمحور</span>
              <ArrowLeftIcon className="h-4 w-4 rotate-180" />
            </Link>
            <h1 className="arabic-text text-2xl md:text-3xl font-bold">
              {contentItem.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="card p-8 md:p-12 fade-in">
            <div className="markdown-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 flex-row-reverse">
            {contentItem.id !== '06' && (
              <Link
                to={`/${moduleId}/content/${String(Number(contentItem.id) + 1).padStart(2, '0')}`}
                className="btn-primary flex items-center gap-2"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>الملف التالي</span>
              </Link>
            )}

            <Link
              to={`/${moduleId}`}
              className="btn-secondary flex items-center gap-2"
            >
              <ArrowLeftIcon className="h-5 w-5 rotate-180" />
              <span>العودة للمحور</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;
