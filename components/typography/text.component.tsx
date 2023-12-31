import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

const defaultTextStyles = (theme: DefaultTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: DefaultTheme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

interface Variants {
  body: (theme: DefaultTheme) => string;
  label: (theme: DefaultTheme) => string;
  caption: (theme: DefaultTheme) => string;
  error: (theme: DefaultTheme) => string;
  hint: (theme: DefaultTheme) => string;
}
interface Variant {
  variant?: keyof Variants;
}

export const Text = styled.Text<Variant>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;
