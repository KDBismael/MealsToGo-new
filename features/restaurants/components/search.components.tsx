import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useLOcationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0px;
`;

const SearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors?.bg?.primary};
`;

export const Search = () => {
  const { keyword, search } = useLOcationContext();
  const [searchQuery, setSearchQuery] = useState(keyword);
  const onChangeSearch = (query: string) => setSearchQuery(query);
  // console.log(location);
  useEffect(() => {
    search(searchQuery);
  }, []);

  return (
    <SearchContainer>
      <SearchBar
        mode="view"
        showDivider={false}
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
