import React, { useState, useEffect } from 'react';

const MyComp = ({ name, onNameChange }) => {
  const [count, setCount] = useState(0);

  // init
  useEffect(
    () => {
      // Do something on
      // initialization
    },
    [] /* This should be empty array 
    for useEffect to act as init */
  );

  // update
  useEffect(() => {
    // Do something on name change
  }, [name]);

  // update on multiple
  // state or prop changes
  useEffect(() => {
    // Do something on changing
    // name or count
  }, [name, count]);

  const onChangeNameClick = () => {
    const newName = getRandomName();
    onNameChange(newName);
  };

  return (
    <div>
      MyComp {name}
      <button onClick={onChangeNameClick}>Change Name</button>
    </div>
  );
};

export default MyComp;
