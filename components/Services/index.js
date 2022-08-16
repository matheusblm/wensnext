import {
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  Text,
  Spacer,
  Box,
} from "@chakra-ui/react";

import { servicesWens } from "../../Utils/services";
import servicesElement from "../../public/servicesElement.png";
import Image from "next/image";

export const Services = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack pt="100px">
          <Heading>Servicos</Heading>
          <Spacer />
          <Box w="56px" borderTop="2px solid black" borderRadius="10px"></Box>
          <Text textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the{" "}
          </Text>
          <Spacer />

          <SimpleGrid
            minChildWidth="330px"
            spacing={5}
            w="100%"
            maxW="1120px"
            zIndex="1000"
            pt="100px"
          >
            {servicesWens.map((item, index) => (
              <VStack
                maxW="350px"
                h="350px"
                boxShadow="10px 40px 50px rgba(229, 233, 246, 0.4);"
                borderRadius="20px"
                p="50px"
                textAlign="left"
                bg="#FFE4D2"
                key={index}
              >
                <Image src={item.icon} alt="icon" height="85px" />
                <Spacer />
                <Heading fontSize="2xl" w="100%">
                  {item.title}
                </Heading>
                <Spacer />
                <Text>{item.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
          <Box position="absolute" top="45%" right="55%">
            <Image src={servicesElement} alt="testimg" />
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
