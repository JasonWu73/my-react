import {useState} from 'react';

import './GoalForm.css';
import Card from '../shared/card';
import Button from '../shared/button';

export default function GoalForm(props) {
  const [newGoal, setNewGoal] = useState('');

  return (
    <form
      onSubmit={event => submitHandler(event, newGoal, setNewGoal, props.onAdd)}
    >
      <Card className="form">
        <div className="form__inputs">
          <label htmlFor="goal">Course Goal</label>
          <input
            type="text"
            id="goal"
            value={newGoal}
            onChange={event => goalChangeHandler(event, setNewGoal)}
          />
        </div>
        <div className="form__controls">
          <Button type="submit" color="purple">Add Goal</Button>
        </div>
      </Card>
    </form>
  );
}

function goalChangeHandler(event, setNewGoal) {
  setNewGoal(event.target.value);
}

function submitHandler(event, newGoal, setNewGoal, onAdd) {
  event.preventDefault();

  if (!newGoal) return;

  onAdd(newGoal);

  setNewGoal('');
}
