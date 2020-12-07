import React from 'react';
import classes from './List.module.css';

const List = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};

export default List;
