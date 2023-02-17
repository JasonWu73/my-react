import './NewGoal.css';
import GoalForm from './GoalForm';

export default function NewGoal(props) {
  return (
    <GoalForm onAdd={props.onAdd}/>
  );
};
