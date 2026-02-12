import { Mail, MapPin, Send } from "lucide-react"; 
import { useTranslations } from 'next-intl';

const Contact = () => {

  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-page">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">{ t('subtitle')}</span>
          <h2 className="font-title text-4xl md:text-5xl font-bold">
            {
              t.rich('title', {
                em: (chunk) => <em className="text-primary">{chunk}</em>
              })
            }
          </h2>
          <p className="text-text-muted font-body">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* --- INFO SIDE --- */}
          <div className="w-full lg:w-5/12 space-y-8 bg-abyss-900/20 p-8 rounded-4xl border border-primary/10 backdrop-blur-sm">
            <h3 className="font-title text-2xl font-bold">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted uppercase font-bold tracking-tighter">{t('contact_mail')}</p>
                  <p className="text-lg font-medium">rakotomavofranck007@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted uppercase font-bold tracking-tighter">{t('location')}</p>
                  <p className="text-lg font-medium">Antsirabe, Madagascar</p>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="pt-8 mt-8 border-t border-primary/10">
              <div className="flex items-center gap-3 bg-primary/5 p-4 rounded-xl border border-primary/20">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-sm font-semibold italic text-text-main">{ t('contact_badge')}</p>
              </div>
            </div>
          </div>

          {/* --- FORM SIDE --- */}
          <div className="w-full lg:w-7/12">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">{t('full_name_label')}</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-bg-page border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 outline-none transition-all placeholder:opacity-30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">{t('email_address_label')}</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-bg-page border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 outline-none transition-all placeholder:opacity-30"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">{t('mail_object_label')}</label>
                <input 
                  type="text" 
                  placeholder={t('mail_object_placeholder')} 
                  className="w-full bg-bg-page border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 outline-none transition-all placeholder:opacity-30"
                />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="text-sm font-bold text-text-main/70 ml-1">{t('message_label')}</label>
                <textarea 
                  rows={5} 
                  placeholder={t('message_placeholder')} 
                  className="w-full bg-bg-page border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-5 py-4 outline-none transition-all placeholder:opacity-30 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="sm:col-span-2 flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] group"
              >
                <span>{t('cta_send')}</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;