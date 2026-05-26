import { motion } from 'framer-motion';
import APP_DATA from '../data/content';
import AppIcon from './AppIcon';

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
          <h2 style={{ fontSize: '2.5rem' }}>
            Kenapa Pilih <span className="text-gradient">{APP_DATA.appName}?</span>
          </h2>
          <p
            className="section-subtitle"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {APP_DATA.description}
          </p>
        </motion.div>

        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
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
              whileHover={{ translateY: -8, scale: 1.02 }}
              style={{
                background: 'var(--bg-card)',
                padding: '36px 28px',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                borderTop: `4px solid ${feature.color}`,
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '20px',
                  background: feature.color + '20',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: feature.color,
                }}
              >
                <AppIcon name={feature.icon} size={34} color={feature.color} />
              </div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
