import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const productDetails = {
  1: { name: "Smartphone", price: "$299", description: "A high-quality smartphone with a sleek design.", image: "/images/smartphone.jpg" },
  2: { name: "Laptop", price: "$799", description: "A powerful laptop for all your computing needs.", image: "/images/laptop.jpg" },
  3: { name: "Smartwatch", price: "$199", description: "A stylish smartwatch with multiple features.", image: "/images/smartwatch.jpg" },
  4: { name: "Tablet", price: "$399", description: "A versatile tablet for work and play.", image: "/images/tablet.jpg" },
  5: { name: "Headphones", price: "$99", description: "High-quality headphones with excellent sound.", image: "/images/headphones.jpg" },
  6: { name: "Camera", price: "$499", description: "A digital camera with high resolution.", image: "/images/camera.jpg" },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return (
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Product Not Found
        </Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Image src={product.image} alt={product.name} boxSize="300px" objectFit="cover" />
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            {product.name}
          </Heading>
          <Text fontSize="lg" mb={4}>
            {product.price}
          </Text>
          <Text>{product.description}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProductDetail;