import React from 'react';
import { StylesProvider } from '@code-surfer/themes';
import styles from './ComparisonColumn.module.css';
import { getTheme } from '../helper';

const ComparisonColumn = ({ fw, children, text: Text }) => {
  const theme = getTheme(fw);
  return (
    <StylesProvider theme={theme}>
      <div
        style={{
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          height: '100%',
          backgroundColor: theme.colors.background,
          color: theme.colors.text,
          position: 'relative',
        }}
      >
        {children}
      </div>
      {!!Text && (
        <div
          className={styles.text}
          style={{
            color: theme.styles.CodeSurfer.subtitle.color,
            backgroundColor: theme.styles.CodeSurfer.subtitle.backgroundColor,
          }}
        >
          {typeof Text === 'string' ? <p>{Text}</p> : <Text />}
        </div>
      )}
    </StylesProvider>
  );
};

export default ComparisonColumn;
