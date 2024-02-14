import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface Props {
  onEnterSearchString: (searchString: string) => void;
}

const SearchInput = ({ onEnterSearchString }: Props) => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaMagnifyingGlass />}
        />
        <Input
          onChange={(event) => {
            onEnterSearchString(event.target.value);
          }}
          borderRadius={20}
          placeholder="search games..."
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
