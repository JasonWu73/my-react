import './Card.css';

export default function Card(props) {
  console.log(props.className);
  const cssClasses = `card ${props.className ? props.className : ''}`;

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};
