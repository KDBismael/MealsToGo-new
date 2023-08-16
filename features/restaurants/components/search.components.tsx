import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useLOcationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0px;
`;

export const Search = () => {
  const { location, keyword, search } = useLOcationContext();
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query: string) => setSearchQuery(query);
  console.log(location);
  useEffect(() => {
    search(searchQuery);
  }, []);

  return (
    <SearchContainer>
      <Searchbar
        value={searchQuery}
        placeholder="Search for a location"
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(e) => onChangeSearch(e)}
      />
    </SearchContainer>
  );
};
