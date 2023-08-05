import {
  useEffect,
  useState,
  createContext,
  useMemo,
  ReactNode,
  useContext,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext<string[]>([]);
export const useResraurantContext = () => useContext(RestaurantsContext);
export const RestaurantsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RestaurantsContext.Provider value={["1", "2", "3"]}>
      {children}
    </RestaurantsContext.Provider>
  );
};
