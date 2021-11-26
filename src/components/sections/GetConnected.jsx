import React from 'react'
import { Box, Flex, Image, List, ListItem, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import imgConnected from '../../images/img_connect.svg'

const GetConnected = () => {
    return (
        <Flex as="section" 
              id="getconnected" 
              alignItems="center" 
              flexDirection="column" 
              m={{ sm: "32px 0 0 0", lg: "120px 0 0 0" }} 
              p="32px 0 0 0"
        >
            <Flex flexDirection={{ sm: "column-reverse", md: "row" }} maxWidth="960px">
                <Box p={{ sm: "16px", lg: "0" }}
                     w={{ sm: "100%", lg: "50%" }} 
                >
                    <Box as="h2" textStyle="heading2" textAlign="left">
                        Get Connected
                    </Box>
                    <Text textStyle="standardGrey2">
                        We welcome you to explore, 
                        ask questions and get involved as a valuable member 
                        of our decentralized community!
                    </Text>
                </Box>
                <Flex justifyContent={{ sm: "center", lg: "flex-end" }}
                      m="0" p={{ sm: "0 32px", lg: "0" }} 
                      w={{ sm: "100%", lg: "50%" }} 
                >
                    <Image src={imgConnected} alt="xDai - Get Connected" layerStyle="illustration" />
                </Flex>
            </Flex>

            <Flex flexDirection={{ sm: "column", lg: "row" }} 
                  maxWidth="960px" 
                  m={{ sm: "16px 16px", lg: "104px 0 0 0" }}
            >
                <Box layerStyle="threeCol" pr="16px">
                    <Text as="h3" textStyle="h3" color="green.100">Developers</Text> 
                    <Text textStyle="threeCol">
                        Ethereum compatibility means deploying 
                        to xDai is as simple as updating a 
                        few lines of code. All the necessary 
                        tools are ready and waiting for you 
                        to create the next killer application 
                        on xDai!
                    </Text>
                    
                    <List layerStyle="list">
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-developers/developer-resources" target="_blank" rel="noreferrer">Docs</a></ListItem>
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-developers/developer-resources" target="_blank" rel="noreferrer">Tools</a></ListItem>
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-developers/grants" target="_blank" rel="noreferrer">Funds &amp; Grants</a></ListItem>
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-developers/developer-resources/smart-contract-deployment" target="_blank" rel="noreferrer">Start a Project</a></ListItem>
                        <ListItem textStyle="listGreen100"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://discord.com/invite/mPJ9zkq" target="_blank" rel="noreferrer">Join a Team</a></ListItem>
                    </List>
                </Box>

                <Box layerStyle="threeCol" pr="16px">
                    <Text as="h3" textStyle="h3" color="green.500">Users</Text> 
                    <Text textStyle="threeCol">
                        Experience the benefits of fast block 
                        times and low, stable transactions in 
                        a secure, eco-friendly blockchain 
                        environment. On xDai, you can push 
                        applications to their full potential 
                        without worry, pressure, or trying to 
                        time transactions.
                    </Text>
                    
                    <List layerStyle="list">
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#daos" target="_blank" rel="noreferrer">DAOs</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#nft-based-projects" target="_blank" rel="noreferrer">NFTs</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#games" target="_blank" rel="noreferrer">Games</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#more" target="_blank" rel="noreferrer">Other</a></ListItem>
                        <ListItem textStyle="listGreen500"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/about-xdai/project-spotlights#defi" target="_blank" rel="noreferrer">DeFi &amp; Farming</a></ListItem>
                    </List>
                </Box>  

                <Box layerStyle="threeCol">
                    <Text as="h3" textStyle="h3" color="green.900">Staking</Text>             
                    <Text textStyle="threeCol">
                        Protect xDai and earn STAKE 
                        in the process! Stakers are 
                        rewarded for providing 
                        Proof-of-Stake security on xDai 
                        and for managing STAKE supply 
                        on Ethereum.
                    </Text>

                    <List layerStyle="list">
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-stakers/easy-staking" target="_blank" rel="noreferrer">EasyStaking on Ethereum</a></ListItem>
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-stakers/staking-protocol" target="_blank" rel="noreferrer">POSDAO Staking on xDai</a></ListItem>
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://xdai.page.link/beaconchain" target="_blank" rel="noreferrer">Stake Beacon Chain</a></ListItem>
                        <ListItem textStyle="listGreen900"><ArrowForwardIcon w={ 3 } h={ 3 } /> <a href="https://www.xdaichain.com/for-users/governance/stake-weighted-voting" target="_blank" rel="noreferrer">Governance</a></ListItem>
                    </List>
                </Box>                   
            </Flex>
        </Flex>
    )
}

export default GetConnected