import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import logo from '../../assets/images/eyeswatter_logo.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add(styles.visible);
    }
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} id="home">
      <div className={styles.overlay} />
      <div className={styles.content}>
        <img src={logo} alt="Eyeswatter" className={styles.logo} />
      </div>
    </section>
  );
};

export default Hero;
