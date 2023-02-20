import {useState} from 'react';

import AddUser from './add-user';
import UserList from './user-list';

export default function App() {
  const [users, setUsers] = useState([]);

  const addHandler = ({name, age}) => {
    setUsers(prevUsers => {
      const newUser = {
        id: Math.random().toString(),
        name: name,
        age
      };
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAdd={addHandler}/>
      <UserList users={users}/>
    </div>
  );
}
