import './GoalList.css';

export default function GoalList(props) {
  return (
    <ul className="goal-list">
      {props.goals.map(goal =>
        <li key={goal} onClick={() => props.onDelete(goal)}>{goal}</li>)}
    </ul>
  );
};
