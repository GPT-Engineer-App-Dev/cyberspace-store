import { Box, Container, Heading, SimpleGrid, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$299" },
  { id: 2, name: "Laptop", price: "$799" },
  { id: 3, name: "Smartwatch", price: "$199" },
  { id: 4, name: "Tablet", price: "$399" },
  { id: 5, name: "Headphones", price: "$99" },
  { id: 6, name: "Camera", price: "$499" },
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(term)
      )
    );
  };
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Products
      </Heading>
      <Input
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleSearch}
        mb={8}
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {filteredProducts.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{product.name}</Heading>
            <Text mt={4}>{product.price}</Text>
            <RouterLink to={`/products/${product.id}`}>View Details</RouterLink>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;