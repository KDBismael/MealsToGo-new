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

  const retrieveRestaurant = () => {
    setSsLoading(true);
    setTimeout(() => {
      restaurantsRequest({})
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
    retrieveRestaurant();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
