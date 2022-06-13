import { Flex, Link, Text, HStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/logo.png";
export const Header = ({ navBar }) => {
  return (
    <>
      <Flex
        w="100%"
        p="30px"
        justifyContent="center"
        bg={navBar ? "#DBD2EA" : "transparent"}
        transition="1s"
      >
        <Flex
          justifyContent="space-between"
          w="80%"
          h="80px"
          alignContent="flex-start"
          flexDirection={["column", "row"]}
        >
          <Image src={logo} alt="agencia wens" width="240px" height="65px" />

          <HStack alignItems="start">
            <Link
              href="#sobre"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Sobre</Text>
            </Link>
            <Link
              href="#Servicos"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Servicos</Text>
            </Link>
            <Link
              href="#Clientes"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Clientes</Text>
            </Link>
            <Link
              href="#Contato"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Contato</Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
