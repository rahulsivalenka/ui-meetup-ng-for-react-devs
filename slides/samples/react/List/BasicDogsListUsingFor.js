import React from 'react';
import classes from './List.module.css';

const List = () => {
  const dogs = [
    {
      imageUrl: 'https://tinyurl.com/yyb53oeu',
      name: 'Golden Retriever',
    },
    {
      imageUrl: 'https://tinyurl.com/y2x5yxmq',
      name: 'Husky',
    },
    {
      imageUrl: 'https://tinyurl.com/y6svov4s',
      name: 'Pug',
    },
  ];

  return (
    <div className={classes.root}>
      {dogs.map(dog => {
        return (
          <div className={classes.item} key={dog.name}>
            <div
              className={classes.itemIcon}
              style={{
                '--url': `url('${dog.imageUrl}')`,
              }}
            />
            <div className={classes.itemContent}>{dog.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
