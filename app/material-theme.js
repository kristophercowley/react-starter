import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';

const colors = {
  darkestBlue: '#09347A',
  darkBlue: '#0169A4',
  blue: '#007DC3',
  lightBlue: '#3399CC',
  orange: '#F1632A',
  darkGrey: '#464646',
  grey: '#B7B7B7',
  lightGrey: '#F6F6F5',
  white: '#fff'
};

export default {
  spacing: Spacing,
  palette: {
    primary1Color: colors.darkBlue,
    primary2Color: ColorManipulator.darken(colors.orange, 0.1),
    primary3Color: colors.darkGrey,
    accent1Color: colors.orange,
    accent2Color: colors.grey,
    accent3Color: ColorManipulator.darken(colors.grey, 0.1),
    textColor: colors.darkGrey,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey,
    disabledColor: ColorManipulator.fade(colors.darkGrey, 0.3)
  }
};
