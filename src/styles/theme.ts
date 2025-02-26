import { DefaultTheme } from 'styled-components';

const colors = {
  // area
  primary: '#6868AB', // purple
  secondary: '#fff', // white
  rarely: '#C4C4C4', // brighter gray
  bgcolor: '#F8F8FF ', // brighter purple
  boxcolor: '#fff', // white
  profilebgcolor: '#949494', // black
  msgcount: '#FF3366', // pink

  // text
  navy: '#707C97',
  purple: '#6868AB',
  lightpurple: '#A4B7E0',
  black: '#0D1C2E',
  darkgray: '#565656',
  gray: '#6D6A6A',
  lightgray: '#8B8B8B',
  white: '#fff',

  // event
  hover: '#8A8AD9', // light-purple
  clickbox: '#6868AB', // purple
  clickbtn1: '#35356F', // dark-purple
  clickbtn2: '#6D6A6A', // gray
  disabledkbtn: '#C4C4C4', //  brighter gray
  focus: '#1F1F5A', // deep-dark-purple
};

const fontSize = {
  title: '4rem', // 64px
  xxl: '3rem', // 48px
  xl: '2rem', // 32px
  lg: '1.5rem', // 24px
  md: '1.25rem', // 20px
  sm: '1.125rem', // 18px
  xs: '1rem', // 16px
  xxs: '0.875rem', // 14px
  micro: '0.75rem', //12px
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
