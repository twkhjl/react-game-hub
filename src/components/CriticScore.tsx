import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = "green";
  if (score < 90) color = "yellow";
  if (score < 80) color = "red";
  return (
    <Badge
      marginTop={2}
      borderRadius={6}
      paddingX={"10px"}
      fontSize="14px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
