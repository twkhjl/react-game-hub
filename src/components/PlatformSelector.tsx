import { ActionMeta, Select, SingleValue } from "chakra-react-select";
import usePlatforms from "../hooks/usePlatforms";
import { Box } from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (
    newValue: SingleValue<platformOption>,
    actionMeta: ActionMeta<platformOption>
  ) => void | undefined;
}

export interface platformOption {
  id: number | null;
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

  platformOptions.unshift({
    id: null,
    name: "",
    slug: "",

    value: "",
    label: "ALL",
  });

  return (
    <>
      <Box
        width={{
          base: "100%",
          sm: "30%",
          lg: "250px",
        }}
      >
        <Select
          onChange={onSelectPlatform}
          placeholder="platform..."
          options={platformOptions}
        />
      </Box>
    </>
  );
};

export default PlatformSelector;
