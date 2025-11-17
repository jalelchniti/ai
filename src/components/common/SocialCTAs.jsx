import { AcademicCapIcon } from '@heroicons/react/24/outline';

const SocialCTAs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gold-100 p-4 rounded-full">
              <AcademicCapIcon className="h-12 w-12 text-gold-600" />
            </div>
          </div>
          <h2 className="arabic-text text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            منصة SmartHub التعليمية
          </h2>
          <p className="arabic-text text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            محتوى تعليمي متكامل لطلاب البكالوريا - شعبة الآداب
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialCTAs;
