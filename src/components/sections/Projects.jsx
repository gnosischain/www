import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ProjectsSwiper from '../ProjectsSwiper'

const Projects = () => {
    return (
        <Flex as="section" id="projects" alignItems="center" flexDirection="column" m={{ sm: "64px 0 0 0", lg: "192px 0 0 0" }} p={{ sm: "32px 0 32px 0", lg: "88px 0 156px 0"}}>
            <Box as="h2" textStyle="heading2">Project Highlights</Box>
            <Flex as="p" layerStyle="centerCol" textStyle="standardGrey">
                From essential world-class applications to unique 
                dev-crafted offerings, DeFi to DAOs to Gaming, 
                an expansive world of blockchain experiences await.
            </Flex>

            <Box className="carousel-wrapper" maxWidth={{ sm: "320px", md: "667px", lg: "960px" }}>
                <ProjectsSwiper />
            </Box>
        </Flex>
    )
}

export default Projects