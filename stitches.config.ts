import { createStyled } from "@stitches/react";

const theme = {
  colors: {
    $hiContrast: "hsl(206,10%,5%)",
    $loContrast: "white",
  },
  space: {
    $1: "5px",
    $2: "10px",
    $3: "15px",
    $4: "20px",
    $5: "25px",
    $6: "35px",
  },
  sizes: {
    xs: "5px",
    s: "10px",
    m: "15px",
    l: "20px",
    xl: "25px",
    xxl: "35px",
  },
  fontSizes: {
    xs: "12px",
    s: "13px",
    m: "15px",
    l: "17px",
    xl: "19px",
    xxl: "21px",
  },
  fonts: {
    $system: "system-ui",
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  utils: {
    marginX: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (
      value: keyof typeof theme["space"] | (string & {})
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  breakpoints: {
    smartphone: (rule) => `@media (min-width: 640px) { ${rule} }`,
    tablet: (rule) => `@media (min-width: 768px) { ${rule} }`,
    laptop: (rule) => `@media (min-width: 1024px) { ${rule} }`,
  },
});
