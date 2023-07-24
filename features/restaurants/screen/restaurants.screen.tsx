import { useState } from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.success};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.View`
  background-color: ${(props) => props.theme.colors.ui.error};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
              icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
              photos: [
                "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
              ],
              address: "100 some street",
              isOpenNow: true,
              isClosedTemporarily: true,
              rating: 4,
            }}
          />
        </RestaurantList>
      </Container>
    </>
  );
};
