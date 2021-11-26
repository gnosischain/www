import { Box } from '@chakra-ui/react'
import React from 'react'
import PropTypes from "prop-types"

import "../assets/css/app.css";
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box m="0 auto">
        <Box as="main">{children}</Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
