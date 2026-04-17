import { createTheme } from '@mui/material/styles';

export const GLOBAL_MUI_THEME = createTheme({
  palette: {
    mode: 'light',
    resume: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a855f7',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    primary: {
      main: '#7c3aed',
    },
    background: {
      default: '#f8f8fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1f',
      secondary: '#6b6b75',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '& > .MuiSwitch-thumb': {
            backgroundColor: '#FFFFFF',
          },
          '&.Mui-checked > .MuiSwitch-thumb': {
            backgroundColor: '#7c3aed',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#e0e0e5',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#7c3aed',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    resume: Palette['grey'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    resume?: PaletteOptions['grey'];
  }
}
