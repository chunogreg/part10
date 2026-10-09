import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorHeading: {
    color: theme.colors.headingColor,
  },

  colorTextBackgroung: {
    backgroundColor: theme.colors.primary,
  },

  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },

  fontSizeHeading: {
    fontSize: theme.fontSizes.headingSize,
  },
  fontSizeMainHeading: { fontSize: theme.fontSizes.mainHeading },

  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },

  fontWeightNormal: {
    fontWeight: theme.fontWeights.normal,
  },

  textMargin: {
    marginBottom: theme.margins.basic,
  },
});

const Text = ({
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  style,
  marginBottom,

  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "headingColor" && styles.colorHeading,
    backgroundColor === "primary" && styles.colorTextBackgroung,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "headingSize" && styles.fontSizeHeading,
    fontSize === "mainHeading" && styles.fontSizeMainHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    fontWeight === "normal" && styles.fontWeightNormal,

    marginBottom === "bottom" && styles.textMargin,

    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
