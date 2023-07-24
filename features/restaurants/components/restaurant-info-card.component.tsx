import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Image, Text } from "react-native";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer";

interface Props {
  restaurant: {
    name: string;
    icon?: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily?: boolean;
  };
}

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
// padding: ${(props) => props.theme.space[2]} 0px;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors?.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors?.bg?.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  padding: ${(props) => props.theme.space[2]} 0px;
  flex-direction: row;
`;
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const EndItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant }: Props) => {
  const {
    name,
    photos,
    rating,
    address,
    isOpenNow,
    isClosedTemporarily,
    icon,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Wrapper>
            <Rating>
              {ratingArray.map((rate, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <EndItem>
              {isClosedTemporarily && (
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="large" />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </EndItem>
          </Wrapper>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
