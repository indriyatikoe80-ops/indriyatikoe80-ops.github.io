import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const FAQ = () => {
  return (
    <section id="faq" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h2 style={{ fontSize: '2.5rem' }}>Pertanyaan <span className="text-gradient">Populer</span></h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {APP_DATA.faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer'
              }}
            >
              <summary style={{ fontWeight: 700, fontSize: '1.1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.question}
                <span style={{ color: 'var(--primary-500)' }}>▼</span>
              </summary>
              <p style={{ marginTop: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
