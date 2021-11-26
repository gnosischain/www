import React from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import imgBothWorlds from '../../images/img_both_worlds.svg'

const Home = () => {
    return (
        <Flex as="section" id="home" alignItems="center" flexDirection="column" m="0" p="0"> 
            <Flex alignItems="center" flexDirection="column" m={{ sm: "0", lg: "140px 0 0 0" }} pt={{ md: "20px" }} w="100%">
                <Box as="h2" color="green.100" textStyle="heading2">Proven Technology.</Box>
                <Box as="h2" color="green.500" textStyle="heading2">Cutting-edge Innovation.</Box>
                <Box as="h2" color="green.900" textStyle="heading2">Limitless Possibilities...</Box>
            </Flex>

            <Flex flexDirection={{ sm: "column", md: "row" }} justifyContent="center" mt={{ sm: "24px", lg: "64px" }} p="32px" w="100%">
                <Button as="a" href="https://www.xdaichain.com/for-developers/developer-resources" target="_blank" rel="noreferrer" variant="solid" size="xl"><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Start Buidling</Button>
                <Button as="a" href="https://www.xdai.world/" target="_blank" rel="noreferrer" variant="outline" size="xl" ml={{ sm: "0", md: "16px" }} mt={{ sm: "16px", md: "0" }}><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Explore Ecosystem</Button>
            </Flex>

            <Flex flexDirection={{ sm: "column", md: "row" }} mt={{ sm: "64px", lg: "220px" }} maxWidth="960px">
                <Flex w={{ sm: "100%", lg: "50%" }} m="0" p={{ sm: "0 32px", md: "0 32px 266px 0", lg: "0" }} justifyContent={{ sm: "center", lg: "start" }} sx={{ "position" : "relative" }}>
                    <Image src={ imgBothWorlds } alt="xDai is the best of both worlds" layerStyle="illustration" />
                </Flex>
                <Box w={{ sm: "100%", lg: "50%" }} p={{ sm: "16px", lg: "0" }}>
                    <Text as="h3" textStyle="h3" fontSize="34px" lineHeight="130%">
                        xDai is the best of both worlds, 
                        a time-tested chain that continually innovates.
                    </Text>

                    <Box layerStyle="singleCol" textStyle="standard">
                        Cutting-edge tools 
                        and resources give developers 
                        the power to create enhanced user experiences 
                        and optimized applications.
                    </Box>
                    
                    <Button as="a" href="https://www.xdaichain.com/for-stakers/stake-token" target="_blank" rel="noreferrer" mt="28px" variant="solid" size="xl"><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Stake Rewards</Button>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Home