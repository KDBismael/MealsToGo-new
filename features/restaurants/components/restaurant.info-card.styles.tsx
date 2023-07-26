import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors?.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors?.bg?.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  padding: ${(props) => props.theme.space[2]} 0px;
  flex-direction: row;
`;
export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const EndItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
