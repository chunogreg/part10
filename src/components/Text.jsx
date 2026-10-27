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
  colorRedBackground: { backgroundColor: theme.colors.red },

  colorTextBackground: {
    backgroundColor: theme.colors.primary,
  },

  colorTextWhiteBackground: {
    backgroundColor: theme.colors.headingColor,
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
  fontWeightMedium: {
    fontWeight: theme.fontWeights.medium,
  },
  textMargin: {
    marginBottom: theme.margins.basic,
  },
  centerText: { textAlign: "center" },
  height: {
    height: 70,
  },
  width: { width: 75 },
  longWidth: { width: 188 },
  borderWidth: { borderWidth: 3 },
  borderRadius: { borderRadius: 35 },
  smallBorderRadius: { borderRadius: 5 },

  padding: { padding: 16 },
  borderColor: { borderColor: theme.colors.primary },
});

const Text = ({
  color,
  backgroundColor,
  fontSize,
  fontWeight,
  style,
  marginBottom,
  width,
  height,
  borderWidth,
  borderRadius,
  padding,
  borderColor,
  textAlign,

  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "headingColor" && styles.colorHeading,
    backgroundColor === "primary" && styles.colorTextBackground,
    backgroundColor === "mainBackground" && styles.colorTextWhiteBackground,
    backgroundColor === "colorRedBackground" && styles.colorRedBackground,

    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "headingSize" && styles.fontSizeHeading,
    fontSize === "mainHeading" && styles.fontSizeMainHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    fontWeight === "normal" && styles.fontWeightNormal,
    fontWeight === "medium" && styles.fontWeightMedium,

    marginBottom === "bottom" && styles.textMargin,
    width === "width" && styles.width,
    width === "longWidth" && styles.longWidth,
    height === "height" && styles.height,
    borderWidth === "borderWidth" && styles.borderWidth,
    borderRadius === "borderRadius" && styles.borderRadius,
    borderRadius === "smallBorderRadius" && styles.smallBorderRadius,

    padding === "padding" && styles.padding,
    borderColor === "primary" && styles.borderColor,
    textAlign === "centerText" && styles.centerText,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
