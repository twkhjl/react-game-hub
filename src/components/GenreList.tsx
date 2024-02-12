import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
              <Button
                style={{
                  fontWeight:
                    selectedGenre?.id === genre.id ? "bold" : "normal",
                  color: selectedGenre?.id == genre.id ? "forestgreen" : "",
                }}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
