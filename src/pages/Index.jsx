import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Link } from "@chakra-ui/react";
import { FaGamepad, FaInfoCircle, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Fortnite Online
          </Heading>
          <Text fontSize="xl">Join the adventure in the ever-evolving universe of Fortnite!</Text>
        </Box>

        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3J0bml0ZSUyMGdhbWUlMjBhY3Rpb258ZW58MHx8fHwxNzE0NDA4NjgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fortnite Game Action" />

        <HStack spacing={4} justifyContent="center">
          <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid">
            Play Now
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="gray" variant="outline">
            Learn More
          </Button>
          <Button leftIcon={<FaUserFriends />} colorScheme="pink" variant="solid">
            Join Friends
          </Button>
        </HStack>

        <Text fontSize="sm" color="gray.600">
          © 2023 Fortnite Online. All rights reserved.
        </Text>
        <Link href="https://www.epicgames.com/fortnite/en-US/home" isExternal color="teal.500">
          Official Fortnite Site
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
