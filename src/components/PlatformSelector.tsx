import { SimpleGrid } from "@chakra-ui/react";
import { ActionMeta, Select, SingleValue } from "chakra-react-select";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (
    newValue: SingleValue<platformOption>,
    actionMeta: ActionMeta<platformOption>
  ) => void | undefined;
}

export interface platformOption {
  id: number;
  name: string;
  slug: string;

  value: string;
  label: string;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();

  const platformOptions: platformOption[] = data.map((platform) => ({
    id: platform.id,
    name: platform.name,
    slug: platform.slug,

    value: platform.name,
    label: platform.name,
  }));

  return (
    <>
      <SimpleGrid
        textAlign={"left"}
        columns={{
          sm: 1,
          md: 3,
          lg: 5,
          xl: 7,
        }}
        minWidth={{
          base: "90vw",
          lg: "80vw",
        }}
        paddingX={5}
      >
        <Select
          onChange={onSelectPlatform}
          placeholder="platform..."
          options={platformOptions}
        />
      </SimpleGrid>
    </>
  );
};

export default PlatformSelector;
