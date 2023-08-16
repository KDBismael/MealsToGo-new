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
import { useLOcationContext } from "../location/location.context";

type Context = {
  restaurants: any[];
  isLoading: boolean;
  error: any;
};

export const RestaurantsContext = createContext<Context>({
  restaurants: [],
  error: null,
  isLoading: false,
});
export const useResraurantContext = () => useContext(RestaurantsContext);
export const RestaurantsProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setSsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useLOcationContext();

  const retrieveRestaurant = (location: string) => {
    setSsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest({ location })
        .then((res) => restaurantsTransform(res as any[]))
        .then((res) => {
          setSsLoading(false), setRestaurants(res);
          setError(null);
        })
        .catch((err) => {
          setSsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const Location = `${location.lat},${location.lng}`;
      retrieveRestaurant(Location);
    }
  }, [location.lat]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
