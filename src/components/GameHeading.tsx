import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const defaultText = "Games";
  const platformHeading = `${gameQuery.platformOption?.name || ""} `;
  const genreHeading = `${gameQuery.genre?.name || ""} `;

  const heading = `${platformHeading} ${genreHeading} ${defaultText}`;

  return (
    <Heading
      as="h1"
      marginBottom={5}
      fontSize={{
        base: "4xl",
        md: "6xl",
      }}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
