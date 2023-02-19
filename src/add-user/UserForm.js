import styles from './UserForm.module.css';
import Card from '../shared/card';
import Button from '../shared/button';

export default function UserForm() {
  return (
    <Card className={styles['form-container']}>
      <form className={styles.form} onSubmit={event => submitHandler(event)}>
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
    </Card>
  );
};

function submitHandler(event) {
  event.preventDefault();
}
