import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

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

          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
