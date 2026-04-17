import { useEffect } from 'react';

import { StyledButton } from '../atoms';
import { MenuItem } from '@mui/material';

export const PrintResume: React.FC<{ isMenuButton?: boolean }> = ({ isMenuButton }) => {
  useEffect(() => {
    globalThis?.addEventListener('beforeprint', () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    });

    globalThis?.addEventListener('afterprint', () => {
      globalThis.document.title = 'Single Page Resume Builder';
    });
  }, []);

  if (isMenuButton) {
    return <MenuItem onClick={globalThis?.print}>下载PDF</MenuItem>;
  }

  return (
    <StyledButton onClick={globalThis?.print} variant="outlined">
      下载PDF
    </StyledButton>
  );
};
