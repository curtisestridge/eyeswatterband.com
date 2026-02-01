import { useEffect, useRef, useState } from 'react';
import styles from './Shows.module.css';

const shows = [
  {
    id: 1,
    date: 'Feb 14, 2026',
    day: 'Saturday',
    venue: 'Cosmo Joes',
    city: 'Dayton, OH',
    ticketUrl: '#',
    soldOut: false,
  },
];

const Shows = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.shows} id="shows">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
          Upcoming Shows
        </h2>
        <ul className={styles.showList}>
          {shows.map((show, index) => (
            <li
              key={show.id}
              className={`${styles.showItem} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.showLink}>
                <span className={styles.date}>{show.date}</span>
                <span className={styles.venue}>{show.venue}</span>
                <span className={styles.city}>{show.city}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shows;
