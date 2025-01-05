// styles/theme.js
import colors from './colors';

const lightTheme = {
  background: colors.background,
  text: colors.text,
  button: colors.primary,
};

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  button: colors.secondary,
};

export { lightTheme, darkTheme };
