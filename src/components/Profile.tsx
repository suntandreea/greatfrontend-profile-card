import {UserProfile} from '../types/userTypes.ts';
import {getUpdatedContacts} from '../utils/functions.ts';
import styles from './Profile.module.scss';

export default function Profile({image, name, role, bio, contact}: UserProfile) {

  return (
    <section className={styles.card}>
      <div className={styles.cardContent}>
        <img src={image} alt={`An image of ${name}`} />
        <header>
          <h2>{name}</h2>
          <h4>{role}</h4>
        </header>
        <p>{bio}</p>
      </div>

      <footer>
        <button className={styles.btnSecondary}>Contact me</button>
        <ul>
          {getUpdatedContacts(contact).map((social, idx) => <li key={idx}>
            <a href={social.url}>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={social.svgPath} />
              </svg>
            </a>
          </li>)}
        </ul>
      </footer>
    </section>
  );
}

