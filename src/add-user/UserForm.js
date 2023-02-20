import {useState} from 'react';

import styles from './UserForm.module.css';
import Card from '../shared/card';
import Button from '../shared/button';

export default function UserForm() {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isInvalidEntered, setIsInvalidEntered] = useState(false);

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const isEmptyEntered =
      enteredUsername.trim().length === 0 || enteredAge.trim().length === 0;
    const isInvalidAge = +enteredAge < 0 || isNaN(+enteredAge);
    if (isEmptyEntered || isInvalidAge) {
      setIsInvalidEntered(true);
      return;
    }

    setIsInvalidEntered(false);
    console.log(enteredUsername, +enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className={styles['form-container']}>
      <form
        className={styles.form}
        onSubmit={
          event => submitHandler(
            event,
            enteredUsername,
            setEnteredUsername,
            enteredAge,
            setEnteredAge
          )
        }
      >
        <div className={`${styles['form--row']} ${isInvalidEntered ? styles.error : ''}`}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
          <div className={`${styles['form--row']} ${isInvalidEntered ? styles.error : ''}`}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div className={styles['form--row']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
