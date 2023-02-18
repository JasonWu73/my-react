import styles from './Button.module.css';

export default function Button(props) {
  const cssClasses = `${styles.btn} ${props.color === 'purple' ? styles['btn--purple'] : ''}`;

  return (
    <button
      type={props.type ? props.type : 'button'}
      className={cssClasses}
    >
      {props.children}
    </button>
  );
};
