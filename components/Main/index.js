import { Box, Button, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import elementMain from "../../public/elementMain.png";
export const Main = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex w="70%" maxW="1500px">
          <Flex
            alignContent="center"
            p="20px"
            w={["100%", "100%", "100%", "50%"]}
            alignItems="center"
          >
            <VStack textAlign="left" justifyContent="space-evenly" h="300px">
              <Heading w="100%">Agencia de Marketing Digital</Heading>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the
              </Text>
              <Button
                w="200px"
                h="60px"
                borderRadius="55px"
                bg="#FFBC92"
                color="#FFFFFF"
                alignSelf="start"
                _hover={{ bg: "#D3A88C" }}
              >
                Consulte
              </Button>
            </VStack>
          </Flex>
          <Box w="50%" p="20px" display={["none", "none", "none", "block"]}>
            {/* <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "645px", width: "650px" }}
            /> */}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
