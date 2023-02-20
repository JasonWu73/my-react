import {useState} from 'react';

import styles from './UserForm.module.css';
import Card from '../shared/card';
import Button from '../shared/button';
import Model from '../shared/model';

export default function UserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isInvalidEntered, setIsInvalidEntered] = useState(false);
  const [validationResult, setValidationResult] = useState(
    {title: '', message: ''}
  );

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

      if (isEmptyEntered) {
        setValidationResult({
          title: 'Invalid input',
          message: 'Please enter a valid name and age (non-empty values).'
        });
      }
      if (isInvalidAge) {
        setValidationResult({
          title: 'Invalid age',
          message: 'Please enter a valid age (> 0).'
        });
      }
      return;
    }

    setIsInvalidEntered(false);

    props.onAdd({
      name: enteredUsername,
      age: +enteredAge
    });

    setEnteredUsername('');
    setEnteredAge('');
  };

  const removeErrorModelHandler = () => {
    setIsInvalidEntered(false);
  };

  return (
    <div>
      {
        isInvalidEntered &&
        <Model
          title={validationResult.title}
          message={validationResult.message}
          onConfirm={removeErrorModelHandler}
        />
      }
      <Card className={styles['form-container']}>
        <form className={styles.form} onSubmit={submitHandler}>
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
    </div>
  );
};
