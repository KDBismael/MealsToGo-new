import { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar
            onChangeText={(e) => onChangeSearch(e)}
            value={searchQuery}
            placeholder="Search"
          />
        </View>
        <View style={styles.list}>
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
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "green",
    padding: 14,
  },
  list: {
    backgroundColor: "red",
    flex: 1,
    padding: 15,
  },
});
