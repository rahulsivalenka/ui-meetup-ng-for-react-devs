import React from 'react';

import styles from './ImageStack.module.css';

const StackItem = ({ image, index = 0 }) => {
  return (
    <div
      class={styles.card}
      style={{
        '--image': `url('${image.src}')`,
        '--angle': index % 2 === 0 ? '-5deg' : '5deg',
        '--x': `${0 + 15 * index}%`,
        '--y': `${0 + 10 * index}%`,
        '--caption': `'${image.alt}'`,
        '--image-height': image.height,
        '--image-width': image.width,
      }}
    ></div>
  );
};

const ImageStack = ({ images }) => {
  return (
    <div className={styles.cardContainer}>
      {images.map((image, i) => (
        <StackItem key={image.alt} image={image} index={i} />
      ))}
    </div>
  );
};

export default ImageStack;
