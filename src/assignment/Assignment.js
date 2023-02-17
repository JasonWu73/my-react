import React from 'react';

import './Assignment.css';

// don't change the Component name "App"
export default function App() {
  const [isWarning, setIsWarning] = React.useState(false);

  const componentContent = renderComponentContent(isWarning, setIsWarning);

  return (
    <div id="assignment">
      {componentContent}
    </div>
  );
}

function renderComponentContent(isWarning, setIsWarning) {
  let componentContent = (
    <button onClick={toggleClickHandler(setIsWarning)}>Delete</button>
  );
  if (isWarning) {
    componentContent = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={toggleClickHandler(setIsWarning)}>Proceed</button>
      </div>
    );
  }
  return componentContent;
}

function toggleClickHandler(setIsWarning) {
  return () => setIsWarning(previousIsWarning => !previousIsWarning);
}

