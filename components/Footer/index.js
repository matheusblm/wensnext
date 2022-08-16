import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      bg="linear-gradient(90.03deg, rgba(243, 247, 255, 0) -56.95%, #8EDFE6 115.81%);"
      justifyContent="center"
    >
      <Flex w="70%">
        <VStack
          w="50%"
          alignContent="start"
          alignItems="start"
          justifyContent="space-evenly"
          p="20px"
          h="430px"
          mt="50px"
        >
          <Box width="240px" height="65px">
            <Image src={logo} alt="agencia wens" width="240px" height="65px" />
          </Box>

          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the{" "}
          </Text>
          <HStack>
            <Icon />
            <Text>Curitiba-PR</Text>
          </HStack>
          <HStack>
            <Icon />
            <Text>email@email</Text>
          </HStack>
          <HStack>
            <Icon />
            <Text>41-999999</Text>
          </HStack>
          <HStack>
            <Link p="10px">
              <Icon />
            </Link>
            <Link p="10px">
              <Icon />
            </Link>
          </HStack>
        </VStack>
        <VStack
          w="50%"
          alignContent="end"
          alignItems="center"
          justifyContent="space-evenly"
          p="50px"
        >
          <Heading>Contato</Heading>
          <FormControl>
            <FormLabel htmlFor="email">Nome</FormLabel>
            <Input
              id="email"
              type="name"
              variant="flushed"
              borderColor="black"
            />
            <FormLabel htmlFor="email">Empresa</FormLabel>
            <Input
              id="email"
              type="text"
              variant="flushed"
              borderColor="black"
            />
            <FormLabel htmlFor="email">Telefone</FormLabel>
            <Input
              id="email"
              type="phone"
              variant="flushed"
              borderColor="black"
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              variant="flushed"
              borderColor="black"
            />

            <Button
              mt="50px"
              w="200px"
              h="60px"
              borderRadius="55px"
              bg="#FFBC92"
              color="#FFFFFF"
              alignSelf="start"
              _hover={{ bg: "#D3A88C" }}
            >
              Enviar
            </Button>
          </FormControl>
        </VStack>
      </Flex>
    </Flex>
  );
};
