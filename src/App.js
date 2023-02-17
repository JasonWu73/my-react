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
      <NewGoal onAdd={goalToAdd => addGoalHandler(goalToAdd, setGoals)}/>
      <GoalList
        goals={goals}
        onDelete={goalToDelete => deleteHandler(goalToDelete, setGoals)}
      />
    </div>
  );
}

function addGoalHandler(goalToAdd, setGoals) {
  setGoals(previousGoals => {
    if (previousGoals.includes(goalToAdd)) return previousGoals;

    return [goalToAdd, ...previousGoals];
  });
}

function deleteHandler(goalToDelete, setGoals) {
  setGoals(previousGoals => previousGoals.filter(goal => goal !== goalToDelete));
}
