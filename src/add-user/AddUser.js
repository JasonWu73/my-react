import UserForm from './UserForm';

export default function AddUser(props) {
  return (
    <UserForm onAdd={props.onAdd}/>
  );
};
