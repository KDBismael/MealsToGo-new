import { useState } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { useResraurantContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.success};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList<{ name: string }>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const restaurantMock = {
  name: "Some restaurants",
  icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos: [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  address: "100 some street",
  isOpenNow: true,
  isClosedTemporarily: true,
  rating: 4,
};

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const restaurants = useResraurantContext();
  console.log(restaurants);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            onChangeText={(e) => onChangeSearch(e)}
            value={searchQuery}
            placeholder="Search"
          />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={() => (
            <>
              <RestaurantInfoCard restaurant={restaurantMock} />
              <Spacer position="bottom" size="large" />
            </>
          )}
          keyExtractor={(Item) => Item.name}
        />
      </SafeArea>
    </>
  );
};
