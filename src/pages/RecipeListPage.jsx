// RecipeListPage.jsx
import { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Input,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RecipesCard } from "../components/RecipesCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchText, setSearchText] = useState("");
  const wrapItemWidth = useBreakpointValue({
    base: "100%", // for small screens (mobile)
    lg: "calc(25% - 16px)", // for large screens (desktop)
  });

  const filteredRecipes = recipes.filter((recipe) => {
    const searchLower = searchText.toLowerCase();
    const recipeName = recipe.recipe.label.toLowerCase();
    const healthLabels = recipe.recipe.healthLabels.map((label) =>
      label.toLowerCase()
    );

    return (
      recipeName.includes(searchLower) ||
      healthLabels.some((label) => label.includes(searchLower)) ||
      healthLabels.some((label) => label.toLowerCase() === searchLower)
    );
  });

  return (
    <Center minHeight="100vh" flexDirection="column" bgColor="#FFD1DC">
      <Box width="100%" maxWidth="1200px" px={4} borderRadius="md" mb={4}>
        <Heading as="h1" my={4} color="white" textAlign="center">
          Femm's Recipes
        </Heading>
        <Flex justifyContent="center" alignItems="center">
          <Input
            placeholder="Search Recipes"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            borderRadius="md"
            bgColor="white"
            width={400}
          />
        </Flex>
      </Box>
      <Box width="100%" maxWidth="1200px" px={4} mb={4} mx="auto">
        <Wrap spacing={4} justify="center">
          {filteredRecipes.map((recipe, index) => (
            <WrapItem key={index} width={wrapItemWidth} mb={4}>
              <RecipesCard recipe={recipe.recipe} onClick={clickFn} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Center>
  );
};
