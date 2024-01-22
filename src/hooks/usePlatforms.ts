import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = (selectedPlatform: Platform | null) => {
  return useData<Platform>(
    "/platforms/lists/parents",
    {
      params: { parent_platforms: selectedPlatform?.id },
    },
    [selectedPlatform?.id]
  );
};

export default usePlatform;
