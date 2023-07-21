import { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: yellow;
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  background-color: green;
  padding: 14px;
`;

const RestaurantList = styled.View`
  background-color: red;
  flex: 1;
  padding: 15px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <>
      <Container>
        <SearchContainer>
          <Searchbar
            onChangeText={(e) => onChangeSearch(e)}
            value={searchQuery}
            placeholder="Search"
          />
        </SearchContainer>
        <RestaurantList>
          <RestaurantInfoCard
            restaurant={{
              name: "Some restaurants",
              photos: [
                "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
              ],
              address: "100 some street",
              isOpenNow: true,
              rating: 4,
            }}
          />
        </RestaurantList>
      </Container>
    </>
  );
};
