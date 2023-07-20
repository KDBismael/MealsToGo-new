import { Text, StyleSheet } from "react-native";
import { Card, Text as PaperText } from "react-native-paper";
import styled from "styled-components";

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

const Title = styled.Text``;

export const RestaurantInfoCard = ({ restaurant }: Props) => {
  const { name, photos } = restaurant;
  return (
    <>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.cover}
          key={name}
          source={{ uri: photos[0] }}
        />
        <Card.Content>
          <PaperText style={styles.title} variant="bodyMedium">
            <Text>{name}</Text>
          </PaperText>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: {
    padding: 15,
    backgroundColor: "white",
  },
  title: {
    padding: 10,
  },
});
