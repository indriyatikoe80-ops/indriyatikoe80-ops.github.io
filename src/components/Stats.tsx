import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import APP_DATA from '../data/content';
import type { Stat } from '../data/content';

const AnimatedCounter = ({ stat }: { stat: Stat }) => {
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => {
    if (stat.isDecimal) return v.toFixed(1);
    return Math.floor(v).toString();
  });
  
  const spring = useSpring(value, { stiffness: 100, damping: 30 });
  
  useEffect(() => {
    value.set(stat.value);
  }, [stat.value, value]);
  
  useEffect(() => {
    spring.on('change', (latest) => {
      value.set(latest);
    });
  }, [spring, value]);
  
  return (
    <motion.span style={{ display: 'inline-block' }}>
      {display}
    </motion.span>
  );
};

const Stats = () => {
  return (
    <section id="stats" style={{ padding: '60px 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            textAlign: 'center'
          }}
        >
          {APP_DATA.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 style={{ fontSize: '3rem', color: 'var(--primary-500)', marginBottom: '5px' }}>
                <AnimatedCounter stat={stat} />
                {stat.suffix}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
