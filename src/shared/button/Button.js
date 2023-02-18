import './Button.css';

export default function Button(props) {
  const cssClasses = `btn ${props.color === 'purple' ? 'btn--purple' : ''}`;

  return (
    <button
      type={props.type ? props.type : 'button'}
      className={cssClasses}
    >
      {props.children}
    </button>
  );
};
