import './GoalForm.css';
import Card from '../shared/card';
import Button from '../shared/button';

export default function GoalForm() {
  return (
    <form>
      <Card className="form">
        <div className="form__inputs">
          <label htmlFor="goal">Course Goal</label>
          <input type="text" id="goal"/>
        </div>
        <div className="form__controls">
          <Button type="submit" color="purple">Add Goal</Button>
        </div>
      </Card>
    </form>
  );
}
