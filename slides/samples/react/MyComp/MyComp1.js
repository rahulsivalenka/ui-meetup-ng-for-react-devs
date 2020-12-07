import React, { useState, useEffect } from 'react';

const MyComp = props => {
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
    // name has changed
  }, [props.name]);

  // update
  useEffect(() => {
    // age has changed
  }, [props.age]);

  // update on multiple
  // state or prop changes
  useEffect(() => {
    // either name or count has changed
  }, [props.name, count]);

  useLayoutEffect(() => {
    // on init synchronous
  }, []);

  useEffect(
    () => {
      // effect
      return () => {
        // cleanup
      };
    },
    [
      /* dependencies */
    ]
  );

  useEffect(() => {
    // called on every re-render
  });

  return <div>{/* template */}</div>;
};

export default MyComp;
