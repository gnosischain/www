import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import Layout from './Layout'

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "666px",
  lg: "865px",
  xl: "1150px",
  "2xl": "1536px",
});

const theme = extendTheme({
  breakpoints,
  colors: {
    green: {
      100: "#0AE33A",
      500: "#069D50",
      900: "#04795B"
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Moderat-Bold, sans-serif",
        fontStyle: "bold",
        fontWeight: "normal",
        textAlign: "center"
      },
      sizes: {
        xl: {
          fontSize: "24px",
          h: "54px",
          lineHeight: "29px",
          px: "20px",
          py: "20px" 
        },
      },
      variants: {
        solid: (props) => ({
          bg: "green.100",
          boxShadow: "2px 2px 4px rgba(102, 102, 102, 0.25)",
          borderRadius: "30px",
          _hover: {
            backgroundColor: "green.100",
            boxShadow: "0 0 0 4px #04795B inset"
          }
        }),
        outline: (props) => ({
          bg: "white",
          boxShadow: "2px 2px 4px rgba(102, 102, 102, 0.25)",
          borderRadius: "40px",
          _hover: {
            backgroundColor: "#fff",
            boxShadow: "0 0 0 4px #04795B inset"
          }
        }),
      },
    },
  },
  fonts: {
    body: `"Moderat-Regular", sans-serif`,
    heading: `"Moderat-Bold", sans-serif`
  },
  layerStyles: {
    singleCol: {
      p: ["16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "32px 0 0 0"]
    },
    centerCol: {
      alignItems: "center",
      m: ["16px 16px", "16px 16px", "16px 16px", "48px 0 0 0"]
    },
    threeCol: {
      w: ["100%", "100%", "100%", "33%"],
      mt: ["16px", "16px", "16px", "0"],
    },
    iconFeature: {
      alignItems: "center",
      background: "#FFF",
      borderRadius: "8px", 
      boxShadow: "0px 1px 24px rgba(0, 0, 0, 0.12)",
      cursor: "default",
      flexDirection: "column",
      flexShrink: "0",
      h: "140px",
      justifyContent: "space-around",
      mt: "48px",
      p: "16px",
      w: "140px",
      _hover: {
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2)"
      },
    },
    illustration: {
      borderRadius: "16px",
      boxShadow: "0px 1px 24px rgba(0, 0, 0, 0.12)",
    },
    list: {
      mt: "16px"
    }
  },
  textStyles: {
    heading2: {
      fontFamily: `"Moderat-Bold", sans-serif`,
      fontSize: ["42px", "42px","42px","64px"],
      fontWeight: "bold",
      lineHeight: ["100%", "100%","100%","120%"],
      maxWidth: "100%",
      mb: ["16px", "16px", "16px", "0"],
      textAlign: "center",
      width: "100%"
    },
    h3: {
      fontFamily: `"Moderat-Bold", sans-serif`,
      fontSize: "32px",
      fontWeight: "bold",
      lineHeight: "100%"
    },
    standard: {
      fontFamily: "'Moderat-Regular', sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "150%"
    },
    standardGrey: {
      color: "#666",
      fontFamily: "'Moderat-Regular', sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "130%",
      maxWidth: "688px",
      textAlign: "center"
    },
    standardGrey2: {
      color: "#666",
      fontFamily: "'Moderat-Regular', sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "120%",
      p: ["0", "0", "0", "16px 0 0 0"]
    },
    smallerGrey: {
      color: "#666",
      fontFamily: "'Moderat-Regular', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "150%",
      pt: "20px"
    },
    iconFeature: {
      color: "#999",
      fontFamily: "'Moderat-Mono-Regular', sans-serif",
      fontSize: "15px",
      fontWeight: "400",
      textAlign: "center"
    },
    threeCol: {
      color: "#000",
      fontFamily: "'Moderat-Regular', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "150%",
      mt: ["16px","16px","16px","32px"],
      p: "0"
    },
    listGreen100: {
      fontFamily: "'Moderat', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "-0.05em",
      lineHeight: "180%",
      _hover: {
        color: "green.100",
        fill: "green.100"
      }
    },
    listGreen500: {
      fontFamily: "'Moderat', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "-0.05em",
      lineHeight: "180%",
      _hover: {
        color: "green.500",
        fill: "green.500"
      }
    },
    listGreen900: {
      fontFamily: "'Moderat', sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "-0.05em",
      lineHeight: "180%",
      _hover: {
        color: "green.900",
        fill: "green.900"
      }
    },
    listFooter: {
      display: ["block", "block", "block", "inline"],
      fontFamily: "'Moderat', sans-serif",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "150%",
      p: ["16px 0 0 0", "16px 0 0 0", "16px 0 0 0", "0 16px 0 0"]
    }
  },
});

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={ theme }>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}