import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 style={{ fontSize: '2.5rem' }}>Apa Kata <span className="text-gradient">Mereka?</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {APP_DATA.testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                padding: '30px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              <div style={{ color: '#FFB300', marginBottom: '15px', fontSize: '1.2rem' }}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7' }}>
                "{t.text}"
              </p>
              <div>
                <h4 style={{ marginBottom: '2px' }}>{t.name}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
