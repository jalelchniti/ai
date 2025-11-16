import { EnvelopeIcon } from '@heroicons/react/24/outline';

const NewsletterCTA = () => {
  return (
    <section id="newsletter" className="bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
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

          {/* Sendinblue Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <iframe
              width="540"
              height="305"
              src="https://e631d0f7.sibforms.com/serve/MUIFAI9fykZvqjwce7bcLeX6oG0UHkqctxcVycDfN0RfUkrgBNYPhrOjfrp0Tx_b3N2Uk7WMjjvmNaqKCF0rliWPmXeNCQv1sQkKsr0aD6pL5L4tW74mq_X6-gdm0csbx-elpbrsFj-Elgs-7UERL1IVYa3ZzpS-lCaa19HeNUSLRs47ni0IAs4IM4zbRrgwlCOzo1IFQviSeIxi"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '100%',
                borderRadius: '12px'
              }}
              title="Newsletter Subscription Form"
            />
          </div>

          <p className="arabic-text text-sm text-white/70 mt-6">
            لن نشارك بريدك الإلكتروني مع أي طرف ثالث. يمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
