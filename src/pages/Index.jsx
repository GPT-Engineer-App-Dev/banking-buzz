import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#F3F2EF">
      <Flex as="nav" bg="#333333" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/world" color="white">
            World
          </Link>
          <Link as={RouterLink} to="/business" color="white">
            Business
          </Link>
          <Link as={RouterLink} to="/tech" color="white">
            Tech
          </Link>
          <Link as={RouterLink} to="/markets" color="white">
            Markets
          </Link>
        </HStack>
      </Flex>
      <Box bg="gray.100" p={4}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="xl">
            Latest News
          </Heading>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md" w="100%">
            <Heading as="h3" size="md">Article Title 1</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md" w="100%">
            <Heading as="h3" size="md">Article Title 2</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md" w="100%">
            <Heading as="h3" size="md">Article Title 3</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;