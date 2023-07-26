import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Wrapper,
  Rating,
  EndItem,
  Icon,
  Address,
} from "./restaurant.info-card.styles";

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
          <Text variant="label">{name}</Text>
          <Wrapper>
            <Rating>
              {ratingArray.map((rate, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <EndItem>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large" />
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="large" />
              <Icon source={{ uri: icon }} />
            </EndItem>
          </Wrapper>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
