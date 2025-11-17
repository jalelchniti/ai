import { BookOpenIcon } from '@heroicons/react/24/outline';

const NewsletterCTA = () => {
  return (
    <section id="newsletter" className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <BookOpenIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="arabic-text text-3xl md:text-4xl font-bold text-white mb-4">
            موارد تعليمية مجانية
          </h2>
          <p className="arabic-text text-lg text-white/90 leading-relaxed">
            جميع المحتويات التعليمية متاحة مجاناً لطلاب البكالوريا - شعبة الآداب
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
