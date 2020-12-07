import React from 'react';
import classes from './List.module.css';

const ListItem = ({ imageUrl, name }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemContent}>{name}</div>
      <div
        className={classes.itemIcon}
        style={{
          '--url': `url('${imageUrl}')`,
        }}
      />
    </div>
  );
};

export default ListItem;
