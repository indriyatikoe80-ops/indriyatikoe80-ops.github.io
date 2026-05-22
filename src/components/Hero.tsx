import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const Hero = () => {
  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--gradient-hero)',
        color: 'var(--text-white)',
        paddingTop: '100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background Decorations */}
      <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <div className="blob blob-1 blob-animation" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(66, 165, 245, 0.3)', filter: 'blur(40px)' }}></div>
        <div className="blob blob-2 blob-animation" style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(236, 64, 122, 0.3)', filter: 'blur(40px)' }}></div>
        <div className="stars-container">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="sparkle-effect" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`, 
                fontSize: `${Math.random() * 15 + 10}px`, 
                animationDelay: `${Math.random() * 2}s` 
              }}
            >
              ✨
            </div>
          ))}
        </div>
      </div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '40px' }}>
        {/* Text Area */}
        <motion.div 
          className="hero-text" 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600, marginBottom: '1rem', backdropFilter: 'blur(5px)' }}>
            {APP_DATA.hero.badge}
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-white)', marginBottom: '1.5rem' }}>
            {APP_DATA.hero.title}
            <br />
            <span className="text-gradient" style={{ background: 'linear-gradient(to right, #FFCA28, #FF7043)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {APP_DATA.appName}!
            </span>
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            {APP_DATA.hero.subtitle}
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a 
              href="#download" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ animation: 'pulse 2s infinite' }}
            >
              📧 {APP_DATA.hero.ctaPrimary}
            </motion.a>
            <motion.a 
              href="#features" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶ {APP_DATA.hero.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>

        {/* Mockup Area */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div className="phone-mockup float-animation" style={{ maxWidth: '300px', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '280px', height: '560px', background: '#fff', borderRadius: '40px', border: '12px solid #333', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, width: '50%', height: '25px', background: '#333', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}></div>
              <div style={{ textAlign: 'center', color: '#ccc' }}>
                <p style={{ fontSize: '2rem' }}>📱</p>
                <p style={{ fontSize: '0.8rem' }}>(Screenshot Aplikasi)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .hero-content { flex-direction: column !important; text-align: center; padding-top: 40px; }
          .hero-buttons { justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default Hero;
