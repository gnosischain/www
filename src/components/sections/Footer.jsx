import React from 'react'
import { Flex, Link, List, ListItem } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import xdaiLogo from '../../images/logo_xdai_home.svg'

const Footer = () => {
    return (
        <Flex as="footer" 
              alignItems={{ sm: "start", lg: "center" }} 
              backgroundColor="green.100" 
              flexDirection="column" 
              p={{ sm: "32px 0", lg: "88px 0" }}
        >
            <Flex alignItems={{ sm: "start", lg: "center" }}
                  flexDirection={{ sm: "column", lg: "row" }} 
                  justifyContent="space-between" 
                  maxWidth="960px"
                  pl={{ sm: "16px", lg: "0" }}
                  w="100%"
            >
            <Link
                as={ GatsbyLink }
                to="/"
                color="black"
                _hover={{ textDecor: 'none' }}><img src={xdaiLogo} alt="xDai" style={{ height: "32px"}} /></Link>
                <List 
                    listStyleType="none"
                    m="0"
                    pt={{ sm: "16px", lg: "0" }}
                >
                    <ListItem textStyle="listFooter"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3368483" target="_blank" rel="noreferrer">Whitepaper</a></ListItem>
                    <ListItem textStyle="listFooter"><a href="https://www.xdaichain.com/careers-1/" target="_blank" rel="noreferrer">Join Our Team</a></ListItem>
                    <ListItem textStyle="listFooter"><a href="https://www.xdaichain.com/media/xdai-dev-team" target="_blank" rel="noreferrer">Team &amp; Contributors</a></ListItem>
                    <ListItem textStyle="listFooter"><a href="https://www.xdaichain.com/media/media-kit" target="_blank" rel="noreferrer">Press / Media</a></ListItem>
                </List>
            </Flex>
        </Flex>
    )
}

export default Footer