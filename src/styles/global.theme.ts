import { createTheme } from '@mui/material/styles';

export const GLOBAL_MUI_THEME = createTheme({
  palette: {
    mode: 'dark',
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
      main: '#a855f7',
    },
    background: {
      default: '#050507',
      paper: '#0a0a0e',
    },
    text: {
      primary: '#f5f5f7',
      secondary: '#888892',
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
            backgroundColor: '#a855f7',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#444448',
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#a855f7',
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
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
          },
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
