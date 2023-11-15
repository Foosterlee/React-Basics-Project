import {
  Box,
  Image,
  Text,
  Button,
  SimpleGrid,
  Center,
  Flex,
  Tag,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, clickFn }) => {
  const boxWidth = useBreakpointValue({ base: "90%", md: "70%" });

  return (
    <Center minHeight="100vh" bgColor="#FFD1DC">
      <Box width={boxWidth} bgColor="white">
        <Flex align="center">
          <Button
            onClick={() => clickFn(null)}
            leftIcon={<ArrowBackIcon />}
            bgColor="white"
          />
          <Center flex="1">
            <Image src={`/img/Logo.png`} alt="Logo" w={150} />
          </Center>
        </Flex>

        <Image
          src={recipe.image}
          alt={recipe.label}
          maxH={300}
          objectFit="cover"
          w="full"
        />

        <SimpleGrid columns={2} spacing={50} m={6}>
          <Box>
            <Text color="gray.500" textTransform="uppercase" fontSize="sm">
              {recipe.mealType.join(", ")}
            </Text>
            <Text fontWeight="bold" fontSize="xl" pb={2}>
              {recipe.label}
            </Text>
            <Text>Total cooking time: {recipe.totalTime} Minutes</Text>
            <Text>Servings: {recipe.yield}</Text>
            <Text pb={2} pt={2} fontWeight="bold">
              Ingredients:
            </Text>
            <Text as="ul" listStyleType="none">
              {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {ingredient}
                </li>
              ))}
            </Text>
          </Box>
          <Box>
            <Box>
              {recipe.healthLabels.length > 0 && (
                <>
                  <Text fontWeight="bold" pb={2}>
                    Health Labels:
                  </Text>
                  <Flex flexWrap="wrap">
                    {recipe.healthLabels.map((label, index) => (
                      <Tag
                        key={index}
                        colorScheme="purple"
                        variant="subtle"
                        mx={1}
                        mb={2}
                        textTransform="uppercase"
                      >
                        {label}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
            </Box>
            <Box>
              {recipe.dietLabels.length > 0 && (
                <>
                  <Text fontWeight="bold" pb={2}>
                    Diet:
                  </Text>
                  <Flex flexWrap="wrap">
                    {recipe.dietLabels.map((label, index) => (
                      <Tag
                        key={index}
                        colorScheme="green"
                        variant="subtle"
                        mx={1}
                        mb={2}
                        textTransform="uppercase"
                      >
                        {label}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
            </Box>
            <Box>
              {recipe.cautions.length > 0 && (
                <>
                  <Text fontWeight="bold" pb={2}>
                    Cautions:
                  </Text>
                  <Flex flexWrap="wrap">
                    {recipe.cautions.map((label, index) => (
                      <Tag
                        key={index}
                        colorScheme="red"
                        variant="subtle"
                        mx={1}
                        mb={2}
                        textTransform="uppercase"
                      >
                        {label}
                      </Tag>
                    ))}
                  </Flex>
                </>
              )}
            </Box>

            <Text pb={2}>Total Nutrients:</Text>
            <SimpleGrid columns={4} spacing={5}>
              {Object.keys(recipe.totalNutrients)
                .filter((key) =>
                  [
                    "ENERC_KCAL",
                    "PROCNT",
                    "FAT",
                    "CHOCDF",
                    "CHOLE",
                    "NA",
                  ].includes(key)
                )
                .map((key, index) => (
                  <Box key={index}>
                    <Text>
                      {Math.round(recipe.totalNutrients[key].quantity)}{" "}
                      {key === "ENERC_KCAL" ? (
                        <Text textTransform="uppercase" fontSize="x-small">
                          CALORIES
                        </Text>
                      ) : (
                        recipe.totalNutrients[key].unit
                      )}
                    </Text>
                    {key !== "ENERC_KCAL" && (
                      <Text textTransform="uppercase" fontSize="x-small">
                        {recipe.totalNutrients[key].label}
                      </Text>
                    )}
                  </Box>
                ))}
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
};
