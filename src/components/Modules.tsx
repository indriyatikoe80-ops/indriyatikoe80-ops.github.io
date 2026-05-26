import { motion } from 'framer-motion';
import APP_DATA from '../data/content';
import AppIcon from './AppIcon';

const Modules = () => {
  return (
    <section
      id="modules"
      style={{ background: 'var(--bg-primary)', padding: '100px 0' }}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255, 179, 0, 0.15)',
              padding: '6px 18px',
              borderRadius: '20px',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--primary-500)',
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
            }}
          >
            24 MODUL BELAJAR
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
            Lengkap! Semua yang Dibutuhkan{' '}
            <span className="text-gradient">Si Kecil</span>
          </h2>
          <p
            className="section-subtitle"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '650px',
              margin: '1rem auto 0',
            }}
          >
            Dari membaca, menulis, hingga mengenal alam — semua tersedia dalam
            satu aplikasi yang menyenangkan dan mudah digunakan.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '3.5rem',
          }}
        >
          {APP_DATA.learningModules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ translateY: -6 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                padding: '28px 24px',
                boxShadow: 'var(--shadow-sm)',
                border: `1.5px solid ${mod.color}25`,
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                cursor: 'default',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent corner */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: `radial-gradient(circle at top right, ${mod.color}18, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  minWidth: '52px',
                  borderRadius: '14px',
                  background: mod.color + '18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: mod.color,
                }}
              >
                <AppIcon name={mod.icon} size={26} color={mod.color} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {mod.title}
                  {!mod.isFree && (
                    <span style={{
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      background: 'var(--primary-500)',
                      color: 'white',
                      borderRadius: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>Premium</span>
                  )}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {mod.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '28px',
            background: 'linear-gradient(135deg, rgba(255,179,0,0.1), rgba(255,112,67,0.1))',
            borderRadius: 'var(--radius-xl)',
            border: '1px dashed rgba(255,179,0,0.4)',
          }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            🚀 <strong style={{ color: 'var(--text-primary)' }}>Modul terus bertambah!</strong>
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Tim kami terus mengembangkan modul-modul baru. Update gratis untuk pengguna Premium.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Modules;
