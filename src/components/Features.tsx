import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const Features = () => {
  return (
    <section id="features" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem' }}>Kenapa Pilih <span className="text-gradient">{APP_DATA.appName}?</span></h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            {APP_DATA.description}
          </p>
        </motion.div>

        <div 
          className="features-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}
        >
          {APP_DATA.features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -10 }}
              style={{
                background: 'var(--bg-card)',
                padding: '40px 30px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div 
                style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1.5rem', 
                  display: 'inline-block',
                  background: feature.color + '22',
                  padding: '20px',
                  borderRadius: '24px'
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
