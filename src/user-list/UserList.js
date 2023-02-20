import styles from './UserList.module.css';
import Card from '../shared/card';

export default function UserList(props) {
  let componentContent = <p>Found no users.</p>
  if (props.users.length > 0) {
    componentContent = (
      <ul>
        {props.users.map(user =>
          <li key={user.id}>{user.name} ({user.age} years old)</li>)}
      </ul>
    );
  }

  return (
    <Card className={styles['user-list']}>
      {componentContent}
    </Card>
  );
};
