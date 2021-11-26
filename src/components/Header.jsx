import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import xdaiLogo from '../images/logo_xdai_home.svg'
import NavMenu from './NavMenu'

const Header = ({ siteTitle }) => (
  <Flex as="header" 
    alignItems="center"
    backgroundColor="#fff"
    className="header" 
    h={{ base: "32px", md: "80px" }}
    justifyContent="space-between"
    p={{ base: "20px 16px", md: "16px 32px", xl: "48px" }}
    position="fixed"
    top="0"
    w="100%"
    zIndex="999" 
  >
    <Link
      as={GatsbyLink}
      to="/"
      color="black"
      _hover={{ textDecor: 'none' }}
    >
      <img src={xdaiLogo} alt="xDai" />
    </Link>
    <NavMenu />
  </Flex>
)

export default Header