import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import pura from "../../public/pura.png";

export const Clients = () => {
  return (
    <Flex w="100%" justifyContent="center" zIndex="10000">
      <VStack pt="100px">
        <Heading fontFamily="Spartan">Clientes</Heading>
        <Spacer />
        <Box w="56px" borderTop="2px solid black" borderRadius="10px"></Box>
        <Text textAlign="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the{" "}
        </Text>
        <SimpleGrid minChildWidth="200px" spacing={8} w="100%" maxW="1120px">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <Box
              key={i}
              _hover={{ bg: "black", opacity: "0.8" }}
              w="200px"
              h="250px"
            >
              <Image src={pura} alt="instapic" />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
