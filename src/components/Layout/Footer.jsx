import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialLinkedinCircular } from "react-icons/ti"
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return <Box p={"4"} bg="blackAlpha.900" minH={"10vh"}>
    <Stack direction={["column" , "row"]}>
        <VStack alignItems={["center" , "flex-start"]} width={"full"}>
            <Heading children="All rights reserved" color="white"/>
            <Heading fontFamily={"body"} size="sm"children="Prince $ingh" color="yellow.400"/>
        </VStack>
        <HStack spacing={["2" , "10"]} justifyContent={"center"} color={"white"} fontSize="50">
   <a href="https://www.linkedin.com/in/prince-singh-a35963199/"  rel="noreferrer" target='blank'>
    <TiSocialLinkedinCircular/>
   </a>
   <a href="https://github.com/mrprincesingh" target='blank'  rel="noreferrer">
    <DiGithub/>
   </a>
        </HStack>
    </Stack>

  </Box>
}

export default Footer