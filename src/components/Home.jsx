import { Box, Center, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
};

const MyCarousel = () => {
    return <Carousel autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}
                {...headingOptions}>
                Watch th future
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                something about second
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch th future
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch th future
            </Heading>
        </Box>




    </Carousel>
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />

            <Container minH={'100vh'} maxW={'container.xl'} padding={'16'}>
                <Heading textTransform={'uppercase'} 
                py={'2'}
                 w={"fit-content"} 
                 borderBottom={'2px solid'}
                 m='auto'>
                 Services
                 </Heading>

                 <Stack
                 h={'full'}
                 alignItems={'center'}
                 direction={['column','row']}>
<Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />

<Text letterSpacing={"widest"} lineHeight={"190%"} textAlign={
    "center"
}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus velit odit iure quas modi ratione? Commodi sunt dolorem quis temporibus inventore praesentium molestias suscipit nam, doloremque eum neque voluptatum.
</Text>

                 </Stack>


            </Container>

        </Box>
    )
}



export default Home;

