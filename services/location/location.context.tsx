import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { locationRequest, locationTransform } from "./location.service";

type Context = {
  location: {
    lat: any;
    lng: any;
  };
  isLoading: boolean;
  error: any;
  keyword: string;
  search: (keyword: string) => void;
};

export const LocationContext = createContext<Context>({
  error: null,
  isLoading: false,
  keyword: "san francisco",
  location: { lat: null, lng: null },
  search: () => {},
});
export const useLOcationContext = () => useContext(LocationContext);
export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<{
    lat: any;
    lng: any;
  }>({ lat: null, lng: null });
  const [isLoading, setSsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchkeyword: string) => {
    setSsLoading(true);
    setKeyword(searchkeyword);
    if (!searchkeyword.length) return;
    locationRequest(searchkeyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((res) => {
        setSsLoading(false);
        setLocation(res);
      })
      .catch((err) => {
        setSsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
