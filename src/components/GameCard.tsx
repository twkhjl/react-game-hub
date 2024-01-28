import { Card, CardBody, Image, Heading } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image
          src={game.background_image}
          maxH={{ base: "100%", sm: "200px" }}
        ></Image>
        <CardBody>
          <Heading size="md" fontSize="xl">
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
