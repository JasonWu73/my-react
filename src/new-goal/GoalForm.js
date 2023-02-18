import {useState} from 'react';

import './GoalForm.css';
import Card from '../shared/card';
import Button from '../shared/button';

export default function GoalForm(props) {
  const [newGoal, setNewGoal] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <form
      onSubmit={event => submitHandler(event, newGoal, setNewGoal, props.onAdd)}
    >
      <Card className="form">
        <div className="form__inputs">
          <label
            htmlFor="goal"
            style={{color: isInvalid ? 'red' : 'black'}}
          >
            Course Goal
          </label>
          <input
            type="text"
            id="goal"
            value={newGoal}
            onChange={event =>
              goalChangeHandler(event, setNewGoal, setIsInvalid)}
            style={{
              borderColor: isInvalid ? 'red' : '#ccc',
              backgroundColor: isInvalid ? 'salmon' : 'transparent'
            }}
          />
        </div>
        <div className="form__controls">
          <Button type="submit" color="purple">Add Goal</Button>
        </div>
      </Card>
    </form>
  );
}

function goalChangeHandler(event, setNewGoal, setIsInvalid) {
  const newGoal = event.target.value;
  setNewGoal(newGoal);

  if (newGoal.trim().length === 0) {
    setIsInvalid(true);
    return;
  }

  setIsInvalid(false);
}

function submitHandler(event, newGoal, setNewGoal, onAdd) {
  event.preventDefault();

  const trimmedGoal = newGoal.trim();
  if (trimmedGoal.length === 0) return;

  onAdd(trimmedGoal);

  setNewGoal('');
}
