import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <Image
            src={getCroppedImageUrl(game.background_image)}
            minW={{ base: "100%" }}
            _hover={{ transform: "scale(1.2)" }} // Apply scaling on hover
            transition="transform 0.2s ease-in-out" // Add transition effect
          ></Image>
        </div>

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
