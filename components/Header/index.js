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
        bg={navBar ? "#FFFFF" : "#8EDFE6"}
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

          <HStack alignItems="start" gridGap="10px">
            <Link href="#sobre" _hover={{ transition: 1, opacity: 0.4 }}>
              <Text>Sobre</Text>
            </Link>
            <Link href="#Servicos" _hover={{ transition: 1, opacity: 0.4 }}>
              <Text> Servicos</Text>
            </Link>
            <Link href="#Clientes" _hover={{ transition: 1, opacity: 0.4 }}>
              <Text> Clientes</Text>
            </Link>
            <Link href="#Contato" _hover={{ transition: 1, opacity: 0.4 }}>
              <Text> Contato</Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
