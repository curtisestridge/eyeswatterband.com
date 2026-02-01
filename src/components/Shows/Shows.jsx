import styles from './Shows.module.css';

const shows = [
  {
    id: 1,
    city: 'Dayton, OH',
    venue: "Cosmo Joe's",
    date: 'Feb. 14',
  },
];

const Shows = () => {
  return (
    <section className={styles.shows} id="shows">
      <div className={styles.container}>
        <ul className={styles.showList}>
          {shows.map((show) => (
            <li key={show.id} className={styles.showItem}>
              <span className={styles.city}>{show.city}</span>
              <div className={styles.showDetails}>
                <span className={styles.venue}>{show.venue}</span>
                <span className={styles.dots}></span>
                <span className={styles.date}>{show.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Shows;
