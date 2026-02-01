import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/echovalleyband',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.335-2.22-1.18-.286-.576-.276-1.187-.04-1.783.414-1.04 1.263-1.527 2.33-1.64.478-.052.96-.06 1.44-.1.243-.02.484-.065.72-.136.164-.05.3-.14.4-.3.073-.12.11-.253.11-.4V7.476c0-.2-.054-.373-.21-.51a.71.71 0 00-.467-.184c-.32-.024-.64-.013-.96-.03-.64-.03-1.28-.068-1.92-.113-.41-.028-.83-.055-1.24-.1-.35-.037-.693-.1-1.03-.188a.76.76 0 00-.4.018c-.1.04-.165.128-.192.233-.023.087-.038.176-.038.266v7.64c0 .4-.054.79-.21 1.162-.31.73-.868 1.2-1.64 1.42-.34.097-.686.15-1.04.166-.943.044-1.78-.32-2.21-1.16-.3-.58-.29-1.195-.06-1.8.41-1.08 1.3-1.58 2.39-1.68.42-.04.84-.047 1.26-.087.3-.027.594-.083.87-.2.196-.085.343-.22.425-.423.057-.14.085-.29.085-.44V4.1c0-.25.058-.49.2-.7.12-.17.28-.29.47-.36.16-.06.33-.08.5-.1.26-.02.52-.02.78-.01.49.02.98.06 1.47.1.54.05 1.08.1 1.62.16.49.05.98.1 1.47.18.39.06.78.13 1.16.23.32.08.61.22.86.43.2.17.35.38.43.64.06.2.09.4.09.6v5.47z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:booking@eyeswatter.band',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
];

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer} id="contact">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
          Connect
        </h2>
        <nav className={`${styles.socialNav} ${isVisible ? styles.visible : ''}`}>
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={link.name}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.linkName}>{link.name}</span>
            </a>
          ))}
        </nav>
        <div className={`${styles.copyright} ${isVisible ? styles.visible : ''}`}>
          <p>&copy; {new Date().getFullYear()} Eyeswatter. All rights reserved.</p>
          <p className={styles.booking}>
            For booking inquiries: <a href="mailto:booking@eyeswatter.band">booking@eyeswatter.band</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
