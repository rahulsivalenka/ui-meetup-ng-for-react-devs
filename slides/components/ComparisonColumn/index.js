import React from 'react';
import { StylesProvider } from '@code-surfer/themes';
import { nightOwl, github, oceanicNext, vsDark } from '@code-surfer/themes';
import styles from './ComparisonColumn.module.css';

const ComparisonColumn = ({
  fw: framework = 'react',
  children,
  text: Text,
}) => {
  const theme = framework === 'react' ? oceanicNext : nightOwl;
  console.log(theme);
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
