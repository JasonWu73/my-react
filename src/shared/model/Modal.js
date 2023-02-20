import styles from './Modal.module.css';
import Card from '../card';
import Button from '../button';

export default function Modal(props) {
  return (
    <div>
      <Card className={styles.modal}>
        <header className={styles['modal--header']}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles['modal--content']}>
          <p>{props.message}</p>
        </div>
        <footer className={styles['modal--footer']}>
          <Button>Okay</Button>
        </footer>
      </Card>
      <div className={styles.backdrop}></div>
    </div>
  );
}
