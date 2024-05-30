import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: "$299" },
  { id: 2, name: "Laptop", price: "$799" },
  { id: 3, name: "Smartwatch", price: "$199" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center" py={10} bg="gray.100" w="full">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to E-Shop
          </Heading>
          <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
        </Box>
        <Box w="full">
          <Heading as="h2" size="xl" mb={4}>
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {featuredProducts.map((product) => (
              <Box key={product.id} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{product.name}</Heading>
                <Text mt={4}>{product.price}</Text>
                <RouterLink to={`/products/${product.id}`}>View Details</RouterLink>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;