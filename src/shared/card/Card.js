import styles from './Card.module.css';

export default function Card(props) {
  const cssClasses = `${styles.card} ${props.className ? props.className : ''}`;

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};
