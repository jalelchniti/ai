import { Link } from 'react-router-dom';
import { BookOpenIcon, EnvelopeIcon, HeartIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BookOpenIcon className="h-8 w-8 text-white" />
              </div>
              <span className="arabic-text text-xl font-bold text-white">
                بكالوريا آداب عربية
              </span>
            </Link>
            <p className="arabic-text text-gray-300 leading-relaxed">
              منصة تعليمية شاملة لطلاب البكالوريا شعبة الآداب - المحاور الأدبية العربية
            </p>
          </div>

          {/* Quick Links */}
          <div className="arabic-text">
            <h3 className="text-lg font-bold mb-4 text-gold-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/module-1" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  المحور الأول: شعر الحماسة
                </Link>
              </li>
              <li>
                <Link to="/module-2" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  المحور الثاني: المنزع العقلي
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="arabic-text">
            <h3 className="text-lg font-bold mb-4 text-gold-400">الموارد</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/module-1" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  تحليل النصوص الشعرية
                </Link>
              </li>
              <li>
                <Link to="/module-2" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  تحليل النصوص الحجاجية
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-300 hover:text-gold-400 transition-colors duration-300">
                  النشرة الإخبارية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="arabic-text">
            <h3 className="text-lg font-bold mb-4 text-gold-400">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@baclettres.tn"
                className="flex items-center gap-2 text-gray-300 hover:text-gold-400 transition-colors duration-300"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@baclettres.tn</span>
              </a>
              <p className="text-sm text-gray-400 leading-relaxed">
                المستشار التربوي: الأستاذ جلال الشنيتي
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <span className="arabic-text">
              © {currentYear} بكالوريا آداب عربية. جميع الحقوق محفوظة.
            </span>
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <span>Developed with</span>
            <HeartIcon className="h-4 w-4 text-red-500 fill-current" />
            <span>by SmartHub Tunisia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
