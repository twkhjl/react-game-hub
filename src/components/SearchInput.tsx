import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaMagnifyingGlass />}
        />
        <Input borderRadius={20} placeholder="search games..." />
      </InputGroup>
    </>
  );
};

export default SearchInput;
