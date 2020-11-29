import React, { useState } from 'react';

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

  return <div>MyComp</div>;
};

export default MyComp;
