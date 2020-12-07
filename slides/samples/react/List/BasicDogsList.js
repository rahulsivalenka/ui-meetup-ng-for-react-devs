import React from 'react';
import classes from './List.module.css';

const List = () => {
  return (
    <div className={classes.root}>
      <div className={classes.item}>
        <div
          className={classes.itemIcon}
          style={{
            '--url': `url('https://tinyurl.com/yyb53oeu')`,
          }}
        />
        <div className={classes.itemContent}>Golden Retriever</div>
      </div>

      <div className={classes.item}>
        <div
          className={classes.itemIcon}
          style={{
            '--url': `url('https://tinyurl.com/y2x5yxmq')`,
          }}
        />
        <div className={classes.itemContent}>Husky</div>
      </div>

      <div className={classes.item}>
        <div
          className={classes.itemIcon}
          style={{
            '--url': `url('https://tinyurl.com/y6svov4s')`,
          }}
        />
        <div className={classes.itemContent}>Pug</div>
      </div>
    </div>
  );
};

export default List;
