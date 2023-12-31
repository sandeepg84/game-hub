import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="200px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <SkeletonText></SkeletonText>
    </Card>
  );
};

export default GameCardSkeleton;
