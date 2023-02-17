import {useState} from 'react';

import NewGoal from './new-goal';
import GoalList from './goal-list';

export default function App() {
  const dummyGoals = [
    'Becoming Java Master',
    'Becoming JavaScript Expert'
  ];
  const [goals, setGoals] = useState(dummyGoals);

  return (
    <div>
      <NewGoal/>
      <GoalList
        goals={goals}
        onDelete={(goalToDelete) => deleteHandler(goalToDelete, setGoals)}
      />
    </div>
  );
}

function deleteHandler(goalToDelete, setGoals) {
  setGoals(previousGoals => {
    return previousGoals.filter(goal => goal !== goalToDelete);
  });
}
