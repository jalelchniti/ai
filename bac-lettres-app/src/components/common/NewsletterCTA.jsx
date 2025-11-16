import { useState } from 'react';
import { EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  // PLACEHOLDER: User will provide the actual form URL
  const NEWSLETTER_FORM_URL = 'YOUR_NEWSLETTER_FORM_URL_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with actual form submission
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Actual implementation when URL is provided:
      // await fetch(NEWSLETTER_FORM_URL, {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: { 'Content-Type': 'application/json' }
      // });

      setSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {!subscribed ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <EnvelopeIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="arabic-text text-3xl md:text-4xl font-bold text-white mb-4">
                اشترك في نشرتنا الإخبارية
              </h2>
              <p className="arabic-text text-lg text-white/90 mb-8 leading-relaxed">
                كن أول من يعرف عن الدورات الجديدة، الموارد التعليمية، والتحديثات المهمة لطلاب البكالوريا
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-right arabic-text focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-gold-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-gold-600 border-t-transparent rounded-full animate-spin"></div>
                      جاري الإرسال...
                    </span>
                  ) : (
                    'اشترك الآن'
                  )}
                </button>
              </form>

              <p className="arabic-text text-sm text-white/70 mt-4">
                لن نشارك بريدك الإلكتروني مع أي طرف ثالث. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </>
          ) : (
            <div className="fade-in">
              <div className="flex justify-center mb-6">
                <CheckCircleIcon className="h-20 w-20 text-white" />
              </div>
              <h2 className="arabic-text text-3xl md:text-4xl font-bold text-white mb-4">
                شكراً لاشتراكك!
              </h2>
              <p className="arabic-text text-lg text-white/90 leading-relaxed">
                تم تسجيل بريدك الإلكتروني بنجاح. ستتلقى تحديثاتنا قريباً.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
