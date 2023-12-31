import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { useResraurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.components";

const RestaurantList = styled(FlatList<any>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

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
  const { restaurants, isLoading, error } = useResraurantContext();
  // console.log(restaurants);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoaderContainer>
            <ActivityIndicator size={50} animating color="#2182BD" />
          </LoaderContainer>
        )}
        {!isLoading && (
          <>
            <Search />
            <RestaurantList
              data={restaurants}
              renderItem={(Item) => {
                return (
                  <>
                    <RestaurantInfoCard restaurant={Item.item} />
                    <Spacer position="bottom" size="large" />
                  </>
                );
              }}
              keyExtractor={(Item) => Item.name}
            />
          </>
        )}
      </SafeArea>
    </>
  );
};
