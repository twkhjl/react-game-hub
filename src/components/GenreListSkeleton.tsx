import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";
import numArray from "../services/num-array";

const GenreListSkeleton = () => {
  const skeletons = numArray(12);

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} marginBottom={5}>
          <HStack>
            <Skeleton height="40px" borderRadius={"10px"} width={"60px"} />
            <Skeleton height="15px" width={"100%"} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
