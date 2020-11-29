import React from 'react';
import { CodeSurferColumns } from 'code-surfer';
import { getTheme } from '../helper';

const FwCodeSurferColumns = ({ props }) => {
  return (
    <CodeSurferColumns
      {...props}
      themes={[getTheme('react'), getTheme('ng')]}
    />
  );
};

export default FwCodeSurferColumns;
