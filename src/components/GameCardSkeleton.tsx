import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card width={"100%"} borderRadius={10} overflow={"hidden"}>
        <Skeleton height={"200px"}></Skeleton>
        <CardBody>
          <SkeletonText noOfLines={3} spacing="3" skeletonHeight="1" />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
