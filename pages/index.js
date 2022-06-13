import { Box, Spacer, VStack } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Services } from "../components/Services";
import { Clients } from "../components/Clients";
import { Header } from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [navBar, setNavBar] = useState(false);
  // const changeBack = () => {
  //   if (window.scrollY >= 80) {
  //     setNavBar(true);
  //   } else {
  //     setNavBar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBack);
  return (
    <div className="App">
      <VStack>
        <Box position="sticky" w="100%" top="0" zIndex="1000000">
          <Header navBar={navBar} />
        </Box>

        <Spacer />
        <Main />
        <Spacer />
        <Services />
        <Spacer />
        <Clients />
        <Spacer />

        <Footer />
      </VStack>
    </div>
  );
}
