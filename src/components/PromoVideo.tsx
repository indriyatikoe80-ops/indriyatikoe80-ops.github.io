import { motion } from 'framer-motion';

const PromoVideo = () => {
  return (
    <section id="promo-video" style={{ padding: '40px 0 80px', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}
          >
            Lihat Keseruan Belajar!
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tonton video singkat ini untuk melihat bagaimana anak-anak belajar dan bermain dengan aplikasi kami.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            background: 'var(--bg-dark)',
            position: 'relative',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '8px solid white'
          }}
        >
          {/* Video Player */}
          <video 
            controls 
            poster={`${import.meta.env.BASE_URL}lengkapi-pola.png`} // Menggunakan salah satu screenshot sebagai poster
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '12px' }}
          >
            <source src={`${import.meta.env.BASE_URL}promo-video.mp4`} type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoVideo;
