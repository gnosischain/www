import React from 'react'
import { Box, Flex, Image, List, ListItem, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import imgOnboarding from '../../images/img_onboard.svg'

const Onboarding = () => {
    return (
        <Flex as="section" 
              id="onboarding" 
              alignItems="center" 
              flexDirection="column" 
              m={{ sm: "32px 0 0 0", lg: "120px 0 0 0" }} 
              p="32px 0 0 0"
        >
            <Flex flexDirection={{ sm: "column", md: "row" }} maxWidth="960px">
                <Flex justifyContent={{ sm: "center", lg: "start" }}
                      m="0"
                      p={{ sm: "0 32px", md: "0 32px 80px 32px", lg: "0" }}
                      w={{ sm: "100%", lg: "50%" }} 
                >
                    <Image src={imgOnboarding} alt="xDai - Onboarding" layerStyle="illustration" />
                </Flex>
                <Box p={{ sm: "16px", lg: "0" }}
                     w={{ sm: "100%", lg: "50%" }} 
                >
                    <Box as="h2" textStyle="heading2" textAlign="left">
                        Onboarding
                    </Box>
                    <Text textStyle="standardGrey2" p={{ sm: "16px 0 0 0", lg: "32px 0 0 0" }}>
                        You can bridge xDai, STAKE and 
                        many other tokens from Ethereum 
                        and BSC to xDai to get start 
                        using xDai. You can also get 
                        assets directly on xDai without 
                        starting on another chain, the 
                        choice is yours.
                    </Text>
                </Box>
            </Flex>

            <Flex flexDirection={{ sm: "column", lg: "row" }} 
                  maxWidth="960px" 
                  m={{ sm: "16px 16px", lg: "104px 0 0 0" }} 
                  w={{ sm: "90%", lg: "100%" }}
            >
                <Box layerStyle="threeCol" pr="16px">
                    <Text as="h3" textStyle="h3" color="green.100">xDai Direct</Text> 
                    <List layerStyle="list">
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://ramp.network/" target="_blank" rel="noreferrer">Ramp</a></ListItem> 
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://ascendex.com/en/global-digital-asset-platform" target="_blank" rel="noreferrer">AscendEx</a></ListItem>
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.mtpelerin.com/buy-xdai" target="_blank" rel="noreferrer">Mt. Pelerin</a></ListItem>
                    </List>
                </Box>  

                <Box layerStyle="threeCol" pr="16px">
                    <Text as="h3" textStyle="h3" color="green.500">Bridges</Text> 
                    <List layerStyle="list">
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://bridge.xdaichain.com/" target="_blank" rel="noreferrer">xDai Bridge</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://omni.xdaichain.com/bridge" target="_blank" rel="noreferrer">OmniBridge</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://omni.xdaichain.com/bridge" target="_blank" rel="noreferrer">BSC Bridge</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#bridges-and-interoperability" target="_blank" rel="noreferrer">3rd Party Bridges</a></ListItem>
                    </List>
                </Box>  

                <Box layerStyle="threeCol">
                    <Text as="h3" textStyle="h3" color="green.900">Utilities</Text> 
                    <List layerStyle="list">
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://blockscout.com/xdai/mainnet/" target="_blank" rel="noreferrer">BlockScout Explorer</a></ListItem>
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://dune.xyz/maxaleks/xDai-Usage" target="_blank" rel="noreferrer">Usage Dune Analytics</a></ListItem>
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-developers/developer-resources/aox-arbitrum-on-xdai" target="_blank" rel="noreferrer">Arbitrum on xDai</a></ListItem>
                    </List>
                </Box>                 
            </Flex>
        </Flex>
    )
}

export default Onboarding