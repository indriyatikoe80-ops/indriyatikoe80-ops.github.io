import { motion } from 'framer-motion';

const Screenshots = () => {
  return (
    <section id="screenshots" style={{ padding: '100px 0', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Tampilan <span className="text-gradient">Aplikasi</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Desain ceria dan antarmuka yang ramah anak</p>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            gap: '20px', 
            overflowX: 'auto', 
            paddingBottom: '30px',
            scrollbarWidth: 'none'
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                minWidth: '260px',
                height: '460px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{ textAlign: 'center', opacity: 0.5 }}>
                <p style={{ fontSize: '3rem' }}>📱</p>
                <p>Screenshot {i}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px', opacity: 0.5, fontSize: '0.9rem' }}>
          ↔ Geser untuk melihat lebih banyak
        </p>
      </div>
    </section>
  );
};

export default Screenshots;
