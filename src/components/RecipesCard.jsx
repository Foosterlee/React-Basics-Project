import { Box, Image, Flex, Text, Tag, Stack } from "@chakra-ui/react";

export const RecipesCard = ({ recipe, onClick }) => {
  const imageSize = "150px";

  return (
    <Box
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      width="100%"
      mb="4"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      boxSizing="border-box"
      onClick={() => onClick(recipe)} // Navigeer naar RecipePage bij klikken
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        h={imageSize}
        w="100%"
        objectFit="cover"
      />

      <Flex
        p="4"
        flexGrow={1}
        align="center"
        justify="center"
        flexDirection="column"
      >
        <Stack spacing={2} textAlign="center" width="100%">
          {recipe.mealType && (
            <Text color="gray.500" fontSize="sm" textTransform="uppercase">
              {recipe.mealType}
            </Text>
          )}
          {recipe.label && (
            <Text fontWeight="semibold" fontSize="md">
              {recipe.label}
            </Text>
          )}
          {recipe.healthLabels && (
            <Flex justifyContent="center">
              {recipe.healthLabels.includes("Vegan") && (
                <Tag
                  colorScheme="purple"
                  variant="subtle"
                  textTransform="uppercase"
                  mx={1}
                >
                  Vegan
                </Tag>
              )}
              {recipe.healthLabels.includes("Vegetarian") && (
                <Tag
                  colorScheme="purple"
                  variant="subtle"
                  textTransform="uppercase"
                  mx={1}
                >
                  Vegetarian
                </Tag>
              )}
            </Flex>
          )}
          {recipe.dietLabels && (
            <Flex justifyContent="center">
              {recipe.dietLabels.slice(0, 2).map((label, index) => (
                <Tag
                  key={index}
                  colorScheme="green"
                  variant="subtle"
                  textTransform="uppercase"
                  mx={1}
                >
                  {label}
                </Tag>
              ))}
            </Flex>
          )}
          {recipe.dishType && (
            <Box>
              <Text>Dish: {recipe.dishType}</Text>
              {recipe.cautions && recipe.cautions.length > 0 && (
                <Box>
                  <Text>Cautions:</Text>
                  {recipe.cautions.slice(0, 2).map((caution, index) => (
                    <Tag
                      key={index}
                      colorScheme="red"
                      variant="subtle"
                      textTransform="uppercase"
                      mx={1}
                    >
                      {caution}
                    </Tag>
                  ))}
                </Box>
              )}
            </Box>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
