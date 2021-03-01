import { DefaultTheme } from 'styled-components';
import colors from './colors';

export const theme: DefaultTheme = {
  palette: {
    primary: colors.black,
    background: colors.white,
    error: colors.red,
    lightGrey: colors.grey[4],
    extraLightGrey: colors.grey[5],
    grey: colors.grey[3],
    darkGrey: colors.grey[2],
    userBackground: colors.grey[6],
    userTag: colors.grey[6],
    backgroundList: colors.grey[6],
    border: colors.grey[7],
    borderLine: colors.grey[8],

    pagination: {
      selected: colors.pagination.darkBlack,
      break: colors.pagination.grey,
      link: colors.pagination.grey,
      arrow: colors.pagination.blue
    },

    sliderRange: {
      track: colors.sliderRange.blue,
      thumb: colors.sliderRange.grey
    },

    text: {
      main: colors.grey[1],
      inverted: colors.white,
      secondary: colors.grey[2],
      disabled: colors.grey[3]
    }
  }
};
