import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeftIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';
import { modules } from '../data/modulesData';

const ContentViewer = () => {
  const { moduleId, contentId } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const [speaking, setSpeaking] = useState(false);

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
        const filePath = `/resources/bac/lettres/${modulePath}/${contentItem.fileName}`;

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

  // TTS Functionality
  const toggleTTS = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      setTtsEnabled(false);
    } else {
      setTtsEnabled(!ttsEnabled);
    }
  };

  const speakText = (text) => {
    if (!ttsEnabled || !text) return;

    // Remove markdown symbols and clean text
    const cleanText = text
      .replace(/[#*_`~>]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();

    if (cleanText.length === 0) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'ar-SA'; // Arabic
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Custom components for markdown rendering
  const components = {
    h1: ({ children }) => (
      <h1 className="group">
        {children}
        {ttsEnabled && (
          <button
            onClick={() => speakText(String(children))}
            className="mr-3 inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity"
            title="استمع"
          >
            🔊
          </button>
        )}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="group">
        {children}
        {ttsEnabled && (
          <button
            onClick={() => speakText(String(children))}
            className="mr-3 inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity"
            title="استمع"
          >
            🔊
          </button>
        )}
      </h2>
    ),
    p: ({ children }) => (
      <p className="group">
        {children}
        {ttsEnabled && String(children).length > 20 && (
          <button
            onClick={() => speakText(String(children))}
            className="mr-2 inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity text-sm"
            title="استمع"
          >
            🔊
          </button>
        )}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="group">
        {children}
        {ttsEnabled && (
          <button
            onClick={() => speakText(String(children))}
            className="mr-3 inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 opacity-0 group-hover:opacity-100 transition-opacity"
            title="استمع"
          >
            🔊
          </button>
        )}
      </blockquote>
    ),
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${module.color} text-white py-8 sticky top-0 z-40 shadow-lg`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Link
                to={`/${moduleId}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition-colors"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="text-sm">العودة للمحور</span>
              </Link>
              <h1 className="arabic-text text-2xl md:text-3xl font-bold">
                {contentItem.title}
              </h1>
            </div>

            <button
              onClick={toggleTTS}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                ttsEnabled
                  ? 'bg-white text-gold-600'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {speaking ? (
                <>
                  <SpeakerWaveIcon className="h-5 w-5 animate-pulse" />
                  <span>جاري القراءة...</span>
                </>
              ) : ttsEnabled ? (
                <>
                  <SpeakerWaveIcon className="h-5 w-5" />
                  <span>TTS مفعّل</span>
                </>
              ) : (
                <>
                  <SpeakerXMarkIcon className="h-5 w-5" />
                  <span>تفعيل الاستماع</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="card p-8 md:p-12 fade-in">
            {ttsEnabled && (
              <div className="mb-6 p-4 bg-gold-50 border-r-4 border-gold-500 rounded-lg">
                <p className="arabic-text text-sm text-gray-700">
                  🔊 <strong>ميزة الاستماع مفعلة:</strong> مرر الفأرة فوق النصوص واضغط على الأيقونة 🔊 للاستماع
                </p>
              </div>
            )}

            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={components}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Link
              to={`/${moduleId}`}
              className="btn-secondary"
            >
              <ArrowLeftIcon className="h-5 w-5 inline ml-2" />
              العودة للمحور
            </Link>

            {contentItem.id !== '06' && (
              <Link
                to={`/${moduleId}/content/${String(Number(contentItem.id) + 1).padStart(2, '0')}`}
                className="btn-primary"
              >
                الملف التالي
                <ArrowLeftIcon className="h-5 w-5 inline mr-2 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentViewer;
