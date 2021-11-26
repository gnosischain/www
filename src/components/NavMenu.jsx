import React, { useEffect } from "react";
import { Button, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Icon from "./Icon";
import isMSIE from "../assets/lib/detect-old-ie.js";
import SmoothScroll from "../../node_modules/smooth-scroll/dist/smooth-scroll.min";

const NavMenu = () => {
  useEffect(() => {
    if (!isMSIE()) {
      // eslint-disable-next-line no-unused-vars
      const scroll = new SmoothScroll('a[href*="#"]', {
        easing: "easeInOutQuint",
        offset: 0
      });
    }

    const navButton = document.querySelector("button[aria-expanded]");
    const navMenu = document.querySelector(".nav-menu");

    function toggleNav() {
      const expanded =
        navButton.getAttribute("aria-expanded") === "true" || false;
      navButton.setAttribute("aria-expanded", !expanded);
    }

    navButton.addEventListener("click", toggleNav);
    navMenu.addEventListener("click", toggleNav);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-expanded="false"
        aria-controls="nav-menu-list"
        className="nav-menu-button"
      >
        <Icon icon="bars" className="nav-icon nav-open" />
        <Icon icon="times" className="nav-icon nav-close" />
      </button>
      <Flex as="nav" 
        alignItems="flex-end" 
        className="nav-menu" 
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="flex-end"
        left="0"
        p="0"
        position={{ base: "absolute", lg: "static" }}
        top={{ base: "40px", md: "80px" }}
        width="100%"
        zIndex="999"
      >
        <ol id="nav-menu-list">
          <li>
            <a data-scroll className="nav-item" href="#why">
              Why xDai
            </a>
          </li>
          <li>
            <a data-scroll className="nav-item" href="#projects">
              Projects
            </a>
          </li>        
          <li>
            <a data-scroll className="nav-item" href="#getconnected">
              Get Connected
            </a>
          </li>
          <li>
            <a data-scroll className="nav-item" href="#onboarding">
              Onboarding
            </a>
          </li>
          <li>
            <a data-scroll className="nav-item" href="#tokens">
              Tokens
            </a>
          </li>
          <li>
            <Button as="a" href="https://xdai.page.link/swap"  target="_blank" rel="noreferrer" className="nav-menu-item-swap" variant="solid" p="12px 18px">
              <ArrowForwardIcon w={4} h={4} /> &nbsp; Swap $xdai
            </Button>
          </li>                         
        </ol>
      </Flex>
    </>
  )
}

export default NavMenu;