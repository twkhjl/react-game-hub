import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <GenreListSkeleton></GenreListSkeleton>}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginBottom={5}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"40px"}
                borderRadius={"5px"}
              ></Image>
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
