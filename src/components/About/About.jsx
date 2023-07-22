import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import intro from '../../assets/Videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} p="8">
    <VStack>
      <Avatar src="https://mrprincesingh.github.io/static/media/prince.1c4bbb4f2d2771a2ec16.png" boxSize={['40', '48']} />

      <Text children="Co-Founder & CEO" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Prince Singh" size={['md', 'xl']} />
      <Text
        alignItems={['center , left']}
        children="Hi, I am a full-stack-developer "
      />
    </VStack>
    <VStack></VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      src={intro}
      loop
      controls
      autoPlay
      muted
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPictureMode="true"
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = () => (
  <Box>
    <Heading
      size="md"
      children="Terms and conditions"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h="sm" p="4" overflowY={"scroll"}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        What’s on Netflix is not endorsed, moderated, owned by or affiliated
        with Netflix. We operate as a fan-site to give fans a news guide to the
        latest and greatest content on the streaming platforms in multiple
        regions. Copyright Copyright to images and videos is owned by the rights
        holders. This website or any portion of this website may not be
        reproduced, duplicated, copied, visited, stored in a retrieval system,
        transmitted in any form or means electronic, mechanical, photocopying,
        recording or otherwise, sold, resold or otherwise exploited for any
        commercial purpose. Waiver of liablility The material contained in this
        website is set out in good faith for general guidance and no liability
        can be accepted for loss, injury or expense incurred as a result of
        relying in particular circumstances on statements made on the site. We
        do our best to keep this website as up to date as possible, but in view
        of the changeable nature of worldwide travel we cannot be held
        responsible for any information contained herein. Information has been
        obtained from sources believed to be reliable, but its accuracy and
        completeness, and the opinions based thereon are not guaranteed. Access
        We will do our utmost to ensure that availability of the website will be
        uninterrupted and that transmissions will be error-free. However, due to
        the nature of the Internet, this cannot be guaranteed. Also, your access
        to the website may be occasionally suspended or restricted to allow for
        repairs, maintenance, or the introduction of new facilities or services.
        We will attempt to limit the frequency and duration of any such
        suspension or restriction. Links to other sites and third party offers
        What’s on Netflix is not responsible for the contents of any third-party
        websites linked to this site and we are not liable for any expenses or
        damages incurred therein. These links are provided as a convenience and
        What’s on Netflix does not endorse, sponsor or control linked sites and
        therefore we cannot in any way guarantee availability, prices, delivery
        of products and services offered on such sites or satisfaction
        therewith. Linked sites are not under the control of What’s on Netflix,
        and therefore we cannot in any way guarantee availability, prices and
        delivery of or satisfaction with the products and services offered on
        these sites. We strongly advise you to investigate the trustworthiness,
        terms and conditions and business practices of linked sites before
        proceeding with any transaction. ABOUT US OUR TEAM PRIVACY POLICY TERMS
        & CONDITIONS What’s on Netflix is not responsible for the contents of
        any third-party websites linked to this site and we are not liable for
        any expenses or damages incurred therein. These links are provided as a
        convenience and What’s on Netflix does not endorse, sponsor or control
        linked sites and therefore we cannot in any way guarantee availability,
        prices, delivery of products and services offered on such sites or
        satisfaction therewith. Linked sites are not under the control of What’s
        on Netflix, and therefore we cannot in any way guarantee availability,
        prices and delivery of or satisfaction with the products and services
        offered on these sites. We strongly advise you to investigate the
        trustworthiness, terms and conditions and business practices of linked
        sites before proceeding with any transaction. CONTACT What's on Netflix
        Logo What’s on Netflix is not endorsed, moderated, owned by or
        affiliated with Netflix or any of its partners in any capacity. The
        authors of this site also have no affiliation with Netflix. All
        promotional material including but not limited to trailers, images and
        videos are all copyright to their respective owners. Netflix is a
        registered trademark of Netflix, Inc. © 2013-2023 What's on Netflix -
        All Rights Reserved. Change Consent
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} p="16" boxShadow={'lg'}>
      <Heading childern="About us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a Video sterming Platform with some premium content , only for
          premium users
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC />

      <HStack my="4" p="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
