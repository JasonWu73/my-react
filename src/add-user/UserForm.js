import styles from './UserForm.module.css';
import Button from '../shared/button';

export default function UserForm() {
  return (
    <form className={styles.form}>
      <div className={styles['form--row']}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"/>
      </div>
      <div className={styles['form--row']}>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text"/>
      </div>
      <div className={styles['form--row']}>
        <Button type="submit">Add User</Button>
      </div>
    </form>
  );
};
