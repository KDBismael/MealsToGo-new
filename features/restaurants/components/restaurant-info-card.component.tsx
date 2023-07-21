import { Card } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  restaurant: {
    name: string;
    icon?: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily?: string;
  };
}

const Title = styled.Text`
  padding: 10px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 15px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant }: Props) => {
  const { name, photos } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </RestaurantCard>
    </>
  );
};
