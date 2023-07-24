import styled, { DefaultTheme, useTheme } from "styled-components/native";

interface PositionVariant {
  left: string;
  top: string;
  right: string;
  bottom: string;
}
interface SizeVariant {
  small: number;
  madium: number;
  large: number;
}
interface Props {
  position?: keyof PositionVariant;
  size?: keyof SizeVariant;
}
interface Variant {
  variant: string;
}

const positionVariant = {
  left: "margin-left",
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
};

const sizeVariant = {
  small: 1,
  madium: 2,
  large: 3,
};
const getVariant = (
  position: keyof PositionVariant,
  size: keyof SizeVariant,
  theme: DefaultTheme,
) => {
  return `${positionVariant[position]}:${theme.space[sizeVariant[size]]}`;
};
const SpacerView = styled.View<Variant>`
  ${({ variant }) => variant}
`;
export const Spacer = ({ position = "top", size = "small" }: Props) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant} />;
};
