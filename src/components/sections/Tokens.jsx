import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

const Tokens = () => {
    return (
        <Flex as="section" 
              id="tokens" 
              alignItems="center" 
              flexDirection="column" 
              m={{ sm: "64px 0 0 0", lg: "100px 0 0 0" }} 
              p={{ sm: "32px 0 32px 0", lg: "88px 0 88px 0"}}
        >
            <Box as="h2" textStyle="heading2">Tokens</Box>
            <Flex flexDirection={{ sm: "column", lg: "row" }} 
                  maxWidth="960px" mt={{ sm: "32px", lg: "140px" }} 
                  textAlign="left"
            >
                <Box className="tokens-col" 
                     p={{ sm: "16px", lg: "0" }} 
                     maxWidth={{ sm: "100%", md: "408px" }} 
                     ml={{ lg: "144px" }} w={{ lg: "408px" }}
                >
                    <Text as="h3" textStyle="h3" fontSize="46px" lineHeight="130%">$XDAI</Text>
                    <Text textStyle="smallerGrey">
                        xDai is the perfect token 
                        for conducting stable transactions. 
                        It inherits the high availability 
                        and liquidity of DAI from Ethereum 
                        while providing a one-token, 
                        no-volatility method to pay for 
                        both fees (gas costs) and goods/services/P2P 
                        transactions  on the xDai chain.
                    </Text>
                    <Box mt={{ sm: "32px", lg: "56px" }}>
                        <ButtonGroup spacing={4}>
                            <Button as="a" href="https://www.coingecko.com/en/coins/xdai#markets" target="_blank" rel="noreferrer" variant="solid" size="xl"><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Trade</Button>
                            <Button as="a" href="https://bridge.xdaichain.com/" target="_blank" rel="noreferrer" variant="solid" size="xl"><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Bridge</Button>
                        </ButtonGroup>
                    </Box>
                </Box>

                <Box className="tokens-col" 
                     p={{ sm: "16px", lg: "0" }} 
                    ml={{ lg: "48px" }} 
                    maxWidth={{ sm: "100%", md: "408px" }} 
                    w={{ lg: "408px" }}
                >
                    <Text as="h3" textStyle="h3" fontSize="46px" lineHeight="130%">$STAKE</Text>
                    <Text textStyle="smallerGrey">
                        Proof of Stake Consensus requires a 
                        staking token for security. STAKE 
                        is a flexible token which originates 
                        on Ethereum and provides protection and 
                        governance capabilities for the 
                        xDai chain. STAKE can be staked 
                        and used for voting from both xDai 
                        and Ethereum, supporting a true multi-chain 
                        ecosystem.
                    </Text>
                    <Box mt="32px">
                        <Button as="a" href="https://www.xdaichain.com/for-stakers/stake-token" target="_blank" rel="noreferrer" variant="solid" size="xl"><ArrowForwardIcon w={ 6 } h={ 6 } /> &nbsp;Stake</Button>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Tokens